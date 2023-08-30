import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManageRidesService } from '../manage-rides.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rides-add-edit',
  templateUrl: './rides-add-edit.component.html',
  styleUrls: ['./rides-add-edit.component.scss']
})

export class RidesAddEditComponent {
  ridesForm : FormGroup

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
    private readonly ridesService : ManageRidesService,
    private readonly dialogRef : MatDialogRef<RidesAddEditComponent>
  ) {
    this.ridesForm = fb.group({
      name : '',
      description : '',
      location : '',
      price : '',
      barcode  : '',
    })
  }

  submitForm() {
    if (this.ridesForm.valid) {
      this.ridesService.addRides(this.ridesForm.value).subscribe({
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
