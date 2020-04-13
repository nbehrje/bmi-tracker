export class Bmi {
	constructor(public height: number, public weight: number, public date: Date){
	}
	
	calcBmi() : number {
		let m = this.height / 3.2808;
		let kg = this.weight * 0.45359237;
		return kg / (m*m);
	}
	
	getDate() : Date {
		return this.date;
	}
}
