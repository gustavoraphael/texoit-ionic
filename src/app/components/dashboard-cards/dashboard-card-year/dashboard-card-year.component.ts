import { Component, OnInit, Input } from '@angular/core';
import { YearWinnerCount, YearWinnerCountList } from 'src/app/models/years-winners.dto';


@Component({
  selector: 'dashboard-card-year',
  templateUrl: './dashboard-card-year.component.html',
  styleUrls: ['./dashboard-card-year.component.scss'],
})
export class DashboardCardYearComponent implements OnInit {
  @Input() yearsWithMultipleWinners: YearWinnerCount[] = [];

  constructor() { }

  ngOnInit(): void { }
}