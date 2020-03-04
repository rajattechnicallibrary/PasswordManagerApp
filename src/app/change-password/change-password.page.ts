import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../provider/bridge.service';
import { DatabaseService } from '../provider/database.service';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  login = {
    current_password: '',
    new_password: '',
    confirm_password: ''
  }

  constructor(
    public bridge: BridgeService,
    public database: DatabaseService,
    private menu: MenuController,
    public navCtrl: NavController,


  ) { }

  ngOnInit() {
  }

  ChangePassword() {
    if (this.login.current_password.length < 6) {
      this.bridge.showErrorMsgByToast("Length of password is less than Six");
      return
    } else if (this.login.current_password == '' || this.login.current_password == undefined || this.login.new_password == '' || this.login.new_password == undefined || this.login.confirm_password == '' || this.login.confirm_password == undefined) {
      this.bridge.showErrorMsgByToast("Enter Current Password , New Password and Confirm Password");
      return
    } else if (this.login.new_password != this.login.confirm_password) {
      this.bridge.showErrorMsgByToast("New Password & Confirm Password do not match");
      return
    } else {
      var password = this.login.new_password;
      var id = this.bridge.getUserData().id;
      let user = {
        password,
        id
      }
      this.database.updatePassword(user).then(res => {
        if (res) {
          localStorage.removeItem('userData')
          this.bridge.setUserData(false)
          this.menu.close()
          this.bridge.presentAlert("Your password changed successfully, Login Again... ");
          this.navCtrl.navigateForward('/login');

        }
      });
    }
  }

}
