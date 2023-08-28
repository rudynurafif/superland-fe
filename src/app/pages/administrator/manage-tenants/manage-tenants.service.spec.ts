import { TestBed } from '@angular/core/testing';

import { ManageTenantsService } from './manage-tenants.service';

describe('ManageTenantsService', () => {
  let service: ManageTenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
