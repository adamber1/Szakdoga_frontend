import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { Film } from '../model/film.model'
import { Mufaj } from '../model/mufaj.model';
import { map, catchError } from 'rxjs/operators';
import { Room } from '../model/room.model';
 
@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private BASE_URL = "https://blooming-wildwood-43065.herokuapp.com/";
  
  private ALL_MOVIES_URL = `${this.BASE_URL}\\movies\\all`;
  private ALL_CATEGORIES_URL = `${this.BASE_URL}\\categories\\all`;
  private ALL_ROOMS_URL = `${this.BASE_URL}\\rooms\\all`;
  private ADD_MOVIE_URL = `${this.BASE_URL}\\movies\\addmovie`;

  constructor(private http: HttpClient) {

  }

  deleteMovie(id: number) {
    let url = `${this.BASE_URL}\\movies\\delete\\${id}`;
    this.http.delete(url).subscribe();
  }

  saveMovie(film: Film) {
    this.http.post(this.ADD_MOVIE_URL, film).subscribe();
  }

  getAllMovies() : Observable<Film[]>{
    return this.http.get<Film[]>(this.ALL_MOVIES_URL).pipe(
      map(data => data.map(data => new Film().deserialize(data)))
    );
  }

  getMovie(id: string) : Observable<Film> {
    let url = `${this.BASE_URL}\\movies\\${id}`;
    return this.http.get<Film>(url).pipe(
      map(data => new Film().deserialize(data)),
      catchError(() => throwError('Movie not found'))
    );
  }

  getAllCategories() : Observable<Mufaj[]>{
    return this.http.get<Mufaj[]>(this.ALL_CATEGORIES_URL).pipe(
      map(data => data.map(data => new Mufaj().deserialize(data)))
    );
  }

  getAllRooms(): Observable<Room[]>{
    return this.http.get<Room[]>(this.ALL_ROOMS_URL).pipe(
      map(data => data.map(data => new Room().deserialize(data)))
    );
  }



}
