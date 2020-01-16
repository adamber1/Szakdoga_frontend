import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FilmService } from 'src/app/services/film.service';
import { Mufaj } from 'src/app/model/mufaj.model';
import { Film } from 'src/app/model/film.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movieForm: FormGroup;
  categories: Mufaj[] = [];

  constructor(private fb: FormBuilder, private service: FilmService) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
      cim: ['', Validators.required],
      szereplok: ['', Validators.required],
      jatekido: ['', Validators.required],
      mufaj: ['', Validators.required],
      tartalom: ['', Validators.required],
      ev: ['', Validators.required],
      kep: ['', Validators.required]
    });

    this.service.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        alert("An error occured while trying to get all categories from the server!");
        console.log(err);
      }
    );
  }

  saveMovie() {
    const result: Film = Object.assign({}, this.movieForm.value);
    this.service.saveMovie(result);
  }

}
