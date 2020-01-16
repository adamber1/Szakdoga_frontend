import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/app/model/film.model';

@Component({
  selector: 'app-admin-movie',
  templateUrl: './admin-movie.component.html',
  styleUrls: ['./admin-movie.component.css']
})
export class AdminMovieComponent implements OnInit {

  movies: Film[] = [];

  constructor(private service: FilmService) { }

  ngOnInit() {
    this.service.getAllMovies().subscribe(
      res => {
        this.movies = res;
      },
      err => {
        alert("An error has occurred while trying to get all movies from the server!");
        console.log(err);
      }
    );
  }

  deleteMovie(id: number) {
    const i = this.movies.findIndex(m => m.id === id);
    if (i !== -1) {
      this.movies.splice(i, 1);
    }
    this.service.deleteMovie(id);
  }


}
