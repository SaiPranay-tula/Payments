
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { RequestService } from '../Services/Request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  CustomerUser:any;
  Result:any;


  constructor(private service:RequestService,private router: Router) { 
    this.loginForm= new FormGroup({
      username: new FormControl('',[Validators.required]),
        // Validators.pattern(/^[a-zA-Z0-9]+$/)]),
      password: new FormControl('', [Validators.required])
    })
    this.CustomerUser={
      "username":"",
      "userPassword":""
    }
   
  }
  onSubmit(){
    this.CustomerUser={
      "username":this.loginForm.controls['username'].value,
      "userPassword":this.loginForm.controls['password'].value
    }
  
   let url = "http://localhost:8080/users/login"
   let  payload=this.CustomerUser
  
   this.service.postApi(url,payload).subscribe((result=>{
     if(result!=null){
     this.service.customer_login(result);
     this.router.navigate(['/dashboard'])
     
     }
     console.log("loggedin")
   }),error=>{
     console.log(error)
   })  


    
  }
  get password(){
    return this.loginForm.controls['password']
  }
  get username(){
    return this.loginForm.controls['username']
  }

  ngOnInit(): void {
  }

}
