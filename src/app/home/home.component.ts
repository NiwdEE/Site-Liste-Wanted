import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(public people: PeopleService){

  }

  ngOnInit(): void {
  }

}
