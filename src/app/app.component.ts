import { Component } from '@angular/core';
import MockCalculator from "./services/impl/mock-calculator";
import Calculator from "./services/calculator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retirementCalc';

  calculator: Calculator;
  constructor(calculator: MockCalculator) {
    this.calculator = calculator;
    this.performCalculation();
  }

  performCalculation() {
    console.log(this.calculator.calculate([]));
  }
}
