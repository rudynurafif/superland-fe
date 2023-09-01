import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RidesAddEditComponent } from './rides-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageRidesService } from '../manage-rides.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule

describe('RidesAddEditComponent', () => {
  let component: RidesAddEditComponent;
  let fixture: ComponentFixture<RidesAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RidesAddEditComponent],
      imports: [FormsModule, ReactiveFormsModule, MatDialogModule, HttpClientTestingModule], // Add imports
      providers: [
        ManageRidesService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(RidesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
