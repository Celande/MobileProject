import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { SellGoatService } from './sell.goat.service';
import { BreedInterface } from '../breeds/breeds';
import { BuyAGoatPage } from '../buy-a-goat/buy-a-goat';

@IonicPage()
@Component({
  selector: 'page-sell-a-goat',
  templateUrl: 'sell-a-goat.html',
  providers: [SellGoatService]
})
export class SellAGoatPage {

  mode = 'Observable';
  goatForm: FormGroup;
  breeds: BreedInterface[];
  apiUrl: string = this.sellGoatService.apiUrl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private sellGoatService: SellGoatService,
    private formBuilder: FormBuilder) {
      this.goatForm = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        gender: ['', Validators.required],
        breed_id: ['', Validators.required],
        breed_name: [''],
        localisation: ['', Validators.required],
        birthdate: ['', Validators.required],
        description: [''],
        identification: [
          '',
          Validators.compose([Validators.maxLength(17),
            Validators.pattern('[A-Z]{2,3}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{5}'),
             Validators.required])
           ]
        });
      }

      ngOnInit() {
        console.log("ngOnInit");
        this.getBreeds();
      }

      getBreeds() {
        this.sellGoatService.getBreeds()
        .subscribe(
          breeds  => this.breeds = breeds,
          error =>  console.log(error));
        }

        addGoat() {
          if (!this.goatForm || !this.goatForm.valid) { return; }
          this.sellGoatService.create(this.goatForm)
          .subscribe(goat => {
            console.log("success "+goat);
            this.addAlert();
            this.openBuyAGoatPage();
          }, error => {
            console.error(error);
          });
        }

        saveGoat(){
          console.log(this.goatForm.value);
          if(this.goatForm.value.breed_id == 0){
            this.breedAlert();
          } else {
            this.addGoat(this.goatForm);
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
                  this.addGoat(this.goatForm);
                }
              }
            ]
          });
          alert.present();
        }

        openBuyAGoatPage(){
          console.log("Open BuyAGoatPage");
          //this.navCtrl.push(BuyAGoatPage);
          this.navCtrl
      .setRoot(BuyAGoatPage, {id: this.id})
      .then(()=> {
        this.navCtrl.popToRoot();
      });
        }

        addAlert() {
    let alert = this.alertCtrl.create({
      title: 'Goat added!',
      buttons: ['OK']
    });
    alert.present();
  }

        ionViewDidLoad() {
          console.log('ionViewDidLoad SellAGoatPage');
        }
      }
