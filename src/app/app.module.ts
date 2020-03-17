import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddBmiComponent } from './bmi/add-bmi/add-bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBmiComponent
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
