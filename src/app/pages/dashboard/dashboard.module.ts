import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TopHeaderModule } from 'src/app/components/top-header/top-header.module';
import { PinchUserModule } from 'src/app/components/pinch-user/pinch-user.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    TopHeaderModule,
    PinchUserModule
  ]
})
export class DashboardModule { }
