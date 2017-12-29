import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MyApp } from './app.component';
import { GoatsViewModel } from '../viewmodel/goats/goats.viewmodel';
import { GoatInfoViewModel } from '../viewmodel/goat_info/goat.info.viewmodel';
import { AddGoatViewModel } from '../viewmodel/add_goat/add.goat.viewmodel';
import { BreedsViewModel } from '../viewmodel/breeds/breeds.viewmodel';
import { UpdateGoatViewModel } from '../viewmodel/update_goat/update.goat.viewmodel';
import { BreedInfoViewModel } from '../viewmodel/breed_info/breed.info.viewmodel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    GoatsViewModel,
    GoatInfoViewModel,
    AddGoatViewModel,
    BreedsViewModel,
    UpdateGoatViewModel,
    BreedInfoViewModel
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
    GoatsViewModel,
    GoatInfoViewModel,
    AddGoatViewModel,
    BreedsViewModel,
    UpdateGoatViewModel,
    BreedInfoViewModel
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
