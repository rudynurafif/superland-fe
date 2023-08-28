import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMerchandiseComponent } from './manage-merchandise.component';

describe('ManageMerchandiseComponent', () => {
  let component: ManageMerchandiseComponent;
  let fixture: ComponentFixture<ManageMerchandiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMerchandiseComponent]
    });
    fixture = TestBed.createComponent(ManageMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
