import { Injectable } from '@angular/core';
import { Bmi } from '../model/bmi';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
	private bmis: Bmi[];
	constructor() {
		this.bmis = [
			new Bmi(6, 150, new Date("2020-01-01")),
			new Bmi(6, 155, new Date("2020-02-01")),
			new Bmi(6, 145, new Date("2020-03-01"))
		];
	}
	
	getBmis() : Bmi[] {
		return this.bmis;
	}
	
	addBmi(bmi: Bmi) {
		let found = this.bmis.find(each => each.date.getTime() === bmi.date.getTime());
		if (found) {
		  return false;
		}
		this.bmis.push(bmi);
		return true;
	}
}
