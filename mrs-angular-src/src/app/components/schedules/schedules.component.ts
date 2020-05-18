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
    this.schedulesService.getSchedules().subscribe((res) => {
      let tSchedules: any = res;
      this.schedules = tSchedules.filter(
        (schedule) => schedule['movieID'] == this.movie.id
      );
    });
  }
}
