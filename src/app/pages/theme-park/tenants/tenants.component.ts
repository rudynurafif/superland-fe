import { Component } from '@angular/core';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent {

  cards = [
    { title: 'Card title 1', imageUrl: 'https://media.timeout.com/images/105650614/image.jpg', description: 'Description for card 1.', location : 'A1' },
    { title: 'Card title 2', imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/220221141953-burger-king-drive-thru-ca-0215.jpg?q=h_1319,w_2000,x_0,y_0', description: 'Description for card 2.', location : 'A1' },
    { title: 'Card title 3', imageUrl: 'https://cdn.winsightmedia.com/platform/files/public/2020-10/background/1_Dominos-Store_Pensacola-FL_2_1602269082.png?VersionId=JGVe5kX2uHrWJputxqCobX3FwiS7oJ9L', description: 'Description for card 3.', location : 'A1' },
    { title: 'Card title 4', imageUrl: 'https://media.timeout.com/images/105650614/image.jpg', description: 'Description for card 4.', location : 'A1' },
    { title: 'Card title 5', imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/220221141953-burger-king-drive-thru-ca-0215.jpg?q=h_1319,w_2000,x_0,y_0', description: 'Description for card 5.', location : 'A1' },
    { title: 'Card title 6', imageUrl: 'https://cdn.winsightmedia.com/platform/files/public/2020-10/background/1_Dominos-Store_Pensacola-FL_2_1602269082.png?VersionId=JGVe5kX2uHrWJputxqCobX3FwiS7oJ9L', description: 'Description for card 6.', location : 'A1' }
  ];

  selectedCard: any = null;

  searchTerm: string = '';
  filteredCards: any[] = [];

  constructor() {
    this.filteredCards = this.cards;
  }

  openModal(card: any) {
    this.selectedCard = card;
  }

  clearSearch() {
    this.searchTerm = ''; 
    this.onSearchTermChange(); 
  }

  onSearchTermChange() {
    if (this.searchTerm.trim() === '') {
      this.filteredCards = this.cards; 
    } else {
      this.filteredCards = this.cards.filter(card =>
        card.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

}
