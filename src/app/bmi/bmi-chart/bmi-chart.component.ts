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
	
	public chartLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	
	public chartData: ChartDataSets[] = [{data:[0,0,0,0,0,0,0], label: 'BMI'}];
	
	public chartType = "line";
	
	ngOnInit(): void {
		let today = new Date();
		let start = new Date(today);
		start.setDate(today.getDate() - 6);

		let bmis = this.bmiService.getBmis()
		let last = bmis.slice(Math.max(bmis.length - 6, 0));
		var idx;
		for(idx = 0; idx < last.length; idx++){
			if(last[idx].date.valueOf() >= start.valueOf()) break;
		}
		last = last.slice(idx);
		let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		this.chartLabels = days.concat(days).slice(start.getDay(), start.getDay()+7);
		this.chartData = [{
			data: last.map(function(bmi){
				var xy = {x: days[bmi.date.getDay()], y: bmi.calcBmi()}
				return xy;
			}),
			label: 'BMI',
			lineTension: 0,
			fill: false
		}];
		
		
	}

}
