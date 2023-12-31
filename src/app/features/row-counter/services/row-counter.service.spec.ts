import { TestBed } from '@angular/core/testing';

import { RowCounterService } from './row-counter.service';

describe('RowCounterService', () => {
  let service: RowCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RowCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
