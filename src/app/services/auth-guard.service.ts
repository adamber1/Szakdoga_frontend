import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isAdmin()) {
      return true;
    }  
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
