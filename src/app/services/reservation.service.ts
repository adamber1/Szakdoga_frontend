import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Foglalas } from '../model/foglalas.model';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private BASE_URL = "http://localhost:8090/";
  private ALL_RESERVATIONS_URL = `${this.BASE_URL}\\reservations\\all`;

  constructor(private http: HttpClient) { }

  getAllReservations() : Observable<Foglalas[]>{
    return this.http.get<Foglalas[]>(this.ALL_RESERVATIONS_URL).pipe(
      map(data => data.map(data => new Foglalas().deserialize(data)))
    );
  }

  getAllReservationsByVetites(id: string) : Observable<Foglalas[]>{
    let url = `${this.BASE_URL}\\reservations\\vetites\\${id}`;
    return this.http.get<Foglalas[]>(url).pipe(
      map(data => data.map(data => new Foglalas().deserialize(data))),
      catchError(() => throwError('Movie not found'))
    );
  }

  makeReservation(reservation: Foglalas) {
    let url = "http://localhost:8090/reservations/addreservation";
    this.http.post(url, reservation).subscribe(
      response => {
        console.log(response);
      }
    );
  }

}
