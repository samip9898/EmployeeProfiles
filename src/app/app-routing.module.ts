import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GetEmployeeDetailsComponent } from './get-employee-details/get-employee-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  {path: "", component : EmployeeDetailsComponent},
  {path:'delete-employee/:id',component:DeleteEmployeeComponent},
  {path:'get-employee-details', component:GetEmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
