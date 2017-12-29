webpackJsonp([5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_goat_service__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goat_information_goat_information__ = __webpack_require__(59);
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
    function UpdatePage(navCtrl, navParams, alertCtrl, updateGoatService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.updateGoatService = updateGoatService;
        this.formBuilder = formBuilder;
        this.mode = 'Observable';
        this.apiUrl = this.updateGoatService.apiUrl;
        this.breedName = null;
        this.id = navParams.get('id');
        this.updateFormBuilder();
    }
    UpdatePage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreeds();
        this.showGoat(this.id);
    };
    UpdatePage.prototype.getBreeds = function () {
        var _this = this;
        this.updateGoatService.getBreeds()
            .subscribe(function (breeds) { return _this.breeds = breeds; }, function (error) { return console.log(error); });
    };
    UpdatePage.prototype.updateFormBuilder = function () {
        if (this.goat) {
            this.goatForm = this.formBuilder.group({
                id: [this.goat.id],
                name: [this.goat.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                price: [this.goat.price, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                gender: [this.goat.gender, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                breed_id: [this.goat.breed_id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                breed_name: [''],
                localisation: [this.goat.localisation, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                birthdate: [this.goat.birthdate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                description: [this.goat.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                identification: [
                    this.goat.identification,
                    [
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('/[A-Z]{2,3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{5}/')
                    ]
                ]
            });
        }
        else {
            this.goatForm = this.formBuilder.group({});
        }
    };
    UpdatePage.prototype.showGoat = function (id) {
        var _this = this;
        this.updateGoatService.show(id)
            .subscribe(function (goat) {
            console.log("success");
            _this.goat = goat;
            _this.updateFormBuilder();
        }, function (error) {
            console.error(error);
        });
    };
    UpdatePage.prototype.updateGoat = function (goatForm) {
        var _this = this;
        if (!goatForm) {
            return;
        }
        this.updateGoatService.update(goatForm)
            .subscribe(function (goat) {
            console.log("success " + goat);
            _this.updateAlert();
            _this.openGoatInformationPage();
        }, function (error) {
            console.error(error);
        });
    };
    UpdatePage.prototype.saveGoat = function () {
        console.log(this.goatForm.value);
        if (this.goatForm.value.breed_id == 0) {
            this.breedAlert();
        }
        else {
            this.updateGoat(this.goatForm);
        }
    };
    UpdatePage.prototype.breedAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        _this.goatForm.value.breed_name = data.name;
                        console.log('Breed name = ' + _this.goatForm.value.breed_name);
                        _this.updateGoat(_this.goatForm);
                    }
                }
            ]
        });
        alert.present();
    };
    UpdatePage.prototype.openGoatInformationPage = function () {
        console.log("Open GoatInformationPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__goat_information_goat_information__["a" /* GoatInformationPage */], { id: this.id });
    };
    UpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePage');
    };
    UpdatePage.prototype.update = function () {
    };
    UpdatePage.prototype.updateAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Goat updated!',
            buttons: ['OK']
        });
        alert.present();
    };
    UpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/update/update.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<form [formGroup]="goat" (ngSubmit)="updateGoat()" novalidate>\n  <ion-item>\n    <ion-label color="primary">Name</ion-label>\n    <ion-input type="text" formControlName="name" placeholder="Text Input"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Price</ion-label>\n    <ion-input type="number" formControlName="price" placeholder="€" min=0 ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Gender</ion-label>\n    <ion-select formControlName="gender" interface="popover">\n      <ion-option value="female">Female</ion-option>\n      <ion-option value="male">Male</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Breed</ion-label>\n    <ion-select formControlName="breed_id">\n      <ion-option *ngFor="let breed of breeds" [value]="breed.id">{{ breed.name }}</ion-option>\n      <ion-option [value]=0>Other</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Localisation</ion-label>\n    <ion-input type="text" formControlName="localisation" placeholder="Text Input"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" fixed>Identification</ion-label>\n    <ion-input type="text" formControlName="identification" placeholder="Identification"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" fixed>Birthdate</ion-label>\n    <ion-input type="date" formControlName="birthdate" placeholder="Date Input"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Description</ion-label>\n    <ion-textarea formControlName="description" placeholder="Description"></ion-textarea>\n  </ion-item>\n\n  <button ion-button>Add an Image</button> <br>\n\n  <button ion-button type="submit">Update</button>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/update/update.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__update_goat_service__["a" /* UpdateGoatService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__update_goat_service__["a" /* UpdateGoatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__update_goat_service__["a" /* UpdateGoatService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], UpdatePage);
    return UpdatePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellAGoatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sell_goat_service__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buy_a_goat_buy_a_goat__ = __webpack_require__(58);
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
    function SellAGoatPage(navCtrl, navParams, alertCtrl, sellGoatService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sellGoatService = sellGoatService;
        this.formBuilder = formBuilder;
        this.mode = 'Observable';
        this.apiUrl = this.sellGoatService.apiUrl;
        this.goat = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            breed_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            breed_name: [''],
            localisation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            birthdate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            identification: [
                '',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('/[A-Z]{2,3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{5}/')
                ]
            ]
        });
    }
    SellAGoatPage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreeds();
    };
    SellAGoatPage.prototype.getBreeds = function () {
        var _this = this;
        this.sellGoatService.getBreeds()
            .subscribe(function (breeds) { return _this.breeds = breeds; }, function (error) { return console.log(error); });
    };
    SellAGoatPage.prototype.addGoat = function (goat) {
        var _this = this;
        if (!goat) {
            return;
        }
        this.sellGoatService.create(goat)
            .subscribe(function (goat) {
            console.log("success " + goat);
            _this.openBuyAGoatPage();
        }, function (error) {
            console.error(error);
        });
    };
    SellAGoatPage.prototype.saveGoat = function () {
        console.log(this.goat.value);
        if (this.goat.value.breed_id == 0) {
            this.breedAlert();
        }
        else {
            this.addGoat(this.goat);
        }
    };
    SellAGoatPage.prototype.breedAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        _this.goat.value.breed_name = data.name;
                        console.log('Breed name = ' + _this.goat.value.breed_name);
                        _this.addGoat(_this.goat);
                    }
                }
            ]
        });
        alert.present();
    };
    SellAGoatPage.prototype.openBuyAGoatPage = function () {
        console.log("Open BuyAGoatPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__buy_a_goat_buy_a_goat__["a" /* BuyAGoatPage */]);
    };
    SellAGoatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellAGoatPage');
    };
    SellAGoatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-a-goat',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/sell-a-goat/sell-a-goat.html"*/'@@ -0,0 +1,13 @@\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sell A Goat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<form [formGroup]="goat" (ngSubmit)="saveGoat()" novalidate>\n\n  <ion-item>\n\n    <ion-label color="primary">Name</ion-label>\n\n    <ion-input type="text" formControlName="name" placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Price</ion-label>\n\n    <ion-input type="number" formControlName="price" placeholder="€" min=0 ></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Gender</ion-label>\n\n    <ion-select formControlName="gender" interface="popover">\n\n      <ion-option value="female">Female</ion-option>\n\n      <ion-option value="male">Male</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Breed</ion-label>\n\n    <ion-select formControlName="breed_id">\n\n      <ion-option *ngFor="let breed of breeds" [value]="breed.id">{{ breed.name }}</ion-option>\n\n      <ion-option [value]=0>Other</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Localisation</ion-label>\n\n    <ion-input type="text" formControlName="localisation" placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary" fixed>Identification</ion-label>\n\n    <ion-input type="text" formControlName="identification" placeholder="Identification"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary" fixed>Birthdate</ion-label>\n\n    <ion-input type="date" formControlName="birthdate" placeholder="Date Input"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Description</ion-label>\n\n    <ion-textarea formControlName="description" placeholder="Description"></ion-textarea>\n\n  </ion-item>\n\n\n\n  <button ion-button>Add an Image</button> <br>\n\n\n\n  <button ion-button type="submit">Sell</button>\n\n\n\n</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/sell-a-goat/sell-a-goat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__sell_goat_service__["a" /* SellGoatService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__sell_goat_service__["a" /* SellGoatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__sell_goat_service__["a" /* SellGoatService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _e || Object])
    ], SellAGoatPage);
    return SellAGoatPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=sell-a-goat.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/breed-info/breed-info.module": [
		293,
		4
	],
	"../pages/buy-a-goat/buy-a-goat.module": [
		294,
		3
	],
	"../pages/goat-information/goat-information.module": [
		295,
		2
	],
	"../pages/sell-a-goat/sell-a-goat.module": [
		296,
		1
	],
	"../pages/update/update.module": [
		297,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
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

/***/ 207:
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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goat_service__ = __webpack_require__(291);
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

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breeds_service__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info__ = __webpack_require__(57);
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
    BreedsPage.prototype.openBreedInfoPage = function (id) {
        console.log("Open BreedInfoPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info__["a" /* BreedInfoPage */], { id: id });
    };
    BreedsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BreedsPage');
    };
    BreedsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breeds',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breeds/breeds.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Breeds</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let breed of breeds" (click)=\'openBreedInfoPage(breed.id)\'>\n\n        <img *ngIf="breed.img_path" width="80" src=\'{{ breed.img_path ? apiUrl + breed.img_path : "" }}\'> {{breed?.name}}\n\n      </button>\n\n    </ion-list>\n\n </ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breeds/breeds.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__breeds_service__["a" /* BreedsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__breeds_service__["a" /* BreedsService */]])
    ], BreedsPage);
    return BreedsPage;
}());

//# sourceMappingURL=breeds.page.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_goat_goat_page__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_buy_a_goat_buy_a_goat__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_goat_information_goat_information__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sell_a_goat_sell_a_goat__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_breeds_breeds_page__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_update_update__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_breed_info_breed_info__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(205);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_breed_info_breed_info__["a" /* BreedInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/breed-info/breed-info.module#BreedInfoPageModule', name: 'BreedInfoPage', segment: 'breed-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy-a-goat/buy-a-goat.module#BuyAGoatPageModule', name: 'BuyAGoatPage', segment: 'buy-a-goat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/goat-information/goat-information.module#GoatInformationPageModule', name: 'GoatInformationPage', segment: 'goat-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-a-goat/sell-a-goat.module#SellAGoatPageModule', name: 'SellAGoatPage', segment: 'sell-a-goat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update/update.module#UpdatePageModule', name: 'UpdatePage', segment: 'update', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* JsonpModule */]
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
                __WEBPACK_IMPORTED_MODULE_14__pages_breed_info_breed_info__["a" /* BreedInfoPage */]
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

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreedInfoService = (function (_super) {
    __extends(BreedInfoService, _super);
    function BreedInfoService(http) {
        var _this = _super.call(this, http) || this;
        _this.breedUrl = _this.mobileUrl + 'breeds/'; // URL to web API
        return _this;
    }
    BreedInfoService.prototype.getBreed = function (id) {
        var url = this.breedUrl + id;
        return this.http.get(url)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    BreedInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BreedInfoService);
    return BreedInfoService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=breed-info.service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatInformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoatInformationService = (function (_super) {
    __extends(GoatInformationService, _super);
    function GoatInformationService(http) {
        var _this = _super.call(this, http) || this;
        _this.goatUrl = _this.mobileUrl + 'goats/'; // URL to web API
        return _this;
    }
    GoatInformationService.prototype.getGoat = function (id) {
        var url = this.goatUrl + id;
        return this.http.get(url)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    GoatInformationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GoatInformationService);
    return GoatInformationService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=goat-information.service.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateGoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateGoatService = (function (_super) {
    __extends(UpdateGoatService, _super);
    function UpdateGoatService(http) {
        var _this = _super.call(this, http) || this;
        _this.breedsUrl = _this.mobileUrl + 'breeds'; // URL to web API
        _this.updateGoatUrl = _this.mobileUrl + 'goats/update/'; // URL to web API
        return _this;
    }
    UpdateGoatService.prototype.show = function (id) {
        var url = this.updateGoatUrl + id;
        return this.http.get(url)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    UpdateGoatService.prototype.update = function (goat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        //headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var json = goat.value;
        //let json = { message: "test" };
        var url = this.updateGoatUrl + goat.value.id;
        console.log("update json: " + JSON.stringify(json));
        return this.http.post(url, JSON.stringify(json), headers)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    UpdateGoatService.prototype.getBreeds = function () {
        console.log("getBreeds");
        return this.http.get(this.breedsUrl)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    UpdateGoatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UpdateGoatService);
    return UpdateGoatService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=update.goat.service.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoatService = (function (_super) {
    __extends(GoatService, _super);
    function GoatService(http) {
        var _this = _super.call(this, http) || this;
        _this.goatsUrl = _this.mobileUrl + 'goats'; // URL to web API
        return _this;
    }
    GoatService.prototype.getGoats = function () {
        return this.http.get(this.goatsUrl)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    GoatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GoatService);
    return GoatService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=goat.service.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellGoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SellGoatService = (function (_super) {
    __extends(SellGoatService, _super);
    function SellGoatService(http) {
        var _this = _super.call(this, http) || this;
        _this.breedsUrl = _this.mobileUrl + 'breeds'; // URL to web API
        _this.addGoatUrl = _this.mobileUrl + 'goats/add'; // URL to web API
        return _this;
    }
    SellGoatService.prototype.create = function (goat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        //headers.append('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var json = goat.value;
        //let json = { message: "test" };
        console.log("create json: " + JSON.stringify(json));
        return this.http.post(this.addGoatUrl, JSON.stringify(json), headers)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    SellGoatService.prototype.getBreeds = function () {
        console.log("getBreeds");
        return this.http.get(this.breedsUrl)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    SellGoatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SellGoatService);
    return SellGoatService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=sell.goat.service.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_goat_goat_page__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_buy_a_goat_buy_a_goat__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sell_a_goat_sell_a_goat__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_breeds_breeds_page__ = __webpack_require__(209);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_buy_a_goat_buy_a_goat__["a" /* BuyAGoatPage */]; // for tests
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GoatService = (function (_super) {
    __extends(GoatService, _super);
    function GoatService(http) {
        var _this = _super.call(this, http) || this;
        _this.goatsUrl = _this.mobileUrl + 'goats'; // URL to web API
        return _this;
    }
    GoatService.prototype.getGoats = function () {
        return this.http.get(this.goatsUrl)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    GoatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GoatService);
    return GoatService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=goat.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(34);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BreedsService = (function (_super) {
    __extends(BreedsService, _super);
    function BreedsService(http) {
        var _this = _super.call(this, http) || this;
        _this.breedsUrl = _this.mobileUrl + 'breeds'; // URL to web API
        return _this;
    }
    BreedsService.prototype.getBreeds = function () {
        return this.http.get(this.breedsUrl)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    BreedsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BreedsService);
    return BreedsService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=breeds.service.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(28);
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






var CommonService = (function () {
    function CommonService(http) {
        this.apiUrl = 'http://localhost:8080/';
        this.mobileUrl = this.apiUrl + 'mobile/';
        this.http = http;
    }
    CommonService.prototype.extractData = function (res) {
        //let body = res.json();
        //console.log("Stringify Res = " + JSON.stringify(res));
        //console.log("Stringify Res Json = " + JSON.stringify(res.json()));
        return res.json();
    };
    CommonService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
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
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breed_info_service__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreedInfoPage = (function () {
    function BreedInfoPage(navCtrl, navParams, alertCtrl, breedInfoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.breedInfoService = breedInfoService;
        this.mode = 'Observable';
        this.apiUrl = this.breedInfoService.apiUrl;
        this.id = navParams.get('id');
    }
    BreedInfoPage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreed(this.id);
    };
    BreedInfoPage.prototype.getBreed = function (id) {
        var _this = this;
        this.breedInfoService.getBreed(id)
            .subscribe(function (breed) { return _this.breed = breed; }, function (error) { return console.log(error); });
    };
    BreedInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BreedInfoPage');
    };
    BreedInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breed-info',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breed-info/breed-info.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ breed ? breed.name : \'Breed Information\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="breed">\n\n  <h3 text-center>\n    {{breed.name}}\n  </h3>\n\n  <img text-center width="80" src=\'{{ breed.img_path ? apiUrl + breed.img_path : "" }}\'>\n  <h4 class="capitalize" text-center>\n    Height: {{ breed.height == 0 ? \'N/A\' : breed.height + \' cm\' }}<br>\n    Weight: {{ breed.weight == 0 ? \'N/A\' : breed.weight + \' kg\'}}<br>\n    Color: {{ breed.color }}<br>\n    Origin: {{ breed.origin }}<br>\n    <div>{{ breed.hair_growth ? \'Hair Growth: \' + breed.hair_growth + \' cm/month\': \'\' }}</div>\n    <div>{{ breed.milk_by_lactation ? \'Milk by Lactation: \' + breed.milk_by_lactation + \' l\' : \'\' }}</div>\n    <div>{{ breed.duration_of_lactation ? \'Duration of Lactation: \' + breed.duration_of_lactation + \' months\' : \'\' }}</div>\n    Exploitation: {{ breed.exploitation }}<br>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/breed-info/breed-info.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__breed_info_service__["a" /* BreedInfoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__breed_info_service__["a" /* BreedInfoService */]])
    ], BreedInfoPage);
    return BreedInfoPage;
}());

//# sourceMappingURL=breed-info.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyAGoatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goat_information_goat_information__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goat_service__ = __webpack_require__(265);
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
    BuyAGoatPage.prototype.openGoatInformationPage = function (id) {
        console.log("Open GoatInformationPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__goat_information_goat_information__["a" /* GoatInformationPage */], { id: id });
    };
    BuyAGoatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buy-a-goat',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/buy-a-goat/buy-a-goat.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Buy A Goat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let goat of goats" (click)="openGoatInformationPage(goat.id)">\n\n      <img width="80" src=\'{{ apiUrl + goat?.img_path }}\'>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{goat?.name}}\n\n      </ion-card-title>\n\n      <p class="capitalize">\n\n        €{{goat?.price}}<br>\n\n        {{goat?.gender}}<br>\n\n        {{goat?.breed_name}}<br>\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="default" icon-start (click)=\'itemTapped(event, item)\'>\n\n          <ion-icon name=\'arrow-forward\'></ion-icon>\n\n          Read more\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/buy-a-goat/buy-a-goat.html"*/,
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

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goat_information_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_update__ = __webpack_require__(107);
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
    function GoatInformationPage(navCtrl, navParams, alertCtrl, goatInformationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.goatInformationService = goatInformationService;
        this.mode = 'Observable';
        this.apiUrl = this.goatInformationService.apiUrl;
        this.id = navParams.get('id');
    }
    GoatInformationPage.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        console.log("id = " + this.id);
        this.getGoat(this.id);
    };
    GoatInformationPage.prototype.getGoat = function (id) {
        var _this = this;
        this.goatInformationService.getGoat(id)
            .subscribe(function (goat) { return _this.goat = goat; }, function (error) { return console.log(error); });
    };
    GoatInformationPage.prototype.openBreedInfoPage = function (id) {
        console.log("Open BreedInfoPage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info__["a" /* BreedInfoPage */], { id: id });
    };
    GoatInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GoatInformationPage');
    };
    GoatInformationPage.prototype.openUpdatePage = function (id) {
        console.log("Open UpdatePage");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__update_update__["a" /* UpdatePage */], { id: id });
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
            selector: 'page-goat-information',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/goat-information/goat-information.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ goat ? goat.name : \'Goat Information\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="goat">\n  <h3 text-center>\n    {{goat.name}}\n  </h3>\n  <img text-center width="80" src=\'{{ apiUrl + goat.img_path }}\'>\n  <h4 class="capitalize" text-center>\n    Price: €{{ goat.price }}<br>\n\n    Gender: {{ goat.gender }}<br>\n\n    Breed: <a (click)="openBreedInfoPage(goat.breed_id)">{{ goat.breed_name }}</a><br>\n    Age: {{ goat.age }}<br>\n    Location: {{ goat.localisation }}<br>\n    Birthdate: {{ goat.birthdate | date }}<br>\n  </h4>\n  <h4 text-center>\n    Identification: {{ goat.identification }}<br>\n    Description: {{ goat.descrption }}\n  </h4>\n  <p>\n    <button ion-button full (click)="openUpdatePage(goat.id)">Update</button>\n    <button ion-button full (click)="showConfirm()">Remove</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/pages/goat-information/goat-information.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__goat_information_service__["a" /* GoatInformationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__goat_information_service__["a" /* GoatInformationService */]])
    ], GoatInformationPage);
    return GoatInformationPage;
}());

//# sourceMappingURL=goat-information.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map