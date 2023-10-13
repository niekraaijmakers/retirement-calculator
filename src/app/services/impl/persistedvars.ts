import {Person, PersonVector, Variables} from "../calculator";

const DEFAULT_VARIABLES: Variables = {
  peakProductivityAge: 45,
  withdrawalRate: 0.04,
  annualInterest: 6,
  currentSavings: 100000,
  inflationRate: 4,
  retirementInYears: 30,
  retirementHomeHousePurchase: 300000,
  persons: {
    personA: {
      currentAge: 30,
      lifeExpectancy: 90,
      monthlySavings: 1000,
      increaseProductivityFactor: 1.01,
      decreaseProductivityFactor: 0.5,
    },
    personB: {
      currentAge: 30,
      lifeExpectancy: 90,
      monthlySavings: 1000,
      increaseProductivityFactor: 1.01,
      decreaseProductivityFactor: 0.5,
    }
  }
}

const VARIABLE_PREFIX = 'retirementCalculator-';

const getOrDef = (varName: string, def: number): number => {
  const val: string | null = localStorage.getItem(VARIABLE_PREFIX + varName);
  if(val){
    return parseFloat(val);
  }else{
    return def;
  }
}

const store = (varName: string, val: number): void => {
  localStorage.setItem(VARIABLE_PREFIX + varName, val.toString());
}

class PersonVariablesImpl implements Person{
  private _currentAge: number;
  private _decreaseProductivityFactor: number;
  private _increaseProductivityFactor: number;
  private _lifeExpectancy: number;
  private _monthlySavings: number;
  private _key: string;

  constructor(private key:string) {
    this._key = key;
    this._currentAge = getOrDef(key + '-currentAge', DEFAULT_VARIABLES.persons.personA.currentAge);
    this._decreaseProductivityFactor = getOrDef(key + '-decreaseProductivityFactor', DEFAULT_VARIABLES.persons.personA.decreaseProductivityFactor);
    this._increaseProductivityFactor = getOrDef(key + '-increaseProductivityFactor', DEFAULT_VARIABLES.persons.personA.increaseProductivityFactor);
    this._lifeExpectancy = getOrDef(key + '-lifeExpectancy', DEFAULT_VARIABLES.persons.personA.lifeExpectancy);
    this._monthlySavings = getOrDef(key + '-monthlySavings', DEFAULT_VARIABLES.persons.personA.monthlySavings);
  }

  get currentAge(): number {
    return this._currentAge;
  }

  set currentAge(value: number) {
    store(this._key + '-currentAge', value);
    this._currentAge = value;
  }

  get decreaseProductivityFactor(): number {
    return this._decreaseProductivityFactor;
  }

  set decreaseProductivityFactor(value: number) {
    store(this._key + '-decreaseProductivityFactor', value);
    this._decreaseProductivityFactor = value;
  }

  get increaseProductivityFactor(): number {
    return this._increaseProductivityFactor;
  }

  set increaseProductivityFactor(value: number) {
    store(this._key + '-increaseProductivityFactor', value);
    this._increaseProductivityFactor = value;
  }

  get lifeExpectancy(): number {
    return this._lifeExpectancy;
  }

  set lifeExpectancy(value: number) {
    store(this._key + '-lifeExpectancy', value);
    this._lifeExpectancy = value;
  }

  get monthlySavings(): number {
    return this._monthlySavings;
  }

  set monthlySavings(value: number) {
    store(this._key + '-monthlySavings', value);
    this._monthlySavings = value;
  }
}

export default class PersistedVariablesImpl implements Variables{
  private _annualInterest: number;
  private _persons: PersonVector;
  private _currentSavings: number;
  private _inflationRate: number;
  private _retirementHomeHousePurchase: number;
  private _retirementInYears: number;
  private _withdrawalRate: number;
  private _peakProductivityAge: number;

  constructor(){
    this._annualInterest = getOrDef('annualInterest', DEFAULT_VARIABLES.annualInterest);
    this._currentSavings = getOrDef('currentSavings', DEFAULT_VARIABLES.currentSavings);
    this._inflationRate = getOrDef('inflationRate', DEFAULT_VARIABLES.inflationRate);
    this._retirementHomeHousePurchase = getOrDef('retirementHomeHousePurchase', DEFAULT_VARIABLES.retirementHomeHousePurchase);
    this._retirementInYears = getOrDef('retirementInYears', DEFAULT_VARIABLES.retirementInYears);
    this._withdrawalRate = getOrDef('withdrawalRate', DEFAULT_VARIABLES.withdrawalRate);
    this._peakProductivityAge = getOrDef('peakProductivityAge', DEFAULT_VARIABLES.peakProductivityAge);
    this._persons = {
      personA: new PersonVariablesImpl("personA"),
      personB: new PersonVariablesImpl("personB"),
    }
  }

  get annualInterest(): number {
    return this._annualInterest;
  }

  set annualInterest(value: number) {
    store('annualInterest', value)
    this._annualInterest = value;
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

  get persons(): PersonVector {
    return this._persons;
  }


  get peakProductivityAge(): number {
    return this._peakProductivityAge;
  }

  set peakProductivityAge(value: number) {
    store('peakProductivityAge', value);
    this._peakProductivityAge = value;
  }
}
