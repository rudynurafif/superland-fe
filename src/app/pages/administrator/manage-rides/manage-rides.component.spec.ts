import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRidesComponent } from './manage-rides.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('ManageRidesComponent', () => {
  let component: ManageRidesComponent;
  let fixture: ComponentFixture<ManageRidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRidesComponent],
      imports : [HttpClientTestingModule, MatDialogModule],
      providers : [MatDialog]
    });
    fixture = TestBed.createComponent(ManageRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
