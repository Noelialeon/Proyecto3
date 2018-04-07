import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable() export class BuyerCountriesApiService {

  tenCountries: any = [];
  private API_URL = 'http://localhost:3000/buyerCountries';

  constructor(
    private http: Http,
  ) {}

  getList(country) {
    return this.http
      .get(`${this.API_URL}/country/${country}`)
      .toPromise()
      .then(res => res.json())
      .then((countryList) => {
        this.tenCountries = [];
          for (let i = 1; this.tenCountries.length < 10; i++) {
            if (this.myIndexOf(this.tenCountries, countryList[i].destinationCountry)) {
              this.tenCountries.push(countryList[i]);
            }
          }
          return this.tenCountries;
        }
    )
      .catch(err => console.log(err));
  }

 myIndexOf(array, incomingCountry) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty('destinationCountry')) {
      if (array[i].destinationCountry === incomingCountry) {
        return false;
      }
    }
  }
  return true;
}

}
