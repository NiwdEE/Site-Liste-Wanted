import { ElementRef, Injectable } from '@angular/core';
import { Router, Scroll } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  RScrolls: {[route: string]: number|undefined} = {};

  toScroll: ElementRef|undefined = undefined;

  constructor(private router: Router){
    this.router.events.subscribe((val)=>{
      // console.log(val)
      if(val instanceof Scroll){
        if(val.anchor){
          let Ypos = document.getElementById(val.anchor)?.getBoundingClientRect().top;
          if(Ypos){  
            this.toScroll?.nativeElement.scrollTo({
              top: Ypos - 100, //On prend en compte la place prise par la navBar
              behavior: "smooth"
            });
          } 
        }
      }
    
        // else{
        //   let scroll=this.RScrolls[val.routerEvent.url];
        //   if(this.toScroll){
        //     this.toScroll.nativeElement.scrollTop = 100
        //     console.log('svefz')

        //   }
    })
  }

  scrollRoute(route: string, scrollTo: number|undefined){
    this.RScrolls[route] = scrollTo;
  }

  setScrollable(el: ElementRef|undefined){
    this.toScroll = el;
  }


}
