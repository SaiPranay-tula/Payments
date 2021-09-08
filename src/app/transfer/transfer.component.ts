import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';
import { RequestService } from '../Services/Request.service';
import { TransactionService } from '../Services/Trans.Service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  alert = false;
  transferForm: FormGroup;
  ttypes: any;
  mcodes: any;
  bank:any
 
  trans: any;
  tfee=0


  constructor(private rservice: RequestService, private tservice: TransactionService,private route:Router,
              private apiservice:ApiService) {
    

    this.transferForm = new FormGroup({

      customerid: new FormControl(rservice.customer.customerid, [Validators.required]),
      accountholdername: new FormControl(rservice.customer.accountholdername, [Validators.required]),
      clearbalance: new FormControl(rservice.customer.clearbalance, [Validators.required]),
      currency: new FormControl('INR', [Validators.required]),
      bic: new FormControl('', [Validators.required]),
      institutionname: new FormControl('', [Validators.required]),
      raccountholdername: new FormControl('', [Validators.required]),
      raccountnumber: new FormControl('', [Validators.required]),
      transfertypes: new FormControl('', [Validators.required]),
      messagecode: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.max(rservice.customer.clearbalance)]),
      transferfee: new FormControl(this.tfee,
                       [Validators.required])
    });
   
    // this.transfertype = [{
    //   transfertypecode: "AD"
    // }]

    // this.messaagecode=serv.getMessageCodes();
    // this.messagecodes = [{
    //   messagecode: "AS",
    //   message: "ASSAP"
    // }, {
    //   messagecode: "BAP",
    //   message: "NOT"
    // }]
  }

  ngOnInit(): void {
    this.apiservice.getTransfertypesApi().subscribe(result=>{
      this.ttypes=result;
    })

    this.apiservice.getMessagecodesApi().subscribe(result=>{
      console.log(result)
      this.mcodes=result;
    })
  }

  handletransfer() {
    // console.log(this.transferForm.errors)
    // console.log(this.transferForm.controls['amount'].errors)
    this.alert = true
    window.scrollTo(0, 0);
    this.trans = {
      "customerid": this.transferForm.controls['customerid'].value,
      "receviverBic": this.transferForm.controls['bic'].value,
      "raccountname": this.transferForm.controls['raccountholdername'].value,
      "raccountnumber": this.transferForm.controls['raccountnumber'].value,
      "transfertype": this.transferForm.controls['transfertypes'].value,
      "messagecode": this.transferForm.controls['messagecode'].value,
      "inramount": this.transferForm.controls['amount'].value,
      "transferfee": this.transferForm.controls['transferfee'].value,
    };
    this.tservice.print();
    this.tservice.transaction = this.trans;
    this.tservice.print();
    this.transferForm.reset();
    
    
   
    

  }
  get accountholdername() {
    return this.transferForm.controls['accountholdername']

  }
  get clearbalance() {
    return this.transferForm.controls['clearbalance']

  } get currency() {
    return this.transferForm.controls['currency']

  } get bic() {
    return this.transferForm.controls['bic']

  } get institutionname() {
    return this.transferForm.controls['institutionname']

  } get raccountholdername() {
    return this.transferForm.controls['raccountholdername']

  } get raccountnumber() {
    return this.transferForm.controls['raccountnumber']

  }
  get transfertypes() {
    return this.transferForm.controls['transfertypes']

  }
  get messagecode() {
    return this.transferForm.controls['messagecode']

  }
  get transferfee() {
    return this.tfee
  }
  get amount() {
    return this.transferForm.controls['amount'];
  }
  get customerid() {
    return this.transferForm.controls['customerid'];
  }

  getIname(){
    this.apiservice.getBankname( this.transferForm.controls['bic'].value).subscribe(result=>{
      this.bank=result;
      console.log(this.bank)
      this.transferForm.controls['institutionname'].setValue(this.bank.bankname)
      return this.transferForm.controls['institutionname'].value
    });
  }
  onClose() {
    this.alert = false;
    this.route.navigate(['/dashboard'])
  }

}
