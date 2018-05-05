import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbAccordionConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AusbildungComponent } from './ausbildung/ausbildung.component';


@NgModule({
  declarations: [
    AppComponent,
    KontaktComponent,
    AusbildungComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule , NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
