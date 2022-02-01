import { ThisReceiver } from '@angular/compiler';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { member } from '../people'
import { PeopleService } from '../people.service';

@Component({
  selector: '[memberCard]',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() id: number|undefined = undefined;

  wanted: boolean = false;
  turn: number = 0;

  @HostListener('mouseenter') mouseEnter($evt:any){
    this.wanted = true;
  };

  @HostListener('mouseleave') mouseLeave($evt:any){
    this.wanted = false;
    // this.turn = 0;
  };

  @HostListener('click') onClick($evt: any){
    this.turn = ~this.turn;
  }

  who: member|undefined;

  

  constructor(private people: PeopleService){
    
  }

  ngOnInit(): void {
    this.who = this.people.getByID(this.id);
  }

}
