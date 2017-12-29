import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoatInfoViewModel } from '../goat_info/goat.info.viewmodel';
import { GoatsService } from './goats.service';
import { GoatModel } from '../../model/goat';

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

  openGoatInfoViewModel(id: number){
    console.log("Open GoatInfoViewModel");
    this.navCtrl.push(GoatInfoViewModel, {id: id});
  }

}
