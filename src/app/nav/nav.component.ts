import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NavService } from './nav.service';

@Component({
  selector: '[appNav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  parentScroll: number = 0;


  Navs = [
    {
      name: "Accueil",
      path: '',
      goto: "home"
    },
    {
      name: "Membres",
      path: '',
      goto: "members"
    },
    {
      name: "Trailer",
      path: "test"
    },
    {
      name: "Défis",
      path: "test"
    },
    {
      name: "Voyages",
      path: "test"
    },
    {
      name: "Sponsors",
      path: "test"
    }
  ]

  hoverNav: number[] = Array(this.Navs.length).fill(0);


	constructor(public nav: NavService, private router: Router){

    nav.$parentScroll.subscribe(val=>{
      this.parentScroll = val;
    })
  }

  navigate(path: string, goto: string|undefined){
    this.router.navigate([path], {fragment: goto})
  }

  hover(navID: number){
    this.hoverNav[navID] = 2;
    setTimeout(()=>{
      this.hoverNav[navID]--;
    }, 900)
  }

  unhover(navID: number){
    this.hoverNav[navID]--;
  }

	ngOnInit(): void {
	
	}

}
