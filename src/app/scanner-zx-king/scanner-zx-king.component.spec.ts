import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerZxKingComponent } from './scanner-zx-king.component';

describe('ScannerZxKingComponent', () => {
  let component: ScannerZxKingComponent;
  let fixture: ComponentFixture<ScannerZxKingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScannerZxKingComponent]
    });
    fixture = TestBed.createComponent(ScannerZxKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
