import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoatInfoViewModel } from './goat.info.viewmodel';

@NgModule({
  declarations: [
    GoatInfoViewModel,
  ],
  imports: [
    IonicPageModule.forChild(GoatInfoViewModel),
  ],
})
export class GoatInfoViewModelModule {}
