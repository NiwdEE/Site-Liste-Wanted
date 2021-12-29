import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {


  A = new Array(100);

  constructor(private router: Router, public people: PeopleService){
    // console.log(people.Poles)
    for(let i =0; i < 100; i++) this.A[i] = i;

    this.router.events.subscribe((val)=>{
      if(val instanceof Scroll){
        if(val.anchor == null && val.routerEvent.url=="/"){
          document.getElementById("mainPannel")?.scrollIntoView({behavior: 'smooth'})
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
