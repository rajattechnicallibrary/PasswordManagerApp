import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../provider/bridge.service';
import { DatabaseService } from '../provider/database.service';
import { NavController, Events } from '@ionic/angular';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.page.html',
  styleUrls: ['./add-categories.page.scss'],
})
export class AddCategoriesPage implements OnInit {
  category_name = '';
  category_desc = '';
  constructor(
    public bridge: BridgeService,
    public database: DatabaseService,
    public navCtrl: NavController,
    public events: Events

  ) { }

  ngOnInit() {
  }

  save() {
    if (this.category_name == undefined || this.category_name == '') {
      this.bridge.showErrorMsgByToast("Enter Category Name !!!");
      return false;
    }
    let catdesc = this.category_desc
    let catName = this.category_name
    let data = { catdesc, catName, user_id: this.bridge.getUserData().id }

    this.database.addcategory(data).then(() => {
      this.bridge.presentAlert("Category " + catName + " name added successfully !!!")
      this.events.publish('fromPopoverEvent');
      this.navCtrl.navigateForward('/categories')

    }).catch(() => {

    });
  }

  cancel() {
    this.navCtrl.navigateForward('/categories')
  }

}
