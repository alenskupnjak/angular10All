import { TestBed } from '@angular/core/testing';

import { BackfileService } from './backfile.service';

describe('BackfileService', () => {
  let service: BackfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
