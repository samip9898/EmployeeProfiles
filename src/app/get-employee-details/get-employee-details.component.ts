import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-employee-details',
  templateUrl: './get-employee-details.component.html',
  styleUrls: ['./get-employee-details.component.scss']
})
export class GetEmployeeDetailsComponent implements OnInit {
  
  EmployeeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    city: new FormControl('', Validators.required),
    Department: new FormControl('', Validators.required),
    gender: new FormControl('male')
  })
  constructor(private httpClient: HttpClient, private routes: ActivatedRoute, private route: Router) { }
/**
 * for validating EmployeeForm
 */
  get fun() {
    return this.EmployeeForm.controls;
  }
 
  ngOnInit() {
  }

  /**
   * Adding an employee
   */
  postEmployee() {
    var activeButton = document.activeElement.id;
    
    if (activeButton == "POST") {
      let data = {
        name: this.EmployeeForm.get('name').value,
        email: this.EmployeeForm.get('email').value,
        mobile: this.EmployeeForm.get('mobile').value,
        city: this.EmployeeForm.get('city').value,
        Department: this.EmployeeForm.get('Department').value,
        gender: this.EmployeeForm.get('gender').value,
      }
      this.httpClient.post('http://localhost:3000/profiles', data).subscribe();

    }
    alert('Employee is Added!');
  }
}
