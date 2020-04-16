import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BmiService } from '../../services/bmi.service';
import { Bmi } from '../../model/bmi';

@Component({
  selector: 'app-add-bmi',
  templateUrl: './add-bmi.component.html',
  styleUrls: ['./add-bmi.component.css']
})
export class AddBmiComponent {
	public bmi: Bmi;
	public goal: Number;
	
	constructor(private bmiService: BmiService) {
		this.bmi = new Bmi(0, 0, new Date());
	}

	onSubmit(bmiForm) {
		this.bmi.date = new Date(this.bmi.date);
		this.bmiService.addBmi(this.bmi);
		this.bmi = new Bmi(0, 0, new Date());
	}
	
	setGoal(goalForm) {
		this.bmiService.setGoal(this.goal);
	}
}
