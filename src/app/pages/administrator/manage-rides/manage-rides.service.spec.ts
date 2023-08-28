import { TestBed } from '@angular/core/testing';

import { ManageRidesService } from './manage-rides.service';

describe('ManageRidesService', () => {
  let service: ManageRidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageRidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
