/* eslint-disable @typescript-eslint/naming-convention */
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor  {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return from(this.callToken()).pipe(
      switchMap(token => {
        const cloneRequest = this.addSecret(req, token );
        return next.handle(cloneRequest);
      })
    );

  }

  callToken(){
    return new Promise( resolve => {

      const token = localStorage.getItem('token');
      if(token){
        resolve(token);
      }else{
        resolve(null);
      }

    });
  }

  private addSecret(request: HttpRequest<any>, value: any){
    const v = value ? value : '';

    const clone = request.clone({
      setHeaders : {
        Authorization: 'Bearer ' + v,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return clone;
  }
}
