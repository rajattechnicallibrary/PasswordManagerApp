import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Storage } from '@ionic/storage';

declare var cordova: any;
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  loaderActive = null;
  constructor(
    public loadingCtrl: LoadingController,
    private faio: FingerprintAIO,
    public toastCtrl: ToastController,
    private toast: Toast,
    public storage: Storage,
    public alertController: AlertController,
 

  ) { }

  userData: any;
  isUserRegistered: Boolean;
  isPasswordPanelActive: Boolean;
  isScannerPanelActive: Boolean;
  isUserAlreadyLogged: Boolean;
  startDate = new Date();
  endDate = new Date();
  lastLoginDate:any;
  version = '2.0.0'

  getUserData() {
    return this.userData;
  }
  getCurrentVersion() {
    return this.version;
  }
  setUserData(data) {
    this.userData = data;
  }
  getUserRegistered() {
    return this.isUserRegistered;
  }
  setUserRegistered(data) {
    this.isUserRegistered = data;
  }

  getPasswordPanelActive() {
    return this.isPasswordPanelActive;
  }

  setPasswordPanelActive(data) {
    this.isPasswordPanelActive = data;
  }

  getisScannerActive() {
    return this.isScannerPanelActive;
  }

  setisScannerActive(data) {
    this.isScannerPanelActive = data;
  }

  getisUserAlreadyLogged() {
    return this.isUserAlreadyLogged;
  }

  setisUserAlreadyLogged(data) {
    this.isUserAlreadyLogged = data;
  }

  getLastLogin() {
    return this.lastLoginDate
  }
  setLastLogin(data) {
    this.lastLoginDate = data;
  }

  getDate() {
    return this.startDate = new Date();
  }

  detectBoolean(key) {
    let value = localStorage.getItem(key)
    let myval;
    switch (value) {
      case 'true':
        myval = true
        break;

      case 'false':
        myval = false
        break;

      default:
        break;
    }
    return myval
  }

  /**
   * Start ---->
   * Active Loader and make one Object at beninging whenever they called , Object will be overwirte
   * accordingly and on same duration dissmiss or deactive object will be called with given duration
   * with similar time
   * author:Rajat
   * Date: 27 May 2019
   */
  async activeLoader({ msg = 'Loading...', duration = 3000 }: { msg?: string; duration?: number; } = {}) {

    if (this.loaderActive != null) {
      this.loaderActive.dismiss();
    }

    this.loaderActive = await this.loadingCtrl.create({
      message: msg,
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

  async checkScanner() {
    await this.faio.isAvailable()
      .then((result) => {
        return true;
      })
      .catch((err) => {
        return false;
      })

  }

  async showErrorMsgByToast(message, p?) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3500,
      position: p?'Top':p
    });
    toast.dismiss();
    toast.present();
  }

  setUser(key, val) {
    this.storage.set(key, val);
  }
  getUser(key) {
    return this.storage.get(key);
  }

  async presentAlert(type?) {
    const alert = await this.alertController.create({
      message: ' <div text-center>' + type + '</div>',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await alert.present();
  }

  stringGen(len) {
    var text = ""; 

    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  }


  appInit(data, no) {
    window.resolveLocalFileSystemURL(data,
      function (fileSystem) {
        var reader = fileSystem.createReader();
        reader.readEntries(
          function (entries) {
            console.log(no, entries);
          },
          function (err) {
            console.log(no, err);
          }
        );
      }, function (err) {
        console.log(err);
      }
    );
  }


}
