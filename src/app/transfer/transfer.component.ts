import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateBalance } from '../common/balance.validator';
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
  overdraft = false
  success: any;
  transferForm: FormGroup;
  ttypes: any;
  mcodes: any;
  bank: any
  iname = ""
  balance = 0
  tfee = 0;
  invalidaccname: any;
  resu: any
  trans: any;

  constructor(private rservice: RequestService, private tservice:TransactionService, private route: Router,
    private apiservice: ApiService) {
    this.apiservice.loginApi(sessionStorage.getItem('username')).subscribe(
      result => {
        this.resu = result;
        console.log(result)
        this.rservice.customer_login(this.resu);
      })

    this.balance = rservice.customer.clearbalance;
    this.transferForm = new FormGroup({

      customerid: new FormControl(rservice.customer.customerid, [Validators.required]),
      accountholdername: new FormControl(rservice.customer.accountholdername, [Validators.required]),
      clearbalance: new FormControl(rservice.customer.clearbalance, [Validators.required]),
      currency: new FormControl('INR', [Validators.required]),
      bic: new FormControl('', [Validators.required]),
      institutionname: new FormControl('', [Validators.required]),
      raccountholdername: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern(/^[a-z]+$/i)]),
      raccountnumber: new FormControl('', [Validators.required, Validators.minLength(12),
      Validators.maxLength(12), Validators.pattern(/^\d+$/)]),
      transfertypes: new FormControl('', [Validators.required]),
      messagecode: new FormControl('', [Validators.required]),
      transferfee: new FormControl('', [Validators.required]),
      amount: new FormControl('0', [Validators.required, validateBalance(this.balance, this.overdraft)])
    },
    );
  }

  ngOnInit(): void {
    this.apiservice.loginApi(sessionStorage.getItem('username')).subscribe(
      result => {
        this.resu = result;
        console.log(result)
        this.rservice.customer_login(this.resu);
      }
    )
    this.apiservice.getTransfertypesApi().subscribe(result => {
      this.ttypes = result;
    })

    this.apiservice.getMessagecodesApi().subscribe(result => {
      console.log(result)
      this.mcodes = result;
    })
    this.tfee = this.transferForm.controls['amount'].value

    if (this.rservice.customer.overdraftflag == 1)
      this.overdraft = true
    else
      this.overdraft = false
  }

  handletransfer() {
    //console.log(this.transferForm.value)
    // console.log(this.transferForm.controls['amount'].errors)
    this.alert = true

    window.scrollTo(0, 0);
    this.trans = {
      "customerid": this.transferForm.controls['customerid'].value,
      "receiverBic": this.transferForm.controls['bic'].value,
      "raccountname": this.transferForm.controls['raccountholdername'].value,
      "raccountnumber": this.transferForm.controls['raccountnumber'].value,
      "transfertype": this.transferForm.controls['transfertypes'].value,
      "messagecode": this.transferForm.controls['messagecode'].value,
      "inramount": this.transferForm.controls['amount'].value,
      "transferfee": this.transferForm.controls['transferfee'].value,
    };
    //this.tservice.print();
    this.tservice.transaction = this.trans;
    //  this.tservice.print();
    //console.log(this.trans)
    this.apiservice.inserttransaction(this.tservice.transaction).subscribe(result => {
      //console.log(result)
    }, error => {
      //console.log(error)
      if (error.status === 201)
        this.success = true;
      else
        this.success = false;
    })
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
  } 
  get raccountholdername() {
    return this.transferForm.controls['raccountholdername']
  } 
  get raccountnumber() {
    return this.transferForm.controls['raccountnumber']
  }
  get transfertypes() {
    return this.transferForm.controls['transfertypes']
  }
  get messagecode() {
    return this.transferForm.controls['messagecode']
  }
  get transferfee() {
    return 0.025
  }
  get amount() {
    return this.transferForm.controls['amount'];
  }
  get customerid() {
    return this.transferForm.controls['customerid'];
  }

  getIname() {
    this.transferForm.controls['institutionname'].setValue("")
    this.bank = false
    this.apiservice.getBankname(this.transferForm.controls['bic'].value).subscribe((result => {
      //console.log(this.transferForm.controls['bic'].value)
      this.bank = result;
      this.transferForm.controls['institutionname'].setValue(this.bank.bankname)
      return this.transferForm.controls['institutionname'].value
    }), error => {
      this.bank = false;

    });
  }
  onClose() {
    this.alert = false;
    this.route.navigate(['/dashboard'])
  }
  gettfee() {
    this.transferForm.controls['transferfee'].setValue(this.transferForm.controls['amount'].value * 0.025)
    return this.transferForm.controls['transferfee'].value
  }

  Validate_name() {
    if(this.transferForm.controls['raccountholdername'].value.length>0)
    this.apiservice.getvalidRaccname(this.transferForm.controls['raccountholdername'].value).subscribe(result => {
      this.invalidaccname = result
      if (result)
        window.scrollTo(0, 0);
    })



  }



}
