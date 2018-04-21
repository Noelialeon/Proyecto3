import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-signup-page-component',
  templateUrl: './auth-signup-page-component.component.html',
  styleUrls: ['./auth-signup-page-component.component.css']
})
export class AuthSignupPageComponent implements OnInit {
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

  ngOnInit() {
  }

  signup() {
    this.session
      .signup(this.formInfo)
      .then(user => (this.user = user))
      .catch(err => (this.error = "Please, enter a valid username and password");
  }

}
