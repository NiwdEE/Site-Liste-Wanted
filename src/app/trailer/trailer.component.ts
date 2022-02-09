import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav/nav.service';
import { trigger, style, animate, transition, animateChild, query, group, state } from '@angular/animations';


@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss'],
  animations: [
    trigger('FadeIO', [

      state('false, void', style({
        display: 'none'
      })),

      state('true', style({
        display: 'flex'
      })),

      transition('false => true', [

        style({ opacity: 0, display: 'flex'}),

        query('.vidContainer', 
          style({
            transform: 'scale(0)'
          })
        ),

        animate('.2s ease-in-out', style({opacity: 1})),
        
        query('.vidContainer',
          animate('.42s ease-in-out',
            style({
              transform: 'scale(1)'
            })
          )
        ),

      ]),

      transition('true => false', [
        style({ opacity: 1 }),
        animate('.2s ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class TrailerComponent implements OnDestroy{

  @ViewChild('video') video: ElementRef<HTMLIFrameElement>|undefined = undefined;

  showVideo: boolean = false;

  @HostListener('document:keydown.esc')
  onEscape(){
    this.showVideo = false
  }


  constructor(private nav: NavService){

  }


  pauseVideo(){
    if(!this.video) return

    console.log(this.video.nativeElement.contentWindow)

    this.video.nativeElement.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  } 

  show(yn: boolean){
    this.showVideo = yn;
    this.nav.$blockExtension.next(yn);
    
    if(!yn) this.pauseVideo();
  }


  ngOnDestroy(): void {
    this.nav.$blockExtension.next(false)
  }

}
