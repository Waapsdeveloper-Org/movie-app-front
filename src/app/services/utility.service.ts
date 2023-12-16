import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private toastr: ToastrService) { }

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
    return this.toastr.error(msg);
  }

}
