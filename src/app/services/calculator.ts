export interface Variables {
  currentAge: number;
  retirementAge: number;
  lifeExpectancy: number;
  currentSavings: number;
  monthlySavings: number;
  annualInterest: number;
  inflationRate: number;
}

export interface Results {
  totalExpectedRetirementSavings: number;
  totalExpectedRetirementIncomeMonthly: number;

  yearlyDepositedSavings:    number[];
  totalAccumulatedSavings:   number[];
  totalDepositedSavings:     number[];
}

export default interface Calculator {
  calculate(variables: Variables[]): Results;
}
