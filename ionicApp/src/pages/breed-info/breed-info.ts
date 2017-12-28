import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { BreedInfoService } from './breed-info.service';
import { BreedInterface } from '../breeds/breeds';

@IonicPage()
@Component({
  selector: 'page-breed-info',
  templateUrl: 'breed-info.html',
  providers: [BreedInfoService]
})
export class BreedInfoPage {

  mode = 'Observable';
  breed: BreedInterface;
  apiUrl: string = this.breedInfoService.apiUrl;
  private id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private breedInfoService: BreedInfoService)
    { this.id = navParams.get('id'); }

    ngOnInit() {
      console.log("ngOnInit");
      this.getBreed(this.id);
    }

    private getBreed(id: number){
    this.breedInfoService.getBreed(id)
                   .subscribe(
                     breed => this.breed = breed,
                     error =>  console.log(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BreedInfoPage');
  }

}
