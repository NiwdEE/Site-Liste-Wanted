import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav/nav.service';
import { ChallengesService } from './challenges.service';
import { trigger, style, animate, transition, animateChild, query, group, state } from '@angular/animations';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  animations: [
    trigger('FadeIO', [

      // state('false, void', style({
      //   display: 'none'
      // })),

      // state('true', style({
      //   display: 'flex'
      // })),

      transition(':enter', [

        style({ opacity: 0, display: 'flex'}),

        query('.container', 
          style({
            transform: 'scale(0)'
          })
        ),

        animate('.2s ease-in-out', style({opacity: 1})),
        
        query('.container',
          animate('.42s ease-in-out',
            style({
              transform: 'scale(1)'
            })
          )
        ),

      ]),

      transition(':leave', [
        style({ opacity: 1 }),
        animate('.2s ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ChallengesComponent implements OnInit {

  @ViewChild('video') video: ElementRef<HTMLIFrameElement>|undefined = undefined;

  _showVideo: boolean = false;
  _showForm: boolean = false;

  @HostListener('document:keydown.esc')
  onEscape(){
    this._showVideo = false
  }

  videoCode: string|null = null;

  safeUrl: SafeUrl|null = null;


  pauseVideo(){
    if(!this.video) return

    console.log(this.video.nativeElement.contentWindow)

    this.video.nativeElement.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  } 

  showVideo(which: string|null){
    let show = which !== null
    this._showVideo = show
    this.nav.$blockExtension.next(show);
    
    if(which !== null){
      // this.videoCode = this.chals.tests[which].link
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ which +'?enablejsapi=1&version=3&playerapiid=ytplayer');
    }

    // if(which) this.pauseVideo();
  }

  showForm(yn: boolean){
    this._showForm = yn;
    this.nav.$blockExtension.next(yn);
  }

  constructor(public chals: ChallengesService, private nav: NavService, private sanitizer: DomSanitizer){

  }

  onSubmit(values: any){

    if(values.par.length > 30 || values.par.length == 0 || values.defi.length > 100 || values.defi.length <10 ) return;

    this.chals.subChall(values.defi, values.par)
  }

  ngOnInit(): void {
  }

}
