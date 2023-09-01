import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAddEditComponent } from './events-add-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('EventsAddEditComponent', () => {
  let component: EventsAddEditComponent;
  let fixture: ComponentFixture<EventsAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAddEditComponent],
      imports : [HttpClientTestingModule, MatDialogModule],
      providers : [MatDialog]
    });
    fixture = TestBed.createComponent(EventsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
