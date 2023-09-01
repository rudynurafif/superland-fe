import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProfileComponent } from './get-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetProfileComponent', () => {
  let component: GetProfileComponent;
  let fixture: ComponentFixture<GetProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetProfileComponent],
      imports : [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(GetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
