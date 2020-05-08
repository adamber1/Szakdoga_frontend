import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Mufaj } from 'src/app/model/mufaj.model';
import { Film } from 'src/app/model/film.model';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css']
})
export class FilterpageComponent implements OnInit {

  years = [
    { id: 1, number: 2017},
    { id: 2, number: 2018},
    { id: 3, number: 2019},
    { id: 4, number: 2020}
  ]

  selectedCategory: Mufaj;
  selectedStartingYear: any;
  selectedEndingYear: any;

  categories: Mufaj[] = [];
  movies: Film[] = [];
  filteredMovies: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert("An error occured while trying to get all categories from the server!");
      }
    );

    this.filmService.getAllMovies().subscribe(
      res => {
        this.movies = res;
        this.movies.sort((a,b) => new Date(b.ev).getTime() - new Date(a.ev).getTime());
      },
      err => {
        alert("An error has occurred while trying to get all movies from the server!");
        console.log(err);
      }
    );
  }

  filter() {
    this.filteredMovies = [];
    let category: string;
    let startingYear: number;
    let endingYear: number;

    !this.selectedCategory ? category = "all" : category = this.selectedCategory.megnevezes;
    !this.selectedStartingYear ? startingYear = this.years[0].number : startingYear = this.selectedStartingYear.number;
    !this.selectedEndingYear ? endingYear = this.years[this.years.length-1].number : endingYear = this.selectedEndingYear.number;

    for (let m of this.movies) {
      if((category === "all" || m.mufaj.megnevezes === category) && m.ev >= startingYear && m.ev <= endingYear) {
        this.filteredMovies.push(m);
      }
    }
    
  }

}
