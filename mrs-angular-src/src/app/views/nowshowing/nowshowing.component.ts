import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { SchedulesService } from 'src/app/services/schedules.service';

@Component({
  selector: 'app-nowshowing',
  templateUrl: './nowshowing.component.html',
  styleUrls: ['./nowshowing.component.css'],
})
export class NowshowingComponent implements OnInit {
  movies: any = [];
  schedules: any = [];
  selectedMovie;
  constructor(
    private _movies: MoviesService,
    private _schedules: SchedulesService
  ) {}

  ngOnInit(): void {
    this._movies.getMovies().subscribe((res) => {
      this.movies = res;
      this.movies.map((m, i) => {
        m.id = i;
      });
    });
  }

  showMovie(movie) {
    this.selectedMovie = movie;
  }
}
