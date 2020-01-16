import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { FilmService } from 'src/app/services/film.service';
import { Mufaj } from 'src/app/model/mufaj.model';
import { Film } from 'src/app/model/film.model';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movieForm: FormGroup;
  categories: Mufaj[] = [];
  movie: Film;

  constructor(private fb: FormBuilder, private service: FilmService) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
      cim: '',
      szereplok: '',
      jatekido: '',
      mufaj: '',
      tartalom: '',
      ev: '',
      kep: ''
    });

    this.service.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert("An error occured while trying to get all categories from the server!");
      }
    );
  }

  saveMovie() {
    const result: Film = Object.assign({}, this.movieForm.value);
    console.log(result);
    this.service.saveMovie(result);
  }

}
