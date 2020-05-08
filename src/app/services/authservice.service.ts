import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  user: User;

  private BASE_URL = "http://localhost:8090/";

  login(credentials) {
    let url = `${this.BASE_URL}\\users\\login`;

    this.http.post(url, credentials).subscribe(
      (res: User) => {
        if (res && res.admin) {
          localStorage.setItem('admin', 'true');
        }
        else if (res) {
          localStorage.setItem('admin', 'false');
        }
        let u = new User(res);
        this.user = u;
      }
    );
  }

  getLoggedInUser(): User {
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
    localStorage.removeItem('admin');
    this.user = null;
  }
}
