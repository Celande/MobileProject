import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { GoatInformationService } from './goat-information.service';
import { GoatInterface } from '../buy-a-goat/goat';
import { BreedInfoPage } from '../breed-info/breed-info';

import { UpdatePage } from '../update/update';


@IonicPage()
@Component({
  selector: 'page-goat-information',
  templateUrl: 'goat-information.html',
  providers: [GoatInformationService]
})
export class GoatInformationPage {

  mode = 'Observable';
  goat: GoatInterface;
  apiUrl: string = this.goatInformationService.apiUrl;
  private id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private goatInformationService: GoatInformationService)
    { this.id = navParams.get('id'); }

    ngOnInit() {
      console.log("ngOnInit");
      console.log("id = " + this.id);
      this.getGoat(this.id);
    }


  private getGoat(id: number){
    this.goatInformationService.getGoat(id)
                   .subscribe(
                     goat => this.goat = goat,
                     error =>  console.log(error));
  }

  openBreedInfoPage(id: number){
    console.log("Open BreedInfoPage");
    this.navCtrl.push(BreedInfoPage, {id: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoatInformationPage');
  }

  openUpdatePage(id: number){
          console.log("Open UpdatePage");
          this.navCtrl.push(UpdatePage, {id: id});
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
