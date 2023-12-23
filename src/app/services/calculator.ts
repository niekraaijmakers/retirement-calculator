export interface Person {
  currentAge: number;
  lifeExpectancy: number;
  monthlySavings: number;
  increaseProductivityFactor: number;
  decreaseProductivityFactor: number;
}

export interface PersonVector {
  personA: Person;
  personB: Person;
}
export interface Variables {
  peakProductivityAge: number;
  withdrawalRate: number;
  retirementInYears: number;
  retirementHomeHousePurchase: number;
  currentSavings: number;
  annualInterest: number;
  inflationRate: number;
  monthlyDependantCosts: number;
  monthlyDependantIncreaseFactor: number;
  expectedDependantYearsToLive: number;
  persons: PersonVector
}


export interface Results {
  totalExpectedRetirementSavings: number;
  totalExpectedRetirementIncomeMonthly: number;

  yearlyDepositedSavings:    number[];
  totalAccumulatedSavings:   number[];
  totalDepositedSavings:     number[];
  maximumYValue: number;
}

export default interface Calculator {
  calculate(variables: Variables): Results;
}
