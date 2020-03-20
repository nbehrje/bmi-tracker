import { Component, OnInit } from '@angular/core';
import { Bmi } from '../../model/bmi';
import { BmiService } from '../../services/bmi.service';
@Component({
  selector: 'app-bmi-list',
  templateUrl: './bmi-list.component.html',
  styleUrls: ['./bmi-list.component.css']
})
export class BmiListComponent implements OnInit {
	public bmis: Bmi[];
	constructor(private bmiService: BmiService) { }

	ngOnInit(): void {
		this.bmis = this.bmiService.getBmis();
	}
}
