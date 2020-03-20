import { Component, OnInit, Input } from '@angular/core';

import { Bmi } from '../../model/bmi';

@Component({
  selector: 'app-bmi-item',
  templateUrl: './bmi-item.component.html',
  styleUrls: ['./bmi-item.component.css']
})
export class BmiItemComponent implements OnInit {
	@Input() public bmi: Bmi;
	
	constructor() { }

	ngOnInit(): void {
	}

}
