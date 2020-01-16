import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { Foglalas } from '../model/foglalas.model';
import { Show } from '../model/show.model';

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
  igazolvany_szam: number;
  show: Show;


  constructor(private route: ActivatedRoute, private service: ReservationService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.vetites_id = params.get('id');
      this.service.getAllReservationsByVetites(this.vetites_id).subscribe(
        res => {
          this.reservations = res;
          console.log("Foglalt helyek betoltese");
          for (let r of this.reservations){
            this.takenSeats.push(r.hely_sorszama);
          }
          this.numOfSeats = this.reservations[0].vetites.terem.helyek_szama;
          this.show = this.reservations[0].vetites;
          this.populateSeatsArray();
        }
      );
    });
  }

  onClick(id: number) {
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
  }

  buttonClick() {
    for (let s of this.seatsToReserve){
      let foglalas = new Foglalas();
      foglalas.hely_sorszama = s.id;
      foglalas.igazolvany_szam = this.igazolvany_szam;
      foglalas.id = null;
      foglalas.vetites = this.show;

      this.service.makeReservation(foglalas);
    }
  }

  populateSeatsArray() {
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
  }

}
