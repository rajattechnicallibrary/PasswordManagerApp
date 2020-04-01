import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { BridgeService } from '../provider/bridge.service';
import { AlertController, NavController } from '@ionic/angular';
import { DatabaseService } from '../provider/database.service';
import { File } from '@ionic-native/file/ngx';
declare var cordova: any;
declare var window: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  login = {
    to: 'plockerapps@gmail.com',
    subject: 'Feedback',
    feedback: ''
  }
  constructor(
    private emailComposer: EmailComposer,
    public bridge: BridgeService,
    public alertController: AlertController,
    public navCtrl: NavController,
    public file: File,
    public database: DatabaseService,


  ) {

  }

  ngOnInit() {
    // this.send()

  }

  send() {
    // this.database.seeddb()
    // return
    this.file.copyFile(cordova.file.applicationStorageDirectory + "databases/", "plocker.sqlite", cordova.file.dataDirectory, "Latest.sqlite").then(res => {
      console.log(res)
    }).catch((res) => {
      console.log(res)
    })



    if (this.login.feedback == '' || this.login.feedback == undefined) {
      this.bridge.showErrorMsgByToast("Enter Your Feedback...");
      return
    }
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        let email = {
          app: 'gmail',
          to: this.login.to,
          subject: this.login.subject + "Version:" + this.bridge.getCurrentVersion(),
          body: this.login.feedback,
          isHtml: true,
          //attachments: [cordova.file.dataDirectory + "/Latest.sqlite"]
        }

        this.emailComposer.open(email);
        this.presentAlert("Thank You !! Please cross check and send it to us !!!");
        this.file.removeFile(cordova.file.dataDirectory, "Latest.sqlite").then(res => {
          console.log("68", res)
        }).catch((res) => {
          console.log("70", res)
        })
        this.navCtrl.navigateForward('/home')
      }
    });
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
