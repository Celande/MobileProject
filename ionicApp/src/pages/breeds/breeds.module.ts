import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreedsPage } from './breeds';

@NgModule({
  declarations: [
    BreedsPage,
  ],
  imports: [
    IonicPageModule.forChild(BreedsPage),
  ],
})
export class BreedsPageModule {}
