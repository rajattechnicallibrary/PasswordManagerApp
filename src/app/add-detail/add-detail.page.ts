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
  isUpdate:boolean = false;
  account_name = '';
  account_password = '';
  account_cat = '';
  account_url = '';
  account_expiry = '';
  account_hint = '';
  account_desc = '';
  account_username = '';
  editpwd;
  randomData;
  pwd_id
  constructor(
    public bridge: BridgeService,
    public database: DatabaseService,
    public navCtrl: NavController,
    public events: Events

  ) {
    this.database.getCategories().then((res) => {
      console.log(res)
      this.randomData = res

    }).catch((err) => {
      console.log(err)
    })

  }


  ngOnInit() {
    if (localStorage.getItem("pwd_id")) {
      this.isUpdate = true
      this.pwd_id = localStorage.getItem("pwd_id");
      this.database.getpasswordById(this.pwd_id).then((res: any) => {
        console.log(res)
        this.account_username = res.user_name;
        this.account_password = res.password;
        this.account_cat = res.cat_id;
        this.account_name = res.pname;
        this.account_url = res.url;
        this.account_expiry = res.expired;
        this.account_hint = res.hint;
        this.account_desc = res.desc;
        localStorage.removeItem("pwd_id");

      }).catch((err) => {
        console.log(err)
      })
    }
  }

  save() {
    if (this.account_name == undefined || this.account_name == '' || this.account_password == undefined || this.account_password == '' || this.account_cat == undefined || this.account_cat == '' || this.account_username == undefined || this.account_username == '') {
      this.bridge.showErrorMsgByToast("Enter Username, Password, Category & Account Name.");
      return false;
    }
    // console.log(this.account_cat)
    // return
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

  Update() {
    if (this.account_name == undefined || this.account_name == '' || this.account_password == undefined || this.account_password == '' || this.account_cat == undefined || this.account_cat == '' || this.account_username == undefined || this.account_username == '') {
      this.bridge.showErrorMsgByToast("Enter Username, Password, Category & Account Name.");
      return false;
    }
    // console.log(this.account_cat)
    // return
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
      user_id: this.bridge.getUserData().id,
      pwd_id:this.pwd_id
    }
    this.database.UpdatePassword(data).then((res) => {
      this.bridge.presentAlert("Account Detail For " + account_name + " Updated successfully !!!")
      this.events.publish('Event_list');
      this.navCtrl.navigateForward('/list')

    }).catch(() => {

    });
  }

  cancel() {
    this.navCtrl.navigateForward('/list')
  }

}
