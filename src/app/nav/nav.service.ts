import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  $parentScroll = new BehaviorSubject<number>(0);

  showBar: boolean = true;
  

  constructor(){

  }

  setParentScroll(y: number){
    this.$parentScroll.next(y);
  }

  onScroll(event:any){
    this.$parentScroll.next(event.target.scrollTop);
  }

}
