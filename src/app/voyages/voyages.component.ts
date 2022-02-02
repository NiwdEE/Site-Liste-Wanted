import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {

  hidden: boolean;

  constructor(){
    this.hidden = true;
  }

  ngOnInit(): void {
    this.hidden = false;
  }


}
