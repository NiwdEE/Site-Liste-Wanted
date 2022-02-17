import { Component, OnInit } from '@angular/core';
import { sponsor, sponsors } from './sponsors';
import { trigger, style, animate, transition, animateChild, query, group, state } from '@angular/animations';



@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
  animations: [
    trigger('FadeIO', [

      state('false, void', style({
        display: 'none'
      })),

      state('true', style({
        display: 'flex'
      })),

      transition('false => true', [

        style({ opacity: 0, display: 'flex'}),

        query('.descContainer', 
          style({
            transform: 'scale(0)'
          })
        ),

        animate('.2s ease-in-out', style({opacity: 1})),
        
        query('.descContainer',
          animate('.42s ease-in-out',
            style({
              transform: 'scale(1)'
            })
          )
        ),

      ]),

      transition('true => false', [
        style({ opacity: 1 }),
        animate('.2s ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class SponsorsComponent implements OnInit {

  rowSize: number = Math.floor(sponsors.length/3);

  middleOS: number = (sponsors.length+1)%3 - 1;

  showDesc: number|undefined = undefined;

  rowedSponsors: sponsor[][]|undefined; 

  sponsors = sponsors

  constructor(){

    let i = 0
    for(let s of sponsors){
      s.id = i++;
    }

    this.rowedSponsors = this.getRows(sponsors)

  }


  getRows(sponsors: sponsor[]): sponsor[][]{

    const rowSize = Math.floor((sponsors.length+1)/3)
    const middleOS = (sponsors.length+1)%3 - 1;

    let ret: sponsor[][] = [
      sponsors.slice(0, rowSize),
      sponsors.slice(rowSize, 2*rowSize + middleOS),
      sponsors.slice(2*rowSize + middleOS, sponsors.length),
    ]
  
    // console.log(ret)

    return ret
  }

  show(wich: number|undefined, evt: any){
    // console.log(evt)
    this.showDesc = wich;
  }


  ngOnInit(): void {

  }

}
