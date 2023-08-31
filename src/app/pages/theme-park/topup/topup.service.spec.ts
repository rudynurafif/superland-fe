import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { TopupService } from './topup.service';

describe('TopupService', () => {
  let service: TopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(TopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
