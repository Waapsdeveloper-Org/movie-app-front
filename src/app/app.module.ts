import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LoaderModule } from './components/loader/loader.module';
import { NetworkService } from './services/network.service';
import { UtilityService } from './services/utility.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorService } from './services/interceptor.service';
import { EventsService } from './services/events.service';
import { NgxPubSubService } from '@pscoped/ngx-pub-sub';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LoaderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    NetworkService,
    UtilityService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    NgxPubSubService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
