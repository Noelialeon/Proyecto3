import { Component, OnInit } from '@angular/core';
import { IBox, IMapOptions, MarkerTypeId } from 'angular-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private _markerTypeId = MarkerTypeId;

  private _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1
  };

  private _click() {
    console.log('hello world...');
  }
  constructor() {}

  ngOnInit() {
console.log("at map");

  }
}
