import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { RequestService } from '../Services/Request.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  resu:any
  customerid:string
  transtypes: any;
  CustomerUser:any;
  outputstring:any;
  transactions:any;
  transactiontable:any;
 
  constructor(private apiService:ApiService,private rservice:RequestService) {

    this.customerid=rservice.customer.customerid

    this.transtypes = [{
      transfertypecode: '',
      transfertypedescription: ''

    }]

    this.CustomerUser={
      username:'Mithali Shalini',
      userPassword:'shalini'
    }

    this.transactions={
      "transactionid": "",
      "customerid":"",
        "currencycode": {
            "currencyname": "",
        },
        "senderbic": {
            "bic": "",
            "bankname": ""
        },
        "receiverbic":{
          "bic":"",
          "bankname":""
        },
        "receiveraccounholdername": "",
        "receiveraccounholdernumber": "",
        "transfertypecode":"",
        "currencyamount":"",
        "transferfees": "",
        "transferdate": "",
        "inramount":"",
        "date": "",
        

    }


  
  this.transactiontable=[{
    "receiveraccounholdername": "",
    "receiveraccounholdernumber": "",
    "bankName": "",
    "transferdate": "",
    "currencyamount":0}

  ]
    //  http.get("http://localhost:8080/transfertypes").subscribe(result=>{
    //    this.transaction=result;
    //  })
    // http.post("http://localhost:8080/login",this.CustomerUser,{responseType:'text' as 'json'}).subscribe(result=>{
    //   this.outputstring=result;
    // })

   
    // this.apiService.getTransactions(this.customerid).subscribe(result=>{
    //  // console.group(result)
    //   this.transactiontable=result;
      
    // })
  }
  ngOnInit(): void {
    this.apiService.loginApi(sessionStorage.getItem('username')).subscribe(
      result=>{
        this.resu=result;
        console.log(result)
        this.rservice.customer_login(this.resu);

      }
    )
    if(this.rservice.customer.customerid)
     this.apiService.getTransactionsApi(this.customerid).subscribe(result=>{
       console.group(result)
       this.transactiontable=result;
       
     })
    }
    
   
  }

  


