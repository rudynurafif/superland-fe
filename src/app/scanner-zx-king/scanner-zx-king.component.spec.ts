import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerZxKingComponent } from './scanner-zx-king.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ScanService } from './scan.service';

describe('ScannerZxKingComponent', () => {
  let component: ScannerZxKingComponent;
  let fixture: ComponentFixture<ScannerZxKingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerZxKingComponent],
      imports : [HttpClientTestingModule],
      providers : [ScanService]
    });
    fixture = TestBed.createComponent(ScannerZxKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
