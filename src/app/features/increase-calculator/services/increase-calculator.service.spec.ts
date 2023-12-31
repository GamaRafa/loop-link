import { TestBed } from '@angular/core/testing';

import { IncreaseCalculatoorService } from './increase-calculator.service';

describe('IncreaseCalculatoorService', () => {
  let service: IncreaseCalculatoorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncreaseCalculatoorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
