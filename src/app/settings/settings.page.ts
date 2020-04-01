import { Component, OnInit } from '@angular/core';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  product: any;
  pid = 'password_250';
 
  constructor(public platform: Platform, private store: InAppPurchase2) { }

  ngOnInit() {
    this.Setup();
  }

  Setup() {
    this.store.verbosity = this.store.DEBUG;
    this.store.register({
      id: 'password_250',
      type: this.store.CONSUMABLE
    });
    this.product = this.store.get('password_250');
    //this.store.refresh();
  }

  checkout(){
    console.log(JSON.stringify(this.store.get(this.pid)));
  }

  refresh(){
    this.store.refresh()//
  } 

  registerHandlersForPurchase(){
   // this.store.refresh();
    this.store.order(this.pid)
    .then((r)=>{console.log(r)}).error((e)=>{console.log(e)})
    let self = this.store;
      this.store.when(this.pid).updated(function (product) {
        console.log('Purchase Succesful ' + JSON.stringify(product));
        if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
          product.finish();
        }
      });
      this.store.when(this.pid).registered((product: IAPProduct) => {
        console.log(` owned ` + JSON.stringify(product));
      });
      this.store.when(this.pid).owned((product: IAPProduct) => {
        console.log("wned" + JSON.stringify(product));
        product.finish();
      });
      this.store.when(this.pid).approved((product: IAPProduct) => {
        console.log('approved' + JSON.stringify(product));
        product.finish();
      });
      this.store.when(this.pid).refunded((product: IAPProduct) => {
        console.log('refunded' + JSON.stringify(product));
      });
      this.store.when(this.pid).expired((product: IAPProduct) => {
        console.log('expired' + JSON.stringify(product));
      });
  }
}
 