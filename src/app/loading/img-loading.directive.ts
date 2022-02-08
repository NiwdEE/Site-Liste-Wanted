import { Directive, ElementRef, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LoadingService } from './loading.service';

@Directive({
  selector: 'img'
})
export class ImgLoadingDirective {
  
  
  constructor(private el: ElementRef, private loading: LoadingService) {
    this.loading.loadIMG(el.nativeElement);
  }

  @HostListener('load')
  @HostListener('error')
  onError() {
    this.loading.stopLoadIMG(this.el.nativeElement);
  }

}
