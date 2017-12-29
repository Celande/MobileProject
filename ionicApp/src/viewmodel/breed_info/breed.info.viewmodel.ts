import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { BreedInfoService } from './breed.info.service';
import { BreedModel } from '../../model/breed';

@Component({
  selector: 'page-breed-info',
  templateUrl: '../../view/breed_info/breed_info.html',
  providers: [BreedInfoService]
})
export class BreedInfoViewModel {

  mode = 'Observable';
  breed: BreedModel;
  apiUrl: string = this.breedInfoService.apiUrl;
  private id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private breedInfoService: BreedInfoService
  )
  { this.id = navParams.get('id'); }

  ngOnInit() {
    console.log("ngOnInit");
    this.getBreed(this.id);
  }

  private getBreed(id: number){
    this.breedInfoService.getBreed(id)
    .subscribe(
      breed => this.breed = breed,
      error =>  console.error(error)
    );
  }

}
