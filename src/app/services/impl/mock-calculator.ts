import Calculator, {Results, Variables} from "../calculator";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export default class MockCalculator implements Calculator {
  calculate(variables: Variables): Results {
    return {
      totalExpectedRetirementSavings: 200000,
      totalExpectedRetirementIncomeMonthly: 1000,
      yearlyDepositedSavings: [
        0,
        20000,
        20500,
        21000,
        21500,
        22000,
        22200,
        22300,
        22400,
        22400
      ],

      totalAccumulatedSavings: [
        0,
        20200,
        40800,
        62200,
        85000,
        108000,
        132200,
        155500,
        188900,
        205300,
      ],
      totalDepositedSavings: [
        0,
        20000,
        40500,
        61500,
        83000,
        105000,
        127200,
        149500,
        171900,
        194300,
      ],
    };
  }
}
