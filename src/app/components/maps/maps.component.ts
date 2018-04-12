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
import {
  AgmCoreModule,
  MapsAPILoader,
} from '@agm/core';
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
  styleUrls: ['maps.component.css']
})
export class MapsComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public google: google;

  markers: Marker[] = [
    {
      lat: 41.1188827,
      lng: 1.2444908999999598,
      label: 'A',
      draggable: true
    }];

  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
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
}
