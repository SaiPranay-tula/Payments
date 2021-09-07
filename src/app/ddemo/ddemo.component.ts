import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateBalance } from '../common/balance.validator';

@Component({
  selector: 'app-ddemo',
  templateUrl: './ddemo.component.html',
  styleUrls: ['./ddemo.component.css']
})
export class DdemoComponent implements OnInit {
  demoForm:FormGroup;


  constructor() {
    this.demoForm=new FormGroup({
      balance: new FormControl(
        0,[Validators.required,validateBalance(100)]
      )

    })
   }
   get balance(){
     return this.demoForm.controls['balance'].value;
   }

  ngOnInit(): void {
  }

}
