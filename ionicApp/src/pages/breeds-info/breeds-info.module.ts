import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreedsInfoPage } from './breeds-info';

@NgModule({
  declarations: [
    BreedsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BreedsInfoPage),
  ],
})
export class BreedsInfoPageModule {}
