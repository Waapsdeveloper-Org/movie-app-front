import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRoutingModule } from './login-routing.module';
import { TopHeaderModule } from 'src/app/components/top-header/top-header.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    TopHeaderModule,
    loginRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
