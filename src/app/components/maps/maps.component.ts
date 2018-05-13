import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { google } from 'google-maps';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { FactoryApiService } from '../../services/factory-api.service';
// import { Marker } from '@agm/core/services/google-maps-types';

interface Marker {
  lat: number;
  lng: number;
  draggable: boolean;
  factoryInfo: object;
}

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['../../../assets/css/style.css']}
)
export class MapsComponent implements OnInit {
  styles: any[] = [
      {
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#f5f5f5'
          }
        ]
      },
      {
        'elementType': 'labels.icon',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#616161'
          }
        ]
      },
      {
        'elementType': 'labels.text.stroke',
        'stylers': [
          {
            'color': '#f5f5f5'
          }
        ]
      },
      {
        'featureType': 'administrative.land_parcel',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#bdbdbd'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#eeeeee'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#757575'
          }
        ]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#e5e5e5'
          }
        ]
      },
      {
        'featureType': 'poi.park',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e9e9e'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#ffffff'
          }
        ]
      },
      {
        'featureType': 'road.arterial',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#757575'
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#dadada'
          }
        ]
      },
      {
        'featureType': 'road.highway',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#616161'
          }
        ]
      },
      {
        'featureType': 'road.local',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e9e9e'
          }
        ]
      },
      {
        'featureType': 'transit.line',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#e5e5e5'
          }
        ]
      },
      {
        'featureType': 'transit.station',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#eeeeee'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          {
            'color': '#c9c9c9'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'labels.text.fill',
        'stylers': [
          {
            'color': '#9e9e9e'
          }
        ]
      }
    // {elementType: 'geometry', stylers: [{color: '#000000'}]},
    // {elementType: 'labels.text.stroke', stylers: [{color: '#ffffff'}]},
    // {elementType: 'labels.text.fill', stylers: [{color: '#cccccc'}]},
  ];
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public google: google;
  public factories;

  markers: Marker[] = [];
  infoWindow;
  infoWindowOpened = null;

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
          draggable: true,
          factoryInfo: factory,
        };
        this.markers.push(currentMarker);
      });
    });
  }

  clickedMarker(infoWindow, index: number) {
    if ( this.infoWindowOpened ===  infoWindow) {
      return;
    }
    if ( this.infoWindowOpened !== null ) {
      this.infoWindowOpened.close();
    }
    this.infoWindowOpened = infoWindow;
  }
}
