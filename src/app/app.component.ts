import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, Scroll } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { slideInAnimation } from './animations';
import { NavService } from './nav/nav.service';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  
  @ViewChild('scrollable') scrollable: ElementRef|undefined=undefined;

  constructor(public nav: NavService, public scroll: ScrollService){
    
  }

  //Fonction pour Faire marcher et animer le router-outlet
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['index'];
  }

  ngAfterViewInit(): void {
    this.scroll.setScrollable(this.scrollable);
  }
}
