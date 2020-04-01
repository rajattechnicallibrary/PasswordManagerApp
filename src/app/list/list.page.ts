import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, Events } from '@ionic/angular';
import { DatabaseService } from '../provider/database.service';
import { BridgeService } from '../provider/bridge.service';
import { CategorieActivityPage } from '../page/categorie-activity/categorie-activity.page';
import * as moment from "moment";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  moment: any = moment;
  catArray: any
  lengthofCat: boolean = false
  tapToOpen;
  fileName = 'ListPage'
  constructor(
    public navCtrl: NavController,
    public database: DatabaseService,
    public popoverController: PopoverController,
    public bridge: BridgeService,
    public events: Events,



  ) {
    this.loadPage(30);
    //console.log("30")
  }

  ngOnInit() {
    //console.log("34")

    this.events.publish('callagain')
    this.events.subscribe('callagain', () => {
      this.loadPage(39);
    });
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
    if (!this.tapToOpen) this.loadPage(69);
    console.log(this.fileName, 'ionViewWillEnter')

  }

  ionViewWillUnload() {
    console.log(this.fileName, 'ionViewWillUnload')

  }


  loadPage(no) {
    console.log("line Number", no)
    this.tapToOpen = '';
    this.lengthofCat = false;
    this.catArray = '';
    console.log("list 35", localStorage.getItem("tapToOpen"))
    if (localStorage.getItem("tapToOpen")) {
      this.tapToOpen = localStorage.getItem("tapToOpen");
      // localStorage.removeItem("tapToOpen")
    }
    this.database.getPasswordList(this.tapToOpen).then((res: any) => {
      console.log("22", res)
      if (res.length > 0) this.lengthofCat = true; this.catArray = res; localStorage.removeItem("pass_id"); localStorage.removeItem("tapToOpen")
    }).catch((err) => {
      //console.log("25", err)
      this.catArray = ''
    })
  }

  async popOver(ev: any, id, name?) {

    localStorage.setItem("pass_id", id)

    this.events.subscribe('Event_list', () => {
      this.loadPage(104);
    });

    const popover = await this.popoverController.create({
      component: CategorieActivityPage,
      event: ev,
      translucent: true,
      showBackdrop: true,
      componentProps: { cat_id: id, name: name, where: 'list' }
    });


    return await popover.present();
  }
  addpassword() {
    this.events.subscribe('Add_Event_list', () => {
      this.loadPage(120);
    });
    this.navCtrl.navigateForward('/add-detail')
  }
  viewpassword(id) {
    localStorage.setItem("pass_id", id)

    this.events.subscribe('Event_list', () => {
      this.loadPage(128);
    });
    this.navCtrl.navigateForward('/auth-password')
  }

}       
