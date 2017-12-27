import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'; // To be added to the side nav
import { GoatService } from './goat.service';
import { GoatInterface } from './goat';

// http://www.learn-angular.fr/le-cycle-de-vie-dun-component/

@Component({
  selector: 'page-goat',
  templateUrl: 'goat.html',
  providers: [GoatService]
})
export class GoatPage implements OnInit {

  mode = 'Observable';
  goats: GoatInterface[] = null;
  apiUrl: string = this.goatService.apiUrl;

  constructor(public navCtrl: NavController, private goatService: GoatService) {}

  //ngOnChances() {console.log("ngOnchances");}
  ngOnInit() {
    console.log("ngOnInit");
    this.getGoats();
  }
  //ngDoCheck() { console.log("ngDoCheck"); }
  //ngAfterContentInit() {console.log("ngAfterContentInit");}
  //ngAfterContentChecked() {console.log("ngAfterContentChecked");}
  //ngAfterViewInit() {console.log("ngAfterViewInit");}
  //ngAfterViewChecked() { console.log("ngAfterViewChecked"); };
  //ngOnDestroy() {console.log("ngOnDestroy");}

  private getGoats(){

    this.goatService.getGoats()
                   .subscribe(
                     goats => this.goats = goats,
                     error =>  console.log(error));
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(GoatPage, {
      item: item
    });
  }
}
