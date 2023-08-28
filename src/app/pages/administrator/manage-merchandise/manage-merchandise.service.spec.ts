import { TestBed } from '@angular/core/testing';

import { ManageMerchandiseService } from './manage-merchandise.service';

describe('ManageMerchandiseService', () => {
  let service: ManageMerchandiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageMerchandiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
