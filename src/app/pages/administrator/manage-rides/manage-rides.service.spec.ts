import { TestBed } from '@angular/core/testing';

import { ManageRidesService } from './manage-rides.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageRidesService', () => {
  let service: ManageRidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(ManageRidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
