import { Component, Output, EventEmitter } from '@angular/core';
import { FactoryApiService } from '../../services/factory-api.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { google } from 'google-maps';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-factory-form',
  templateUrl: './add-factory-form.component.html',
  styleUrls: ['./add-factory-form.component.css']
})
export class AddFactoryFormComponent {
  factory: any = {};

  constructor(
    private factoryApi: FactoryApiService,
    private mapsAPILoader: MapsAPILoader,
    private router: Router
  ) {}

  addItem() {
    const address = `${this.factory.address} ${this.factory.zipcode} ${
      this.factory.country
    }`;

    this.mapsAPILoader
      .load()
      .then(() => {
        const geocoder = new google.maps.Geocoder().geocode(
          { address: address },
          (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              console.log(address, results, status);
              this.factory.lat = results[0].geometry.location.lat();
              this.factory.long = results[0].geometry.location.lng();
              if (confirm(`Is the address ${results[0].formatted_address}?`)) {
                this.factoryApi.add(this.factory).then(() => {
                  this.router.navigate(['/private-profile']);
                  return null;
                });
              }
            }
          }
        );
      })
      .catch(err => console.log(err));
  }

  showList() {
    this.factoryApi
      .getList()
      .then(res => console.log('All the factories are', res));
  }
}
