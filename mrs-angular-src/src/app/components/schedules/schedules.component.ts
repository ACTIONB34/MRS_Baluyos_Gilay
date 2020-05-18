import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SchedulesService } from 'src/app/services/schedules.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css'],
})
export class SchedulesComponent implements OnChanges {
  @Input() movie;
  schedules;
  constructor(private schedulesService: SchedulesService) {}

  ngOnChanges(): void {
    this.schedules = this.schedulesService.getSchedulesById(this.movie.id);
  }
}
