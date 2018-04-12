import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  NgZone
} from '@angular/core';
// import { CompaniesCoordinatesService } from '../../services/companies-coordinates/companies-coordinates.service';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { google } from 'google-maps';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-edit-factory-form',
  templateUrl: './edit-factory-form.component.html',
  styleUrls: ['./edit-factory-form.component.css']
})
export class EditFactoryFormComponent implements OnInit {
  @Input() factory: any;
  @Output() update = new EventEmitter<string>();
  lat: number;
  lng: number;
  public google: google;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}
  ngOnInit() {}

  edit(factory) {
    const address = `${factory.address} ${factory.zipcode} ${factory.country}`;
    // console.log(factory, address);
    this.getAddress(address);
    this.update.emit(factory);
  }

  getAddress(address: string) {
    this.mapsAPILoader.load().then(() => {
      const geocoder = new google.maps.Geocoder().geocode(
        { address: address },
        function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            // this.factory.lat = results[0].geometry.location.lat();
            // this.factory.long = results[0].geometry.location.lng();

            console.log(
              results[0].geometry.location.lat(),
              results[0].geometry.location.lng()
            );
          } else {
            console.log('Error - ', results, ' & Status - ', status);
          }
        }
      );
    });
  }

}
