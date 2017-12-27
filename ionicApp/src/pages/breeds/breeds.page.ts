import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BreedsService } from './breeds.service';
import { BreedInterface } from './breeds';

import { BreedsInfoPage } from '../breeds-info/breeds-info';

@Component({
  selector: 'page-breeds',
  templateUrl: 'breeds.html',
  providers: [BreedsService]
})
export class BreedsPage implements OnInit {

  mode = 'Observable';
  breeds: BreedInterface[] = null;
  apiUrl: string = this.breedsService.apiUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, private breedsService: BreedsService) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.getBreeds();
  }

  private getBreeds(){

    this.breedsService.getBreeds()
                   .subscribe(
                     breeds => this.breeds = breeds,
                     error =>  console.log(error));
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
