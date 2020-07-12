import { TestBed } from '@angular/core/testing';

import { ValuationServiceService } from './valuation-service.service';

describe('ValuationServiceService', () => {
  let service: ValuationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


