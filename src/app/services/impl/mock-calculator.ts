import Calculator, {Results, Variables} from "../calculator";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class MockCalculator implements Calculator {
  calculate(variables: Variables[]): Results {
    return {
      totalExpectedRetirementSavings: 200000,
      totalExpectedRetirementIncomeMonthly: 1000,
      depositedSavingsTable: {
        0:0,
        1: 20000,
        2: 20500,
        3: 21000,
        4: 21500,
        5: 22000,
        6: 22200,
        7: 22300,
        8: 22400,
        9: 22400,
      },
      totalAccumulatedSavingsTable: {
        0: 0,
        1: 20200,
        2: 40800,
        3: 62200,
        4: 85000,
        5: 108000,
        6: 132200,
        7: 155500,
        8: 188900,
        9: 205300,
      },
      totalDepositedSavingsTable: {
        0: 0,
        1: 20000,
        2: 40500,
        3: 61500,
        4: 83000,
        5: 105000,
        6: 127200,
        7: 149500,
        8: 171900,
        9: 194300,
      }
    };
  }
}
