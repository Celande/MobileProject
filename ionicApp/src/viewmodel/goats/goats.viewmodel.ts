import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { GoatInfoViewModel } from '../goat_info/goat.info.viewmodel';
import { GoatsService } from './goats.service';
import { GoatModel } from '../../model/goat';
import { UpdateGoatViewModel } from '../update_goat/update.goat.viewmodel';

@Component({
  selector: 'page-goats',
  templateUrl: '../../view/goats/goats.html',
  providers: [GoatsService]
})
export class GoatsViewModel implements OnInit {

  mode = 'Observable';
  goats: GoatModel[] = null;
  apiUrl: string = this.goatsService.apiUrl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private goatsService: GoatsService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.getGoats();
  }

  private getGoats(){

    this.goatsService.getGoats()
    .subscribe(
      goats => this.goats = goats,
      error =>  console.error(error)
    );
  }

  removeGoat(id: number){
    this.goatsService.removeGoat(id)
    .subscribe(
      data => {
        console.log("removed");
        this.removeAlert();
        this.openGoatsViewModel();
      },
      error =>  console.error(error)
    );
  }

  openGoatInfoViewModel(id: number){
    console.log("Open GoatInfoViewModel");
    this.navCtrl.push(GoatInfoViewModel, {id: id});
  }

  openUpdateGoatViewModel(id: number){
    console.log("Open UpdateGoatViewModel");
    this.navCtrl.push(UpdateGoatViewModel, {id: id});
  }

  openGoatsViewModel(){
    console.log("Open GoatsViewModel");
    //this.navCtrl.push(GoatsViewModel);
    this.navCtrl
    .setRoot(GoatsViewModel)
    .then(()=> {
      this.navCtrl.popToRoot();
    });
  }

  removeConfirm(id: number) {
    let confirm = this.alertCtrl.create({
      title: 'Warning!',
      message: 'Are you sure to remove this goat?',
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
            this.removeGoat(id);
          }
        }
      ]
    });
    confirm.present();
  }

  removeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Goat removed!',
      buttons: ['OK']
    });
    alert.present();
  }

}
