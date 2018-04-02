import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BuyerCountriesApiService {
  configUrl = 'assets/export.json';

  selectedCountries: any;
  allCountries: any;

  constructor(private http: Http) {}

  getList() {
    return this.http
      .get(this.configUrl)
      .toPromise()
      .then(res => res.json())
      .then(res => (this.allCountries = res));
  }

  // filterByCountry(country) {
  //   return this.allCountries.filter(
  //     factory => factory.sourceCountry === country
  //   );
  // }
}
