import Calculator, {Results, Variables} from "../calculator";
import {Injectable} from "@angular/core";


class CalculatorRunImpl {
  public results: Results = {
    totalExpectedRetirementSavings: 0,
    totalExpectedRetirementIncomeMonthly: 0,
    yearlyDepositedSavings: [],
    totalAccumulatedSavings: [],
    totalDepositedSavings: [],
  };
  constructor(
    private readonly variables: Variables
  ) {
    this.calculate();
  }

  private calculate(): Results {
    // calculate personA contributions
    for(let i = 0; i < this.variables.retirementInYears; i++){
      this.results.totalDepositedSavings.push();
    }

    return this.results;
  }
}


@Injectable({
  providedIn: 'root'
})
export default class CalculatorImpl implements Calculator {
  calculate(variables: Variables): Results {
    return new CalculatorRunImpl(variables).results;
  }
}
