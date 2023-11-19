import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'dashboard-card-studio',
  templateUrl: './dashboard-card-studio.component.html',
  styleUrls: ['./dashboard-card-studio.component.scss'],
})
export class DashboardCardStudioComponent implements OnInit {
  @Input() studiosWithWinners: any[] = [];

  constructor() { }

  ngOnInit(): void { }
}