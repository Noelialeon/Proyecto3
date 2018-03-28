import { TestBed, inject } from '@angular/core/testing';

import { FactoryApiService } from './factory-api.service';

describe('FactoryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactoryApiService]
    });
  });

  it('should be created', inject([FactoryApiService], (service: FactoryApiService) => {
    expect(service).toBeTruthy();
  }));
});
