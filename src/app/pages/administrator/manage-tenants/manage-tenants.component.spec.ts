import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTenantsComponent } from './manage-tenants.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; // Import MatDialogModule and MatDialog

describe('ManageTenantsComponent', () => {
  let component: ManageTenantsComponent;
  let fixture: ComponentFixture<ManageTenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTenantsComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        MatDialogModule 
      ],
      providers: [MatDialog] 
    });
    fixture = TestBed.createComponent(ManageTenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
