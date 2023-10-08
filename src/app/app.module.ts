import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { AppComponent } from './app.component';
import MockCalculator from "./services/impl/mock-calculator";

@NgModule({
  declarations: [
    AppComponent
  ],


  imports: [
    NgChartsModule,
    BrowserModule
  ],
  providers: [
    MockCalculator,
    { provide: NgChartsConfiguration, useValue: { generateColors: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
