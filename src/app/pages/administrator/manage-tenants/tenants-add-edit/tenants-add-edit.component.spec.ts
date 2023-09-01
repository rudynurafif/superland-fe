import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsAddEditComponent } from './tenants-add-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('TenantsAddEditComponent', () => {
  let component: TenantsAddEditComponent;
  let fixture: ComponentFixture<TenantsAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantsAddEditComponent],
      imports : [HttpClientTestingModule, MatDialogModule],
      providers : [MatDialog]
    });
    fixture = TestBed.createComponent(TenantsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
