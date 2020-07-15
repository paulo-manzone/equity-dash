import { TestBed } from '@angular/core/testing';

import { MeusInvestimentosService } from './meus-investimentos.service';

describe('MeusInvestimentosService', () => {
  let service: MeusInvestimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusInvestimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
