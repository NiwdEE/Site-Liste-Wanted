import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {

  @ContentChild('travelContent', {read: TemplateRef}) travelContent: TemplateRef<any>|null = null;

  index = 0;

  Travels = [
    {
      // name: "Week-end d'intégration",
      name: "WEI",
      img: 'wei',
      desc: "Activités, alcool, fun et bonne ambiance. Bref, un WEI d'anthologie vous attend.",
      color: "#a81fed"
    },
    {
      name: 'Ski',
      img: 'ski',
      desc: "Viens tester ta descente dans les Alpes, entre la France et la Suisse.",
      color: "#84dee8"
    },
    {
      name: "Étranger",
      img: 'etr',
      desc: "Optez pour un voyage en Europe de l'est avec des paysages (et prix d'alcool) à couper le souffle !",
      color: "#ebaa1e"
    }
  ]


  constructor(public nav: NavService){
    
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
