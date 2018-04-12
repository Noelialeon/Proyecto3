// import { Injectable, NgZone } from '@angular/core';
// import { GoogleMapsAPIWrapper } from '@agm/core';
// import { MapsAPILoader } from '@agm/core';
// import { Observable } from 'rxjs/Observable';
// import { google } from 'google-maps';

// // declare var google: any;

// @Injectable()
// export class CompaniesCoordinatesService extends GoogleMapsAPIWrapper{
//     public google: google;
//     constructor(
//       private mapsApiLoader: MapsAPILoader,
//       private __zone: NgZone) {
//         super(mapsApiLoader, __zone);
//     }

//     getLatLan(address: string) {
//         console.log('Getting Address - ', address);

//         let geocoder = new google.maps.Geocoder().geocoder;
//         console.log('Getting geocode - ', geocoder);

//         // return Observable.create(observer => {
//         //     geocoder.geocode( { 'address': address}, function(results, status) {
//         //         if (status === google.maps.GeocoderStatus.OK) {
//         //             observer.next(results[0].geometry.location);
//         //             observer.complete();
//         //         } else {
//         //             console.log('Error - ', results, ' & Status - ', status);
//         //             observer.next({});
//         //             observer.complete();
//         //         }
//         //     });
//         // })
//     }
// }
