import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Show } from '../model/show.model';
import { ShowService } from './show.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeResolverService implements Resolve<Show[]>{
  
  constructor(private showService: ShowService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> {
    return this.showService.getAllShows();
  }

}
