import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { abs } from '../services/common';

@Directive({
  selector: '[CardPreview]'
})
export class CardPreviewDirective {

  constructor(private el: ElementRef){
    // console.log(el)
  }

  @HostBinding('style.transform') tranformation = '';
  
  @HostBinding('style.transition') transition = '';

  @HostBinding('style.--C') shadowColor = '';

  @HostBinding('style.--Y') Y: number | '' = '';


  @HostListener('mouseenter') onEnter(){
    this.tranformation = 'scale(1.75)';
    this.transition = 'transform .4s all 0s';
  }

  @HostListener('mouseleave') onLeave(){
    this.tranformation = '';
    this.transition = '';
    this.Y = '';
    this.shadowColor = '';
  }

  @HostListener('mousemove', ['$event']) onMove($event: any){
    this.transition = 'all .1s';

    const position = this.el.nativeElement.getBoundingClientRect();

    let mouseX = 2*($event.pageX - position.x - (position.width / 2))/position.width;

    let mouseY: number = 2*($event.pageY - position.y - (position.height / 2))/position.height;

    this.Y = abs(mouseY);
    if(mouseY < 0){
      this.shadowColor = '255, 255, 255';
    }else{
      this.shadowColor = '0, 0, 0';
    }

    this.tranformation =  'scale(1.75) perspective(300px) rotateY(' + mouseX * 15 + 'deg) rotateX('+ mouseY * -15 +'deg)';
  }



}
