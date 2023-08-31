import { Component } from '@angular/core';
import * as AOS from "aos";

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {
  ngOnInit(){
    AOS.init();
  }

  backgroundImageFauzan: string = "url('assets/images/our-team/ojan2.png')";
  backgroundImageRudy: string = "url('assets/images/our-team/rudy.png')";
  backgroundImageCilo: string = "url('assets/images/our-team/cilo.png')";

  changeBackground(imageUrl: string, card: string) {
    switch (card) {
      case 'fauzan':
        this.backgroundImageFauzan = `url('${imageUrl}')`;
        break;
      case 'rudy':
        this.backgroundImageRudy = `url('${imageUrl}')`;
        break;
      case 'cilo':
        this.backgroundImageCilo = `url('${imageUrl}')`;
        break;
      default:
        break;
    }
    document.documentElement.style.setProperty('--hover-image', imageUrl);
  }

  resetBackground(card: string) {
    switch (card) {
      case 'fauzan':
        this.backgroundImageFauzan = "url('assets/images/our-team/ojan2.png')";
        break;
      case 'rudy':
        this.backgroundImageRudy = "url('assets/images/our-team/rudy.png')";
        break;
      case 'cilo':
        this.backgroundImageCilo = "url('assets/images/our-team/cilo.png')";
        break;
      default:
        break;
    }
    document.documentElement.style.setProperty('--hover-image', 'none');
  }
}

