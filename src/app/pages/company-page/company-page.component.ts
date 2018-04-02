import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FactoryApiService } from '../../services/factory-api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  factory: any = {
    _id: '',
    companyName: '',
    address: '',
    zipcode: '',
    country: '',
    activity: '',
    billing: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private factoryApi: FactoryApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDetails(params['id']);
    });
  }

  getDetails(id) {
    this.factoryApi
      .get(id)
      .then(factory => {
        this.factory = factory;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
