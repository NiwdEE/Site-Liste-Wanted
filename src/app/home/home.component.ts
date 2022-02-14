import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router, Scroll } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ImgLoadingDirective } from '../loading/img-loading.directive';
import { LoadingService } from '../loading/loading.service';
import { PeopleService } from './people.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  animRunning = true;

  constructor(public people: PeopleService, private loading: LoadingService){


    setTimeout( () => {
      this.animRunning = false;
    }, 5000);
  }

  ngOnInit(): void {
  }
  

}
