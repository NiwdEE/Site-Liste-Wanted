import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NavComponent } from './nav/nav.component';
import { PaletteComponent } from './palette/palette.component';
import { MemberCardComponent } from './home/member-card/member-card.component';


import { CardPreviewDirective } from './misc/card-preview.directive';
import { FooterComponent } from './footer/footer.component';
import { VoyagesComponent } from './voyages/voyages.component';

import 'hammerjs';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { ClipboardModule } from 'ngx-clipboard';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { ImgLoadingDirective } from './loading/img-loading.directive';
import { TrailerComponent } from './trailer/trailer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FourOhFourComponent,
    NavComponent,
    PaletteComponent,
    MemberCardComponent,

    //Directives
    CardPreviewDirective,
      FooterComponent,
      VoyagesComponent,
      LoadingComponent,
      ImgLoadingDirective,
      TrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxHmCarouselModule,
    ClipboardModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
