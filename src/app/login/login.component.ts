
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
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
    this.CustomerUser = {
      "username": "",
      "userPassword": ""
    }
  }
  onSubmit() {
    this.CustomerUser = {
      "username": this.loginForm.controls['username'].value,
      "userPassword": this.loginForm.controls['password'].value
    }

    // let url = "http://localhost:8080/users/login"
    let payload = this.CustomerUser

    this.apiService.loginApi(payload).subscribe((result => {
      if (result != null) {
        this.login = false;
        this.service.customer_login(result);
        this.router.navigate(['/dashboard'])
      }
      else {
        this.login = true
      }
    }), error => {
      this.login = true
      console.log(error)
    })
    this.loginForm.reset();
  }

  get password() {
    return this.loginForm.controls['password']
  }
  get username() {
    return this.loginForm.controls['username']
  }
}
