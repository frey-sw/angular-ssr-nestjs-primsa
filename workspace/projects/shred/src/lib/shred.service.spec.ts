import { TestBed } from '@angular/core/testing';

import { ShredService } from './shred.service';

describe('ShredService', () => {
  let service: ShredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
