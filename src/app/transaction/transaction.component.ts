import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  
  transtypes: any;
  CustomerUser:any;
  outputstring:any;
  transactions:any;
  transactiontable:any;
 
  constructor( http:HttpClient) {

    





    this.transtypes = [{
      transfertypecode: '',
      ransfertypedescription: ''

    }]

    this.CustomerUser={
      username:'Mithali Shalini',
      userPassword:'shalini'
    }

    this.transactions=[{
      "transactionid": "",
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
        "currencyamount":"",
        "transferfees": "",
        "transferdate": "",
        "inramount":"",
        "date": "",
        "receiveraccounholdername": "",
        "receiveraccounholdernumber": "",

    }


  ]
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

    http.get("http://localhost:8080/transaction/71319440983198").subscribe(result=>{
     // console.group(result)
      this.transactiontable=result;
      
    })

  }

}
