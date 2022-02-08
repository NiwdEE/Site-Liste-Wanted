import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { trigger, style, animate, transition, animateChild, query, group } from '@angular/animations';

@Component({
  selector: '[app-loading]',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('FadeOut', [
      transition(':leave', [
          style({ opacity: 1 }),
          animate('0.2s ease-in-out', style({opacity: 0}))
        ]
      )
    ])
  ]
})
export class LoadingComponent implements OnInit {



  constructor(public loader: LoadingService){

  }

  ngOnInit(): void {
  }

}
