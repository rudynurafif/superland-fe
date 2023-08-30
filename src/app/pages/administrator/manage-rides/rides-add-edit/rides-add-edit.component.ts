import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManageRidesService } from '../manage-rides.service';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rides-add-edit',
  templateUrl: './rides-add-edit.component.html',
  styleUrls: ['./rides-add-edit.component.scss']
})

export class RidesAddEditComponent implements OnInit {
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
    private readonly dialogRef : MatDialogRef<RidesAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    this.ridesForm = fb.group({
      name : '',
      description : '',
      location : '',
      price : '',
      barcode  : '',
    })
  }

  ngOnInit() {
    this.ridesForm.patchValue(this.data)
  }

  submitForm() {
    if (this.ridesForm.valid) {
      if (this.data) {
        this.ridesService.updateRides(this.data.id, this.ridesForm.value).subscribe({
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

}
