import { Component, QueryList, ViewChildren } from '@angular/core';

import { Platform, ModalController, MenuController, ActionSheetController, PopoverController, IonRouterOutlet, ToastController, NavController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { LoggerService } from './provider/logger.service';
import { File } from '@ionic-native/file/ngx';
import { DatabaseService } from './provider/database.service';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Storage } from '@ionic/storage';
import { debug } from 'util';
import { BridgeService } from './provider/bridge.service'; 
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
 
declare var cordova: any; 
declare var window: any;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  lastTimeBackPress = 2;
  timePeriodToExit = 2222;
  activePage:any;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;


 
  public appPages = [
    { title: 'Dashboard', url: '/home', image: "assets/icon/home.png" },
    { title: 'Categories', url: '/categories', image: "assets/icon/add.png" },
    { title: 'Add Categories', url: '/add-categories', image: "assets/icon/add.png" },
    { title: 'Add Detail', url: '/add-detail', image: "assets/icon/add.png" },
    { title: 'Secure List', url: '/list', image: "assets/icon/list.png" },
    { title: 'Change Password', url: '/change-password', image: "assets/icon/change_password.png" },
    { title: 'Share', url: '/share-app', image: "assets/icon/share.png" },
    { title: 'Contact Us', url: '/contact-us', image: "assets/icon/contactus.png" },
    { title: 'About Us', url: '/about-us', image: "assets/icon/aboutus.png" },
    { title: 'Legal Terms', url: '/legal-terms', image: "assets/icon/legal.png" },
    { title: 'FAQ', url: '/faq', image: "assets/icon/faq.png" },
    { title: 'Settings', url: '/settings', image: "assets/icon/settings.png" },
    
  ];
  fileName: any = 'appPage';
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalCtrl: ModalController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
    private popoverCtrl: PopoverController,
    private router: Router,
    public toastController: ToastController,
    private log: LoggerService,
    public file: File,
    public database: DatabaseService,
    private sqLiteCopyDb: SqliteDbCopy,
    private androidPermissions: AndroidPermissions,
    public storage: Storage,
    public navCtrl: NavController,
    public bridge: BridgeService,
    private faio: FingerprintAIO,
    public alertController: AlertController,




  ) {
    this.initializeApp();
    // this.bridge.activeLoader()
    this.platform.ready().then((res) => {

      this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
      );



      if (localStorage.getItem('isScannerActive') != undefined) {
        this.bridge.setisScannerActive(this.bridge.detectBoolean('isScannerActive'))
      } else {
        localStorage.setItem('isScannerActive', 'true')
        this.bridge.setisScannerActive(true)
      }
      if (localStorage.getItem('alreadyRegister') != undefined || localStorage.getItem('alreadyRegister') != null) {
        this.bridge.setUserRegistered(this.bridge.detectBoolean('alreadyRegister'))
        this.bridge.setUserData(JSON.parse(localStorage.getItem('userData')));
      } else {
        localStorage.setItem('alreadyRegister', 'false')
        localStorage.setItem('userData', 'false')
      }

      if (localStorage.getItem('userData') != 'false' || localStorage.getItem('userData') != undefined || localStorage.getItem('userData') != '' && localStorage.getItem('userData') != null) {
        console.log("90", localStorage.getItem('userData'))
        this.bridge.setUserData(JSON.parse(localStorage.getItem('userData')))
      } else {
        localStorage.setItem('userData', 'false')
        this.bridge.setUserData(false)
      }

      if (this.bridge.getUserRegistered()) {
        this.database.getItem().then((res: any) => {
          console.log("103", res.login_time)
          if (res.login_time != null) {
            this.bridge.setLastLogin(res.login_time);
          }
        });
      }

      this.faio.isAvailable()
        .then((result) => {
          this.bridge.setisScannerActive(true)
        })
        .catch((err) => {
          this.bridge.setisScannerActive(false)
        })
      this.backButtonEvent();
    });
  }

  initializeApp() {
    this.platform.ready().then((res) => {
      this.file.checkFile(cordova.file.dataDirectory, "plocker.sqlite").then(res => {
        this.log.log(this.fileName, 'initializeApp', 'checkFile dataDirectory:- ' + JSON.stringify(res));
      }).catch(err => {
        this.log.log(this.fileName, 'initializeApp', 'checkFile-dataDirectory-catch:- ' + JSON.stringify(err));
        this.file.checkFile(cordova.file.applicationDirectory + "/www/assets/", "plocker.sqlite").then(res => {
          this.log.log(this.fileName, 'initializeApp', 'checkFile-applicationDirectory:- ' + JSON.stringify(res));
          if (res) {
            this.file.copyFile(cordova.file.applicationDirectory + "/www/assets/", "plocker.sqlite", cordova.file.dataDirectory, "plocker.sqlite").then(res => {
              this.log.log(this.fileName, 'initializeApp', 'copyFile - applicationDirectory:- ' + JSON.stringify(res));
              this.sqLiteCopyDb.copyDbFromStorage("plocker.sqlite", 0, cordova.file.dataDirectory + "/plocker.sqlite", false).then(res => {
                this.log.log(this.fileName, 'initializeApp', 'copyDbFromStorage-dataDirectory :- ' + JSON.stringify(res));
              }).catch(err => {
                this.log.log(this.fileName, 'initializeApp', 'catch-copyDbFromStorage:- ' + JSON.stringify(res));
              });
            }).catch(err => {
              this.log.log(this.fileName, 'initializeApp', 'copyFile-catch-applicationDirectory:-' + JSON.stringify(res));
            })
          }
        }).catch(err => {
          this.log.log(this.fileName, 'appInit', 'checkFile-applicationDirectory-catch:- ' + JSON.stringify(res));
        })
      })


      // window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "/www/assets/",
      //   function (fileSystem) {
      //     var reader = fileSystem.createReader();
      //     reader.readEntries(
      //       function (entries) {
      //         console.log(entries);
      //       },
      //       function (err) {
      //         console.log(err);
      //       }
      //     );
      //   }, function (err) {
      //     console.log(err);
      //   }
      // );


      // //  alert(this.bridge.getUserRegistered())
      // // this.appInit()
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString("#dc1150");
     

    });
  }

  appInit() {

    // this.file.checkFile(cordova.file.dataDirectory, "plocker.sqlite").then(res => {
    //   console.log("98", res);
    //   this.log.log(this.fileName, 'appInit', '98 appInit :- ' + res);
    //   this.splashScreen.hide();
    //   return;
    // }).catch(err => {


    //   this.file.copyFile(cordova.file.applicationDirectory + "/www/assets/", "plocker.sqlite", cordova.file.dataDirectory, "plocker.sqlite").then(res => {
    //     this.log.log(this.fileName, 'appInit', 'copyFile :- ' + JSON.stringify(res));
    //     this.sqLiteCopyDb.copyDbFromStorage("plocker.sqlite", 0, cordova.file.dataDirectory + "/plocker.sqlite", true).then(res => {
    //     }).catch(err => {
    //       // this.appInit()
    //       this.sqLiteCopyDb.copy("plocker.sqlite", 0).then(res => {
    //         this.log.log(this.fileName, 'appInit', 'copyDbFromStorage :- ' + err);
    //       }).catch(err => {
    //         this.log.log(this.fileName, 'appInit', 'sqLiteCopyDb.copy :- ' + err);
    //       });
    //     });
    //   }).catch(err => {
    //     // this.appInit()
    //     this.log.log(this.fileName, 'appInit', '114 copyFile :- ' + JSON.stringify(err));
    //     return
    //   });
    //   // this.appInit()
    //   ///this.log.log(this.fileName, 'appInit', 'catch :- ' + JSON.stringify(err));
    // });
  }

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      console.log(this.router.url)
      // if (this.router.url === '/home') {
      //   if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
      //     // this.platform.exitApp(); // Exit from app
      //     navigator['app'].exitApp(); // work for ionic 4

      //   } else {
      //     const toast = await this.toastController.create({
      //       message: 'Your settings have been saved.',
      //       duration: 2222
      //     });
      //     toast.present();
      //     this.lastTimeBackPress = new Date().getTime();
      //   }
      // }
      if (this.router.url === '/login') {
        this.presentAlert("Do You Want To Exit App ?")
      } else if (this.router.url === '/home') {
        this.navCtrl.back();
      } else {
        this.navCtrl.back();
      }
    });
  }

  logOut() {

    localStorage.removeItem('userData')
    this.bridge.setUserData(false)
    this.menu.close()
    this.navCtrl.navigateForward('/login');
  }

  async presentAlert(type?) {
    const alert = await this.alertController.create({
      message: ' <div text-center>' + type + '</div>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("246", "cancel")
          }
        }, {
          text: 'OK',
          role: 'ok',
          handler: () => {
            console.log("251", "exit")
            navigator['app'].exitApp();

          }
        }]
    });
    await alert.present();
  }

  sharingApp() {
    //   console.log("Sharing app")
    window.plugins.socialsharing.share('Password Locker App that lets you lock Important Information ! No Need of Internet Connection', 'Password Locker App', 'https://lh3.googleusercontent.com/XvR0kocuyzkvwTwZO-fE2oPlcbXTt5leyAvgG3NiLYQF47I2TQIz5CJEbwPJmUgtqGQ=s180-rw', 'https://play.google.com/store/apps/details?id=com.hybrid.plocker')

  }
}
