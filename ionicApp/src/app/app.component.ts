import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoatsViewModel } from '../viewmodel/goats/goats.viewmodel';
import { AddGoatViewModel } from '../viewmodel/add_goat/add.goat.viewmodel';
import { BreedsViewModel } from '../viewmodel/breeds/breeds.viewmodel';

@Component({
  templateUrl: './app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GoatsViewModel;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Buy A Goat', component: GoatsViewModel },
      { title: 'Sell A Goat', component: AddGoatViewModel },
      { title: 'Breeds', component: BreedsViewModel }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
