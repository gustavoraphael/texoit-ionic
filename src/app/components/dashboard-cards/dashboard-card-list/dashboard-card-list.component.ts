import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieDetail } from 'src/app/models/movie-detail.dto';

interface WinnerByYear {
  // Estrutura esperada para cada vencedor (exemplo)
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
  winnersByYear: WinnerByYear[] = [];
  selectedYear: number = 2018;
  searchClicked: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(private api: ApiService, private helper: HelperService) { }

  ngOnInit(): void { }

  public searchByYear() {
    this.searchClicked = true;
    this.api.get(`?winner=true&year=${this.selectedYear}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: MovieDetail[]) => {
        this.winnersByYear = data;
        if (data.length === 0) {
          this.helper.message("Sorry, this year doesn't have a movie", 3000, 'warning');
        }
        this.searchClicked = false;
      });
  }

  public selectYearChanging(ev: any) {
    this.selectedYear = ev.detail.value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
