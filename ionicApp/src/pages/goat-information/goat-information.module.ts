import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoatInformationPage } from './goat-information';

@NgModule({
  declarations: [
    GoatInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(GoatInformationPage),
  ],
})
export class GoatInformationPageModule {}
