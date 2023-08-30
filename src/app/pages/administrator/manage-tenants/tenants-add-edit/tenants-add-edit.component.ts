import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ManageTenantsService } from '../manage-tenants.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tenants-add-edit',
  templateUrl: './tenants-add-edit.component.html',
  styleUrls: ['./tenants-add-edit.component.scss']
})
export class TenantsAddEditComponent {

  tenantsForm : FormGroup

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
    private readonly tenantsService : ManageTenantsService,
    private readonly dialogRef : MatDialogRef<TenantsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    this.tenantsForm = fb.group({
      name : '',
      description : '',
      location : '',
    })
  }

  ngOnInit() {
    this.tenantsForm.patchValue(this.data)
  }

  submitForm() {
    if (this.tenantsForm.valid) {
      if (this.data) {
        this.tenantsService.updateTenant(this.data.id, this.tenantsForm.value).subscribe({
          next : (res : any) => {
            Swal.fire({
              icon: 'success',
              title: 'Successfully updated tenant data',
              showConfirmButton: false,
              timer: 1500
            })
            this.dialogRef.close(true)
          },
          error : console.log
        })
      } else {
        this.tenantsService.addTenant(this.tenantsForm.value).subscribe({
          next : (res : any) => {
            Swal.fire({
              icon: 'success',
              title: 'Successfully added tenant data',
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
