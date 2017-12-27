import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GoatPage } from '../pages/goat/goat.page';
import { Goat } from '../pages/goat/goat';

import { BuyAGoatPage } from '../pages/buy-a-goat/buy-a-goat';
import { GoatInformationPage } from '../pages/goat-information/goat-information';
import { SellAGoatPage } from '../pages/sell-a-goat/sell-a-goat';
import { BreedsPage } from '../pages/breeds/breeds';
import { UpdatePage } from '../pages/update/update';
import { BreedsInfoPage } from '../pages/breeds-info/breeds-info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GoatPage,
    BuyAGoatPage,
    GoatInformationPage,
    SellAGoatPage,
    BreedsPage,
    UpdatePage,
    BreedsInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GoatPage,
    BuyAGoatPage,
    GoatInformationPage,
    SellAGoatPage,
    BreedsPage,
    UpdatePage,
    BreedsInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
