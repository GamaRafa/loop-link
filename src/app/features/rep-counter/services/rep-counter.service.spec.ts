import { TestBed } from '@angular/core/testing';

import { RepCounterService } from './rep-counter.service';

describe('RepCounterService', () => {
  let service: RepCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
