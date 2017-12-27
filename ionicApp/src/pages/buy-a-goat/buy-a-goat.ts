import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoatInformationPage } from '../goat-information/goat-information';


@IonicPage()
@Component({
  selector: 'page-buy-a-goat',
  templateUrl: 'buy-a-goat.html',
})
export class BuyAGoatPage {

  items: Array<{title: string, note: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for(let i = 0; i < 10; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(GoatInformationPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyAGoatPage');
  }

}
