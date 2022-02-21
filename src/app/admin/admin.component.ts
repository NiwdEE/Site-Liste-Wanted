import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../challenges/challenges.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ["../challenges/challenges.component.scss", './admin.component.scss']
})
export class AdminComponent implements OnInit {

  _showForm: boolean = false;


  constructor(public chals: ChallengesService, private nav: NavService){

    chals.getAllChalls()
  }

  onSubmit(values: any){

    
  }

  showForm(yn: boolean){
    this._showForm = yn;
    this.nav.$blockExtension.next(yn);
  }

  ngOnInit(): void {
  }

}
