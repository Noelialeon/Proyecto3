import {
  Component,
  ElementRef,
  NgModule,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import { google } from 'google-maps';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FactoryApiService } from '../../services/factory-api.service';
// import { Marker } from '@agm/core/services/google-maps-types';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['../../../assets/css/style.css']}
)
export class MapsComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public google: google;
  public factories;

  markers: Marker[] = [];

  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private factoryApi: FactoryApiService
  ) {}

  ngOnInit() {
    // set google maps defaults in Barcelona
    this.zoom = 10;
    this.latitude = 41.3850639;
    this.longitude = 2.1734034999999494;

    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ['(cities)']
        }
      );
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 10;
          this.chargePins();
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 10;
      });
    }
  }

  private chargePins() {
    this.factoryApi.getList().then(res => {
      this.factories = res;
      this.factories.forEach(factory => {
        const currentMarker: Marker = {
          lat: factory.lat,
          lng: factory.long,
          label: factory.companyName,
          draggable: true
        };
        this.markers.push(currentMarker);
      });
      console.log('factories are', this.markers, this.factories);
    });
  }
}
