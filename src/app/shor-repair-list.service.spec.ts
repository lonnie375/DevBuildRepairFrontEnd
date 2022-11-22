import { TestBed } from '@angular/core/testing';

import { ShorRepairListService } from './shor-repair-list.service';

describe('ShorRepairListService', () => {
  let service: ShorRepairListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShorRepairListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
