import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BmiService } from '../../services/bmi.service';
import { Bmi } from '../../model/bmi';

@Component({
  selector: 'app-bmi-chart',
  templateUrl: './bmi-chart.component.html',
  styleUrls: ['./bmi-chart.component.css']
})
export class BmiChartComponent implements OnInit {
	public bmis: Bmi[];
	constructor(private bmiService: BmiService) { }

	public chartOptions = {
		showLines: true
	};
	
	public chartLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	
	public chartData: ChartDataSets[] = [{data:[0,0,0,0,0,0,0], label: 'BMI'}];
	
	public chartType = "line";
	
	ngOnInit(): void {
		this.bmiService.getBmis().subscribe(bmis => {
			this.bmis = bmis;
			let today = new Date();
			today.setHours(0,0,0,0);
			let start = new Date(today);
			start.setDate(today.getDate() - 6);
			
			let last = this.bmis.slice(Math.max(this.bmis.length - 6, 0));
			var idxStart;
			for(idxStart = 0; idxStart < last.length; idxStart++){
				if(last[idxStart].date.valueOf() >= start.valueOf()) break;
			}
			last = last.slice(idxStart);
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
		});
	}
	
	changeToWeek(): void {
		let today = new Date();
		today.setHours(0,0,0,0);
		let start = new Date(today);
		start.setDate(today.getDate() - 6);
		
		let last = this.bmis.slice(Math.max(this.bmis.length - 6, 0));
		var idxStart;
		for(idxStart = 0; idxStart < last.length; idxStart++){
			if(last[idxStart].date.valueOf() >= start.valueOf()) break;
		}
		last = last.slice(idxStart);
		let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		this.chartLabels = days.concat(days).slice(start.getDay(), today.getDay());
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
	
	changeToMonth(): void {
		let today = new Date();
		today.setHours(0,0,0,0);
		let start = new Date(today);
		start.setDate(today.getDate() - 29);
		
		let last = this.bmis.slice(Math.max(this.bmis.length - 29, 0));
		var idxStart;
		for(idxStart = 0; idxStart < last.length; idxStart++){
			if(last[idxStart].date.valueOf() >= start.valueOf()) break;
		}
		last = last.slice(idxStart);
		
		let days = [];
		for(var d = new Date(start); d <= today; d.setDate(d.getDate()+1)){
			days.push(d.getDate());
		}
		this.chartLabels = days;
		this.chartData = [{
			data: last.map(function(bmi){
				var xy = {x: bmi.date.getDate(), y: bmi.calcBmi()}
				return xy;
			}),
			label: 'BMI',
			lineTension: 0,
			fill: false
		}];
		console.log(this.chartData.data);
	}
	
	changeToYear(): void {
		let today = new Date();
		today.setHours(0,0,0,0);
		let start = new Date(today);
		start.setFullYear(today.getFullYear() - 1);
		start.setMonth(start.getMonth()+1);
		start.setDate(1);
		
		let last = this.bmis.slice(Math.max(this.bmis.length - 365, 0));
		var idxStart;
		for(idxStart = 0; idxStart < last.length; idxStart++){
			if(last[idxStart].date.valueOf() >= start.valueOf()) break;
		}
		last = last.slice(idxStart);
		
		let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
		this.chartLabels = months.concat(months).slice(start.getMonth(), start.getMonth()+12);
		let monthData = new Map();
		let monthCount = new Map();
		last.forEach((bmi) => {
			let mo = months[bmi.getDate().getMonth()];
			if(!monthData.has(mo)){
				monthData.set(mo,0);
				monthCount.set(mo,0);
			}
			monthData.set(mo, monthData.get(mo) + bmi.calcBmi());
			monthCount.set(mo, monthCount.get(mo) + 1);
		})
		
		monthData.forEach((total, month) => {
			monthData.set(month, total / monthCount.get(month));
		});
		this.chartData = [{
			data: Array.from(monthData.keys()).map(function(month) {
				var xy = {x: month, y: monthData.get(month)};
				return xy;
			}),
			label: 'BMI',
			lineTension: 0,
			fill: false
		}];
	}
}
