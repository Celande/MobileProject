import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sell-a-goat',
  templateUrl: 'sell-a-goat.html',
})
export class SellAGoatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellAGoatPage');
  }

  update(){
  
  }
}
