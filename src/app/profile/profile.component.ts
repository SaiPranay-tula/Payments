import { Component, OnInit } from '@angular/core';
import { RequestService } from '../Services/Request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 accounttype:any;
  PUser:any;
  constructor(private rservice:RequestService) { }

  ngOnInit(): void {
    this.PUser=this.rservice.customer
    if(this.PUser.customertype=="B")
  {
    this.accounttype="BANK"

  }
  else{
    this.accounttype="INDIVIDUAL"
  }

    
  }
  

}
