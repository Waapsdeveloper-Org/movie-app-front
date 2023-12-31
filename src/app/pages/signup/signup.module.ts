import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signupRoutingModule } from './signup-routing.module';
import { TopHeaderModule } from 'src/app/components/top-header/top-header.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    signupRoutingModule,
    TopHeaderModule,
    ReactiveFormsModule

  ],
  exports:[SignupComponent]
})
export class SignupModule { }
