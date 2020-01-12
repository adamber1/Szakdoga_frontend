import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from '../model/show.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private BASE_URL = "http://localhost:8090/";

  private ALL_SHOWS_URL = `${this.BASE_URL}\\vetitesek\\all`;

  constructor(private http: HttpClient) { }

  getAllShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.ALL_SHOWS_URL).pipe(
      map(data => data.map(data => new Show().deserialize(data)))
    );
  }


}
