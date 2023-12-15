import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BasePage {
  // login:FormGroup;

  obj: any = {
    email: '',
    password: '',
  };
  constructor(
    injector: Injector,
    public formBuilder:FormBuilder
  ) {
    super(injector);
    // this.login = this.formBuilder.group({
    //   email: ['', Validators.compose([Validators.required])],
    //   password: ['', Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(1000), Validators.pattern('^[A-Z a-z 0-9]*$')])],
    // });
  }
  results(event: any, type: string | number) {
    console.log('aaaaaaa',event,type);

    this.obj[type] = event;
  }
  async logins(){
    const data = await this.network.login(this.obj);
    if (data){

      this.nav.push('pages/dashboard');
    }
    return;
  }
  gotoSignUp(){
    this.nav.push('pages/signup')
  }

  onSubmit(){

  }

}
