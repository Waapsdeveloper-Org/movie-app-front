import { Component, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  extends BasePage {
  aForm: FormGroup;
  submit = false;

  constructor(
    injector: Injector,
    public formBuilder:FormBuilder
  ) {
    super(injector);
    this.aForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(1000), Validators.pattern('^[A-Z a-z 0-9]*$')])],
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(1000), Validators.pattern('^[A-Z a-z 0-9 @ .]*$')])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(1000), Validators.pattern('^[A-Z a-z 0-9]*$')])],
    });
  }

  async formSubmit(){


    if (!this.aForm.valid) {
      return;
    }

    this.submit = true;
    const data = await this.network.register(this.aForm.value);
    console.log(data);

    if (data && data.token && data.user) {
      this.aForm.reset();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      this.nav.setRoot('/')
    }

    setTimeout(() => {
      this.submit = false;
    } , 3000);

  }
}
