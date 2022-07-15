import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function validEmailvalidator(): ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {

        const value = control.value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;   

        return  ! (value.match(validRegex) || value =='') ? {emailValidator : true } : null;      
    }
}
