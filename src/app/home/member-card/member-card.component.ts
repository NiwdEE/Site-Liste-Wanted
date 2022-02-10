import { ThisReceiver } from '@angular/compiler';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NavService } from 'src/app/nav/nav.service';
import { member } from '../people'
import { PeopleService } from '../people.service';

@Component({
  selector: '[memberCard]',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
})
export class MemberCardComponent implements OnInit {

  @Input() id: number|undefined = undefined;

  wanted: boolean = false;
  turn: number = 0;

  @HostListener('mouseenter') onMouseEnter(){
    this.wanted = true;
  };

  @HostListener('mouseleave') onMouseLeave(){
    this.wanted = false;
    this.turn = 0;
  };

  @HostListener('click') onClick(){
    this.turn = (this.turn+1)%2;
  }

  who: member|undefined;

  

  constructor(public people: PeopleService, public nav: NavService){
    
  }

  ngOnInit(): void {
    this.who = this.people.getByID(this.id);
  }

}
