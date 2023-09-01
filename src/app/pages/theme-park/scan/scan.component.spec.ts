import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanComponent } from './scan.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScanComponent', () => {
  let component: ScanComponent;
  let fixture: ComponentFixture<ScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScanComponent],
      imports : [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
