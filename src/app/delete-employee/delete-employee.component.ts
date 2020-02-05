import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {
  id : number;

  constructor(private httpClient : HttpClient, private routes : ActivatedRoute, private route : Router) { }

  ngOnInit() {
    this.id=this.routes.snapshot.params['id'];
    this.httpClient.delete(`http://localhost:3000/profiles/${this.id}`).subscribe();
    
  }
  goToDetails(){
    this.route.navigate(['/employee-details']);
  }
}
