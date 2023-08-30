import { Component } from '@angular/core';
import { ScanService } from './scan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scanner-zx-king',
  templateUrl: './scanner-zx-king.component.html',
  styleUrls: ['./scanner-zx-king.component.scss']
})
export class ScannerZxKingComponent {
  scanResult : any = '';
  title = 'coba-kamera';
  status : string = "NOT-DETECTED";

  constructor (
    private scanService : ScanService
  ) {}

  onCodeResult(result:string){
    this.scanResult = result;
    console.log(result);

    this.status = "Detected"
    this.scanService.getInfoGame(this.scanResult).subscribe(
      (response)=>{
        console.log(response)
        Swal.fire({
          title: 'Konfirmasi',
          html: `Apakah Anda ingin membeli <b>${response.data.name}</b> dengan harga <b>${response.data.pointPrice}</b> poin?`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed) {
            this.scanService.pay(response.data.id).subscribe(
              (response)=>{
                Swal.fire('Sukses', `anda telah membeli ${response.data.name} seharga ${response.data.pointPrice}`, 'info');
              },
              (error)=>{
                console.log(error)
                Swal.fire('Saldo tidak cukup', 'Segera lakukan isi ulang', 'error');
              }
            )
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            console.log("dibatalkan")
            // Aksi jika tombol "No" diklik
            Swal.fire('Dibatalkan', 'Anda tidak membeli item.', 'error');
            console.log("navigate")
            // Lakukan sesuatu jika tombol "No" diklik
          }
        });
      }
      , (error)=>{
        console.log(error)
      }
    )
  }


}
