import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit{
  form!: FormGroup
  submitted: boolean = false
  constructor(private fb: FormBuilder) { }

  radioOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('',[Validators.required]),
      number: new FormControl('',[Validators.required]),
      radioOption: new FormControl(null, [Validators.required])
    })
  }

  get userName() {
    return this.form.controls['userName'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get email() {
    return this.form.controls['email'];
  }

  get number() {
    return this.form.controls['number'];
  }

  onSubmit(formData: any) {
    console.log(formData);
    this.submitted = true;
  }
}
