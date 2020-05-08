import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { Foglalas } from '../model/foglalas.model';
import { Show } from '../model/show.model';
import { ShowService } from '../services/show.service';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  seats = [];
  seatsToReserve = [];
  numOfSeats: number;
  takenSeats: number[] = [];
  vetites_id: string;
  reservations: Foglalas[] = [];
  email: string;
  show: Show;
  canBeReserved: boolean = false;
  movie: Film;


  constructor(private route: ActivatedRoute, private reservationService: ReservationService, private showService: ShowService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.vetites_id = params.get('id');
      this.showService.getShow(this.vetites_id).subscribe(
        res => {
          this.show = res;
          this.movie = this.show.film;
          this.numOfSeats = this.show.terem.helyek_szama;
        }
      );
      this.reservationService.getAllReservationsByVetites(this.vetites_id).subscribe(
        res => {
          this.reservations = res;
          if (this.reservations.length !== 0) {
            for (let r of this.reservations){
              this.takenSeats.push(r.hely_sorszama);
            }
          }
          this.populateSeatsArray();
        }
      );
    });
  }

  seatClick(id: number) {
    if(!this.seatsToReserve.includes(this.seats[id-1])) {
      this.seatsToReserve.push(this.seats[id-1]);
    }
    else {
      for (let i=0; i<this.seatsToReserve.length; i++){
        if (this.seatsToReserve[i].id === id){
          this.seatsToReserve.splice(i,1);
        }
      }      
    }
    if(this.seatsToReserve.length === 0) {
      this.canBeReserved = false;
    }
    else {
      this.canBeReserved = true;
    }
  }

  reserve() {
    for (let s of this.seatsToReserve){
      let foglalas = new Foglalas();
      foglalas.hely_sorszama = s.id;
      foglalas.email = this.email;
      foglalas.id = null;
      foglalas.vetites = this.show;

      this.reservationService.makeReservation(foglalas);
    }
  }

  populateSeatsArray() {
    console.log("populating seats array");
    for (let i = 0; i < this.numOfSeats; i++){
      this.seats[i] = { id: i+1, taken : false};
    }
    for (let s of this.seats) {
      for (let t of this.takenSeats) {
        if (s.id === t) {
          this.seats[s.id-1].taken = true;
        }
      }
    }
    if (this.seats.length === 0) {
      console.log("seats array is empty :(");
    }
    console.log("seats array: ");
    for (let s of this.seats) {
      console.log(JSON.stringify(s));
    }
  }

}
