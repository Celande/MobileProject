import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { UpdateGoatService } from './update.goat.service';
import { BreedModel } from '../../model/breed';
import { GoatModel } from '../../model/goat';
import { GoatsViewModel } from '../goats/goats.viewmodel';
import { GoatInfoViewModel } from '../goat_info/goat.info.viewmodel';

import { PriceValidator } from '../validators/price.validator';

// https://www.gajotres.net/ionic-2-how-o-create-and-validate-forms/2/

@Component({
  selector: 'page-update-goat',
  templateUrl: '../../view/update_goat/update_goat.html',
  providers: [UpdateGoatService]
})
export class UpdateGoatViewModel{

  mode = 'Observable';
  goatForm: FormGroup;
  goat: GoatModel;
  breeds: BreedModel[];
  apiUrl: string = this.updateGoatService.apiUrl;
  private id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private updateGoatService: UpdateGoatService,
    private formBuilder: FormBuilder
  ) {
    this.id = navParams.get('id');
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.getBreeds();
    this.showGoat(this.id);
  }

  getBreeds() {
    this.updateGoatService.getBreeds()
    .subscribe(
      breeds  => this.breeds = breeds,
      error =>  console.error(error)
    );
  }

  updateFormBuilder(){
    if(this.goat){
      this.goatForm = this.formBuilder.group
      (
        {
          id: [this.goat.id],
          img_id: [this.goat.img_id],
          name: [this.goat.name, Validators.required],
          price: [
            this.goat.price,
            Validators.compose([
              PriceValidator.isValid,
              Validators.required
            ])
          ],
          gender: [this.goat.gender, Validators.required],
          breed_id: [this.goat.breed_id, Validators.required],
          breed_name: [''],
          localisation: [this.goat.localisation, Validators.required],
          birthdate: [this.goat.birthdate, Validators.required],
          description: [this.goat.description],
          identification:
          [
            this.goat.identification,
            Validators.compose(
              [
                Validators.maxLength(17),
                Validators.pattern('[A-Z]{2,3}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{5}'),
                Validators.required
              ]
            )
          ]
        }
      );
      console.log("birthdate = " + this.goatForm.value.birthdate);
    } else {
      this.goatForm = this.formBuilder.group({});
    }
  }

  showGoat(id: number) {
    this.updateGoatService.show(id)
    .subscribe(
      goat => {
        console.log("success");
        this.goat = goat;
        this.updateFormBuilder();
      },
      error => {
        console.error(error);
      }
    );
  }

  updateGoat() {
    if (!this.goatForm || !this.goatForm.valid) {
      console.log("Invalid Form");
      return;
    }
    this.updateGoatService.update(this.goatForm)
    .subscribe(
      goat => {
        console.log("success "+goat);
        this.updateToast();
        this.openGoatInfoViewModel();
      },
      error => {
        console.error(error);
      }
    );
  }

  saveGoat(){
    console.log(this.goatForm.value);
    if(this.goatForm.value.breed_id == 0){
      this.breedAlert();
    } else {
      this.updateGoat();
    }
  }

  breedAlert() {
    let alert = this.alertCtrl.create({
      title: 'Breed',
      message: 'Please, choose the name of your breed.',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            this.goatForm.value.breed_name = data.name;
            console.log('Breed name = ' + this.goatForm.value.breed_name);
            this.updateGoat();
          }
        }
      ]
    });
    alert.present();
  }

  openGoatInfoViewModel(){
    console.log("Open GoatInfoViewModel");
    this.navCtrl
    .setRoot(GoatsViewModel, {id: this.id})
    .then(
      ()=> {
        this.navCtrl.popToRoot();
        this.navCtrl.push(GoatInfoViewModel, {id: this.id});
      }
    );
  }

  updateToast() {
    let toast = this.toastCtrl.create({
      message: 'Goat updated!',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
