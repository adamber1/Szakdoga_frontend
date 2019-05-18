import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Film } from './model/film'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private BASE_URL = "https://warm-shore-83209.herokuapp.com";
  
  private ALL_MOVIES_URL = `${this.BASE_URL}\\movies\\all`;

  constructor(private http: HttpClient) {

  }

  getAllMovies() : Observable<Film[]>{
    return this.http.get<Film[]>(this.ALL_MOVIES_URL);
  }
}
