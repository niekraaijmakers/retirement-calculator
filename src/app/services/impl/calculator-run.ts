import {Results, Variables} from "../calculator";

class YearResult {
  public yearlyDepositedSavings: number;

  constructor(
    year: number,
    previouslyDepositedSavings?: number,
    yearlyDepositedSavings: number = 0,

  ) {
    this.yearlyDepositedSavings = yearlyDepositedSavings;

  }
}

export default class CalculatorRunImpl {
  public results: Results = {
    totalExpectedRetirementSavings: 0,
    totalExpectedRetirementIncomeMonthly: 0,
    yearlyDepositedSavings: [],
    totalAccumulatedSavings: [],
    totalDepositedSavings: [],
    maximumYValue: 2000000
  };
  constructor(
    private readonly variables: Variables
  ) {
    this.calculate();
  }

  private calculate(): Results {
    // calculate personA contributions
    const yearlyDeposit = this.variables.persons.personA.monthlySavings * 12;
    for(let i = 0; i < this.variables.retirementInYears; i++){


      this.results.totalDepositedSavings.push((this.results.totalDepositedSavings[i-1] || 0 )  + yearlyDeposit);

      if(this.results.totalAccumulatedSavings[i-1]){
        this.results.totalAccumulatedSavings.push(Math.round( this.getInterestRateFactor() * (this.results.totalAccumulatedSavings[i-1] + yearlyDeposit) ));
        this.results.yearlyDepositedSavings.push(yearlyDeposit)
      }else{
        this.results.totalAccumulatedSavings.push(yearlyDeposit);
        this.results.yearlyDepositedSavings.push(yearlyDeposit);
      }
    }

    this.results.maximumYValue = Math.max(...this.results.totalAccumulatedSavings);

    return this.results;
  }

  private getInterestRateFactor(): number {
    return 1 + ( (this.variables.annualInterest - this.variables.inflationRate ) / 100 );
  }
}
