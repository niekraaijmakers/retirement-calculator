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

  depositedSavingsTable:          { [key: number] : number };
  totalAccumulatedSavingsTable:   { [key: number] : number };
  totalDepositedSavingsTable:     { [key: number] : number };
}

export default interface Calculator {
  calculate(variables: Variables[]): Results;
}
