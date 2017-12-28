import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellGoatService } from './sell.goat.service';

@IonicPage()
@Component({
  selector: 'page-sell-a-goat',
  templateUrl: 'sell-a-goat.html',
  providers: [SellGoatService]
})
export class SellAGoatPage {

  mode = 'Observable';
  goat = {};
  apiUrl: string = this.sellGoatService.apiUrl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sellGoatService: SellGoatService) {}

  addGoat(name: string) {
  if (!name) { return; }
  this.sellGoatService.create(name)
                   .subscribe(
                     goat  => this.goat = goat,
                     error =>  console.log(error));
}

logForm() {
    console.log(this.goat)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellAGoatPage');
  }

  update(){

  }
}
