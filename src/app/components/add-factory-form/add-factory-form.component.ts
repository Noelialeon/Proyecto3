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
    const options = { address: address };
    this.getGoogleMaps()
      .then(() => {
        return new google.maps.Geocoder();
      })
      .then(result => {
        return new Promise((resolve, reject) => {
          result.geocode(options, (results, status) => {
            if (confirm(`Is your addres ${results[0].formatted_address}`)) {
              if (status === google.maps.GeocoderStatus.OK) {
                console.log('results', results);
                this.factory.lat = results[0].geometry.location.lat();
                this.factory.long = results[0].geometry.location.lng();
                this.factory.country = this.getCountry(results[0].address_components);
                this.factory.address = this.getAddress(results[0].address_components);
                this.factory.zipcode = this.getPostalCode(results[0].address_components);
                this.factory.city = this.getCity(results[0].address_components);


                console.log('factory', this.factory);
                resolve();
              }
            }
          });
        });
      })
      .then(() => {
        this.factoryApi.add(this.factory).then(() => {
          this.router.navigate(['/profile']);
        });
      })
      .catch(err => console.log(err));
  }

  getGoogleMaps() {
    return this.mapsAPILoader.load();
  }

  getCountry(addrComponents) {
    for (let i = 0; i < addrComponents.length; i++) {
        if (addrComponents[i].types[0] === 'country') {
            return addrComponents[i].long_name;
        }
        if (addrComponents[i].types.length === 2) {
            if (addrComponents[i].types[0] === 'political') {
                return addrComponents[i].long_name;
            }
        }
    }
    return false;
  }

  getAddress(addrComponents) {
    for (let i = 0; i < addrComponents.length; i++) {
      if (addrComponents[i].types[0] === 'route') {
          return addrComponents[i].short_name;
      }
    }
    return false;
  }

  getPostalCode(addrComponents) {
    for (let i = 0; i < addrComponents.length; i++) {
      if (addrComponents[i].types[0] === 'postal_code') {
          return addrComponents[i].short_name;
      }
    }
    return false;
  }

  getCity(addrComponents) {
    for (let i = 0; i < addrComponents.length; i++) {
      if (addrComponents[i].types[0] === 'administrative_area_level_2') {
          return addrComponents[i].long_name;
      }
      if (addrComponents[i].types.length === 2) {
          if (addrComponents[i].types[0] === 'political') {
              return addrComponents[i].long_name;
          }
      }
  }
  return false;
}

  showList() {
    this.factoryApi
      .getList()
      .then(res => console.log('All the factories are', res));
  }
}
