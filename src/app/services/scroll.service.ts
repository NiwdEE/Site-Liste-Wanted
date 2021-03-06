import { ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Scroll } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  RScrolls: {[route: string]: number|undefined} = {};

  //Scroll en attente (si la page n'a pas fini de charger)
  pendingScroll: string|undefined = undefined;

  //Permet de savoir si une navigation est en cours
  pendingNavID: number|undefined = undefined;

  readyToScroll: boolean = false;

  previousPath: string|undefined = undefined;

  // showAnim: boolean = false

  constructor(private router: Router){
    this.router.events.subscribe((val)=>{
      // console.log(val)
      if(val instanceof Scroll && val.anchor){
        // console.log(val)
        this.scrollToAnchor(val.anchor)
      }

      if(val instanceof NavigationStart){
        
        if(this.urlToPath(val.url) !== this.previousPath){
          this.unready();
          this.pendingNavID = val.id;
        }

        if(val.url == '/' && this.previousPath == '/'){
          this.scrollToPos(0)
        }
      }

      if(val instanceof NavigationEnd){
        this.previousPath = this.urlToPath(val.url);  
      }

    })
  }

  scrollRoute(route: string, scrollTo: number|undefined){
    this.RScrolls[route] = scrollTo;
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
    // console.log(el)
    if(!el) return;

    // let Ypos = el.getBoundingClientRect().top
    let Ypos = el.offsetTop;
    // console.log(Ypos)
    this.scrollToPos(Ypos)
  }

  scrollToPos(Ypos: number){
    document.querySelectorAll('.innerComp')?.forEach(el => el.scrollTo({
      top: Ypos - 100, //On prend en compte la place prise par la navBar
      behavior: "smooth"
    }));
  }

  checkPendingScroll(){
    if(this.pendingScroll) this.scrollToAnchor(this.pendingScroll, false)
    this.pendingScroll = undefined;
  }


  //Pour éviter de scroller quand ce n'est pas encore possible :)
  ready(){
    setTimeout(()=>{
      this.readyToScroll = true
      this.checkPendingScroll()
    }, 10)
  }

  unready(){
    this.readyToScroll = false;
    // console.log('not ready');
  }

  urlToPath(url: string): string{
    return url.split("#")[0];
  }


}
