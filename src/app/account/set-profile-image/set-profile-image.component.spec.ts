import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProfileImageComponent } from './set-profile-image.component';

describe('SetProfileImageComponent', () => {
  let component: SetProfileImageComponent;
  let fixture: ComponentFixture<SetProfileImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetProfileImageComponent]
    });
    fixture = TestBed.createComponent(SetProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
