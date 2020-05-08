import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Credentials } from '../model/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) { }

  invalidLogin = false;

  loginForm: FormGroup;

  ngOnInit() {
    this.invalidLogin = false;
    this.loginForm = this.fb.group({
      name: '',
      password: ''
    });
  }

  signIn() {
    const credentials: Credentials = Object.assign({}, this.loginForm.value);
    this.authService.login(credentials).then(
      res => {
        if (res) {
          let user = this.authService.currentUser;
          let returnUrl;
          if (user && user.admin) {
            returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          }
          this.router.navigate([returnUrl || '/']);
        }
        else {
          this.invalidLogin = true;
        }
      }
    );
  }
}
