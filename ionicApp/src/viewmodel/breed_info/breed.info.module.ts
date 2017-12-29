import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreedInfoViewModel } from './breed.info.viewmodel';

@NgModule({
  declarations: [
    BreedInfoViewModel,
  ],
  imports: [
    IonicPageModule.forChild(BreedInfoViewModel),
  ],
})
export class BreedInfoViewModelModule {}
