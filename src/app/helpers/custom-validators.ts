import { FormControl, Validators } from '@angular/forms';
type CountryCode = '+91' | '+52' | '+63' | '+1';

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

export function mobileNumberValidator(control: FormControl<{ mobile: string; countrycode: CountryCode }>): Validators {
  const mobileVal = control.value && control.value['mobile'];
  const countryCodeVal = control.value && control.value['countrycode'];

  const countryCodeValidations: { [key in CountryCode]: (mobile: string) => boolean } = {
    '+91': (mobile) => mobile.length === 10 && ['6', '7', '8', '9'].includes(mobile.charAt(0)),
    '+52': (mobile) => mobile.length === 10 && ['2', '3', '4', '5', '6', '7', '8', '9'].includes(mobile.charAt(0)),
    '+63': (mobile) => mobile.length === 9,
    '+1': (mobile) => mobile.length === 10
  };

  const isValidMobile = countryCodeValidations[countryCodeVal] && countryCodeValidations[countryCodeVal](mobileVal);
  if (isValidMobile) {
    return '';
  } else {
    return { invalidMobile: true };
  }
}



