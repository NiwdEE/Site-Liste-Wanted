import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavService } from './nav.service';

@Component({
  selector: '[appNav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  Navs = [
    {
      name: "Accueil",
      path: '',
      // goto: "home"
    },
    {
      name: "Membres",
      path: '',
      goto: "membres"
    },
    {
      name: "Trailer",
      path: 'trailer',
    },
    {
      name: "Défis",
      path: "defis"
    },
    {
      name: "Voyages",
      path: "voyages"
    },
    {
      name: "Sponsors",
      path: "sponsors"
    }
  ]

  hoverNav: number[] = Array(this.Navs.length).fill(0);

  currentNav: number|undefined = undefined;


	constructor(public nav: NavService, private router: Router, private route: ActivatedRoute){

    let $done = new Subject<null>()

    this.router.events
    .pipe(takeUntil($done))
    .subscribe((v)=>{
      if(v instanceof NavigationStart){
        this.Navs.forEach((n, i) => {
          // console.log(v.url.split('/')[1], n.path + (n.goto ? '#' + n.goto : ''))
          if(v.url.split('/')[1] == n.path + (n.goto ? '#' + n.goto : '')){
            this.currentNav = i;
          }
        })
        
        $done.next(null)
      }
    
    })
  }

  navigate(path: string, goto: string|undefined, index?: number){
    this.currentNav = index;
    this.router.navigate([path], {fragment: goto});
  }

  hover(navID: number){
    this.hoverNav[navID] = 2;
    setTimeout(()=>{
      this.hoverNav[navID]--;
    }, 450)
  }

  unhover(navID: number){
    this.hoverNav[navID]--;
  }

	ngOnInit(): void {
    // console.log(this.router.url.split('/'))
    
	}

}
