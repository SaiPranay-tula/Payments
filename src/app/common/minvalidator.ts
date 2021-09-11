import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minvalidator(val:number):ValidatorFn {

    return(control:AbstractControl):ValidationErrors|null=>{

        let v:number=control.value;

        if(v>val){
            return {'gte':true}
        }
        return null;
    }
    }