import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, Events } from '@ionic/angular';
import { DatabaseService } from '../provider/database.service';
import { BridgeService } from '../provider/bridge.service';
import { CategorieActivityPage } from '../page/categorie-activity/categorie-activity.page';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  catArray: any
  lengthofCat: boolean = false
  constructor(
    public navCtrl: NavController,
    public database: DatabaseService,
    public popoverController: PopoverController,
    public bridge: BridgeService,
    public events: Events,



  ) {
    this.loadPage();
  }

  ngOnInit() {
  }

  loadPage() {  
    this.lengthofCat = false;
    this.catArray = '';
    console.log("list 35", "res")
    this.database.getPasswordList().then((res: any) => {
      console.log("22", res)
      if (res.length > 0) this.lengthofCat = true; this.catArray = res
    }).catch((err) => {
      console.log("25", err)
      this.catArray = ''
    })
  }

  async popOver(ev: any, id, name?) {
    
      localStorage.setItem("pass_id",id)

    this.events.subscribe('Event_list', () => {
      this.loadPage();
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
      this.loadPage();
    });
    this.navCtrl.navigateForward('/add-detail')
  }
  viewpassword(id) {
    localStorage.setItem("pass_id",id)

    this.events.subscribe('Event_list', () => {
      this.loadPage();
    });
    this.navCtrl.navigateForward('/view-password')
  }
 
}
