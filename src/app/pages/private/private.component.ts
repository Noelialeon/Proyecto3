import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FactoryApiService } from '../../services/factory-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['../../app.component.css']
})
export class PrivateComponent implements OnInit {
  user;

  constructor(
    private session: AuthService,
    private factoryApi: FactoryApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.session.getUser();
  }
}
