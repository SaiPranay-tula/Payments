import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class RequestService{
    User:any;
    trasnfertypes:any;
    messagecodes:any

    constructor(private http:HttpClient){
         this.User={
            "customerid": "",
            "accountholdername": "",
            "overdraftflag":0 ,
            "clearbalance": 0,
            "customeraddress": "",
            "customercity": "",
            "customertype": ""
        }

    }
    

    customer_login(obj:any){
        this.User=obj;

        console.log(this.User)
    }

    getTransfertypes(){
        let url="http://localhost:8080/transfertypes";
        this.getApi(url).subscribe((result=>{
            this.trasnfertypes=result
        }));
        return this.trasnfertypes
    }

    getMessageCodes(){
        let url="http://localhost:8080/messages";
        this.getApi(url).subscribe((result=>{
            this.messagecodes=result
        }));
        return this.messagecodes

    }
    postApi(url:string,payload:any){
        return this.http.post(url,payload);
    }
    getApi(url:string){
        return this.http.get(url);
    }
    getbalance(){
        return this.User.clearbalance;
    }
    



}