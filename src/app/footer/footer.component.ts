import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { trigger, style, animate, transition, animateChild, query, group } from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('FadeIO', [

      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease-in-out', style({opacity: 1}))
      ]),

      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  showPopup = false;

  constructor(private clipboard: ClipboardService){

  }


  copyAddress(){
    this.showPopup = true;

    this.clipboard.copy('contact@liste-wanted.fr')

    setTimeout(() => {
      this.showPopup = false;
    }, 1500);
  }

  ngOnInit(): void {
  }

}
