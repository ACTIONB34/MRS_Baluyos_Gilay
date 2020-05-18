import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-nowshowing',
  templateUrl: './nowshowing.component.html',
  styleUrls: ['./nowshowing.component.css'],
})
export class NowshowingComponent implements OnInit {
  movies: any = [];
  selectedMovie;
  constructor(private _movies: MoviesService) {}

  ngOnInit(): void {
    this.movies = this._movies.getMovies();
  }

  showMovie(movie) {
    this.selectedMovie = movie;
  }
}
