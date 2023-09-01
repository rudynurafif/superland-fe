import { TestBed } from '@angular/core/testing';

import { ManageTenantsService } from './manage-tenants.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageTenantsService', () => {
  let service: ManageTenantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(ManageTenantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
