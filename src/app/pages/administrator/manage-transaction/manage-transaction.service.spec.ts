import { TestBed } from '@angular/core/testing';

import { ManageTransactionService } from './manage-transaction.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ManageTransactionService', () => {
  let service: ManageTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(ManageTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
