import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/model/room.model';
import { Film } from 'src/app/model/film.model';
import { Show } from 'src/app/model/show.model';
import { ShowService } from 'src/app/services/show.service';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-programme-form',
  templateUrl: './programme-form.component.html',
  styleUrls: ['./programme-form.component.css']
})
export class ProgrammeFormComponent implements OnInit {

  showForm: FormGroup;
  rooms: Room[] = [];
  movies: Film[] = [];
  invalidIdopont = false;

  languages = [
    { id: 1, lang: "Magyar"},
    { id: 2, lang: "Angol"},
  ]

  types = [
    { id: 1, type: "2D"},
    { id: 2, type: "3D"},
  ]

  constructor(private fb: FormBuilder, private showService: ShowService, private filmService: FilmService) { }

  ngOnInit() {
    this.showForm = this.fb.group({
      film: ['', Validators.required],
      idopont: ['', [Validators.required, Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}')]],
      nyelv: ['', Validators.required],
      tipus: ['', Validators.required],
      terem: ['', Validators.required]
    });

    this.filmService.getAllMovies().subscribe(
      res => {
        this.movies = res;
      }
    );

    this.filmService.getAllRooms().subscribe(
      res => {
        this.rooms = res;
      }
    );
  }

  saveShow() {
    const result: Show = Object.assign({}, this.showForm.value);
    let datum = new Date(result.idopont);
    if (datum.getTime() !== datum.getTime()) {
      this.invalidIdopont = true;
    }
    else {
      this.showService.saveShow(result);
      this.invalidIdopont = false;
      this.showForm.reset();
    }
    
  }

}
