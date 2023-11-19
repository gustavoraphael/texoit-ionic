import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProducerAwardIntervalDTO } from 'src/app/models/producer-award-interval.dto';
import { StudioWinCount, StudiosWinCountList } from 'src/app/models/studio.dto';
import { YearWinnerCountList } from 'src/app/models/years-winners.dto';

@Component({
  selector: 'dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit, OnDestroy {
  yearsWithMultipleWinners: any = [];
  studiosWithWinners: any = [];
  intervalProducers: any = {};

  private destroy$ = new Subject<void>();

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getYearsWithWinners();
    this.getStudiosWithWinners();
    this.getIntervalProducers();
  }

  private getYearsWithWinners() {
    this.api.get('?projection=years-with-multiple-winners')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: YearWinnerCountList) => this.yearsWithMultipleWinners = data?.years);
  }

  private getStudiosWithWinners() {
    this.api.get('?projection=studios-with-win-count')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: { studios: StudioWinCount[] }) => {
          this.studiosWithWinners = data.studios.slice(0, 3);
      });
  }

  private getIntervalProducers() {
    this.api.get('?projection=max-min-win-interval-for-producers')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: ProducerAwardIntervalDTO) => this.intervalProducers = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
