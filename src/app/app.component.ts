import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard',  url: '/home', image: "assets/icon/home.png" },
    { title: 'Add Detail',  url: '/add-detail', image: "assets/icon/add.png" },
    { title: 'Secure List',  url: '/list', image: "assets/icon/list.png" },
    { title: 'Change Password',  url: '/change-password', image: "assets/icon/change_password.png" },
    { title: 'Share',  url: '/contact-us', image: "assets/icon/share.png" },
    { title: 'Contact Us',  url: '/contact-us', image: "assets/icon/contactus.png" },
    { title: 'About Us',  url: '/about-us', image: "assets/icon/aboutus.png" },
    { title: 'Legal Terms',  url: '/legal-terms', image: "assets/icon/legal.png" },
    { title: 'FAQ',  url: '/faq', image: "assets/icon/faq.png" },
    { title: 'Settings',  url: '/settings', image: "assets/icon/settings.png" },    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
