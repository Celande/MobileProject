import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { UpdatePage } from '../update/update';


@IonicPage()
@Component({
  selector: 'page-goat-information',
  templateUrl: 'goat-information.html',
})
export class GoatInformationPage {

  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoatInformationPage');
  }

  openUpdatePage(){
  this.navCtrl.push(UpdatePage);
  
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Warn!!!',
      message: 'Are you sure to remove?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
