import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
static nospace(control: AbstractControl): ValidationErrors | null{
  if ((control.value as string).indexOf(' ') >= 0){
return {nospace: true};
  }
  return null;
}
static email(control: AbstractControl): ValidationErrors | null{
  if ((control.value as string) === ' /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
  {
    return {email: true};
  }
  return  null;
}
}
