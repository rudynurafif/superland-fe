import { TestBed } from '@angular/core/testing';

import { ManageMerchandiseService } from './manage-merchandise.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageMerchandiseService', () => {
  let service: ManageMerchandiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(ManageMerchandiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
