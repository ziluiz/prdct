import { TestBed } from '@angular/core/testing';

import { PrdctService } from './prdct.service';

describe('PrdctService', () => {
  let service: PrdctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
