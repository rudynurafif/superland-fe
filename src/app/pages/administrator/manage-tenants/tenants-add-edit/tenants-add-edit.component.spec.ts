import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsAddEditComponent } from './tenants-add-edit.component';

describe('TenantsAddEditComponent', () => {
  let component: TenantsAddEditComponent;
  let fixture: ComponentFixture<TenantsAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantsAddEditComponent]
    });
    fixture = TestBed.createComponent(TenantsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
