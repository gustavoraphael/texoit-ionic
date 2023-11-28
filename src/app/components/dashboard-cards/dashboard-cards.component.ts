import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
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

  constructor(private api: DashboardService) { }

  ngOnInit() {
    this.getYearsWithWinners();
    this.getStudiosWithWinners();
    this.getIntervalProducers();
  }

  private getYearsWithWinners() {
    this.api.getYearsWithWinners()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: YearWinnerCountList) => this.yearsWithMultipleWinners = data?.years);
  }

  private getStudiosWithWinners() {
    this.api.getStudiosWithWinners()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: { studios: StudioWinCount[] }) => {
          this.studiosWithWinners = data.studios.slice(0, 3);
      });
  }

  private getIntervalProducers() {
    this.api.getIntervalProducers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: ProducerAwardIntervalDTO) => this.intervalProducers = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
