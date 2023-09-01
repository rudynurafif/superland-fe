import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminComponent } from './home-admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeAdminComponent', () => {
  let component: HomeAdminComponent;
  let fixture: ComponentFixture<HomeAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdminComponent],
      imports : [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(HomeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
