import { TestBed } from '@angular/core/testing';

import { YarnStashService } from './yarn-stash.service';

describe('YarnStashService', () => {
  let service: YarnStashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YarnStashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
