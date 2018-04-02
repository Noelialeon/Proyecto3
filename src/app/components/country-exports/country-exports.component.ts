import { Component, OnInit, Input } from '@angular/core';
import { BuyerCountriesApiService } from '../../services/buyer-countries-api/buyer-countries-api.service';

@Component({
  selector: 'app-country-exports',
  templateUrl: './country-exports.component.html',
  styleUrls: ['./country-exports.component.css']
})

export class CountryExportsComponent implements OnInit {
  @Input() exportCountry: String;
  countries: any;
  allCountries: any;

  constructor(private buyerCountriesApi: BuyerCountriesApiService) {}

  ngOnInit() {
    this.showBuyerCountries();
  }

  showBuyerCountries() {
    this.buyerCountriesApi
      .getList()
      .then(res => res.filter(factory => factory.sourceCountry === this.exportCountry))
      .then(res => {
        this.allCountries = res;
        console.log(this.allCountries);
      })
      .catch(err => console.log(err));
  }
}
