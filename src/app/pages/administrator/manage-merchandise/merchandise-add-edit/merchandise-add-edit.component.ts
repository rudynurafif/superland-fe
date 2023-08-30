import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ManageMerchandiseService } from '../manage-merchandise.service';

@Component({
  selector: 'app-merchandise-add-edit',
  templateUrl: './merchandise-add-edit.component.html',
  styleUrls: ['./merchandise-add-edit.component.scss']
})
export class MerchandiseAddEditComponent {

  merchForm : FormGroup

  constructor(
    private readonly fb : FormBuilder,
    private readonly merchService : ManageMerchandiseService,
    private readonly dialogRef : MatDialogRef<MerchandiseAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any
  ) {
    this.merchForm = fb.group({
      name : '',
      description : '',
      price : '',
      picture : ''
    })
  }

  ngOnInit() {
    this.merchForm.patchValue(this.data)
  }

  submitForm() {
    if (this.merchForm.valid) {
      if (this.data) {
        this.merchService.updateMerchandise(this.data.id, this.merchForm.value).subscribe({
          next : (res : any) => {
            Swal.fire({
              icon: 'success',
              title: 'Successfully updated merch data',
              showConfirmButton: false,
              timer: 1500
            })
            this.dialogRef.close(true)
          },
          error : console.log
        })
      } else {
        this.merchService.addMerchandise(this.merchForm.value).subscribe({
          next : (res : any) => {
            Swal.fire({
              icon: 'success',
              title: 'Successfully added merch data',
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
