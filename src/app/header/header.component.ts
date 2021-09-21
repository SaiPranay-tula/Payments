import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from '../Services/Request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  
  status=this.rservice.login
  tabs:any

  constructor(public rservice:RequestService) { 
    this.tabs= [
    {
      text: "Home",
      link: "dashboard"
    },
    {
      text: "Profile",
      link: "profile"

    },
    {
      text: "Transfer",
      link: "transfer"

    },
    {
      text: "Transactions",
      link: "transaction"

    }
  ]
}
Logout(){
  this.rservice.login=false
  this.rservice.logout()
}


}
