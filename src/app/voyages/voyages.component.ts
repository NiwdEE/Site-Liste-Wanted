import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {

  currentIndex = 0;
  speed = 5000;
  infinite = true;
  direction = 'right';
  directionToggle = true;
  autoplay = true;
  avatars = '1234567891234'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`,
    };
  });

  constructor() {}

  click(i: any) {
    alert(`${i}`);
  }

  ngOnInit(): void {
    
  }


}
