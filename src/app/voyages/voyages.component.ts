import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {

  @ContentChild('travelContent', {read: TemplateRef}) travelContent: TemplateRef<any>|null = null;

  index = 0;

  LIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim<br/>sit amet, adipiscing..."

  Travels = [
    {
      // name: "Week-end d'intégration",
      name: "WEI",
      img: 'wei',
      desc: "blablabla, alcool, bizus, beaucoup de fun",
      color: "#a81fed"
    },
    {
      name: 'Voyage au Ski',
      img: 'ski',
      desc: this.LIpsum,
      color: "#84dee8"
    },
    {
      name: "Voyage à l'étranger",
      img: 'etr',
      desc: "cyka bylet",
      color: "#ebaa1e"
    }
  ]

  avatars = '123'.split('').map((x, i) => {
    const num = i;
    // const num = Math.floor(Math.random() * 1000);
    return {
      url: `https://picsum.photos/600/400/?${num}`,
      title: `${num}`
    };
  });

  constructor() {}

  push() {
    this.avatars.push({
      url: `https://picsum.photos/600/400/?${this.avatars.length + 1}`,
      title: `${this.avatars.length + 1}`
    });
  }

  remove() {
    this.avatars.splice(this.avatars.length - 1, 1);
  }

  indexChanged(index: any) {
    console.log(index);
  }

  // toggleDirection($event: any) {
  //   this.direction = this.directionToggle ? 'right' : 'left';
  // }

  ngOnInit(): void {
    
  }


}
