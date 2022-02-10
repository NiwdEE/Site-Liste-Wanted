import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //Nombre binaire:
  //Est-ce que le chargement est bloqué ?
  //      |  Est-ce que qqc charge ?
  //      |   |
  //      V   V
  //  0b 1/0 1/0
  $loading = new BehaviorSubject<number>(0b11);

  loading: boolean = true;


  private $imagesLoading = new Subject<number>();
  private images: Map<HTMLElement, boolean> = new Map();
  private imagesLoading = 0;


  loadIMG(img: HTMLElement) {
    if (!this.images.has(img) || this.images.get(img)) {
      this.images.set(img, false);
      this.imagesLoading++;
      this.$imagesLoading.next(this.imagesLoading);
    }
  }

  stopLoadIMG(img: HTMLElement) {
    if (this.images.has(img) && !this.images.get(img)) {
      this.images.set(img, true);
      this.imagesLoading--;
      this.$imagesLoading.next(this.imagesLoading);
    }
  }

  endedLoading(){
    this.$loading.next(this.$loading.getValue() & 0b10)
  }

  unblock(){
    this.$loading.next(this.$loading.getValue() & 0b01)
  }

  constructor(){
    this.$imagesLoading.subscribe((val)=>{
      if(val === 0){
        this.endedLoading()
      }
    })

    this.$loading.subscribe((val)=>{
      // console.log(val)
      this.loading = (val !== 0)
    })

    setTimeout(()=>{
      this.unblock()
    }, 1000)
  }

  refreshLoader(loadingState: number){
    
  }


  stop(){
    this.$loading.next(0)
  }


}
