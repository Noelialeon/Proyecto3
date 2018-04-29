import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
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

  constructor(private mapsAPILoader: MapsAPILoader) {}
  ngOnInit() {}

  edit(factory) {
    const address = `${factory.address} ${factory.zipcode} ${factory.country}`;
    this.mapsAPILoader
    .load()
    .then(() => {
      const geocoder = new google.maps.Geocoder()
      .geocode(
        { address: address },
        (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            factory.lat = results[0].geometry.location.lat();
            factory.long = results[0].geometry.location.lng();
          }
        }
      );
      factory.editing = false;
      this.update.emit(factory);
      console.log("at grandson");
    })
    .catch((err) => console.log(err));
  }
}

