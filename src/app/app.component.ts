import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, Scroll } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { slideInAnimation } from './animations';
import { NavService } from './nav/nav.service';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'cd';

  constructor(public nav: NavService, private router: Router){
    

    this.router.events.subscribe((val)=>{
      // console.log(val)
      if(val instanceof Scroll && val.anchor){
        document.getElementById(val.anchor)?.scrollIntoView({behavior: 'smooth'});
      }
    })
  }

  //Fonction pour Faire marcher et animer le router-outlet
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['index'];
  }
}
