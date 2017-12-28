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
import { BreedsPage } from '../pages/breeds/breeds.page';
import { UpdatePage } from '../pages/update/update';
import { BreedInfoPage } from '../pages/breed-info/breed-info';

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
    BreedInfoPage
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
    BreedInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
