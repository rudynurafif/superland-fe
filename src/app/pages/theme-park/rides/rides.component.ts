import { Component } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent {
  ngAfterViewInit() {
    this.startCarousel();
  }

  startCarousel() {
    const carouselElement: HTMLElement | null = document.querySelector('.carousel');

    if (carouselElement) {
      setInterval(() => {
        const nextButton: HTMLButtonElement | null = carouselElement.querySelector('.carousel-control-next');
        if (nextButton) {
          nextButton.click(); // Klik tombol next
        }
      }, 3000);
    }
  }

  cards = [
    { title: 'Card title 1', imageUrl: 'https://www.zamperla.com/wp-content/uploads/2022/03/ZPL_News-Discovery-prev.jpg', description: 'Description for card 1.', location : 'A1', price : 10 },
    { title: 'Card title 2', imageUrl: 'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Wonder-Woman-Flight-of-Courage-min-scaled.jpg', description: 'Description for card 2.', location : 'A1', price : 10 },
    { title: 'Card title 3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSop8IhM28uxCOHz14wbcQs48iSIHA6-lxafw&usqp=CAU', description: 'Description for card 3.', location : 'A1', price : 10 },
    { title: 'Card title 4', imageUrl: 'https://www.zamperla.com/wp-content/uploads/2022/03/ZPL_News-Discovery-prev.jpg', description: 'Description for card 4.', location : 'A1', price : 10 },
    { title: 'Card title 5', imageUrl: 'https://sf-static.sixflags.com/wp-content/uploads/SFMM_Wonder-Woman-Flight-of-Courage-min-scaled.jpg', description: 'Description for card 5.', location : 'A1', price : 10 },
    { title: 'Card title 6', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSop8IhM28uxCOHz14wbcQs48iSIHA6-lxafw&usqp=CAU', description: 'Description for card 6.', location : 'A1', price : 10 }
  ];

  selectedCard: any = null;

  openModal(card: any) {
    this.selectedCard = card;
  }

}
