import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const config = require('../config/main.json')
@Injectable({
  providedIn: "root",
})
export class ApiService {

  url: any;

  constructor(public http: HttpClient) {
    this.url = config.api;
  }

  getApiUrl() {
    return config.api;
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    this.url = this.getApiUrl();
    console.log("getting my url", this.url);
    return this.http.get(this.url + "/" + endpoint, reqOpts);
  }
  post(endpoint: string, body: any, reqOpts?: any) {
    this.url = this.getApiUrl();
    console.log("getting my url", this.url);
    return this.http.post(this.url + "/" + endpoint, body, reqOpts);
  }
  put(endpoint: string, body: any, reqOpts?: any) {
    this.url = this.getApiUrl();
    return this.http.put(this.url + "/" + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    this.url = this.getApiUrl();
    return this.http.delete(this.url + "/" + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    this.url = this.getApiUrl();
    return this.http.patch(this.url + "/" + endpoint, body, reqOpts);
  }

}
