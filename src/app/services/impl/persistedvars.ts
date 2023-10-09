import {Variables} from "../calculator";

const DEFAULT_VARIABLES: Variables = {
  withdrawalRate: 0.04,
  annualInterest: 6,
  currentAgePersonA: 30,
  currentSavings: 100000,
  inflationRate: 4,
  lifeExpectancy: 90,
  monthlySavings: 10000,
  retirementInYears: 30,
  retirementHomeHousePurchase: 300000,
}

const VARIABLE_PREFIX = 'retirementCalculator-';

const getOrDef = (varName: string, def: number): number => {
  const val: string | null = localStorage.getItem(VARIABLE_PREFIX + varName);
  if(val){
    return parseInt(val, 10);
  }else{
    return def;
  }
}

const store = (varName: string, val: number): void => {
  localStorage.setItem(VARIABLE_PREFIX + varName, val.toString());
}

export default class PersistedVariablesImpl implements Variables{
  private _annualInterest: number;
  private _currentAgePersonA: number;
  private _currentSavings: number;
  private _inflationRate: number;
  private _lifeExpectancy: number;
  private _monthlySavings: number;
  private _retirementHomeHousePurchase: number;
  private _retirementInYears: number;
  private _withdrawalRate: number;

  constructor(){
    this._annualInterest = getOrDef('annualInterest', DEFAULT_VARIABLES.annualInterest);
    this._currentAgePersonA = getOrDef('currentAgePersonA', DEFAULT_VARIABLES.currentAgePersonA);
    this._currentSavings = getOrDef('currentSavings', DEFAULT_VARIABLES.currentSavings);
    this._inflationRate = getOrDef('inflationRate', DEFAULT_VARIABLES.inflationRate);
    this._lifeExpectancy = getOrDef('lifeExpectancy', DEFAULT_VARIABLES.lifeExpectancy);
    this._monthlySavings = getOrDef('monthlySavings', DEFAULT_VARIABLES.monthlySavings);
    this._retirementHomeHousePurchase = getOrDef('retirementHomeHousePurchase', DEFAULT_VARIABLES.retirementHomeHousePurchase);
    this._retirementInYears = getOrDef('retirementInYears', DEFAULT_VARIABLES.retirementInYears);
    this._withdrawalRate = getOrDef('withdrawalRate', DEFAULT_VARIABLES.withdrawalRate);
  }


  get annualInterest(): number {
    return this._annualInterest;
  }

  set annualInterest(value: number) {
    store('annualInterest', value)
    this._annualInterest = value;
  }

  get currentAgePersonA(): number {
    return this._currentAgePersonA;
  }

  set currentAgePersonA(value: number) {
    store('currentAgePersonA', value);
    this._currentAgePersonA = value;
  }

  get currentSavings(): number {
    return this._currentSavings;
  }

  set currentSavings(value: number) {
    store('currentSavings', value);
    this._currentSavings = value;
  }

  get inflationRate(): number {
    return this._inflationRate;
  }

  set inflationRate(value: number) {
    store('inflationRate', value);
    this._inflationRate = value;
  }

  get lifeExpectancy(): number {
    return this._lifeExpectancy;
  }

  set lifeExpectancy(value: number) {
    store('lifeExpectancy', value);
    this._lifeExpectancy = value;
  }

  get monthlySavings(): number {
    return this._monthlySavings;
  }

  set monthlySavings(value: number) {
    store('monthlySavings', value);
    this._monthlySavings = value;
  }

  get retirementHomeHousePurchase(): number {
    return this._retirementHomeHousePurchase;
  }

  set retirementHomeHousePurchase(value: number) {
    store('retirementHomeHousePurchase', value);
    this._retirementHomeHousePurchase = value;
  }

  get retirementInYears(): number {
    return this._retirementInYears;
  }

  set retirementInYears(value: number) {
    store('retirementInYears', value);
    this._retirementInYears = value;
  }

  get withdrawalRate(): number {
    return this._withdrawalRate;
  }

  set withdrawalRate(value: number) {
    store('withdrawalRate', value);
    this._withdrawalRate = value;
  }
}
