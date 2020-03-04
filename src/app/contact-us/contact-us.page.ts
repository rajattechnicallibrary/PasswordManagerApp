import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { BridgeService } from '../provider/bridge.service';
import { AlertController, NavController } from '@ionic/angular';

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



  ) {

  }

  ngOnInit() {


  }

  send() {
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
          isHtml: true
        }

        this.emailComposer.open(email);
        this.presentAlert("Thank You !! Please cross check and send it to us !!!");
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
