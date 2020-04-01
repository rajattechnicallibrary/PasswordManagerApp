import { Component, OnInit } from '@angular/core';
import { Events, NavController, PopoverController, ModalController, NavParams } from '@ionic/angular';
import { DatabaseService } from 'src/app/provider/database.service';
import { BridgeService } from 'src/app/provider/bridge.service';
import * as moment from "moment";
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  Moment: any = moment;
  fileName = 'ListPage';
  IsnotesSaved: boolean = false;
  lastId: number;
  randomData: any = false;
  myday;
  notes = {
    title: '',
    content: ''

  }
  constructor(
    public events: Events,
    public navCtrl: NavController,
    public database: DatabaseService,
    public popoverController: PopoverController,
    public bridge: BridgeService,
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
    //console.log(this.navParams.get('viewnotes'))
    this.lastId = this.navParams.get('id');
    if (this.navParams.get('viewnotes') == 'yes') {
      this.database.getNotesById(this.lastId).then((res: any) => {
        this.notes = {
          title: res.notes_title,
          content: res.notes_content
        }
        this.IsnotesSaved = true;
        this.myday = res.updated_date
      }).catch((err) => {
        //console.log(err)
      })
    }
  }

  ionViewCanEnter() {
    //console.log(this.fileName, 'ionViewCanEnter')
  }

  ionViewCanLeave() {
    //console.log(this.fileName, 'ionViewCanLeave')

  }

  ionViewDidEnter() {
    //console.log(this.fileName, 'ionViewDidEnter')

  }

  ionViewDidLeave() {
    this.events.publish('loadMyNotes');
    this.savedMyData();
    //console.log(this.fileName, 'ionViewDidLeave')

  }

  ionViewDidLoad() {
    //console.log(this.fileName, 'ionViewDidLoad')

  }

  ionViewWillEnter() {
    //console.log(this.fileName, 'ionViewWillEnter')

  }

  ionViewWillUnload() {
    //console.log(this.fileName, 'ionViewWillUnload')

  }

  savedMyData() {
    if (this.notes.title == '' && this.notes.content == '') {
      this.bridge.showErrorMsgByToast("Title & Description is Empty, Note not saved", 'bottom');
      return;
    }
    this.myday = this.bridge.getDate()
    this.IsnotesSaved = false;
    if (this.lastId) {
      let data = {
        title: this.notes.title,
        content: this.notes.content,
        last_id: this.lastId
      }
      //console.log(data)
      this.database.updateMyNotes(data).then((res: any) => {
        //console.log(res.insertId);
        this.IsnotesSaved = true
      }).catch((err) => {
      })
    } else {
      let data = {
        title: this.notes.title,
        content: this.notes.content,
        user_id: this.bridge.getUserData().id
      }
      //console.log(data)
      this.database.saveMyNotes(data).then((res: any) => {
        this.lastId = res.insertId
        this.IsnotesSaved = true
      }).catch((err) => {

      })
    }
    ////console.log(this.myday)
  }

}
