import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) {

  }

  generateToken(request: any) {
    return this.http.post("http://localhost:8080/authenticate", request,{ responseType: "text" as "json" })
  }


  welcome(token: any) {
    let tokenStr = "Bearer" + token
    const headers = new HttpHeaders().set("Authroization", tokenStr);
    return this.http.get("http://localhost:8080/", { headers, responseType: "text" as "json" })
  }
}
