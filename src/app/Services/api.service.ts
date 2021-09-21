import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators"
import { JwtClientService } from "./jwt-client.service";

@Injectable()
export class ApiService {

    token:any
    header:any
    apisDir:any
    
    constructor(private http: HttpClient, private jservice: JwtClientService) {

        this.apisDir={

            authenticate:"http://localhost:8080/authenticate",
            customerdetails:"http://localhost:8080/user/",


        };

    }

    // tokenGen(payload: any) {

    //     console.log(payload)
    //     this.jservice.generateToken(payload).subscribe((result => {
    //         //this.token = result
    //         console.log(result)
    //         console.log("result")
    //     }),
    //         error => {
    //             console.log('error')
    //         });
    //       }
  
    authenticate(user:any) {
        return this.http.post<any>('http://localhost:8080/authenticate',user,{ responseType: "text" as "json" }).pipe(
         tap(
           userData => {
            sessionStorage.setItem('username',user.username);
            let tokenStr= 'Bearer '+userData;
            this.token=tokenStr
            console.log(tokenStr)
            sessionStorage.setItem('token', tokenStr);
            return userData;
           }
         )

        );
      }

    loginApi(username:any) {
        let full=sessionStorage.getItem('token')+""
        
        
        const headers=new HttpHeaders().set("Authorization",full);
    
        let url = "http://localhost:8080/user/" + username
        
       // console.log(headers)
        return this.http.get(url, {headers});

    }


    getTransactionsApi(customerid: any) {
        let full=sessionStorage.getItem('token')+""
        
        const headers=new HttpHeaders().set("Authorization",full);
        let url = "http://localhost:8080/transaction/" + customerid
        return this.http.get(url,{headers })
    }

    getTransfertypesApi() {
        let full=sessionStorage.getItem('token')+""
        
        const headers=new HttpHeaders().set("Authorization",full);
        let url = "http://localhost:8080/transfertypes";
        return this.http.get(url,{headers});
    }
    getMessagecodesApi() {let full=sessionStorage.getItem('token')+""
        
    const headers=new HttpHeaders().set("Authorization",full);
        let url = "http://localhost:8080/messages";
        return this.http.get(url,{headers});

    }
    getBankname(bic: string) {
        let full=sessionStorage.getItem('token')+""
        
    const headers=new HttpHeaders().set("Authorization",full);
        let url = "http://localhost:8080/bank/" + bic
        return this.http.get(url,{headers});
    }

    getvalidRaccname(name: string) {
        let full=sessionStorage.getItem('token')+""
        
    const headers=new HttpHeaders().set("Authorization",full);

        let url = "http://localhost:8080/transaction/receiver/" + name
        return this.http.get(url,{headers})
    }

    inserttransaction(payload: any) {
        let full=sessionStorage.getItem('token')+""
        
        const headers=new HttpHeaders().set("Authorization",full);
        let url = "http://localhost:8080/success/insert"
        return this.http.post(url, payload,{headers})
    }


}
