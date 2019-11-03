import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  loaderActive = null;
  constructor(
    public loadingCtrl: LoadingController,

  ) { }

  /**
   * Start ---->
   * Active Loader and make one Object at beninging whenever they called , Object will be overwirte
   * accordingly and on same duration dissmiss or deactive object will be called with given duration
   * with similar time
   * author:Rajat
   * Date: 27 May 2019
   */
  async activeLoader({ msg = 'Loading...', duration = 2000 }: { msg?: string; duration?: number; } = {}) {

    if (this.loaderActive != null) {
      this.loaderActive.dismiss();
    }

    this.loaderActive = await this.loadingCtrl.create({
      message: "msg",
      duration: duration
    });

    this.loaderActive.present();
    this.deactiveLoader()
  }

  deactiveLoader({ duration = 2000 }: { duration?: number } = {}) {
    setTimeout(() => {
      this.loaderActive.dismiss();
    }, duration);
  }
}
