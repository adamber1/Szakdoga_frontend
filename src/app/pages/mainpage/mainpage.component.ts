import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from 'src/app/model/film.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  movies: Film[] = [];
  isLoading = false;

  searchText: string;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  public getAllMovies(){
    this.isLoading = true;
    this.filmService.getAllMovies().subscribe(
      res => {
        this.movies = res;
        this.isLoading = false;
      },
      err => {
        alert("An error has occurred while trying to get all movies from the server!");
        console.log(err);
      }
    );
  }

}
