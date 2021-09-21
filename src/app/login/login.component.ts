
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { RequestService } from '../Services/Request.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: any
  loginForm: FormGroup;
  CustomerUser: any;
  Result: any;

  constructor(private service: RequestService, private router: Router,
              private apiService: ApiService)
    {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.minLength(7),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9\s]+$/i)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
    
  }
  onSubmit() {
    this.CustomerUser = {
      "username": this.loginForm.controls['username'].value,
      "userPassword": this.loginForm.controls['password'].value
    }

    // let url = "http://localhost:8080/users/login"
    let payload = this.CustomerUser

    // this.apiService.loginApi(payload).subscribe((result => {
    //   if (result != null) {
    //     this.login = false;
    //     this.service.customer_login(result);
    //     this.router.navigate(['/dashboard'])
    //   }
    //   else {
    //     this.login = true
    //   }
    // }), error => {
    //   this.login = true
    //   console.log(error)
    //   console.log("error")
    // })
    // this.loginForm.reset();

    let result=this.apiService.authenticate(payload).subscribe((result=>{
     // console.log(result)
     // console.log(sessionStorage.getItem('token'))
      this.router.navigate(['/dashboard'])
    }),
        error=>{
          this.login=true
          console.log(error)
        }
    )
    this.loginForm.reset();
   // console.log(result)

    // this.apiService.loginApi(payload.username).subscribe((result=>{
    //   if(result!=null)
    //   {
    //     this.service.customer_login(result)
    //     console.log(result)
    //   }
    // }),err=>{
    //   console.log("error in login ")
    //   console.log(err);
      
    // })
     }

  get password() {
    return this.loginForm.controls['password']
  }
  get username() {
    return this.loginForm.controls['username']
  }
}
