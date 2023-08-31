import { Component } from '@angular/core';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss']
})
export class MerchandiseComponent {

  cards = [
    { title: 'Card title 1', imageUrl: '../../../../assets/images/t-shirt.png', price : 70000, description : 'Merch Description' },
    { title: 'Card title 2', imageUrl: '../../.././../assets/images/tumbler.png', price : 70000, description : 'Merch Description' },
    { title: 'Card title 3', imageUrl: '../../../../assets/images/t-shirt.png', price : 70000, description : 'Merch Description' },
  ];

  selectedCard: any = null;

  openModal(card: any) {
    this.selectedCard = card;
  }

}
