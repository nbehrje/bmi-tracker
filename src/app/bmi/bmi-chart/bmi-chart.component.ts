import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BmiService } from '../../services/bmi.service';


@Component({
  selector: 'app-bmi-chart',
  templateUrl: './bmi-chart.component.html',
  styleUrls: ['./bmi-chart.component.css']
})
export class BmiChartComponent implements OnInit {

	constructor(private bmiService: BmiService) { }

	public chartOptions = {
		showLines: true
	};
	
	public chartLabels = ['S','M','T','W','T','F','S'];
	
	public chartData: ChartDataSets[] = [{data:[0,0,0,0,0,0,0], label: 'BMI'}];
	
	public chartType = "line";
	
	ngOnInit(): void {
		this.chartData = [{
			data: this.bmiService.getBmis().map(bmi => bmi.calcBmi()),
			label: 'BMI',
			lineTension: 0,
			fill: false
		}];
	}

}
