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
  goat: FormGroup;
  breeds: BreedInterface[];
  apiUrl: string = this.sellGoatService.apiUrl;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private sellGoatService: SellGoatService,
    private formBuilder: FormBuilder) {
      this.goat = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        gender: ['', Validators.required],
        breed_id: ['', Validators.required],
        breed_name: [''],
        localisation: ['', Validators.required],
        birthdate: ['', Validators.required],
        description: ['', Validators.required],
        identification: [
          '',
          [
            Validators.required,
            Validators.pattern('/[A-Z]{2,3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{5}/')]
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

        addGoat(goat: FormGroup) {
          if (!goat) { return; }
          this.sellGoatService.create(goat)
          .subscribe(goat => {
            console.log("success "+goat);
            this.openBuyAGoatPage();
          }, error => {
            console.error(error);
          });
        }

        saveGoat(){
          console.log(this.goat.value);
          if(this.goat.value.breed_id == 0){
            this.breedAlert();
          } else {
            this.addGoat(this.goat);
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
                  this.goat.value.breed_name = data.name;
                  console.log('Breed name = ' + this.goat.value.breed_name);
                  this.addGoat(this.goat);
                }
              }
            ]
          });
          alert.present();
        }

        openBuyAGoatPage(){
          console.log("Open BuyAGoatPage");
          this.navCtrl.push(BuyAGoatPage);
        }

        ionViewDidLoad() {
          console.log('ionViewDidLoad SellAGoatPage');
        }
      }
