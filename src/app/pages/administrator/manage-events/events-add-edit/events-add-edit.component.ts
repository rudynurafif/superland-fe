import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManageRidesService } from '../../manage-rides/manage-rides.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ManageEventsService } from '../manage-events.service';

@Component({
  selector: 'app-events-add-edit',
  templateUrl: './events-add-edit.component.html',
  styleUrls: ['./events-add-edit.component.scss']
})
export class EventsAddEditComponent {

  eventForm : FormGroup

  location : string[] = [
    'A1. American Zone',
    'A2. Cartoon Word Zone',
    'B1. Indonesian Zone',
    'B2. Australian Zone',
    'C1. Asian Zone',
    'C2. European Zone',
    'D1. African Zone',
    'D2. Greek Zone',
    'E1. Russian Zone',
    'E2. Egyptian Zone',
  ]

  constructor(
    private readonly fb : FormBuilder,
    private readonly eventService : ManageEventsService,
    private readonly dialogRef : MatDialogRef<EventsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    this.eventForm = fb.group({
      name : '',
      description : '',
      location : '',
      price : '',
      poster  : '',
    })
  }

  ngOnInit() {
    this.eventForm.patchValue(this.data)
  }

  submitForm() {
    if (this.eventForm.valid) {
      if (this.data) {
        this.eventService.updateEvents(this.data.id, this.eventForm.value).subscribe({
          next : (res : any) => {
            Swal.fire({
              icon: 'success',
              title: 'Successfully updated rides data',
              showConfirmButton: false,
              timer: 1500
            })
            this.dialogRef.close(true)
          },
          error : console.log
        })
      } else {
        this.eventService.addEvents(this.eventForm.value).subscribe({
          next : (res : any) => {
            Swal.fire({
              icon: 'success',
              title: 'Successfully added rides data',
              showConfirmButton: false,
              timer: 1500
            })
            this.dialogRef.close(true)
          },
          error : console.log
        })
      }
    }
  }

}
