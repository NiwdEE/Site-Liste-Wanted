import { Component, Input, OnInit } from '@angular/core';
import { member } from '../people'
import { PeopleService } from '../people.service';

@Component({
  selector: '[memberCard]',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() id: number|undefined = undefined;

  Infos: member|undefined;

  constructor(private people: PeopleService){
    
  }

  ngOnInit(): void {
    this.Infos = this.people.getByID(this.id);
  }

}