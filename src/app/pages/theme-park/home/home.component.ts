import {Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor() {
  }

  ngOnInit(){
    AOS.init();
  }


  startCarousel() {
    // Mengakses elemen carousel
    const carouselElement: HTMLElement | null = document.querySelector('.carousel');

    if (carouselElement) {
      // Memulai interval untuk mengganti slide setiap 3 detik
      setInterval(() => {
        const nextButton: HTMLButtonElement | null = carouselElement.querySelector('.carousel-control-next');
        if (nextButton) {
          nextButton.click(); // Klik tombol next
        }
      }, 3000);
    }
  }

}
