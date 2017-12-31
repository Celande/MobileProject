import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GoatsViewModel } from '../pages/viewmodel/goats/goats.viewmodel';
import { AddGoatViewModel } from '../pages/viewmodel/add_goat/add.goat.viewmodel';
import { BreedsViewModel } from '../pages/viewmodel/breeds/breeds.viewmodel';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = GoatsViewModel;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
