import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bmi',
  templateUrl: './add-bmi.component.html',
  styleUrls: ['./add-bmi.component.css']
})
export class AddBmiComponent {
	public bmiForm: FormGroup = new FormGroup({
		height: new FormControl(0, Validators.required),
		weight: new FormControl(0, Validators.required),
		date: new FormControl(new Date().setHours(0,0,0,0), Validators.required)
	});
	
	constructor() { }

	onSubmit() {
	  console.log('Height:', this.bmiForm.value);
	}
}
