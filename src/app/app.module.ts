import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBmiComponent } from './bmi/add-bmi/add-bmi.component';
import { BmiListComponent } from './bmi/bmi-list/bmi-list.component';
import { BmiItemComponent } from './bmi/bmi-item/bmi-item.component';
import { BmiService } from './services/bmi.service';


@NgModule({
  declarations: [
    AppComponent,
    AddBmiComponent,
    BmiListComponent,
    BmiItemComponent
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [BmiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
