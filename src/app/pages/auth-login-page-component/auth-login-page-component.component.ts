import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-login-page-component',
  templateUrl: './auth-login-page-component.component.html',
  styleUrls: ['./auth-login-page-component.component.css']
})
export class AuthLoginPageComponent implements OnInit {
  formInfo = {
    username: '',
    password: ''
  };
  user: any;
  error: string;

  constructor(
    private session: AuthService,
    private router: Router,
  ) {}

  login() {
    this.session
      .login(this.formInfo)
      .then(user => {
        this.user = user;
        this.router.navigate(['/private-profile']);
      })
      .catch((error) => {
        this.error = 'Please, enter a valid username and password';
      });
  }

  ngOnInit() {

  }
}
