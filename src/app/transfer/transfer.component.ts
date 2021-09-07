import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  validateBalance } from '../common/balance.validator';
import { RequestService } from '../Services/Request.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm:FormGroup;
  transfertype:Array<any>;
  messagecodes:Array<any>;
  balance=100;
  // control = new FormControl(2, Validators.min(3));

  constructor(private serv:RequestService) {
    // this.balance=serv.getbalance();
    
    this.transferForm= new FormGroup({
      
    customerid: new FormControl('',[Validators.required]),
    
    accountholdername: new FormControl('',[Validators.required]),
    clearbalance: new FormControl(this.balance,[Validators.required]),
    currency: new FormControl('INR',[Validators.required]),

    bic:new FormControl('',[Validators.required]),
    institutionname: new FormControl('',[Validators.required]),
    raccountholdername: new FormControl('',[Validators.required]),
    raccountnumber: new FormControl('',[Validators.required]),
    transfertypes: new FormControl('',[Validators.required]),
    messagecode:new FormControl('',[Validators.required]),
    amount: new FormControl('',[Validators.required,Validators.max(this.balance)]),
    transferfee: new FormControl(0.25,[Validators.required])
    });
    //  this.transfertype=serv.getTransfertypes();
    this.transfertype=[{
      transfertypecode:"AD"
    }]
  
    // this.messaagecode=serv.getMessageCodes();
    this.messagecodes=[{
      messagecode:"AS",
      message:"ASSAP"
    },{
      messagecode:"BAP",
      message:"NOT"
    }]
   }

  ngOnInit(): void {
    // console.log(this.control.errors)
  }

  handletransfer(){
    console.log(this.transferForm.errors)
    console.log(this.transferForm.controls['amount'].errors)

  }
  get accountholdername(){
    return this.transferForm.controls['accountholdername']

  }
  get clearbalance(){
    return this.transferForm.controls['clearbalance']

  }get currency(){
    return this.transferForm.controls['currency']

  }get bic(){
    return this.transferForm.controls['bic']

  }get institutionname(){
    return this.transferForm.controls['institutionname']

  }get raccountholdername(){
    return this.transferForm.controls['raccountholdername']

  }get raccountnumber(){
    return this.transferForm.controls['raccountnumber']

  }
  get transfertypes(){
    return this.transferForm.controls['transfertypes']

  }
  get messagecode(){
    return this.transferForm.controls['messagecode']

  }
  get transferfee(){
    return this.transferForm.controls['transferfee']

  }
  get amount(){
    return this.transferForm.controls['amount'];
  }
  get customerid(){
    return this.transferForm.controls['customerid'];
  }

;

}
