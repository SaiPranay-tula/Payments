
import {AbstractControl, ValidatorFn} from "@angular/forms";

import { RequestService } from "../Services/Request.service";

export function validateBalance(totalbalance:number):ValidatorFn{
    console.log(totalbalance)
    
    return (control: AbstractControl): { [key: string]: boolean } | null => {
       
        if (control.value !== undefined && (isNaN(control.value) || control.value > totalbalance)) {
    
            return { 'minbal': true };
        }

        return null;
    };

    

}