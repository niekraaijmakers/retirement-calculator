import {Component, ViewChild, ChangeDetectorRef, ElementRef} from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import Annotation from 'chartjs-plugin-annotation';

import MockCalculator from "./services/impl/mock-calculator";
import Calculator, {Results, Variables} from "./services/calculator";
import PersistedVariablesImpl from "./services/impl/persistedvars";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'retirementCalc';
  public lineChartType: ChartType = 'line';
  private results: Results;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [],
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public variables= new PersistedVariablesImpl();


  constructor(private calculator: MockCalculator) {

    this.results = this.performCalculation();
    Chart.register(Annotation);

    this.lineChartData = this.calcLineChartData();
  }


  private calcLineChartData(): ChartConfiguration['data'] {

    return {
      datasets: [
        {
          data: this.results.yearlyDepositedSavings,
          label: 'Yearly Deposited Savings',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
        {
          data: this.results.totalAccumulatedSavings,
          label: 'Accumulated Savings',
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          fill: 'origin',
        },
        {
          data: this.results.totalDepositedSavings,
          label: 'Total Deposited Savings',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
      ],
      labels: [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033],
    }
  }

  public get lineChartOptions(): ChartConfiguration['options'] {
    const inflation = this.variables.inflationRate;
    const widthDrawalRate = this.variables.withdrawalRate;
    return {
      elements: {
        line: {
          tension: 0.5,
        },
      },
      scales: {
        // We use this empty structure as a placeholder for dynamic theming.
        y: {
          position: 'left',
        },
      },


      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';

              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'CHF' }).format(context.parsed.y);

                //todo: correct for inflation
                label += 'inflation ' + inflation;
                label += ' --- Monthly : ' + Math.floor(context.parsed.y * widthDrawalRate / 12);
              }

              return label;
            }
          }
        },
        legend: { display: true },
        annotation: {
          annotations: [
            // {
            //   type: 'line',
            //   scaleID: 'x',
            //   value: 7,
            //   borderColor: 'orange',
            //   borderWidth: 2,
            //   label: {
            //     display: true,
            //     position: 'center',
            //     color: 'orange',
            //     content: 'LineAnno',
            //     font: {
            //       weight: 'bold',
            //     },
            //   },
            // },
          ],
        },
      }
    }
  }




  public chartClicked({
                        event,
                        active,
                      }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
                        event,
                        active,
                      }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    // console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(0);
    this.chart?.hideDataset(0, !isHidden);
  }


  performCalculation(): Results {
    return this.calculator.calculate(this.variables)
  }

  get totalExpectedRetirementSavings(): number {
    return this.performCalculation().totalExpectedRetirementSavings;
  }

  adjustInflation() {
    console.log(this.variables.inflationRate);
  }

  testSomething(event: Event) {
    console.log(this.variables.inflationRate);
  }
}
