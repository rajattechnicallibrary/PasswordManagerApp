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

  constructor(public platform: Platform, private iap2: InAppPurchase2) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      this.setup();
    })
  }
  setup() {
    this.iap2.verbosity = this.iap2.DEBUG;
    this.iap2.register({
      id: 'password_250',
      type: this.iap2.CONSUMABLE
    });
    this.product = this.iap2.get('password_250');
    alert('Purchase Succesful ' + JSON.stringify(this.product));
    this.registerHandlersForPurchase('password_250');
    // restore purchase
    this.iap2.refresh();
  }

  checkout() {
    this.registerHandlersForPurchase('password_250');
    try {
      let product = this.iap2.get('password_250');
      alert('Product Info: ' + JSON.stringify(product));
      this.iap2.order('password_250').then((p) => {
        alert('Purchase Succesful ' + JSON.stringify(p));
      }).catch((e) => {
        alert('Error Ordering From Store' + e);
      });
      alert('45');
    } catch (err) {
      alert('Error Ordering 46' + JSON.stringify(err));
    }
  }

  registerHandlersForPurchase(productId) {
    let self = this.iap2;
    this.iap2.when(productId).updated(function (product) {
      alert('Purchase Succesful ' + JSON.stringify(product));
      if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
        product.finish();
      }
    });
    this.iap2.when(productId).registered((product: IAPProduct) => {
      alert(` owned `  + JSON.stringify(product));
    });
    this.iap2.when(productId).owned((product: IAPProduct) => {
      alert("wned"  + JSON.stringify(product));
      product.finish();
    });
    this.iap2.when(productId).approved((product: IAPProduct) => {
      alert('approved' + JSON.stringify(product));
      product.finish();
    });
    this.iap2.when(productId).refunded((product: IAPProduct) => {
      alert('refunded' + JSON.stringify(product));
    });
    this.iap2.when(productId).expired((product: IAPProduct) => {
      alert('expired' + JSON.stringify(product));
    });
  }
}
