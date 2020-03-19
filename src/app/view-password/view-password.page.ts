import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, AlertController, Events } from '@ionic/angular';
import { DatabaseService } from '../provider/database.service';
import { Router } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { BridgeService } from '../provider/bridge.service';
declare var window: any;

@Component({
  selector: 'app-view-password',
  templateUrl: './view-password.page.html',
  styleUrls: ['./view-password.page.scss'],
})
export class ViewPasswordPage implements OnInit {
  lengthofCat;
  catArray;
  constructor(
    public navCtrl: NavController,
    public database: DatabaseService,
    public popoverController: PopoverController,
    public bridge: BridgeService,
    public alertController: AlertController,
    private router: Router,
    public events: Events,
    private clipboard: Clipboard
    
  ) { }

  ngOnInit() {
    this.loadPage();
  }
 
  loadPage(){
    let pass_id = localStorage.getItem('pass_id');
    //localStorage.removeItem('pass_id');
    console.log(pass_id)
    this.database.getpasswordById(pass_id).then((res: any) => {
      console.log(res)
      this.database.UpdateLastViewPassword(localStorage.getItem("pass_id"))
      if (res.length > 0) this.lengthofCat = true; this.catArray = res
    }).catch((err) => {
      this.catArray = ''
    })
  }

  doBack(){
    this.navCtrl.navigateForward('/categories')

  }

  copymy(key){
    this.bridge.showErrorMsgByToast("Text Copied Successfully!!!",'bottom');
    this.clipboard.copy(key);

  }

  shareMyApp(){
    let str = "Username:- " + this.catArray.user_name + "\nPassword:- " + this.catArray.password + "\nCategory Name:- " + this.catArray.cname+ "\nAccount Name:- " + this.catArray.pname+ "\nURL:- " + this.catArray.url+ "\nExpiry:- " + this.catArray.expired+ "\nHint:- " + this.catArray.hint+ "\nDescription:- " + this.catArray.desc + "\nCreated Date:- " + this.catArray.created_date
    window.plugins.socialsharing.share(str);

  }
 
}
 