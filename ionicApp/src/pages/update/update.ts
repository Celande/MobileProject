import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UpdateGoatService } from './update.goat.service';
import { BreedInterface } from '../breeds/breeds';
import { GoatInterface } from '../buy-a-goat/goat';
import { BuyAGoatPage } from '../buy-a-goat/buy-a-goat';
import { GoatInformationPage } from '../goat-information/goat-information';

// https://www.gajotres.net/ionic-2-how-o-create-and-validate-forms/2/

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
  providers: [UpdateGoatService]
})
export class UpdatePage{

  mode = 'Observable';
  goatForm: FormGroup;
  goat: GoatInterface;
  breeds: BreedInterface[];
  apiUrl: string = this.updateGoatService.apiUrl;
  breedName: string = null;
  private id: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private viewCtrl: ViewController,
    private updateGoatService: UpdateGoatService,
    private formBuilder: FormBuilder) {
      this.id = navParams.get('id');
      //this.updateFormBuilder();
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
          error =>  console.log(error));
        }

        updateFormBuilder(){
          if(this.goat){
          this.goatForm = this.formBuilder.group({
        id: [this.goat.id],
        img_id: [this.goat.img_id],
      name: [this.goat.name, Validators.required],
      price: [this.goat.price, Validators.required],
      gender: [this.goat.gender, Validators.required],
      breed_id: [this.goat.breed_id, Validators.required],
      breed_name: [''],
      localisation: [this.goat.localisation, Validators.required],
      birthdate: [this.goat.birthdate, Validators.required],
      description: [this.goat.description],
      identification: [
        this.goat.identification,
          Validators.compose([Validators.maxLength(17),
            Validators.pattern('[A-Z]{2,3}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{5}'),
             Validators.required])
        ]
    });
    console.log("goatForm = " + this.goatForm.value);
  } else {
    this.goatForm = this.formBuilder.group({});
  }
        }

        showGoat(id: number) {
          console.log("id = " + this.id);
          this.updateGoatService.show(id)
          .subscribe(goat => {
            console.log("success");
            this.goat = goat;
            this.updateFormBuilder();
          }, error => {
            console.error(error);
          });
        }

        updateGoat() {
          console.log("bob 1");
          if (!this.goatForm || !this.goatForm.valid) {
            console.log("Invalid Form");
            return;
          }
          console.log("bob 2");
          this.updateGoatService.update(this.goatForm)
          .subscribe(goat => {
            console.log("success "+goat);
            this.updateAlert();
            this.openGoatInformationPage();
          }, error => {
            console.error(error);
          });
        }

        saveGoat(){
          console.log(this.goatForm.value);
          if(this.goatForm.value.breed_id == 0){
            this.breedAlert();
          } else {
            this.updateGoat(this.goatForm);
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
                  this.updateGoat(this.goatForm);
                }
              }
            ]
          });
          alert.present();
        }

        openGoatInformationPage(){
          console.log("Open GoatInformationPage");
          //this.navCtrl.push(GoatInformationPage, {id: this.id});
          /*
          this.navCtrl
      .push(GoatInformationPage, {id: this.id})
      .then(() => {
        // first we find the index of the current view controller:
        const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
        this.navCtrl.remove(index);
      });
      */
      this.navCtrl
      .setRoot(BuyAGoatPage, {id: this.id})
      .then(()=> {
        this.navCtrl.popToRoot();
        this.navCtrl.push(GoatInformationPage, {id: this.id});
      });
        }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  update(){


  }

  updateAlert() {
    let alert = this.alertCtrl.create({
      title: 'Goat updated!',
      buttons: ['OK']
    });
    alert.present();
  }
}
