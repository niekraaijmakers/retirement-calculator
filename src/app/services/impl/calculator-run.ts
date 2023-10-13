import {Results, Variables} from "../calculator";

export default class CalculatorRunImpl {
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
