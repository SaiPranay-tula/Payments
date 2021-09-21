import { Component, OnInit } from '@angular/core';
import { RequestService } from '../Services/Request.service';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  resu:any
  constructor(private aservice:ApiService,private service: RequestService) { }

  ngOnInit(): void {
    
    this.aservice.loginApi(sessionStorage.getItem('username')).subscribe(
      result=>{
        this.resu=result;
        console.log(result)
        this.service.customer_login(this.resu);

      }
    )
    

  }

}
