import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService{
    constructor(private http:HttpClient)
    {

    }

    
    loginApi(payload:any){

        let url = "http://localhost:8080/users/login"
        return this.http.post(url,payload);

    }

    getTransactionsApi(customerid:any){
        let url="http://localhost:8080/transaction/"+customerid
        return this.http.get(url)
    }

    getTransfertypesApi(){
        let url="http://localhost:8080/transfertypes";
        return this.http.get(url);
    }
    getMessagecodesApi(){

        let url="http://localhost:8080/messages";
        return this.http.get(url);
    
    }
    getBankname(bic:string){
        let url="http://localhost:8080/bank/+bic"
        return this.http.get(url);
    }


}
