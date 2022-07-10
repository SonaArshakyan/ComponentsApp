import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS , Validator, ValidationErrors, AbstractControl} from "@angular/forms";

@Directive({
    selector: '[emailValidator]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
  })
  export class EmailValidatorDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
      const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(regularExpression.test(String(control.value).toLowerCase()))
       return {validate :true }
       else return null;       
    }
  }