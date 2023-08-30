import { Component } from '@angular/core';

@Component({
  selector: 'app-scanner-zx-king',
  templateUrl: './scanner-zx-king.component.html',
  styleUrls: ['./scanner-zx-king.component.scss']
})
export class ScannerZxKingComponent {
  scanResult:any = '';
  onCodeResult(result:string){
    this.scanResult = result;
    console.log(result);
  }
}
