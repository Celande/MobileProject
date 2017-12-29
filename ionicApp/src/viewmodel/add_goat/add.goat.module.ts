import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddGoatViewModel } from './add.goat.viewmodel';

@NgModule({
  declarations: [
    AddGoatViewModel,
  ],
  imports: [
    IonicPageModule.forChild(AddGoatViewModel),
  ],
})
export class AddGoatViewModelModule {}
