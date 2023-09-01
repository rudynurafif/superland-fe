import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTransactionComponent } from './manage-transaction.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('ManageTransactionComponent', () => {
  let component: ManageTransactionComponent;
  let fixture: ComponentFixture<ManageTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTransactionComponent],
      imports : [HttpClientTestingModule, MatDialogModule],
    
    });
    fixture = TestBed.createComponent(ManageTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
