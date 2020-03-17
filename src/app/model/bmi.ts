export class Bmi {
	public bmi: number;
	constructor(public height: number, public weight: number, public date: Date){
		height /= 0.32808;
		weight *= 0.45359237;
		bmi = height * height / weight;
	}
}
