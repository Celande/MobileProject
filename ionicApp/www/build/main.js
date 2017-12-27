webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedsInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreedsInfoPage = (function () {
    function BreedsInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BreedsInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BreedsInfoPage');
    };
    BreedsInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breeds-info',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breeds-info/breeds-info.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Breeds Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3 text-center>\n    Breeds Name<br>    \n  </h3>\n  \n  <img src="assets/img/goat.png"/>\n  <br>...Info...\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breeds-info/breeds-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BreedsInfoPage);
    return BreedsInfoPage;
}());

//# sourceMappingURL=breeds-info.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyAGoatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goat_information_goat_information__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goat_service__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyAGoatPage = (function () {
    function BuyAGoatPage(navCtrl, navParams, goatService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.goatService = goatService;
        this.mode = 'Observable';
        this.goats = null;
        this.apiUrl = this.goatService.apiUrl;
    }
    BuyAGoatPage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getGoats();
    };
    BuyAGoatPage.prototype.getGoats = function () {
        var _this = this;
        this.goatService.getGoats()
            .subscribe(function (goats) { return _this.goats = goats; }, function (error) { return console.log(error); });
    };
    BuyAGoatPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__goat_information_goat_information__["a" /* GoatInformationPage */], {
            item: item
        });
    };
    BuyAGoatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyAGoatPage');
    };
    BuyAGoatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-a-goat',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/buy-a-goat/buy-a-goat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Buy A Goat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card ion-item *ngFor="let goat of goats" (click)="someFunction()">\n\n    <ion-img width="80" src=\'{{ apiUrl + goat?.img_path }}\'></ion-img>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{goat?.name}}\n\n      </ion-card-title>\n\n      <p class="capitalize">\n\n        €{{goat?.price}}<br>\n\n        {{goat?.gender}}<br>\n\n        {{goat?.breed_name}}<br>\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="default" icon-start (click)=\'itemTapped(event, item)\'>\n\n          <ion-icon name=\'arrow-forward\'></ion-icon>\n\n          Read more\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/buy-a-goat/buy-a-goat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__goat_service__["a" /* GoatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__goat_service__["a" /* GoatService */]])
    ], BuyAGoatPage);
    return BuyAGoatPage;
}());

//# sourceMappingURL=buy-a-goat.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_update__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoatInformationPage = (function () {
    function GoatInformationPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    GoatInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GoatInformationPage');
    };
    GoatInformationPage.prototype.openUpdatePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__update_update__["a" /* UpdatePage */]);
    };
    GoatInformationPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Warn!!!',
            message: 'Are you sure to remove?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    GoatInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-goat-information',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/goat-information/goat-information.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Goat Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n  </h3>\n  <img src="assets/img/goat.png"/>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from {{selectedItem.title}}<br>\n    Price-<br>\n\n    Gender-<br>\n\n    Breed-<br>\n    Location-<br>\n    Identification-<br>\n    Birthday-<br>\n    Description-<br>\n  </h4>\n  <p>\n    <button ion-button full (click)="openUpdatePage()">Update</button>\n    <button ion-button full (click)="showConfirm()">Remove</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/goat-information/goat-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], GoatInformationPage);
    return GoatInformationPage;
}());

//# sourceMappingURL=goat-information.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdatePage = (function () {
    function UpdatePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    UpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePage');
    };
    UpdatePage.prototype.update = function () {
    };
    UpdatePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Goat update!',
            buttons: ['OK']
        });
        alert.present();
    };
    UpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/update/update.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label color="primary">Name</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Price</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Gender</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Breed</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Location</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary" fixed>Identification</ion-label>\n\n    <ion-input type="number" placeholder="Number Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" fixed>Birthday</ion-label>\n\n    <ion-input type="number" placeholder="Number Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary">Description</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n</ion-list>\n\n<img src="assets/img/goat.png"/>\n<button ion-button>upload new IMG</button>\n\n<button ion-button full (click)="update()">Update</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/update/update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UpdatePage);
    return UpdatePage;
}());

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellAGoatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SellAGoatPage = (function () {
    function SellAGoatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellAGoatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellAGoatPage');
    };
    SellAGoatPage.prototype.update = function () {
    };
    SellAGoatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-a-goat',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/sell-a-goat/sell-a-goat.html"*/'@@ -0,0 +1,13 @@\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sell A Goat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label color="primary">Name</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Price</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Gender</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Breed</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Location</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary" fixed>Identification</ion-label>\n\n    <ion-input type="number" placeholder="Number Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary" fixed>Birthday</ion-label>\n\n    <ion-input type="number" placeholder="Number Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Description</ion-label>\n\n    <ion-input placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n\n\n<button ion-button>Add a IMG</button>\n\n\n\n<button ion-button full (click)="update()">Save</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/sell-a-goat/sell-a-goat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SellAGoatPage);
    return SellAGoatPage;
}());

//# sourceMappingURL=sell-a-goat.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/breeds-info/breeds-info.module": [
		288,
		4
	],
	"../pages/buy-a-goat/buy-a-goat.module": [
		289,
		3
	],
	"../pages/goat-information/goat-information.module": [
		290,
		2
	],
	"../pages/sell-a-goat/sell-a-goat.module": [
		291,
		1
	],
	"../pages/update/update.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goat_service__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // To be added to the side nav

// http://www.learn-angular.fr/le-cycle-de-vie-dun-component/
var GoatPage = (function () {
    function GoatPage(navCtrl, goatService) {
        this.navCtrl = navCtrl;
        this.goatService = goatService;
        this.mode = 'Observable';
        this.goats = null;
        this.apiUrl = this.goatService.apiUrl;
    }
    GoatPage_1 = GoatPage;
    //ngOnChances() {console.log("ngOnchances");}
    GoatPage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getGoats();
    };
    //ngDoCheck() { console.log("ngDoCheck"); }
    //ngAfterContentInit() {console.log("ngAfterContentInit");}
    //ngAfterContentChecked() {console.log("ngAfterContentChecked");}
    //ngAfterViewInit() {console.log("ngAfterViewInit");}
    //ngAfterViewChecked() { console.log("ngAfterViewChecked"); };
    //ngOnDestroy() {console.log("ngOnDestroy");}
    GoatPage.prototype.getGoats = function () {
        var _this = this;
        this.goatService.getGoats()
            .subscribe(function (goats) { return _this.goats = goats; }, function (error) { return console.log(error); });
    };
    GoatPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(GoatPage_1, {
            item: item
        });
    };
    GoatPage = GoatPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-goat',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/goat/goat.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Goat</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Goat page</h3>\n\n  <p>\n    Trying to do things.\n  </p>\n\n  <ion-list>\n    <button ion-item *ngFor="let goat of goats">\n      <img width="80" src=\'{{ apiUrl + goat?.img_path }}\'>\n      {{goat?.name}} {{goat?.price}}\n    </button>\n  </ion-list>\n\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/goat/goat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__goat_service__["a" /* GoatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__goat_service__["a" /* GoatService */]])
    ], GoatPage);
    return GoatPage;
    var GoatPage_1;
}());

//# sourceMappingURL=goat.page.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breeds_service__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breeds_info_breeds_info__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreedsPage = (function () {
    function BreedsPage(navCtrl, navParams, breedsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.breedsService = breedsService;
        this.mode = 'Observable';
        this.breeds = null;
        this.apiUrl = this.breedsService.apiUrl;
    }
    BreedsPage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreeds();
    };
    BreedsPage.prototype.getBreeds = function () {
        var _this = this;
        this.breedsService.getBreeds()
            .subscribe(function (breeds) { return _this.breeds = breeds; }, function (error) { return console.log(error); });
    };
    BreedsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BreedsPage');
    };
    BreedsPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__breeds_info_breeds_info__["a" /* BreedsInfoPage */], {
            item: item
        });
    };
    BreedsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breeds',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breeds/breeds.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Breeds</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let breed of breeds" (click)=\'itemTapped(event, item)\'>\n\n        <img width="80" src=\'{{ apiUrl + breed?.img_path }}\'> {{breed?.name}}\n\n      </button>\n\n    </ion-list>\n\n </ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breeds/breeds.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__breeds_service__["a" /* BreedsService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__breeds_service__["a" /* BreedsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__breeds_service__["a" /* BreedsService */]) === "function" && _c || Object])
    ], BreedsPage);
    return BreedsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=breeds.page.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_goat_goat_page__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buy_a_goat_buy_a_goat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_goat_information_goat_information__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sell_a_goat_sell_a_goat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_breeds_breeds_page__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_update_update__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_breeds_info_breeds_info__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_goat_goat_page__["a" /* GoatPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_buy_a_goat_buy_a_goat__["a" /* BuyAGoatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_goat_information_goat_information__["a" /* GoatInformationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sell_a_goat_sell_a_goat__["a" /* SellAGoatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_breeds_breeds_page__["a" /* BreedsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_update_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_breeds_info_breeds_info__["a" /* BreedsInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/breeds-info/breeds-info.module#BreedsInfoPageModule', name: 'BreedsInfoPage', segment: 'breeds-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-a-goat/buy-a-goat.module#BuyAGoatPageModule', name: 'BuyAGoatPage', segment: 'buy-a-goat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goat-information/goat-information.module#GoatInformationPageModule', name: 'GoatInformationPage', segment: 'goat-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-a-goat/sell-a-goat.module#SellAGoatPageModule', name: 'SellAGoatPage', segment: 'sell-a-goat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update/update.module#UpdatePageModule', name: 'UpdatePage', segment: 'update', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* JsonpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_goat_goat_page__["a" /* GoatPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_buy_a_goat_buy_a_goat__["a" /* BuyAGoatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_goat_information_goat_information__["a" /* GoatInformationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sell_a_goat_sell_a_goat__["a" /* SellAGoatPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_breeds_breeds_page__["a" /* BreedsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_update_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_breeds_info_breeds_info__["a" /* BreedsInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoatService = (function () {
    function GoatService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/'; //'http://sraullet.freeboxos.fr/';
        this.goatsUrl = this.apiUrl + 'goats'; // URL to web API
        this.imgUrl = this.apiUrl + 'image/'; // URL to web API
    }
    GoatService.prototype.getGoats = function () {
        return this.http.get(this.goatsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GoatService.prototype.extractData = function (res) {
        //console.log("Res = " + res);
        var body = res.json();
        //console.log("Body = " + body);
        console.log("Stringify Body = " + JSON.stringify(body));
        return body;
        //return body.data;
    };
    GoatService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    GoatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GoatService);
    return GoatService;
}());

//# sourceMappingURL=goat.service.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_goat_goat_page__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buy_a_goat_buy_a_goat__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sell_a_goat_sell_a_goat__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_breeds_breeds_page__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //rootPage: any = BuyAGoatPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_goat_goat_page__["a" /* GoatPage */]; // for tests
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Goat', component: __WEBPACK_IMPORTED_MODULE_6__pages_goat_goat_page__["a" /* GoatPage */] },
            { title: 'Buy A Goat', component: __WEBPACK_IMPORTED_MODULE_7__pages_buy_a_goat_buy_a_goat__["a" /* BuyAGoatPage */] },
            { title: 'Sell A Goat', component: __WEBPACK_IMPORTED_MODULE_8__pages_sell_a_goat_sell_a_goat__["a" /* SellAGoatPage */] },
            { title: 'Breeds', component: __WEBPACK_IMPORTED_MODULE_9__pages_breeds_breeds_page__["a" /* BreedsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoatService = (function () {
    function GoatService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/';
        this.goatsUrl = this.apiUrl + 'goats'; // URL to web API
        this.imgUrl = this.apiUrl + 'image/'; // URL to web API
    }
    GoatService.prototype.getGoats = function () {
        return this.http.get(this.goatsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    GoatService.prototype.extractData = function (res) {
        //console.log("Res = " + res);
        var body = res.json();
        //console.log("Body = " + body);
        console.log("Stringify Body = " + JSON.stringify(body));
        return body;
        //return body.data;
    };
    GoatService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    GoatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GoatService);
    return GoatService;
}());

//# sourceMappingURL=goat.service.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreedsService = (function () {
    function BreedsService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/';
        this.breedsUrl = this.apiUrl + 'breeds'; // URL to web API
    }
    BreedsService.prototype.getBreeds = function () {
        return this.http.get(this.breedsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BreedsService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Stringify Body = " + JSON.stringify(body));
        return body;
    };
    BreedsService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BreedsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], BreedsService);
    return BreedsService;
    var _a;
}());

//# sourceMappingURL=breeds.service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map