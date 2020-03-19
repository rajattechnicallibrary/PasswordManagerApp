import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, Events, ModalController } from '@ionic/angular';
import { DatabaseService } from '../provider/database.service';
import { CategorieActivityPage } from '../page/categorie-activity/categorie-activity.page';
import { BridgeService } from '../provider/bridge.service';
import { ViewPage } from '../page/view/view.page';
import * as moment from "moment";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  fileName = 'Categories';
  catArray: any
  lengthofCat: boolean = false
  Moment: any = moment;

  constructor(
    public navCtrl: NavController,
    public database: DatabaseService,
    public popoverController: PopoverController,
    public bridge: BridgeService,
    public events: Events,
    public modalController: ModalController



  ) { this.loadPage(); }

  ngOnInit() {
    localStorage.removeItem("cat_id");
    this.loadPage();
  }

  loadPage() {
    this.lengthofCat = false;
    this.catArray = '';
    this.database.getCategories().then((res: any) => {
      console.log("22", res)
      if (res.length > 0) this.lengthofCat = true; this.catArray = res
    }).catch((err) => {
      //console.log("25", err)
      this.catArray = ''
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
  async popOver(ev: any, id, name?) {
    const popover = await this.popoverController.create({
      component: CategorieActivityPage,
      event: ev,
      translucent: true,
      showBackdrop: true,
      componentProps: { cat_id: id, name: name, where: 'cat' }
    });

    localStorage.setItem("cat_id", id)
    this.events.subscribe('fromPopoverEvent', () => {
      this.loadPage();
    });
    this.events.subscribe('presentModal', () => {
      this.presentModal();
    });

    return await popover.present();
  }
  addCat() {
    this.events.subscribe('fromPopoverEvent', () => {
      this.loadPage();
    });
    this.navCtrl.navigateForward('/add-categories')
  }

  async presentModal() {
    this.navCtrl.navigateForward('/view-categories')
  }

  viewTap(id) {
    localStorage.setItem("cat_id", id)
    this.navCtrl.navigateForward('/view-categories')
  }

  checkMyVaild(date) {
    
    if (date == null) {
      return false;
    } else {
      return moment(date, 'DD-MM-YYYY hh:mm A').format('hh:mm A')
      // return true;

    }
   
  }
}
