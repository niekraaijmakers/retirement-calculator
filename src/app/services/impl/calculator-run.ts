import {Person, Results, Variables} from "../calculator";

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

  private yearlyPersonDepositedSavings :{personA: number[], personB:number[]} = {
    personA: [],
    personB: []
  };


  constructor(
    private readonly variables: Variables
  ) {
    this.calculate();
  }

  private calculate(): Results {
    // calculate personA contributions

    for(let i = 0; i < this.variables.retirementInYears; i++){

      let yearlyDepositPersonA = this.yearlyPersonDepositedSavings.personA[i-1] || this.variables.persons.personA.monthlySavings * 12;
      yearlyDepositPersonA *= this.getYearlyProductivityFactor(this.variables.persons.personA, i);

      let yearlyDepositPersonB = this.yearlyPersonDepositedSavings.personB[i-1] || this.variables.persons.personB.monthlySavings * 12;
      yearlyDepositPersonB *= this.getYearlyProductivityFactor(this.variables.persons.personB, i);

      const yearlyDeposit = Math.round(yearlyDepositPersonA + yearlyDepositPersonB - this.calculateYearlyDependantCosts(i));

      this.results.totalDepositedSavings.push((this.results.totalDepositedSavings[i-1] || 0 )  + yearlyDeposit);

      if(this.results.totalAccumulatedSavings[i-1]){
        this.results.totalAccumulatedSavings.push(Math.round( this.getInterestRateFactor() * (this.results.totalAccumulatedSavings[i-1] + yearlyDeposit) ));
        this.results.yearlyDepositedSavings.push(yearlyDeposit)
      }else{
        this.results.totalAccumulatedSavings.push(this.variables.currentSavings + yearlyDeposit);
        this.results.yearlyDepositedSavings.push(yearlyDeposit);
      }
    }

    this.results.maximumYValue = Math.max(...this.results.totalAccumulatedSavings);

    return this.results;
  }

  private calculateYearlyDependantCosts(year: number): number {
      const expectToBeAlive = year < this.variables.expectedDependantYearsToLive;

      if(expectToBeAlive) {
        const factor = Math.pow(1 + (this.variables.inflationRate / 100), year);
        const secondaryFactor = Math.pow(1 + (this.variables.monthlyDependantIncreaseFactor / 100), year);
        return this.variables.monthlyDependantCosts * 12 * factor * secondaryFactor;
      }else{
        return 0;
      }
  }

  private getInterestRateFactor(): number {
    return ( 1 + (this.variables.annualInterest - this.variables.inflationRate ) / 100 );
  }

  private getYearlyProductivityFactor(person:Person, year: number) {
    const age = person.currentAge + year;
    if(age < this.variables.peakProductivityAge){
      return 1 + (this.variables.persons.personA.increaseProductivityFactor / 100);
    }else{
      return 1 - (this.variables.persons.personA.decreaseProductivityFactor / 100);
    }
  }
}
