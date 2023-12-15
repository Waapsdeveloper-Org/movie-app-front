import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LoaderModule } from './components/loader/loader.module';
import { NetworkService } from './services/network.service';
import { UtilityService } from './services/utility.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LoaderModule,
    HttpClientModule
  ],
  providers: [
    NetworkService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
