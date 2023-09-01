import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupComponent } from './topup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TopupComponent', () => {
  let component: TopupComponent;
  let fixture: ComponentFixture<TopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopupComponent],
      imports : [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(TopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
