import { Component } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: 'maps.component.html',
  styleUrls: ['maps.component.css'],
})

export class MapsComponent {
  title: String = 'My first AGM project';
  lat: Number = 51.678418;
  lng: Number = 7.809007;
zoom: Number = 3;
}
