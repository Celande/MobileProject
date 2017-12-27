import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoatInformationPage } from '../goat-information/goat-information';
import { GoatService } from './goat.service';
import { GoatInterface } from './goat';

@IonicPage()
@Component({
  selector: 'page-buy-a-goat',
  templateUrl: 'buy-a-goat.html',
  providers: [GoatService]
})
export class BuyAGoatPage implements OnInit {

  mode = 'Observable';
  goats: GoatInterface[] = null;
  apiUrl: string = this.goatService.apiUrl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private goatService: GoatService) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.getGoats();
  }

  private getGoats(){

    this.goatService.getGoats()
                   .subscribe(
                     goats => this.goats = goats,
                     error =>  console.log(error));
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
