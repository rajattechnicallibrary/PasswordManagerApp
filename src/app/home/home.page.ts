import { Component } from '@angular/core';
import { DatabaseService } from '../provider/database.service';
import { LoggerService } from '../provider/logger.service';
import { BridgeService } from '../provider/bridge.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fileName: any = 'homepage';
  randomData
  constructor(
    public database: DatabaseService,
    private log: LoggerService,
    public bridge: BridgeService,
    public navCtrl: NavController,


  ) {

  this.loadPage()
  }


  loadPage(){
    this.database.getCategories().then((res) => {
      console.log(res)
      this.randomData = res
    }).catch((err) => {
      console.log(err)
    })
  }
  ionViewCanEnter() {
    console.log(this.fileName, 'ionViewCanEnter')
  }

  ionViewCanLeave() {
    console.log(this.fileName, 'ionViewCanLeave')

  }

  ionViewDidEnter() {
    console.log(this.fileName, 'ionViewDidEnter')

  }

  ionViewDidLeave() {
    console.log(this.fileName, 'ionViewDidLeave')

  }

  ionViewDidLoad() {
    console.log(this.fileName, 'ionViewDidLoad')

  }

  ionViewWillEnter() {
  this.loadPage()

    console.log(this.fileName, 'ionViewWillEnter')

  }

  ionViewWillUnload() {
    console.log(this.fileName, 'ionViewWillUnload')

  }

  viewDetail(id?, rows?) {
    if(rows == 0) {
      this.bridge.showErrorMsgByToast("No Details Found Yet !!!",'bottom'); return false;
    }
    localStorage.setItem("tapToOpen",id);
   // alert(id)
    this.navCtrl.navigateForward('/list')

  }

  stringGen(len) {
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++)
      text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
  }

  getRandomColor() {
    // db114e
    var letters = 'db114e'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 4)];
    }
    console.log(color);
    return color;
  }

  ColorLuminance(hex = 'db114e', lum = -0.5) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }

    return rgb;
  }

}
