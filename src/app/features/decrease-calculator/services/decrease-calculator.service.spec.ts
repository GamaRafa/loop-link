import { TestBed } from '@angular/core/testing';

import { DecreaseCalculatorService } from './decrease-calculator.service';

describe('DecreaseCalculatorService', () => {
  let service: DecreaseCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecreaseCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
