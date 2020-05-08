import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Show } from '../model/show.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private BASE_URL = "https://blooming-wildwood-43065.herokuapp.com/";

  private ALL_SHOWS_URL = `${this.BASE_URL}\\vetitesek\\all`;

  constructor(private http: HttpClient) { }

  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.ALL_SHOWS_URL).pipe(
      map(data => data.map(data => new Show().deserialize(data)))
    );
  }

  getShow(id: string) : Observable<Show> {
    let url = `${this.BASE_URL}\\vetitesek\\${id}`;
    return this.http.get<Show>(url).pipe(
      map(data => new Show().deserialize(data)),
      catchError(() => throwError('Movie not found'))
    );
  }

  deleteShow(id: number) {
    let url = `${this.BASE_URL}\\vetitesek\\delete\\${id}`;
    this.http.delete(url).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  saveShow(show: Show) {
    let url = `${this.BASE_URL}\\vetitesek\\addvetites`;
    this.http.post(url, show).subscribe(
      response => {
        console.log(response);
      }
    );
  }


}
