import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { File } from "@ionic-native/file/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CategorieActivityPageModule } from './page/categorie-activity/categorie-activity.module';
import { ListPageModule } from './notes/list/list.module';
import { ViewPageModule } from './page/view/view.module';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { AppLauncher } from '@ionic-native/app-launcher/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule,
    IonicStorageModule.forRoot(),
    CategorieActivityPageModule,
    ViewPageModule,
    ListPageModule
    // TooltipsModule.forRoot(),
    // BrowserAnimationsModule
  ],
  providers: [
    StatusBar,
    AppLauncher,
    SplashScreen,
    SQLite,
    SQLitePorter,
    File,
    LocalNotifications,
    SqliteDbCopy, 
    AndroidPermissions,
    FingerprintAIO,
    Toast,
    EmailComposer,
    Clipboard,
    InAppPurchase2,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
