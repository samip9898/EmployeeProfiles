import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeDetailsComponent } from './get-employee-details/get-employee-details.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    DeleteEmployeeComponent,
    GetEmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
