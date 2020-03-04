import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../provider/database.service';
import { BridgeService } from '../provider/bridge.service';
import { NavController, Events } from '@ionic/angular';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.page.html',
  styleUrls: ['./add-detail.page.scss'],
})
export class AddDetailPage implements OnInit {

  categories: any;

  account_name = '';
  account_password = '';
  account_cat = '';
  account_url = '';
  account_expiry = '';
  account_hint = '';
  account_desc = '';
  account_username = '';

  randomData
  constructor(
    public bridge: BridgeService,
    public database: DatabaseService,
    public navCtrl: NavController,
    public events: Events

  ) { 
    this.database.getCategories().then((res) => {
      console.log(res)
      this.randomData = res
    }).catch( (err)=>{
      console.log(err)
    })

  }


  ngOnInit() {
  }


  save() {
    if (this.account_name == undefined || this.account_name == '' || this.account_password == undefined || this.account_password == '' || this.account_cat == undefined || this.account_cat == ''|| this.account_username == undefined || this.account_username == '') {
      this.bridge.showErrorMsgByToast("Enter Username, Password, Category & Account Name.");
      return false;
    }
    let account_name = this.account_name
    let account_password = this.account_password
    let account_cat = this.account_cat
    let account_url = this.account_url
    let account_expiry = this.account_expiry
    let account_hint = this.account_hint
    let account_desc = this.account_desc
    let account_username = this.account_username

    let data = { 
      account_name, 
      account_password, 
      account_cat,
      account_url,
      account_expiry,
      account_hint,
      account_desc, 
      account_username,
      user_id: this.bridge.getUserData().id 
    }

    this.database.addpassword(data).then((res) => {
      console.log(res)
      this.bridge.presentAlert("Account Detail For " + account_name + " added successfully !!!")
     this.events.publish('Add_Event_list');
      this.navCtrl.navigateForward('/list')   
 
    }).catch(() => {
  
    });
  }

  cancel() {
    this.navCtrl.navigateForward('/list')
  }

}
