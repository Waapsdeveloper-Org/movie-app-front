import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  showLoader(msg = "Please wait...") {
    // return this.loading.showLoader(msg);
  }

  hideLoader() {
    // return this.loading.hideLoader();
  }

  presentToast(msg: any) {
    // return this.alerts.presentToast(msg);
  }

  presentSuccessToast(msg: string) {
    // return this.alerts.presentSuccessToast(msg);
  }

  presentFailureToast(msg: string) {
    // return this.alerts.presentFailureToast(msg);
  }

}
