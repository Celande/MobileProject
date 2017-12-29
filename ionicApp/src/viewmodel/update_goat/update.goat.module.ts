import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateGoatViewModel } from './update.goat.viewmodel';

@NgModule({
  declarations: [
    UpdateGoatViewModel,
  ],
  imports: [
    IonicPageModule.forChild(UpdateGoatViewModel),
  ],
})
export class UpdateGoatViewModelModule {}
