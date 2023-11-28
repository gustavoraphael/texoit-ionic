import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HelperService } from 'src/app/services/helper.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PaginatedMoviesResponse } from 'src/app/models/paginated-movies-response.dto';

interface WinnerByYear {
  id: number;
  title: string;
  year: number;
}

@Component({
  selector: 'dashboard-card-list',
  templateUrl: './dashboard-card-list.component.html',
  styleUrls: ['./dashboard-card-list.component.scss'],
})
export class DashboardCardListComponent implements OnInit, OnDestroy {
  selectedYear: string = '';
  searchClicked: boolean = false;
  pageData: WinnerByYear[] = [];
  currentPage = 1;
  totalElements = 0;
  totalPages = 0;
  pageSize = 10;
  selectedWinner: boolean | null = null;

  private destroy$ = new Subject<void>();

  constructor(private api: DashboardService, private helper: HelperService) { }

  ngOnInit(): void { this.getMovies(); }

  public searchByYear() {
    if (this.selectedYear && !/^\d+$/.test(this.selectedYear)) {
      this.helper.message("Search must be a number", 3000, 'warning');
      return;
    }
    this.getMovies();
  }

  private getMovies(): void {
    try {
      const page = this.currentPage - 1;
      this.api.list(page, this.pageSize, this.selectedYear)
        .pipe(takeUntil(this.destroy$))
        .subscribe((data: PaginatedMoviesResponse) => {
          if (data.content.length === 0) {
            this.helper.message("Sorry, this year doesn't have a movie", 3000, 'warning');
          }
          this.pageData = data.content;
          this.totalPages = data.totalPages;
          this.totalElements = data.totalElements;
        });
    } catch (e) {
      this.helper.message("Error on get movie list", 3000, 'warning')
    }
  }

  public onChange(pageNumber: number) {
    this.currentPage = pageNumber;
    this.getMovies();
  }

  public selectYearChanging(ev: any) {
    this.selectedYear = ev.detail.value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
