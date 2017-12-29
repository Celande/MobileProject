import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoatsViewModel } from './goats.viewmodel';

@NgModule({
  declarations: [
    GoatsViewModel,
  ],
  imports: [
    IonicPageModule.forChild(GoatsViewModel),
  ],
})
export class GoatsViewModelModule {}
