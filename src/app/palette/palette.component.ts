import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  pals = ['j', 'o', 'r', 'v', 'g'];
  nums = Array(9);

  constructor(){
    
  }

  ngOnInit(): void {
  }

}
