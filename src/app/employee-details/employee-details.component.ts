import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';

import { from } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  profiles: any = [];
  id : number;

  constructor(private httpclient: HttpClient, private routes : ActivatedRoute, private route : Router  ) { }

  ngOnInit() {
    this.httpclient.get('http://localhost:3000/profiles').subscribe(data => {
      console.log(data);
      this.profiles = data;
    })
  }

  deleteEmployee(){
    this.id=this.routes.snapshot.params['id'];
    this.httpclient.delete(`http://localhost:3000/profiles/${this.id}`).subscribe();
  }

}
