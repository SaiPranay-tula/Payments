import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { HeaderComponent } from "../header/header.component";
import { CustomerModel } from "../models/customer.model";


@Injectable()
export class RequestService{
    login:any
    customer:CustomerModel;
    User:any;
    trasnfertypes:any;
    messagecodes:any

    constructor(private http:HttpClient){
        this.customer= new CustomerModel();
         this.User={
            "customerid": "3434353",
            "accountholdername": "Amm",
            "overdraftflag":0 ,
            "clearbalance": 1110,
            "customeraddress": "HYD",
            "customercity": "DSD",
            "customertype": "I"
        }

    }
    

    customer_login(obj:any){
        console.log(this.customer)
        this.User=obj;
        this.customer=obj;
        console.log(this.customer)
        this.login=true
       // this.header.changeStatus(this.login)

    }

   


   
    getApi(url:string){
        return this.http.get(url);
    }
    
    



}