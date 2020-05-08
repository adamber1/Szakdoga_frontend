import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user: User;

  private BASE_URL = "http://localhost:8090/";

  login(credentials) {
    let url = `${this.BASE_URL}\\users\\login`;

    return this.http.post(url, credentials).toPromise().then(
      (res: User) => {
        if (res) {
          this.user = new User(res);
          return true;
        }
        else {
          return false;
        }
      }
    );
  }

  get currentUser() {
    return this.user;
  }

  isLoggedIn() {
    if (this.user) {
      return true;
    }
    return false;
  }

  isAdmin() {
    if (this.isLoggedIn() && this.user.admin) {
      return true;
    }
    return false;
  }

  logout() {
    this.user = null;
    this.router.navigate(['/']);
  }
}
