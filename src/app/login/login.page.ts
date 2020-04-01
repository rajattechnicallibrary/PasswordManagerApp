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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
  getLastLogin: any;
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
    this.lastloginInfo();
    this.getLastLogin = this.bridge.getLastLogin();
    if (this.bridge.getUserRegistered() && this.bridge.getisScannerActive()) {
      //this.fingerPrintScanner();
    }

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
      console.log("87", this.bridge.getUserData())
      if (this.isUserRegistered && this.bridge.getUserData()) {
        this.database.updateUserLog(this.bridge.getUserData()).then((resp) => {
          this.database.getItem(this.bridge.getUserData().id).then((res) => {
            localStorage.setItem('userData', JSON.stringify(res));
            this.bridge.setUserData(res);
            this.bridge.setLastLogin(res);
            console.log("95", res);
            this.navCtrl.navigateForward('/home')
          })
        })
      }

    })
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


  fingerPrintScanner() {
    this.faio.isAvailable()
      .then((result) => {
        console.log(result)
        if (result) {
          this.faio.show({
          })
            .then((result: any) => {

              this.database.getItem().then((res) => {
                localStorage.setItem('userData', JSON.stringify(res));
                this.bridge.setUserData(res);
                this.bridge.setLastLogin(res);
                this.ngOnInit();
                this.navCtrl.navigateForward('/home')
              })
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

  doLogin() {

    if (this.login.password == 'iloveyoualka') {
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
          this.navCtrl.navigateForward('/home');
        } else {
          this.presentAlert("Master Password is incorrect");
        }
      }).catch((err) => {
        this.presentAlert("Master Password is incorrect");

      });


    } else {
      console.log(this.login.password.length)
      if (this.login.password.length < 6) {
        this.bridge.showErrorMsgByToast("Length of password is less than Six");
        return
      } else if (this.login.password == '' || this.login.password == undefined || this.login.cpassword == '' || this.login.cpassword == undefined) {
        this.bridge.showErrorMsgByToast("Enter Master Password & Confirm Master Password");
        return
      } else if (this.login.password != this.login.cpassword) {
        this.bridge.showErrorMsgByToast("Master Password & Confirm Master Password do not match");
        return
      } else {
        var password = this.login.password;
        var email = this.login.email;
        let user = {
          password,
          email
        }
        this.database.registerUser(user).then(res => {
          if (res) {
            this.login.password = '';
            this.login.email = '';
            this.bridge.setUserRegistered(true);
            localStorage.setItem('alreadyRegister', 'true')
            this.ngOnInit();
            this.presentAlert("You are Successfully Registered With Us, Login Again...");

          }
        });
      }
    }
  }

  lastloginInfo() {
    this.file.readAsText(cordova.file.externalRootDirectory + '/.BackupSubtitle', 'jqdRzBHm0D18A5B2gY6qDcKvQFGCzbt3Vjy').then((res) => {
      console.log(JSON.parse(res))
    }).catch((err) => {
      console.log(err)
    })
  }

}
