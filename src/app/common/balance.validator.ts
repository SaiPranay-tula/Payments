
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export function validateBalance(clearbalance:number,overdraft:boolean){
    console.log(clearbalance)
    console.log(overdraft)
    let amount=0
    
    return(control:AbstractControl):ValidationErrors=>{
        
        amount=0
        amount=control.value;
        // amount=amount+(amount*0.025)
        let clear=clearbalance-(amount*0.025)


        if(amount>clear || overdraft){
            amount=0
            return {'invalid':true}
        }
        amount=0
        return {'invalid':false};
    }


};