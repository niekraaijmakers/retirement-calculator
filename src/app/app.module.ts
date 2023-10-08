import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import MockCalculator from "./services/impl/mock-calculator";

@NgModule({
  declarations: [
    AppComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MockCalculator],
  bootstrap: [AppComponent]
})
export class AppModule { }
