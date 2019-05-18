import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/film.service';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  movies: Film[] = [];

  cim = "Boszorkanyos film";
  ev = "2019";
  kepUrl = "https://www.cinemacity.hu/xmedia-cw/repo/feats/posters/3334D2R-lg.jpg";

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getAllMovies();
  }

  public getAllMovies(){
    this.filmService.getAllMovies().subscribe(
      res => {
        this.movies = res;
        console.log(res)
      },
      err => {
        alert("An error has occurred while trying to get all movies from the server!")
      }
    );
  }

}
