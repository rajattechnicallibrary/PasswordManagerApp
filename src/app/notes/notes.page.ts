import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../provider/database.service';
import { LoggerService } from '../provider/logger.service';
import { BridgeService } from '../provider/bridge.service';
import { NavController, Events } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ListPage } from '../notes/list/list.page';
import * as moment from "moment";
@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {
  fileName: any = 'NotesPage';
  randomData: any = false;
  Moment: any = moment;
  constructor(
    public database: DatabaseService,
    private log: LoggerService,
    public bridge: BridgeService,
    public navCtrl: NavController,
    public modalController: ModalController,
    public events: Events,

  ) { }

  ngOnInit() {
    this.loadPage();
    console.log(this.randomData)
  }

  loadPage() {
    //  console.log("loadPage","32")
    this.database.getNotes().then((res) => {
      console.log(res)
      this.randomData = res
    }).catch((err) => {
      console.log(err)
    })
  }

  async mynotes() {
    const modal = await this.modalController.create({
      component: ListPage
    });
    this.events.subscribe('loadMyNotes', () => {
      this.loadPage();
    });
    return await modal.present();
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
    console.log(this.fileName, 'ionViewWillEnter')

  }

  ionViewWillUnload() {
    console.log(this.fileName, 'ionViewWillUnload')

  }

  delete(id) {
    console.log(id)
    this.database.deleteNotes(id).then((res) => {
      this.loadPage()
      this.bridge.showErrorMsgByToast("Notes Deleted Successfully!!!", 'bottom');
    }).catch((err) => {
      console.log(err)
    })
  }

 async viewMyNotes(id) {
    const modal = await this.modalController.create({
      component: ListPage,
      componentProps: {
        'viewnotes': 'yes',
        'id':id
      }
    });
    this.events.subscribe('loadMyNotes', () => {
      this.loadPage();
    });
    return await modal.present();
  }

  checkMyVaild(date) {
    if (date == null) {
      return false;
    } else {
      return moment(date, 'DD-MM-YYYY hh:mm A').format('hh:mm A')
    }
  }
}
