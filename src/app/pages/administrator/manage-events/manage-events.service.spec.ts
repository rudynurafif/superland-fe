import { TestBed } from '@angular/core/testing';

import { ManageEventsService } from './manage-events.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageEventsService', () => {
  let service: ManageEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(ManageEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
