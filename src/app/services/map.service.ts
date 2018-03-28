import { Injectable } from '@angular/core';
import { BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef } from 'angular-maps';

@Injectable()
export class MapServiceProviderFactory {
  constructor() {
  const bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = 'AIzaSyDgXhtB3roWHVQ3xN-R9ppbWCprBKa0fEs';
  bc.branch = 'experimental';
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use
      // clustering.
  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
  }
}
