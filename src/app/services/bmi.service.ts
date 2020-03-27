import { Injectable } from '@angular/core';
import { Bmi } from '../model/bmi';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
	private bmis: Bmi[];
	constructor() {
		this.bmis = [
			new Bmi(6, 150, new Date("2020-03-19")),
			new Bmi(6, 155, new Date("2020-03-24")),
			new Bmi(6, 145, new Date("2020-03-25"))
		];
	}
	
	getBmis() : Bmi[] {
		return this.bmis;
	}
	
	addBmi(bmi: Bmi) {
		let found = this.bmis.find(each => each.date.valueOf() === bmi.date.valueOf());
		if (found) {
		  return false;
		}
		this.bmis.push(bmi);
		this.bmis.sort(function(a,b){
			return a.date.valueOf() - b.date.valueOf();
		});
		return true;
	}
}
