import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
employeeId : number;
employee;
EmployeeForms = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  email: new FormControl('', Validators.required),
  mobile: new FormControl('', [Validators.required, Validators.maxLength(10)]),
  city: new FormControl('', Validators.required),
  Department: new FormControl('', Validators.required),

})
  constructor(private httpClient:HttpClient, private routes:ActivatedRoute, private route:Router) { }

  get fun() {
    return this.EmployeeForms.controls;
  }
  ngOnInit() {
    this.employeeId=this.routes.snapshot.params['id'];
    
    this.httpClient.get(`http://localhost:3000/profiles/${this.employeeId}`).subscribe(data=>{
      console.log(data);
      debugger
      this.employee=data;
      console.log(this.employee);
      this.EmployeeForms.setValue(
        {
          name:this.employee.name,
          email:this.employee.email,
          mobile:this.employee.mobile,
          city:this.employee.city,
          Department:this.employee.Department
        }
      )
    })
  }

  updateEmployee()
  {
    var activeButton = document.activeElement.id;
    if(activeButton == "PUT")
    {
      this.employee.name=this.EmployeeForms.get('name').value;
      this.employee.email=this.EmployeeForms.get('email').value;
      this.employee.mobile=this.EmployeeForms.get('mobile').value;
      this.employee.city=this.EmployeeForms.get('city').value;
      this.employee.Department=this.EmployeeForms.get('Department').value;
      console.log(this.EmployeeForms.get)
      this.httpClient.put(`http://localhost:3000/profiles/${this.employeeId}`,this.employee).subscribe();
      alert('Employee is Updated!');
    }
  }
}
