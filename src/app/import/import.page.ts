import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { BridgeService } from '../provider/bridge.service';
import { DatabaseService } from '../provider/database.service';
import * as moment from "moment";

declare var cordova: any;
declare var window: any;

@Component({
  selector: 'app-import',
  templateUrl: './import.page.html',
  styleUrls: ['./import.page.scss'],
})
export class ImportPage implements OnInit {
  Moment: any = moment;
  Isprogress: Boolean = false;
  myexportedData = [];
  constructor(
    public file: File,
    public bridge: BridgeService,
    public database: DatabaseService,
  ) { }

  ngOnInit() {
    if (localStorage.getItem("importedData")) {
      this.myexportedData = JSON.parse(localStorage.getItem("importedData"))
    }
  }

  checkMyVaild(date) {
    if (date == null) {
      return;
    } else {
      return moment(date, 'DD-MM-YYYY hh:mm A').format('DD-MM-YYYY hh:mm A')
    }
  }

  imported() {

    this.bridge.activeLoader({ msg: "Importing Your Data From Old App", duration: 5000 })
    this.Isprogress = true;
    let catdesc = ''
    let catName = "Imported Data"
    let data = { catdesc, catName, user_id: this.bridge.getUserData().id }
    let mylastId
    this.database.checkCategory(data).then((rep: any) => {
      // console.log(rep.id)
      if (rep.length == 0) {
        this.database.addcategory(data).then((rep: any) => {
          mylastId = rep.insertId
        }).catch((err) => {
          console.log(err)
        });
      } else {
        mylastId = rep.id
        console.log(mylastId)
      }
    }).catch((e) => {
      console.log(e)
    });


    setTimeout(() => {
      this.bridge.activeLoader({ msg: "Importing Your Data From Old App", duration: 5000 })
      this.database.deleteAllDataFromCat(mylastId);
      this.file.readAsText(cordova.file.externalRootDirectory + '/.BackupSubtitle', 'jqdRzBHm0D18A5B2gY6qDcKvQFGCzbt3Vjy').then((res) => {
        //  console.log(JSON.parse(res))
        let mydata = JSON.parse(res);
        if (mydata.length > 0) {
          this.bridge.activeLoader({ msg: "Importing Your Data From Old App", duration: 5000 })

          for (var i = 0; i < mydata.length; i++) {
            console.log(mydata[i])
            let account_name = mydata[i].type
            let account_password = mydata[i].password
            let account_username = mydata[i].username
            let account_cat = mylastId
            let account_url = ''
            let account_expiry = ''
            let account_hint = ''
            let account_desc = mydata[i].type
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

            console.log(data)

            this.database.addpassword(data).then((res) => {

            }).catch(() => {

            });
          }
          setTimeout(() => {
            let myday = this.bridge.getDate()
            this.myexportedData.push({
              myday
            })
            let myfinalData = JSON.stringify(this.myexportedData)
            localStorage.setItem("importedData", myfinalData)
            this.Isprogress = false
            this.bridge.presentAlert("All Your Data Imported added successfully !!!")
          }, 3000)

        }
      })
    }, 3000)
  }
  // console.log(mylastId)
  // this.file.readAsText(cordova.file.externalRootDirectory + '/.BackupSubtitle', 'jqdRzBHm0D18A5B2gY6qDcKvQFGCzbt3Vjy').then((res) => {
  //   console.log(JSON.parse(res))
  //   let mydata = JSON.parse(res);
  //   if (mydata.length > 0) {
  //     for (var i = 0; i < mydata.length; i++) {
  //       let account_name = mydata.type
  //       let account_password = mydata.password
  //       let account_username = mydata.username
  //       let account_cat = mylastId
  //       let account_url = ''
  //       let account_expiry = ''
  //       let account_hint = ''
  //       let account_desc = ''
  //       let data = {
  //         account_name,
  //         account_password,
  //         account_cat,
  //         account_url,
  //         account_expiry,
  //         account_hint,
  //         account_desc,
  //         account_username,
  //         user_id: this.bridge.getUserData().id
  //       }

  //       this.database.addpassword(data).then((res) => {

  //       }).catch(() => {

  //       });
  //     }
  //   this.bridge.presentAlert("All Your Data Imported added successfully !!!")

  //   }
  // }).catch((err) => {
  //   console.log(err)
  // })



}
