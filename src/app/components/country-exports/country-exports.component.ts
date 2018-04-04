import { Component, OnInit, Input } from '@angular/core';
import { BuyerCountriesApiService } from '../../services/buyer-countries-api/buyer-countries-api.service';
import { DecimalPipe } from '@angular/common';
import { ShortNumberPipe } from '../../pipes/short-number.pipe';

@Component({
  selector: 'app-country-exports',
  templateUrl: './country-exports.component.html',
  styleUrls: ['./country-exports.component.css'],
})
export class CountryExportsComponent implements OnInit {
  @Input() exportCountry: String;
  countries: any;
  allCountries: any = [];
  loading: Boolean = true;

  constructor(private buyerCountriesApi: BuyerCountriesApiService) {}

  ngOnInit() {
    this.showBuyerCountries();
  }

  showBuyerCountries() {
    this.buyerCountriesApi
      .getList()
      .then(res => res
          .filter(factory => factory.sourceCountry === this.exportCountry)
          .sort((a, b) => b.value - a.value))
      .then(res => {
        for (let i = 0; this.allCountries.length < 10; i++) {
          if (this.myIndexOf(res[i].destinationCountry)) {
            this.allCountries.push(res[i]);
          }
        }
        this.loading = false;
      })
      .catch(err => console.log(err));
  }


  myIndexOf(incomingCountry) {
    const country = incomingCountry;
    for (let i = 0; i < this.allCountries.length; i++) {
      if (this.allCountries[i].hasOwnProperty('destinationCountry')) {
        if (this.allCountries[i].destinationCountry === country) {
          return false;
        }
      }
    }
    return -1;
  }
}
