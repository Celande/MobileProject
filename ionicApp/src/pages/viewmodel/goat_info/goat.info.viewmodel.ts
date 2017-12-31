import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';

import { GoatInfoService } from './goat.info.service';
import { GoatModel } from '../../model/goat';
import { BreedInfoViewModel } from '../breed_info/breed.info.viewmodel';
import { GoatsViewModel } from '../goats/goats.viewmodel';
import { UpdateGoatViewModel } from '../update_goat/update.goat.viewmodel';

@Component({
  selector: 'page-goat-information',
  templateUrl: '../../view/goat_info/goat_info.html',
  providers: [GoatInfoService]
})
export class GoatInfoViewModel {

  mode = 'Observable';
  goat: GoatModel;
  apiUrl: string = this.goatInfoService.apiUrl;
  private id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private goatInfoService: GoatInfoService
  )
  { this.id = navParams.get('id'); }

  ngOnInit() {
    console.log("ngOnInit");
    this.getGoat(this.id);
  }


  private getGoat(id: number){
    this.goatInfoService.getGoat(id)
    .subscribe(
      goat => this.goat = goat,
      error =>  console.error(error)
    );
  }

  removeGoat(id: number){
    this.goatInfoService.removeGoat(id)
    .subscribe(
      data => {
        console.log("removed");
        this.removeToast();
        this.openGoatsViewModel();
      },
      error =>  console.error(error)
    );
  }

  openBreedInfoViewModel(id: number){
    console.log("Open BreedInfoViewModel");
    this.navCtrl.push(BreedInfoViewModel, {id: id});
  }

  openUpdateGoatViewModel(id: number){
    console.log("Open UpdateGoatViewModel");
    this.navCtrl.push(UpdateGoatViewModel, {id: id});
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

  removeToast() {
    let toast = this.toastCtrl.create({
      message: 'Goat removed!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  openGoatsViewModel(){
    console.log("Open UpdateGoatViewModel");
    this.navCtrl
    .setRoot(GoatsViewModel)
    .then(()=> {
      this.navCtrl.popToRoot();
    });
  }
}
