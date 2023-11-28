import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { PaginatedMoviesResponse } from 'src/app/models/paginated-movies-response.dto';
import { HelperService } from 'src/app/services/helper.service';
import { ListService } from 'src/app/services/list-card.service';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  itemsPerPage: number = 10;
  pageData: any = {}
  filterWinner: boolean | null = null;
  selectedYear: number | null = null;
  currentPage = 1;
  totalElements = 0;
  totalPages = 0;
  pageSize = 10;
  selectedWinner: boolean | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private api: ListService,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.getMovies()
  }

  private getMovies(): void {
    try {
      const page = this.currentPage - 1;
      let queryParams = `?page=${page}&size=${this.pageSize}`;
      if (this.filterWinner !== null) {
        queryParams += `&winner=${this.filterWinner}`;
      }
      if (this.selectedYear !== null) {
        queryParams += `&year=${this.selectedYear}`;
      }
  
      this.api.get(page, this.pageSize, this.filterWinner, this.selectedYear)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: PaginatedMoviesResponse) => {
          this.pageData = data.content;
          this.totalPages = data.totalPages;
          this.totalElements = data.totalElements;
        });
    } catch (e) {
      this.helper.message("Error on get movie list", 3000, 'warning')
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public filter(event: any, isFilteringByWinner: boolean): void {
    this.updateFilters(event.detail.value, isFilteringByWinner);
    this.resetPaginationAndFetchMovies();
  }

  private updateFilters(value: any, isFilteringByWinner: boolean): void {
    if (isFilteringByWinner) {
      this.filterWinner = value === true;
      return;
    }
    this.selectedYear = value ? Number(value) : null;
  }

  private resetPaginationAndFetchMovies(): void {
    this.currentPage = 1;
    this.getMovies();
  }

  public onChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getMovies();
  }

  public clearWinnerFilter(): void {
    this.filterWinner = null;
    this.selectedWinner = null;
    this.resetPaginationAndFetchMovies();
  }

}
