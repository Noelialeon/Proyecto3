import { TestBed, inject } from '@angular/core/testing';

import { CompaniesCoordinatesService } from './companies-coordinates.service';

describe('CompaniesCoordinatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompaniesCoordinatesService]
    });
  });

  it('should be created', inject([CompaniesCoordinatesService], (service: CompaniesCoordinatesService) => {
    expect(service).toBeTruthy();
  }));
});
