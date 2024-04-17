import { FormControl, Validators } from '@angular/forms';

export function passwordValidator(): Validators {
  return (control: FormControl) => {
    const value: string = control.value;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const valid = hasUppercase && hasLowercase && hasSpecial;
    return valid ? null : { invalidPassword: true };
  };
}

export function whitespaceValidator(): Validators {
  return (control: FormControl) => {
    const value: string = control.value;
    const hasWhitespace = /\s/.test(value);
    return hasWhitespace ? { whitespaceError: true } : null;
  };
}

export function mv(): Validators {
  return (control: FormControl) => {
    const mobileVal = control.value && control.value['mobile'];
    const countryCodeVal = control.value && control.value['countrycode'];

    if (countryCodeVal === '+91') {
      if (mobileVal.length === 10) {
        return null;
      }
      return { invalidMobile: true };
    } else return { invalidMobile: true };
  };
}

