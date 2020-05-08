import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Show } from '../model/show.model';
import { Observable } from 'rxjs';
import { ShowService } from './show.service';

@Injectable({
  providedIn: 'root'
})
export class ShowResolverService implements Resolve<Show>{

  constructor(private showService: ShowService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Show | Observable<Show> | Promise<Show> {
    let vetitesId = route.paramMap.get('id');
    return this.showService.getShow(vetitesId);
  }

}
