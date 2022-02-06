import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  showPopup = false;
  opa = false

  constructor(private clipboard: ClipboardService){

  }


  copyAddress(){
    this.showPopup = true;

    this.clipboard.copy('listewanted@gmail.com')

    setTimeout(() => {
      this.opa = true;
    }, 50);

    setTimeout(() => {
      this.opa = false;
      setTimeout(() => {
        this.showPopup = false;
      }, 500);
    }, 1500);
  }

  ngOnInit(): void {
  }

}
