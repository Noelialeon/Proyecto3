import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BuyerCountriesApiService } from '../../services/buyer-countries-api/buyer-countries-api.service';
import { DecimalPipe } from '@angular/common';
import { ShortNumberPipe } from '../../pipes/short-number.pipe';

@Component({
  selector: 'app-country-exports',
  templateUrl: './country-exports.component.html',
  styleUrls: ['./country-exports.component.css'],
})
export class CountryExportsComponent implements OnInit, OnChanges {
  @Input() exportCountry: string;
  countries: any;
  allCountries: any = [];
  loading: Boolean = true;
  country: string;

  constructor(private buyerCountriesApi: BuyerCountriesApiService) {
  }

  ngOnInit() {
    // this.showBuyerCountries();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showBuyerCountries();
  }


  showBuyerCountries() {
    this.buyerCountriesApi
      .getList(this.exportCountry)
      .then( (countries) => {
        this.allCountries = countries;
        this.loading = false;
      });
  }
}
