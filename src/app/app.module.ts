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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { ImgLoadingDirective } from './loading/img-loading.directive';
import { TrailerComponent } from './trailer/trailer.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ChallengesComponent } from './challenges/challenges.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';


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
      TrailerComponent,
      SponsorsComponent,
      ChallengesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxHmCarouselModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
