import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    public utility: UtilityService,
    public api: ApiService,
  ) { }

  getFilms() {
    return this.httpGetResponse("films", null, true, true);
  }





  httpPostResponse(
    key: any,
    data: any,
    id = null,
    showloader = false,
    showError = true,
    contenttype = "application/json",
    returnError = false
  ) {
    return this.httpResponse(
      "post",
      key,
      data,
      id,
      showloader,
      showError,
      contenttype,
      returnError
    );
  }

  httpGetResponse(
    key: any,
    id = null,
    showloader = false,
    showError = true,
    contenttype = "application/json"
  ) {
    return this.httpResponse(
      "get",
      key,
      {},
      id,
      showloader,
      showError,
      contenttype
    );
  }

  // default 'Content-Type': 'application/json',
  httpResponse(
    type = "get",
    key: string,
    data: { [x: string]: number; },
    id = null,
    showloader = false,
    showError = true,
    contenttype = "application/json",
    returnError = false
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(key);
      let sent = data ? data : {};
      if (showloader == true) {
        this.utility.showLoader();
      }

      const _id = id ? "/" + id : "";
      const url = key + _id;
      console.log("this is the url", url);
      let reqOpts = {
        headers: new HttpHeaders({
          "Content-Type": contenttype,
        }),
      };

      // console.info(url);
      const seq =
        type == "get"
          ? this.api.get(url, {}, reqOpts)
          : this.api.post(url, data, reqOpts);

      seq.subscribe(
        (data: any) => {
          console.log("API Success", data);
          // console.log(data);
          let res = data["responseData"];
          console.log("data is here", data);
          this.utility.hideLoader();

          // if (data["status"] != 200) {
          //   if (showError) {
          //   }
          //   console.log("returnError", returnError);

          //   reject(null);
          //   return;
          // }

          // if (data["status"] == 401) {
          //   this.utility.presentFailureToast("Please check username and password");
          //   reject(null);
          //   return;
          //   // this.events.publish("user:logout");
          // }

          resolve(data['data']);
        },
        (err: any) => {

          console.log("API Error", err);

          let error = err;
          this.utility.hideLoader();

          if (showError) {
            this.utility.presentFailureToast(err['message']);
          }

          reject(null);

        }
      );
    });
  }
}
