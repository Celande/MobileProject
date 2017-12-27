import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BreedsInfoPage } from '../breeds-info/breeds-info';

@IonicPage()
@Component({
  selector: 'page-breeds',
  templateUrl: 'breeds.html',
})
export class BreedsPage {

  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.items = [];
    for(let i = 0; i < 10; i++) {
      this.items.push({
        title: 'Goat Name ' + i,
        note: 'This is item #' + i
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreedsPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(BreedsInfoPage, {
      item: item
    });
  }
}
