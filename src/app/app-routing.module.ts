import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { PaletteComponent } from './palette/palette.component';
import { TestcardComponent } from './testcard/testcard.component';
import { VoyagesComponent } from './voyages/voyages.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {index: "1"}
  },
  {
    path: 'test',
    component: HomeComponent,
    data: {index: "2"}
  },
  {
    path: 'voyages',
    component: VoyagesComponent,
    data: {index: "3"}
  },
  {
    path: 'palette',
    component: PaletteComponent
  },
  {
    path: 'tc',
    component: TestcardComponent
  },
  {
    path: '**',
    component: FourOhFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: false, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppRoutingModule { }
