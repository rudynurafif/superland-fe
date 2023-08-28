import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRidesComponent } from './manage-rides.component';

describe('ManageRidesComponent', () => {
  let component: ManageRidesComponent;
  let fixture: ComponentFixture<ManageRidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageRidesComponent]
    });
    fixture = TestBed.createComponent(ManageRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
