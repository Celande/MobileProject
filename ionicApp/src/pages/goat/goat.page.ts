import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular'; // To be added to the side nav
import { GoatService } from './goat.service';
import { Goat } from './goat';

@Component({
  selector: 'page-goat',
  templateUrl: 'goat.html',
  providers: [GoatService]
})
export class GoatPage  implements OnInit {
  //@ViewChild(List) list: List;

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string/*, img: string*/}>;
  errorMessage: string;
  mode = 'Observable';
  data: string;
  goats: Goat[];

  constructor(public navCtrl: NavController, private goatService: GoatService) {}

  ngOnInit() { this.getItems(); }

  private getItems(){

    this.selectedItem = this.goatService.getGoats();
    /*
                   .subscribe(
                     goats => this.goats = goats,
                     error =>  this.errorMessage = <any>error);
                     */

    this.data = this.selectedItem;
    this.items = [];
    /*
    for (let goat of this.selectedItem) {
      this.items.push({
        title: goat.name,
        note: 'This is item #' + goat.id
        //img: getImg(goat.img_id)
      });
    }
    */
  }

/*
  private getItems() {
    var items = [];
    var getGoatsUrl = "http://localhost:8080/goats";
    $http.get(getGoatsUrl).success(function(data) {
      angular.forEach(data, function(value, key) {
        var goat = {
          name: value.name,
          price: value.price,
          birthdate: value.birthdate,
          //age: value.age,
          breed_id: value.breed_id,
          gender: value.gender,
          localisation: value.localisation,
          identification: value.identification,
          description: value.description,
          img_id: value.img_id,
          created_at: value.created_at,
          updated_at: value.updated_at
        };
          items.push(goat);
      });
    });

    return items;
  }

  private getImg(id) {
    var url = "";
    $http.get(url).success(function(data) {
      angular.forEach(data, function(value, key) {
        var img = {
          id: value.id,
          path: value.path,
          type: value.type,
          num: value.num,
          ext: value.ext
        };
          if(img.id == id){
            return img.path + img.type + img.num + "." + img.ext;
          }
      });
    });

    return "";
  }
*/
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(GoatPage, {
      item: item
    });
  }
}
