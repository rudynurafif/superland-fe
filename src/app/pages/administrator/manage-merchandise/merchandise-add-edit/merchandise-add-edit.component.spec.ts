import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseAddEditComponent } from './merchandise-add-edit.component';

describe('MerchandiseAddEditComponent', () => {
  let component: MerchandiseAddEditComponent;
  let fixture: ComponentFixture<MerchandiseAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchandiseAddEditComponent]
    });
    fixture = TestBed.createComponent(MerchandiseAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
