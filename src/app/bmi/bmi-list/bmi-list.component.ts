import { Component, OnInit } from '@angular/core';
import { Bmi } from '../../model/bmi';
import { BmiService } from '../../services/bmi.service';
import { Subject } from 'rxjs/Rx';
@Component({
  selector: 'app-bmi-list',
  templateUrl: './bmi-list.component.html',
  styleUrls: ['./bmi-list.component.css']
})
export class BmiListComponent implements OnInit {
	public bmis: Bmi[];

	constructor(private bmiService: BmiService) { }

	ngOnInit(): void {
		let subject = new Subject();
		subject.subscribe(next => {
			console.log(next);
		});
		this.bmiService.getBmis().subscribe(bmis => {
			this.bmis = bmis;
		});
	}
}
