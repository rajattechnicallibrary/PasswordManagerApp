import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, NavParams, AlertController, Events } from '@ionic/angular';
import { DatabaseService } from 'src/app/provider/database.service';
import { Router } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-categorie-activity',
  templateUrl: './categorie-activity.page.html',
  styleUrls: ['./categorie-activity.page.scss'],
})

export class CategorieActivityPage implements OnInit {
  cat_id;
  name;
  where;
  constructor(
    public navCtrl: NavController,
    public database: DatabaseService,
    public popoverController: PopoverController,
    public navParams: NavParams,
    public alertController: AlertController,
    private router: Router,
    public events: Events



  ) {
    this.cat_id = this.navParams.get('cat_id');
    this.name = this.navParams.get('name');
    this.where = this.navParams.get('where');
    console.log(this.cat_id)
  }

  ngOnInit() {
  }

  popOverMenu(type?) {

    if (type == 'view') {
      this.popoverController.dismiss()
      this.navCtrl.navigateForward('/view-categories')
    } else if (type == 'delete') {
      this.presentAlert(this.name, this.cat_id);
    } else if (type == 'edit') {
      localStorage.setItem("cat_edit_id", this.cat_id)
      this.popoverController.dismiss()
      this.navCtrl.navigateForward('/add-categories')
    }
    // this.navCtrl.navigateForward('/add-categories')
  } 

  async presentAlert(name?, id?) {
    const confirm = await this.alertController.create({
      //header: 'confirm',
      message: 'Are you sure want to delete ' + name + " ?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("cancel")
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.database.deleteCategoryFromTable(id).then((res) => {
              this.events.publish('fromPopoverEvent');
              this.popoverController.dismiss()
              this.router.navigate(['/categories'])
            }).catch((err) => {
              console.log("62", err)
            })
          },
        },
      ],
    })
    await confirm.present();
  }


  popOverMenuFor(type?) {
    this.popoverController.dismiss()
    if (type == 'view') {
      this.popoverController.dismiss()
      this.navCtrl.navigateForward('/view-password')

    } else if (type == 'delete') {
      this.CatpresentAlert(this.name, this.cat_id);
    } else if (type == 'Edit') {
      localStorage.setItem("pwd_id", this.cat_id)
      this.popoverController.dismiss()
      this.navCtrl.navigateForward('/add-detail')
    }
  }

  async CatpresentAlert(name?, id?) {
    const confirm = await this.alertController.create({
      //header: 'confirm',
      message: 'Are you sure want to delete ' + name + " ?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("cancel")
          },
        },
        {
          text: 'OK',
          handler: () => {
            this.database.deleteListFromTable(id).then((res) => {
              this.events.publish('Event_list');
              this.popoverController.dismiss()
              this.router.navigate(['/list'])
            }).catch((err) => {
              console.log("62", err)
            })
          },
        },
      ],
    })
    await confirm.present();
  }




}
