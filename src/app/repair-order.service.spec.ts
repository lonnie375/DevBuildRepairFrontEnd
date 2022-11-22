import { TestBed } from '@angular/core/testing';

import { RepairORderService } from './repair-order.service';

describe('RepairORderService', () => {
  let service: RepairORderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairORderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
