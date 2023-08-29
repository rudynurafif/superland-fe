import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesAddEditComponent } from './rides-add-edit.component';

describe('RidesAddEditComponent', () => {
  let component: RidesAddEditComponent;
  let fixture: ComponentFixture<RidesAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RidesAddEditComponent]
    });
    fixture = TestBed.createComponent(RidesAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
