import { TestBed } from '@angular/core/testing';

import { GetrandomService } from './getrandom.service';

describe('GetrandomService', () => {
  let service: GetrandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetrandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
