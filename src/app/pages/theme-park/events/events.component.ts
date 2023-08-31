import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

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
    { title: 'Card title 1', imageUrl: 'https://img.budgettravel.com/general/VeryMerryChristmasParty-scaled.jpeg', description: 'Description for card 1.', location : 'A1', price : 20 },
    { title: 'Card title 2', imageUrl: 'https://hhnrumors.com/wp-content/uploads/2019/02/pumpkinhead.jpg', description: 'Description for card 2.', location : 'A1', price : 20 },
    { title: 'Card title 3', imageUrl: 'https://ak.picdn.net/shutterstock/videos/1762727/thumb/1.jpg?i10c=img.resize(height:240)', description: 'Description for card 3.', location : 'A1', price : 20 },
    { title: 'Card title 4', imageUrl: 'https://img.budgettravel.com/general/VeryMerryChristmasParty-scaled.jpeg', description: 'Description for card 4.', location : 'A1', price : 20 },
    { title: 'Card title 5', imageUrl: 'https://hhnrumors.com/wp-content/uploads/2019/02/pumpkinhead.jpg', description: 'Description for card 5.', location : 'A1', price : 20 },
    { title: 'Card title 6', imageUrl: 'https://ak.picdn.net/shutterstock/videos/1762727/thumb/1.jpg?i10c=img.resize(height:240)', description: 'Description for card 6.', location : 'A1', price : 20 }
  ];

  selectedCard: any = null;

  openModal(card: any) {
    this.selectedCard = card;
  }

}
