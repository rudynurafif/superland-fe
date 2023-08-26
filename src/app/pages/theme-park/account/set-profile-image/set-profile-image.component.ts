import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set-profile-image',
  templateUrl: './set-profile-image.component.html',
  styleUrls: ['./set-profile-image.component.scss']
})
export class SetProfileImageComponent {

  file: File | undefined;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly accService : AccountService
  ) { }

  handleFileInput(event: any): void {
    this.file = event.target.files[0];
  }

  uploadProfileImage(): void {
    if (!this.file) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.file);

    this.accService.setProfileImage(formData).subscribe({
      next: (response: any) => {
        // console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Profile image uploaded successfully',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['superland']);
      },
      error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500
        })
        console.error('Error uploading profile image:', error);
      }
    });
  }

}
