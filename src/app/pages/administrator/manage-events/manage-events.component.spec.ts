import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEventsComponent } from './manage-events.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

describe('ManageEventsComponent', () => {
  let component: ManageEventsComponent;
  let fixture: ComponentFixture<ManageEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageEventsComponent],
      imports : [HttpClientTestingModule, MatDialogModule],
      providers : [MatDialog]
    });
    fixture = TestBed.createComponent(ManageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
