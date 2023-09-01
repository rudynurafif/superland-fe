import { TestBed } from '@angular/core/testing';

import { ScanService } from './scan.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ScanService', () => {
  let service: ScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(ScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
