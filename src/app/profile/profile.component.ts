import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { RequestService } from '../Services/Request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 accounttype:any;
 overdraft="No"
  resu:any
  PUser:any;
  constructor(private rservice:RequestService,private aservice:ApiService) {
    this.PUser=this.rservice.customer
   }

  ngOnInit(): void {
    this.aservice.loginApi(sessionStorage.getItem('username')).subscribe(
      result=>{
        this.resu=result;
        console.log(result)
        this.rservice.customer_login(this.resu);

      }
    )
    this.overdraft=this.PUser.overdraftflag?"Yes":"No"
    console.log(this.PUser)
    if(this.PUser.customertype=="B")
  {
    this.accounttype="BANK"

  }
  else{
    this.accounttype="INDIVIDUAL"
  }

    
  }
  

}
