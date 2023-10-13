import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import CalculatorImpl from "./services/impl/calculator";
@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    NgChartsModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    CalculatorImpl,
    { provide: NgChartsConfiguration, useValue: { generateColors: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
