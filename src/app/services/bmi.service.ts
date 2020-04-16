import { Injectable } from '@angular/core';
import { Bmi } from '../model/bmi';
import { Observable } from 'rxjs/Observable';
import { of as ObservableOf } from 'rxjs/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
	private bmis = new BehaviorSubject<Bmi[]>([]);
	private goal = new BehaviorSubject<Number>(-1);
	
	constructor() {
		this.bmis = new BehaviorSubject<Bmi[]>([
			new Bmi(6, 150, new Date("2020-03-01")),
			new Bmi(6, 150, new Date("2020-03-29")),
			new Bmi(6, 155, new Date("2020-04-04")),
			new Bmi(6, 145, new Date("2020-04-10")),
			new Bmi(6, 155, new Date("2020-04-12")),
		]);
	}
	
	getBmis() : Observable<Bmi[]> {
		return this.bmis;
	}
	
	addBmi(bmi: Bmi) {
		let bmiList = this.bmis.getValue();
		for(let i = 0; i < bmiList.length; i++){
			if(bmiList[i].date.valueOf() == bmi.date.valueOf()){
				bmiList[i] = bmi;
				return false;
			}
		}
		bmiList.push(bmi);
		bmiList.sort(function(a,b){
			return a.date.valueOf() - b.date.valueOf();
		});
		this.bmis.next(bmiList);
		return true;
	}
	
	setGoal(goal: Number) {
		this.goal.next(goal);
	}
	
	getGoal() : Observable<Number> {
		return this.goal;
	}
}
