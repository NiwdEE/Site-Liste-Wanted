import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, Scroll, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, forkJoin } from 'rxjs';

import { slideInAnimation } from './animations';
import { ImgLoadingDirective } from './loading/img-loading.directive';
import { LoadingService } from './loading/loading.service';
import { NavService } from './nav/nav.service';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: '#app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit {
  
  @ViewChild('scrollable') scrollable: ElementRef|undefined=undefined;
  // @ViewChildren(ImgLoadingDirective) images: QueryList<ImgLoadingDirective>|undefined = undefined;


  @HostListener('mousemove', ['$event'])
  onMouseMove($event: any){
    // console.log($event)
    this.nav.extend = $event.clientY < 250
  } 

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    this.nav.showBar = $event.target.innerWidth > 1000;
    this.nav.extend = false;
  }

  constructor(public nav: NavService, public scroll: ScrollService, private activatedRoute: ActivatedRoute, private loading: LoadingService){
    console.error('%cAttention !\n⚠️  ⚠️  ⚠️\nGarder le devtool ouvert risque de nuire gravement aux performances du site !\n⚠️  ⚠️  ⚠️', 'color: #ff2121');
  }

  //Fonction pour Faire marcher et animer le router-outlet
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['index'];
  }

  ngAfterViewInit(): void {
    this.scroll.setScrollable(this.scrollable);
    this.scroll.ready();

    // if(this.images != null){

    //   setInterval(()=>{
    //     console.log(this.images)
    //   }, 500)

    //   forkJoin(this.images.map(imgDir => imgDir.loaded)).subscribe(() => {
    //     console.log('all images have been loaded');
    //     this.loading.stop();
    //   });
    // }
  }


  ngOnInit(): void {
    
 }
}
