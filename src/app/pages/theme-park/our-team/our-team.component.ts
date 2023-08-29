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
}
