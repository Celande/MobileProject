import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AddGoatService } from './add.goat.service';
import { BreedModel } from '../../model/breed';
import { GoatsViewModel } from '../goats/goats.viewmodel';

@Component({
  selector: 'page-add-goat',
  templateUrl: '../../view/add_goat/add_goat.html',
  providers: [AddGoatService]
})
export class AddGoatViewModel {

  mode = 'Observable';
  goatForm: FormGroup;
  breeds: BreedModel[];
  apiUrl: string = this.addGoatService.apiUrl;
  today: Date;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private addGoatService: AddGoatService,
    private formBuilder: FormBuilder) {
      this.goatForm = this.formBuilder.group({
        name: ['', Validators.required],
        price: [
            this.goat.price,
            Validators.compose([
              PriceValidator.isValid,
              Validators.required
            ])
          ],
        gender: ['', Validators.required],
        breed_id: ['', Validators.required],
        breed_name: [''],
        localisation: ['', Validators.required],
        birthdate: ['', Validators.required],
        description: [''],
        identification: [
          '',
          Validators.compose(
            [
              Validators.maxLength(17),
              Validators.pattern('[A-Z]{2,3}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{5}'),
              Validators.required
            ]
          )
        ]
      });
    }

    ngOnInit() {
      console.log("ngOnInit");
      this.getBreeds();
    }

    getBreeds() {
      this.addGoatService.getBreeds()
      .subscribe(
        breeds  => this.breeds = breeds,
        error =>  console.error(error)
      );
    }

    addGoat() {
      if (!this.goatForm || !this.goatForm.valid) { return; }
      this.addGoatService.create(this.goatForm)
      .subscribe(
        goat => {
          console.log("success "+goat);
          this.addToast();
          this.openGoatsViewModel();
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
        this.addGoat();
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
              this.addGoat();
            }
          }
        ]
      }
    );
    alert.present();
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

  addToast() {
  let toast = this.toastCtrl.create({
    message: 'Goat added!',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
