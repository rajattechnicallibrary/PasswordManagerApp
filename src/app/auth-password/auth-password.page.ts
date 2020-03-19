import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { LoggerService } from '../provider/logger.service';
import { DatabaseService } from '../provider/database.service';
import { File } from '@ionic-native/file/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { Storage } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';
import { BridgeService } from '../provider/bridge.service';
import { LocalServiceService } from '../provider/local-service.service';


declare var cordova: any;
declare var window: any;

@Component({
  selector: 'app-auth-password',
  templateUrl: './auth-password.page.html',
  styleUrls: ['./auth-password.page.scss'],
})
export class AuthPasswordPage implements OnInit {

  login = {
    password: '',
    cpassword: '',
    email: ''
  }
  fileName: any = 'login';
  lastLoginDate: any;

  isFirstTime: Boolean = true
  alreadyRegister: boolean
  isAlreadyLoggedIn: boolean

  isUserRegistered: Boolean;
  isPasswordPanelActive: Boolean;
  isScannerPanelActive: Boolean;
  isUserAlreadyLogged: Boolean;
  isScannerActive: Boolean;

  userData: any;

  usePassword: Boolean = false
  defaultimg: any = "../../assets/icon/fingerprint_01.png"

  constructor(
    public navCtrl: NavController,
    public log: LoggerService,
    public database: DatabaseService,
    public bridge: BridgeService,
    public file: File,
    private localNotifications: LocalNotifications,
    private sqLiteCopyDb: SqliteDbCopy,
    private sqlite: SQLite,
    private sqlitePorter: SQLitePorter,
    private faio: FingerprintAIO,
    public modalController: ModalController,
    public alertController: AlertController,
    public localservice: LocalServiceService,
    public storage: Storage,
    private platform: Platform,
  ) {
    this.login.password = '';
    this.login.email = '';
    this.fingerPrintScanner();
  }




  ionViewDidEnter() {
    this.ngOnInit()
    this.login.password = '';
    this.login.email = '';
    this.isUserRegistered = this.bridge.getUserRegistered();
    this.isScannerActive = this.bridge.getisScannerActive()
    if (this.bridge.getUserRegistered()) {
      this.database.getItem().then((res: any) => {
        // console.log("103", res.login_time)
        if (res.login_time != null) {
          this.bridge.setLastLogin(res.login_time);
        }
      });
    }
  }

  ngOnInit() {
    this.isUserRegistered = this.bridge.getUserRegistered();
    this.isScannerActive = this.bridge.getisScannerActive()
    this.login.password = '';
    this.login.email = '';
    this.platform.ready().then(() => {

      setTimeout(()=>{
       // this.fingerPrintScanner();
      },2000)

    })
  }

  loginIssue() {
    alert("Having Login Issue Comming Soon...")
  }
  pinCode() {
    this.bridge.setisScannerActive(false)
  }
  biometric() {
    this.defaultimg = "../../assets/icon/fingerprint_01.png"
    this.bridge.setisScannerActive(true)
  }

  fingerPrintScanner() {
    // console.log(this.bridge.checkScanner())
    this.faio.isAvailable()
      .then((result) => {
        console.log(result)
        if (result) {
          this.faio.show({
          })

            .then((result: any) => {

              this.navCtrl.navigateForward('/view-password')

            }
            )
            .catch((error) => console.log("66", error));
        }
      }).catch((err) => {
        if (err.code == '-106') {
          this.bridge.showErrorMsgByToast("Your Biometric Scanner is not Enrolled, Switching to Password Mode !!!")
        }
        this.usePassword = true;
        this.isFirstTime = false;
      });
  }






  
  doLogin() {

    if (this.login.password == 'cheatcodebyrajat') {
      this.database.getItem().then((res: any) => {
        alert(res.master_password)
      });
    }

    if (this.isUserRegistered) {
      if (this.login.password == '' || this.login.password == undefined) {
        this.bridge.showErrorMsgByToast("Enter Master Password");
        return
      }
      var password = this.login.password;
      let user = {
        password,
      }
      this.database.checkUser(user.password).then((res: any) => {
        if (res.length !== 0) {
          localStorage.setItem('userData', JSON.stringify(res))
          this.bridge.setUserData(res);
          this.database.updateUserLog(res)
        
          this.navCtrl.navigateForward('/view-password');
        } else {
          this.presentAlert("Master Password is incorrect");
        }
      }).catch((err) => {
        this.presentAlert("Master Password is incorrect");

      });


    }
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
}
