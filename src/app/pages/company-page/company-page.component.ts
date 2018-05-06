import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FactoryApiService } from '../../services/factory-api.service';
import { environment } from '../../../environments/environment';
import { google } from 'google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';

interface Marker {
  lat: number;
  lng: number;
  draggable: boolean;
  factoryInfo: object;
}

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['../../../assets/css/style.css']
})

export class CompanyPageComponent implements OnInit {
  factory: any = {
    _id: '',
    companyName: '',
    address: '',
    zipcode: '',
    country: '',
    activity: '',
    billing: ''
  };
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
public zoom: number;
public google: google;
public marker: Marker;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
    private factoryApi: FactoryApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDetails(params['id']);
    });
  }

  getDetails(id) {
    this.factoryApi
      .get(id)
      .then(factory => {
        this.factory = factory;
        this.latitude = factory.lat;
        this.longitude = factory.long;
        this.zoom = 10;
        this.chargePins(factory);
      })
      .catch(error => {
        console.log(error);
      });
  }

  private chargePins(factory) {
    this.marker = {
      lat: factory.lat,
      lng: factory.long,
      draggable: true,
      factoryInfo: factory,
    };
  }

}
