import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AddBmiComponent } from './bmi/add-bmi/add-bmi.component';
import { BmiListComponent } from './bmi/bmi-list/bmi-list.component';
import { BmiItemComponent } from './bmi/bmi-item/bmi-item.component';
import { BmiService } from './services/bmi.service';
import { BmiChartComponent } from './bmi/bmi-chart/bmi-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBmiComponent,
    BmiListComponent,
    BmiItemComponent,
	BmiChartComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ChartsModule,
	NgbModule
  ],
  providers: [BmiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
