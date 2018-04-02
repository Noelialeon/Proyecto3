import { TestBed, inject } from '@angular/core/testing';

import { BuyerCountriesApiService } from './buyer-countries-api.service';

describe('BuyerCountriesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyerCountriesApiService]
    });
  });

  it('should be created', inject([BuyerCountriesApiService], (service: BuyerCountriesApiService) => {
    expect(service).toBeTruthy();
  }));
});
