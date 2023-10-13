import Calculator, {Results, Variables} from "../calculator";
import {Injectable} from "@angular/core";
import CalculatorRunImpl from "./calculator-run";


@Injectable({
  providedIn: 'root'
})
export default class CalculatorImpl implements Calculator {
  calculate(variables: Variables): Results {
    return new CalculatorRunImpl(variables).results;
  }
}
