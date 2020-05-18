import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SchedulesService {
  schedules: Array<Object> = [];
  constructor(private httpClient: HttpClient) {
    // httpClient
    //   .get('assets/datasets/schedules.json')
    //   .subscribe((schedules: Array<Object>) => {
    //     this.setSchedules(schedules);
    //   });
  }

  // setSchedules(schedules: Array<Object> = []): void {
  //   this.schedules = schedules;
  // }

  getSchedules() {
    return this.httpClient.get('assets/datasets/schedules.json');
  }

  // getSchedulesById(movieID) {
  //   return this.schedules.filter((schedule) => schedule['movieID'] == movieID);
  // }
}
