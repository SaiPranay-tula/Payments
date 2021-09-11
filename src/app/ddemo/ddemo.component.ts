import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateBalance } from '../common/balance.validator';
import { minvalidator } from '../common/minvalidator';
import { ValidatorsService } from '../Services/validatiors.service';

@Component({
  selector: 'app-ddemo',
  templateUrl: './ddemo.component.html',
  styleUrls: ['./ddemo.component.css']
})
export class DdemoComponent implements OnInit {
  demoForm:FormGroup;


  constructor(private customValidators:ValidatorsService) {
    this.demoForm=new FormGroup({

      balance: new FormControl(
        0,[Validators.required,minvalidator(10)]
      
      )

    })
   }
   get balance(){
     return this.demoForm.controls['balance'];
   }

  ngOnInit(): void {
  }

}
