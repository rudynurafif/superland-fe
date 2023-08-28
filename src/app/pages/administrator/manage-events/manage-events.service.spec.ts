import { TestBed } from '@angular/core/testing';

import { ManageEventsService } from './manage-events.service';

describe('ManageEventsService', () => {
  let service: ManageEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
