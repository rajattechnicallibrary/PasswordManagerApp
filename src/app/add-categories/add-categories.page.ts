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
  cat_edit_id = ''
  isUpdate: boolean = false;

  constructor(
    public bridge: BridgeService,
    public database: DatabaseService,
    public navCtrl: NavController,
    public events: Events

  ) { }

  ngOnInit() {
    if (localStorage.getItem("cat_edit_id")) {
      this.isUpdate = true
      this.cat_edit_id = localStorage.getItem("cat_edit_id");
      this.database.getCategoriesById(this.cat_edit_id).then((res: any) => {
        console.log(res)
        this.category_name = res.name;
        this.category_desc = res.desc;
       localStorage.removeItem("cat_edit_id");

      }).catch((err) => {
        console.log(err)
      }) 
    }
  }

  save() {
    if (this.category_name == undefined || this.category_name == '') {
      this.bridge.showErrorMsgByToast("Enter Category Name !!!");
      return false;
    }
    let catdesc = this.category_desc
    let catName = this.category_name
    let data = { catdesc, catName, user_id: this.bridge.getUserData().id }

    this.database.addcategory(data).then((rep) => {
      console.log("51-----------", rep)
      this.bridge.presentAlert("Category " + catName + " name added successfully !!!")
      this.events.publish('fromPopoverEvent');
      this.navCtrl.navigateForward('/categories')

    }).catch(() => {

    });
  }

  cancel() {
    this.navCtrl.navigateForward('/categories')
  }

  Update() {
    if (this.category_name == undefined || this.category_name == '') {
      this.bridge.showErrorMsgByToast("Enter Category Name !!!");
      return false;
    }
    let catdesc = this.category_desc
    let catName = this.category_name
    let cat_edit_id = this.cat_edit_id;
    let data = { catdesc, catName, user_id: this.bridge.getUserData().id, cat_edit_id }

    this.database.UpdateCategory(data).then((res) => {
      this.bridge.presentAlert("Account Detail For " + catName + " Updated successfully !!!")
      this.events.publish('fromPopoverEvent');
      this.navCtrl.navigateForward('/categories')

    }).catch(() => {

    });
  }

}
