import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Foglalas } from '../model/foglalas.model';
import { ReservationService } from './reservation.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsResolverService implements Resolve<Foglalas[]>{
  
  constructor(private reservationService: ReservationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Foglalas[] | Observable<Foglalas[]> | Promise<Foglalas[]> {
    let vetitesId = route.paramMap.get('id');
    return this.reservationService.getAllReservationsByVetites(vetitesId);
  } 

}
