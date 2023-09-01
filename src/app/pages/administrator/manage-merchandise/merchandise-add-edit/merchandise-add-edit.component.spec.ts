import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseAddEditComponent } from './merchandise-add-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('MerchandiseAddEditComponent', () => {
  let component: MerchandiseAddEditComponent;
  let fixture: ComponentFixture<MerchandiseAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchandiseAddEditComponent],
      imports : [HttpClientTestingModule, MatDialogModule]
    });
    fixture = TestBed.createComponent(MerchandiseAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
