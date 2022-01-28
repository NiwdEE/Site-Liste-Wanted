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

  constructor(private router: Router, public people: PeopleService){
    
    // this.router.events.subscribe((val)=>{
    //   if(val instanceof Scroll){
    //     if(val.anchor == null && val.routerEvent.url=="/"){
    //       document.getElementById("mainPannel")?.scrollIntoView({behavior: 'smooth'})
    //     }
    //   }
    // })
  }

  ngOnInit(): void {
  }

}
