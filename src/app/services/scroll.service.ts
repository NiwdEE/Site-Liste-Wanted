import { ElementRef, Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  RScrolls: {[route: string]: number|undefined} = {};

  //Référence de l'élement à scroller
  toScroll: ElementRef|undefined = undefined;

  //Scroll en attente (si la page n'a pas fini de charger)
  pendingScroll: string|undefined = undefined;

  readyToScroll: boolean = false;

  constructor(private router: Router){
    this.router.events.subscribe((val)=>{
      if(val instanceof Scroll && val.anchor){
        // console.log(val)
        this.scrollToAnchor(val.anchor)
      }
    })
  }

  scrollRoute(route: string, scrollTo: number|undefined){
    this.RScrolls[route] = scrollTo;
  }

  setScrollable(el: ElementRef|undefined){
    this.toScroll = el;
  }

  /**
   * @param anchor Ancre <=> ID de l'élement vers lequel se rendre
   * @param pend Est-ce qu'il faut mettre le scroll en attente s'il n'aboutit pas ?
   */
  scrollToAnchor(anchor: string, pend: boolean = true){
    
    if(pend && !this.readyToScroll){
      this.pendingScroll = anchor;
      return;
    }
    
    let el = document.getElementById(anchor);

    if(!el) return;

    // let Ypos = el.getBoundingClientRect().top
    let Ypos = el.offsetTop;
    this.scrollToPos(Ypos)
  }

  scrollToPos(Ypos: number){
    this.toScroll?.nativeElement.scrollTo({
      top: Ypos - 100, //On prend en compte la place prise par la navBar
      behavior: "smooth"
    });
  }

  checkPendingScroll(){
    if(this.pendingScroll) this.scrollToAnchor(this.pendingScroll, false)
    this.pendingScroll = undefined;
  }

  ready(){
    setTimeout(()=>{
      this.readyToScroll = true
      this.checkPendingScroll()
    }, 10)
  }

}
