import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BreedsService } from './breeds.service';
import { BreedModel } from '../../model/breed';
import { BreedInfoViewModel } from '../breed_info/breed.info.viewmodel';

@Component({
  selector: 'page-breeds',
  templateUrl: '../../view/breeds/breeds.html',
  providers: [BreedsService]
})
export class BreedsViewModel implements OnInit {

  mode = 'Observable';
  breeds: BreedModel[] = null;
  apiUrl: string = this.breedsService.apiUrl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private breedsService: BreedsService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.getBreeds();
  }

  private getBreeds(){

    this.breedsService.getBreeds()
    .subscribe(
      breeds => this.breeds = breeds,
      error =>  console.error(error)
    );
  }

  openBreedInfoViewModel(id: number){
    console.log("Open BreedInfoViewModel");
    this.navCtrl.push(BreedInfoViewModel, {id: id});
  }
}
