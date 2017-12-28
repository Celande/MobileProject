import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreedInfoPage } from './breed-info';

@NgModule({
  declarations: [
    BreedInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BreedInfoPage),
  ],
})
export class BreedInfoPageModule {}
