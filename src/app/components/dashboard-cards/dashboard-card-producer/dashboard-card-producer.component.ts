import { Component, OnInit, Input } from '@angular/core';
import { ProducerAwardIntervalDTO } from 'src/app/models/producer-award-interval.dto';


@Component({
  selector: 'dashboard-card-producer',
  templateUrl: './dashboard-card-producer.component.html',
  styleUrls: ['./dashboard-card-producer.component.scss'],
})
export class DashboardCardProducerComponent implements OnInit {
  @Input() intervalProducers: ProducerAwardIntervalDTO = { min: [], max: [] };

  constructor() { }

  ngOnInit(): void { }
}