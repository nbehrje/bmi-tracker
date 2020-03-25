import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-chart',
  templateUrl: './bmi-chart.component.html',
  styleUrls: ['./bmi-chart.component.css']
})
export class BmiChartComponent implements OnInit {

	constructor() { }

	public chartOptions = {
		showLines: true
	};
	
	public chartLabels = ['S','M','T','W','T','F','S'];
	
	public chartData: ChartDataSets[] = [{data:[0,0,0,0,0,0,0], label: 'BMI'}];
	
	public chartType = "line";
	
	ngOnInit(): void {
	}

}
