import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAddEditComponent } from './events-add-edit.component';

describe('EventsAddEditComponent', () => {
  let component: EventsAddEditComponent;
  let fixture: ComponentFixture<EventsAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAddEditComponent]
    });
    fixture = TestBed.createComponent(EventsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
