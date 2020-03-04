import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController, AlertController, Events } from '@ionic/angular';
import { DatabaseService } from '../provider/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.page.html',
  styleUrls: ['./view-categories.page.scss'],
})
export class ViewCategoriesPage implements OnInit {
  lengthofCat;
  catArray;
  constructor(
    public navCtrl: NavController,
    public database: DatabaseService,
    public popoverController: PopoverController,
    // public navParams: NavParams,
    public alertController: AlertController,
    private router: Router,
    public events: Events
  ) { }

  ngOnInit() {
    this.loadPage();
  }
 
  loadPage(){
    let cat_id = localStorage.getItem('cat_id');
    localStorage.removeItem('cat_id');
    console.log(cat_id)
    this.database.getCategoriesById(cat_id).then((res: any) => {
      console.log(res)
      if (res.length > 0) this.lengthofCat = true; this.catArray = res
    }).catch((err) => {
      this.catArray = ''
    })
  }

  doBack(){
    this.navCtrl.navigateForward('/categories')

  }

}
