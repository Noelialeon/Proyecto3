import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BuyerCountriesApiService {

  private API_URL = 'http://localhost:3000/buyerCountries';

  constructor(private http: Http
  ) {}

  getList() {
    return this.http
    .get(`${this.API_URL}`)
      .toPromise()
      .then(res => res.json());
  }
}
