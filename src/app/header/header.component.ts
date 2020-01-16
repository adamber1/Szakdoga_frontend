import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  movies: Film[] = [];
  redirect: number;

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit() {
    this.filmService.getAllMovies().subscribe(
      res => {
        this.movies = res;
        this.populateOptions();
      }
    )
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  populateOptions(){
    for (let m of this.movies) {
      this.options.push(m.cim);
    }
  }

  searchForMovie(search: string){

    for (let m of this.movies) {
        if (m.cim === search) {
          this.redirect = m.id;
          break;
        }
    }
    let url = 'moviepage/' + this.redirect;

    this.router.navigate([url]);

  }

}
