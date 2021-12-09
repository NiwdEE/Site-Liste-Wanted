import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

import { slideInAnimation } from './animations';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'cd';

  constructor(){

  }

  //Fonction pour Faire marcher et animer le router-outlet
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['index'];
  }
}
