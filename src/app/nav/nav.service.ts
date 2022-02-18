import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  $parentScroll = new BehaviorSubject<number>(0);

  $blockExtension = new BehaviorSubject<boolean>(false);

  extend: boolean = true;

  showBar: boolean = window.innerWidth > 1000;

  showMenu: boolean = false;

  ea: number = 0;

  winSize: number = window.innerWidth;

  eai(){
    this.ea++;
  }
  

  constructor(){

    this.$blockExtension.subscribe((val) => {
      if(val){
        this.extend = false;
      }
    })

  }

  setParentScroll(y: number){
    this.$parentScroll.next(y);
  }

  onScroll(event:any){
    this.$parentScroll.next(event.target.scrollTop);
  }


  toggleMenu(){
    this.showMenu = !(this.showMenu)
  }
}
