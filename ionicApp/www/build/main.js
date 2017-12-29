webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatInfoViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goat_info_service__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info_viewmodel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goats_goats_viewmodel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_goat_update_goat_viewmodel__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoatInfoViewModel = (function () {
    function GoatInfoViewModel(navCtrl, navParams, alertCtrl, goatInfoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.goatInfoService = goatInfoService;
        this.mode = 'Observable';
        this.apiUrl = this.goatInfoService.apiUrl;
        this.id = navParams.get('id');
    }
    GoatInfoViewModel.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getGoat(this.id);
    };
    GoatInfoViewModel.prototype.getGoat = function (id) {
        var _this = this;
        this.goatInfoService.getGoat(id)
            .subscribe(function (goat) { return _this.goat = goat; }, function (error) { return console.error(error); });
    };
    GoatInfoViewModel.prototype.removeGoat = function (id) {
        var _this = this;
        this.goatInfoService.removeGoat(id)
            .subscribe(function (data) {
            console.log("removed");
            _this.removeAlert();
            _this.openGoatsViewModel();
        }, function (error) { return console.error(error); });
    };
    GoatInfoViewModel.prototype.openBreedInfoViewModel = function (id) {
        console.log("Open BreedInfoViewModel");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info_viewmodel__["a" /* BreedInfoViewModel */], { id: id });
    };
    GoatInfoViewModel.prototype.openUpdateGoatViewModel = function (id) {
        console.log("Open UpdateGoatViewModel");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__update_goat_update_goat_viewmodel__["a" /* UpdateGoatViewModel */], { id: id });
    };
    GoatInfoViewModel.prototype.removeConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Warning!',
            message: 'Are you sure to remove this goat?',
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
                        _this.removeGoat(_this.id);
                    }
                }
            ]
        });
        confirm.present();
    };
    GoatInfoViewModel.prototype.removeAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Goat removed!',
            buttons: ['OK']
        });
        alert.present();
    };
    GoatInfoViewModel.prototype.openGoatsViewModel = function () {
        var _this = this;
        console.log("Open UpdateGoatViewModel");
        this.navCtrl
            .setRoot(__WEBPACK_IMPORTED_MODULE_4__goats_goats_viewmodel__["a" /* GoatsViewModel */])
            .then(function () {
            _this.navCtrl.popToRoot();
        });
    };
    GoatInfoViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-goat-information',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/view/goat_info/goat_info.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ goat ? goat.name : \'Goat Information\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="goat">\n  <h3 text-center>\n    {{goat.name}}\n  </h3>\n  <img text-center width="80" src=\'{{ apiUrl + goat.img_path }}\'>\n  <h4 class="capitalize" text-center>\n    Price: €{{ goat.price }}<br>\n\n    Gender: {{ goat.gender }}<br>\n\n    Breed: <a (click)="openBreedInfoViewModel(goat.breed_id)">{{ goat.breed_name }}</a><br>\n    Age: {{ goat.age }}<br>\n    Location: {{ goat.localisation }}<br>\n    Birthdate: {{ goat.birthdate | date }}<br>\n  </h4>\n  <h4 text-center>\n    Identification: {{ goat.identification }}<br>\n    Description: {{ goat.descrption }}\n  </h4>\n  <p>\n    <button ion-button full (click)="openUpdateGoatViewModel(goat.id)">Update</button>\n    <button ion-button full (click)="removeConfirm()">Remove</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/view/goat_info/goat_info.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__goat_info_service__["a" /* GoatInfoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__goat_info_service__["a" /* GoatInfoService */]])
    ], GoatInfoViewModel);
    return GoatInfoViewModel;
}());

//# sourceMappingURL=goat.info.viewmodel.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedInfoViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breed_info_service__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreedInfoViewModel = (function () {
    function BreedInfoViewModel(navCtrl, navParams, alertCtrl, breedInfoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.breedInfoService = breedInfoService;
        this.mode = 'Observable';
        this.apiUrl = this.breedInfoService.apiUrl;
        this.id = navParams.get('id');
    }
    BreedInfoViewModel.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreed(this.id);
    };
    BreedInfoViewModel.prototype.getBreed = function (id) {
        var _this = this;
        this.breedInfoService.getBreed(id)
            .subscribe(function (breed) { return _this.breed = breed; }, function (error) { return console.error(error); });
    };
    BreedInfoViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breed-info',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/view/breed_info/breed_info.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ breed ? breed.name : \'Breed Information\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="breed">\n\n  <h3 text-center>\n    {{breed.name}}\n  </h3>\n\n  <img text-center width="80" src=\'{{ breed.img_path ? apiUrl + breed.img_path : "" }}\'>\n  <h4 class="capitalize" text-center>\n    Height: {{ breed.height == 0 ? \'N/A\' : breed.height + \' cm\' }}<br>\n    Weight: {{ breed.weight == 0 ? \'N/A\' : breed.weight + \' kg\'}}<br>\n    Color: {{ breed.color }}<br>\n    Origin: {{ breed.origin }}<br>\n    <div>{{ breed.hair_growth ? \'Hair Growth: \' + breed.hair_growth + \' cm/month\': \'\' }}</div>\n    <div>{{ breed.milk_by_lactation ? \'Milk by Lactation: \' + breed.milk_by_lactation + \' l\' : \'\' }}</div>\n    <div>{{ breed.duration_of_lactation ? \'Duration of Lactation: \' + breed.duration_of_lactation + \' months\' : \'\' }}</div>\n    Exploitation: {{ breed.exploitation }}<br>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/view/breed_info/breed_info.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__breed_info_service__["a" /* BreedInfoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__breed_info_service__["a" /* BreedInfoService */]])
    ], BreedInfoViewModel);
    return BreedInfoViewModel;
}());

//# sourceMappingURL=breed.info.viewmodel.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateGoatViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__update_goat_service__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goats_goats_viewmodel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__goat_info_goat_info_viewmodel__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// https://www.gajotres.net/ionic-2-how-o-create-and-validate-forms/2/
var UpdateGoatViewModel = (function () {
    function UpdateGoatViewModel(navCtrl, navParams, alertCtrl, viewCtrl, updateGoatService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.updateGoatService = updateGoatService;
        this.formBuilder = formBuilder;
        this.mode = 'Observable';
        this.apiUrl = this.updateGoatService.apiUrl;
        this.id = navParams.get('id');
    }
    UpdateGoatViewModel.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreeds();
        this.showGoat(this.id);
    };
    UpdateGoatViewModel.prototype.getBreeds = function () {
        var _this = this;
        this.updateGoatService.getBreeds()
            .subscribe(function (breeds) { return _this.breeds = breeds; }, function (error) { return console.error(error); });
    };
    UpdateGoatViewModel.prototype.updateFormBuilder = function () {
        if (this.goat) {
            this.goatForm = this.formBuilder.group({
                id: [this.goat.id],
                img_id: [this.goat.img_id],
                name: [this.goat.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                price: [this.goat.price, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                gender: [this.goat.gender, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                breed_id: [this.goat.breed_id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                breed_name: [''],
                localisation: [this.goat.localisation, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                birthdate: [this.goat.birthdate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
                description: [this.goat.description],
                identification: [
                    this.goat.identification,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(17),
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-Z]{2,3}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{5}'),
                        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                    ])
                ]
            });
        }
        else {
            this.goatForm = this.formBuilder.group({});
        }
    };
    UpdateGoatViewModel.prototype.showGoat = function (id) {
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
    UpdateGoatViewModel.prototype.updateGoat = function () {
        var _this = this;
        if (!this.goatForm || !this.goatForm.valid) {
            console.log("Invalid Form");
            return;
        }
        this.updateGoatService.update(this.goatForm)
            .subscribe(function (goat) {
            console.log("success " + goat);
            _this.updateAlert();
            _this.openGoatInfoViewModel();
        }, function (error) {
            console.error(error);
        });
    };
    UpdateGoatViewModel.prototype.saveGoat = function () {
        console.log(this.goatForm.value);
        if (this.goatForm.value.breed_id == 0) {
            this.breedAlert();
        }
        else {
            this.updateGoat();
        }
    };
    UpdateGoatViewModel.prototype.breedAlert = function () {
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
                        _this.updateGoat();
                    }
                }
            ]
        });
        alert.present();
    };
    UpdateGoatViewModel.prototype.openGoatInfoViewModel = function () {
        var _this = this;
        console.log("Open GoatInfoViewModel");
        this.navCtrl
            .setRoot(__WEBPACK_IMPORTED_MODULE_4__goats_goats_viewmodel__["a" /* GoatsViewModel */], { id: this.id })
            .then(function () {
            _this.navCtrl.popToRoot();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__goat_info_goat_info_viewmodel__["a" /* GoatInfoViewModel */], { id: _this.id });
        });
    };
    UpdateGoatViewModel.prototype.updateAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Goat updated!',
            buttons: ['OK']
        });
        alert.present();
    };
    UpdateGoatViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/view/update_goat/update_goat.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Update</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngIf="goatForm">\n<form [formGroup]="goatForm" (ngSubmit)="updateGoat()" >\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.name.valid && goatForm.controls.name.touched}">\n    <ion-label color="primary">Name</ion-label>\n    <ion-input type="text" formControlName="name" placeholder="Text Input"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="goatForm.controls.name.hasError(\'required\') && goatForm.controls.name.touched">\n    <p>This field is required!</p>\n  </ion-item>\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.price.valid && goatForm.controls.price.touched}">\n    <ion-label color="primary">Price</ion-label>\n    <ion-input type="number" formControlName="price" placeholder="€" min=0 ></ion-input>\n  </ion-item>\n  <ion-item *ngIf="goatForm.controls.price.hasError(\'required\') && goatForm.controls.price.touched">\n    <p>This field is required!</p>\n  </ion-item>\n  <ion-item *ngIf="goatForm.value.price < 0 && goatForm.controls.price.touched">\n    <p>The price can not be below 0.</p>\n  </ion-item>\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.gender.valid && goatForm.controls.gender.touched}">\n    <ion-label color="primary">Gender</ion-label>\n    <ion-select formControlName="gender" interface="popover">\n      <ion-option value="female">Female</ion-option>\n      <ion-option value="male">Male</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf="goatForm.controls.gender.hasError(\'required\') && goatForm.controls.gender.touched">\n    <p>This field is required!</p>\n  </ion-item>\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.breed_id.valid && goatForm.controls.breed_id.touched}">\n    <ion-label color="primary">Breed</ion-label>\n    <ion-select formControlName="breed_id">\n      <ion-option *ngFor="let breed of breeds" [value]="breed.id">{{ breed.name }}</ion-option>\n      <ion-option [value]=0>Other</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf="goatForm.controls.breed_id.hasError(\'required\') && goatForm.controls.breed_id.touched">\n    <p>This field is required!</p>\n  </ion-item>\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.localisation.valid && goatForm.controls.localisation.touched}">\n    <ion-label color="primary">Localisation</ion-label>\n    <ion-input type="text" formControlName="localisation" placeholder="Text Input"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="goatForm.controls.localisation.hasError(\'required\') && goatForm.controls.localisation.touched">\n    <p>This field is required!</p>\n  </ion-item>\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.identification.valid && goatForm.controls.identification.touched}">\n    <ion-label color="primary" fixed>Identification</ion-label>\n    <ion-input type="text" formControlName="identification" placeholder="Identification"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="goatForm.controls.identification.hasError(\'required\') && goatForm.controls.identification.touched">\n    <p>This field is required!</p>\n  </ion-item>\n  <ion-item *ngIf="(goatForm.controls.identification.hasError(\'pattern\') || goatForm.controls.identification.hasError(\'maxLength\')) && goatForm.controls.identification.touched">\n    <p>The pattern is 2 to 3 uppercase letters and numbers written this way: XXX XXX XXXXX</p>\n    <p>Example: FR 000 000 00000</p>\n  </ion-item>\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.birthdate.valid && goatForm.controls.birthdate.touched}">\n    <ion-label color="primary" fixed>Birthdate</ion-label>\n    <ion-input type="date" formControlName="birthdate" placeholder="Date Input"></ion-input>\n  </ion-item>\n  <ion-item *ngIf="goatForm.controls.birthdate.hasError(\'required\') && goatForm.controls.birthdate.touched">\n    <p>This field is required!</p>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary">Description</ion-label>\n    <ion-textarea formControlName="description" placeholder="Description"></ion-textarea>\n  </ion-item>\n\n  <button ion-button>Add an Image</button> <br>\n\n  <button ion-button type="submit" [disabled]="!goatForm.valid">Update</button>\n\n</form>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/view/update_goat/update_goat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__update_goat_service__["a" /* UpdateGoatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__update_goat_service__["a" /* UpdateGoatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UpdateGoatViewModel);
    return UpdateGoatViewModel;
}());

//# sourceMappingURL=update.goat.viewmodel.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGoatViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_goat_service__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__goats_goats_viewmodel__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddGoatViewModel = (function () {
    function AddGoatViewModel(navCtrl, navParams, alertCtrl, addGoatService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.addGoatService = addGoatService;
        this.formBuilder = formBuilder;
        this.mode = 'Observable';
        this.apiUrl = this.addGoatService.apiUrl;
        this.goatForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            breed_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            breed_name: [''],
            localisation: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            birthdate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: [''],
            identification: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(17),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-Z]{2,3}\\s[0-9]{3}\\s[0-9]{3}\\s[0-9]{5}'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ]
        });
    }
    AddGoatViewModel.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreeds();
    };
    AddGoatViewModel.prototype.getBreeds = function () {
        var _this = this;
        this.addGoatService.getBreeds()
            .subscribe(function (breeds) { return _this.breeds = breeds; }, function (error) { return console.error(error); });
    };
    AddGoatViewModel.prototype.addGoat = function () {
        var _this = this;
        if (!this.goatForm || !this.goatForm.valid) {
            return;
        }
        this.addGoatService.create(this.goatForm)
            .subscribe(function (goat) {
            console.log("success " + goat);
            _this.addAlert();
            _this.openGoatsViewModel();
        }, function (error) {
            console.error(error);
        });
    };
    AddGoatViewModel.prototype.saveGoat = function () {
        console.log(this.goatForm.value);
        if (this.goatForm.value.breed_id == 0) {
            this.breedAlert();
        }
        else {
            this.addGoat();
        }
    };
    AddGoatViewModel.prototype.breedAlert = function () {
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
                        _this.addGoat();
                    }
                }
            ]
        });
        alert.present();
    };
    AddGoatViewModel.prototype.openGoatsViewModel = function () {
        var _this = this;
        console.log("Open GoatsViewModel");
        //this.navCtrl.push(GoatsViewModel);
        this.navCtrl
            .setRoot(__WEBPACK_IMPORTED_MODULE_4__goats_goats_viewmodel__["a" /* GoatsViewModel */])
            .then(function () {
            _this.navCtrl.popToRoot();
        });
    };
    AddGoatViewModel.prototype.addAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Goat added!',
            buttons: ['OK']
        });
        alert.present();
    };
    AddGoatViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-goat',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/view/add_goat/add_goat.html"*/'@@ -0,0 +1,13 @@\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sell A Goat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<form [formGroup]="goatForm" (ngSubmit)="saveGoat()" >\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.name.valid && goatForm.controls.name.touched}">\n\n    <ion-label color="primary">Name</ion-label>\n\n    <ion-input type="text" formControlName="name" placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.controls.name.hasError(\'required\') && goatForm.controls.name.touched">\n\n    <p>This field is required!</p>\n\n  </ion-item>\n\n\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.price.valid && goatForm.controls.price.touched}">\n\n    <ion-label color="primary">Price</ion-label>\n\n    <ion-input type="number" formControlName="price" placeholder="€" min=0 ></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.controls.price.hasError(\'required\') && goatForm.controls.price.touched">\n\n    <p>This field is required!</p>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.value.price < 0 && goatForm.controls.price.touched">\n\n    <p>The price can not be below 0.</p>\n\n  </ion-item>\n\n\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.gender.valid && goatForm.controls.gender.touched}">\n\n    <ion-label color="primary">Gender</ion-label>\n\n    <ion-select formControlName="gender" interface="popover">\n\n      <ion-option value="female">Female</ion-option>\n\n      <ion-option value="male">Male</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.controls.gender.hasError(\'required\') && goatForm.controls.gender.touched">\n\n    <p>This field is required!</p>\n\n  </ion-item>\n\n\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.breed_id.valid && goatForm.controls.breed_id.touched}">\n\n    <ion-label color="primary">Breed</ion-label>\n\n    <ion-select formControlName="breed_id">\n\n      <ion-option *ngFor="let breed of breeds" [value]="breed.id">{{ breed.name }}</ion-option>\n\n      <ion-option [value]=0>Other</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.controls.breed_id.hasError(\'required\') && goatForm.controls.breed_id.touched">\n\n    <p>This field is required!</p>\n\n  </ion-item>\n\n\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.localisation.valid && goatForm.controls.localisation.touched}">\n\n    <ion-label color="primary">Localisation</ion-label>\n\n    <ion-input type="text" formControlName="localisation" placeholder="Text Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.controls.localisation.hasError(\'required\') && goatForm.controls.localisation.touched">\n\n    <p>This field is required!</p>\n\n  </ion-item>\n\n\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.identification.valid && goatForm.controls.identification.touched}">\n\n    <ion-label color="primary" fixed>Identification</ion-label>\n\n    <ion-input type="text" formControlName="identification" placeholder="Identification"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.controls.identification.hasError(\'required\') && goatForm.controls.identification.touched">\n\n    <p>This field is required!</p>\n\n  </ion-item>\n\n  <ion-item *ngIf="(goatForm.controls.identification.hasError(\'pattern\') || goatForm.controls.identification.hasError(\'maxLength\')) && goatForm.controls.identification.touched">\n\n    <p>The pattern is 2 to 3 uppercase letters and numbers written this way: XXX XXX XXXXX</p>\n\n    <p>Example: FR 000 000 00000</p>\n\n  </ion-item>\n\n\n\n  <ion-item [ngClass]="{\'error-border\':!goatForm.controls.birthdate.valid && goatForm.controls.birthdate.touched}">\n\n    <ion-label color="primary" fixed>Birthdate</ion-label>\n\n    <ion-input type="date" formControlName="birthdate" placeholder="Date Input"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="goatForm.controls.birthdate.hasError(\'required\') && goatForm.controls.birthdate.touched">\n\n    <p>This field is required!</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label color="primary">Description</ion-label>\n\n    <ion-textarea formControlName="description" placeholder="Description"></ion-textarea>\n\n  </ion-item>\n\n\n\n  <button ion-button>Add an Image</button> <br>\n\n\n\n  <button ion-button type="submit" [disabled]="!goatForm.valid">Sell</button>\n\n\n\n</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/view/add_goat/add_goat.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__add_goat_service__["a" /* AddGoatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__add_goat_service__["a" /* AddGoatService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], AddGoatViewModel);
    return AddGoatViewModel;
}());

//# sourceMappingURL=add.goat.viewmodel.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedsViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breeds_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info_viewmodel__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreedsViewModel = (function () {
    function BreedsViewModel(navCtrl, navParams, breedsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.breedsService = breedsService;
        this.mode = 'Observable';
        this.breeds = null;
        this.apiUrl = this.breedsService.apiUrl;
    }
    BreedsViewModel.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getBreeds();
    };
    BreedsViewModel.prototype.getBreeds = function () {
        var _this = this;
        this.breedsService.getBreeds()
            .subscribe(function (breeds) { return _this.breeds = breeds; }, function (error) { return console.error(error); });
    };
    BreedsViewModel.prototype.openBreedInfoViewModel = function (id) {
        console.log("Open BreedInfoViewModel");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__breed_info_breed_info_viewmodel__["a" /* BreedInfoViewModel */], { id: id });
    };
    BreedsViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-breeds',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/view/breeds/breeds.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Breeds</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let breed of breeds" (click)=\'openBreedInfoViewModel(breed.id)\'>\n\n        <img *ngIf="breed.img_path" width="80" src=\'{{ breed.img_path ? apiUrl + breed.img_path : "" }}\'> {{breed?.name}}\n\n      </button>\n\n    </ion-list>\n\n </ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/view/breeds/breeds.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__breeds_service__["a" /* BreedsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__breeds_service__["a" /* BreedsService */]])
    ], BreedsViewModel);
    return BreedsViewModel;
}());

//# sourceMappingURL=breeds.viewmodel.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewmodel_goats_goats_viewmodel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewmodel_goat_info_goat_info_viewmodel__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__viewmodel_add_goat_add_goat_viewmodel__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__viewmodel_breeds_breeds_viewmodel__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewmodel_update_goat_update_goat_viewmodel__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewmodel_breed_info_breed_info_viewmodel__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(203);
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
                __WEBPACK_IMPORTED_MODULE_6__viewmodel_goats_goats_viewmodel__["a" /* GoatsViewModel */],
                __WEBPACK_IMPORTED_MODULE_7__viewmodel_goat_info_goat_info_viewmodel__["a" /* GoatInfoViewModel */],
                __WEBPACK_IMPORTED_MODULE_8__viewmodel_add_goat_add_goat_viewmodel__["a" /* AddGoatViewModel */],
                __WEBPACK_IMPORTED_MODULE_9__viewmodel_breeds_breeds_viewmodel__["a" /* BreedsViewModel */],
                __WEBPACK_IMPORTED_MODULE_10__viewmodel_update_goat_update_goat_viewmodel__["a" /* UpdateGoatViewModel */],
                __WEBPACK_IMPORTED_MODULE_11__viewmodel_breed_info_breed_info_viewmodel__["a" /* BreedInfoViewModel */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* JsonpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__viewmodel_goats_goats_viewmodel__["a" /* GoatsViewModel */],
                __WEBPACK_IMPORTED_MODULE_7__viewmodel_goat_info_goat_info_viewmodel__["a" /* GoatInfoViewModel */],
                __WEBPACK_IMPORTED_MODULE_8__viewmodel_add_goat_add_goat_viewmodel__["a" /* AddGoatViewModel */],
                __WEBPACK_IMPORTED_MODULE_9__viewmodel_breeds_breeds_viewmodel__["a" /* BreedsViewModel */],
                __WEBPACK_IMPORTED_MODULE_10__viewmodel_update_goat_update_goat_viewmodel__["a" /* UpdateGoatViewModel */],
                __WEBPACK_IMPORTED_MODULE_11__viewmodel_breed_info_breed_info_viewmodel__["a" /* BreedInfoViewModel */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewmodel_goats_goats_viewmodel__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewmodel_add_goat_add_goat_viewmodel__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__viewmodel_breeds_breeds_viewmodel__ = __webpack_require__(206);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__viewmodel_goats_goats_viewmodel__["a" /* GoatsViewModel */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Buy A Goat', component: __WEBPACK_IMPORTED_MODULE_4__viewmodel_goats_goats_viewmodel__["a" /* GoatsViewModel */] },
            { title: 'Sell A Goat', component: __WEBPACK_IMPORTED_MODULE_5__viewmodel_add_goat_add_goat_viewmodel__["a" /* AddGoatViewModel */] },
            { title: 'Breeds', component: __WEBPACK_IMPORTED_MODULE_6__viewmodel_breeds_breeds_viewmodel__["a" /* BreedsViewModel */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(36);
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






var GoatInfoService = (function (_super) {
    __extends(GoatInfoService, _super);
    function GoatInfoService(http) {
        var _this = _super.call(this, http) || this;
        _this.goatUrl = _this.mobileUrl + 'goats/'; // URL to web API
        _this.removeGoatUrl = _this.goatUrl + 'remove/';
        return _this;
    }
    GoatInfoService.prototype.getGoat = function (id) {
        var url = this.goatUrl + id;
        return this.http.get(url)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    GoatInfoService.prototype.removeGoat = function (id) {
        var url = this.removeGoatUrl + id;
        return this.http.get(url)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    GoatInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GoatInfoService);
    return GoatInfoService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=goat.info.service.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(36);
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

//# sourceMappingURL=breed.info.service.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateGoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(36);
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
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var json = goat.value;
        var url = this.updateGoatUrl + goat.value.id;
        //console.log("update json: " + JSON.stringify(json));
        return this.http.post(url, JSON.stringify(json))
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UpdateGoatService);
    return UpdateGoatService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=update.goat.service.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(36);
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






var GoatsService = (function (_super) {
    __extends(GoatsService, _super);
    function GoatsService(http) {
        var _this = _super.call(this, http) || this;
        _this.goatsUrl = _this.mobileUrl + 'goats'; // URL to web API
        return _this;
    }
    GoatsService.prototype.getGoats = function () {
        return this.http.get(this.goatsUrl)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    GoatsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GoatsService);
    return GoatsService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=goats.service.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGoatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(36);
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






var AddGoatService = (function (_super) {
    __extends(AddGoatService, _super);
    function AddGoatService(http) {
        var _this = _super.call(this, http) || this;
        _this.breedsUrl = _this.mobileUrl + 'breeds'; // URL to web API
        _this.addGoatUrl = _this.mobileUrl + 'goats/add'; // URL to web API
        return _this;
    }
    AddGoatService.prototype.create = function (goat) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var json = goat.value;
        //console.log("create json: " + JSON.stringify(json));
        return this.http.post(this.addGoatUrl, JSON.stringify(json))
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    AddGoatService.prototype.getBreeds = function () {
        return this.http.get(this.breedsUrl)
            .map(_super.prototype.extractData)
            .catch(_super.prototype.handleError);
    };
    AddGoatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AddGoatService);
    return AddGoatService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));

//# sourceMappingURL=add.goat.service.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreedsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__(36);
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(33);
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
        return res.json();
    };
    CommonService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CommonService);
    return CommonService;
    var _a;
}());

//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoatsViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goat_info_goat_info_viewmodel__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goats_service__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoatsViewModel = (function () {
    function GoatsViewModel(navCtrl, navParams, goatsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.goatsService = goatsService;
        this.mode = 'Observable';
        this.goats = null;
        this.apiUrl = this.goatsService.apiUrl;
    }
    GoatsViewModel.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        this.getGoats();
    };
    GoatsViewModel.prototype.getGoats = function () {
        var _this = this;
        this.goatsService.getGoats()
            .subscribe(function (goats) { return _this.goats = goats; }, function (error) { return console.error(error); });
    };
    GoatsViewModel.prototype.openGoatInfoViewModel = function (id) {
        console.log("Open GoatInfoViewModel");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__goat_info_goat_info_viewmodel__["a" /* GoatInfoViewModel */], { id: id });
    };
    GoatsViewModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-goats',template:/*ion-inline-start:"/home/hyenaquenn/MobileProject/ionicApp/src/view/goats/goats.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Buy A Goat</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let goat of goats" (click)="openGoatInfoViewModel(goat.id)">\n\n      <img width="80" src=\'{{ apiUrl + goat?.img_path }}\'>\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{goat?.name}}\n\n      </ion-card-title>\n\n      <p class="capitalize">\n\n        €{{goat?.price}}<br>\n\n        {{goat?.gender}}<br>\n\n        {{goat?.breed_name}}<br>\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="default" icon-start>\n\n          <ion-icon name=\'arrow-forward\'></ion-icon>\n\n          Tap to read more\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/hyenaquenn/MobileProject/ionicApp/src/view/goats/goats.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__goats_service__["a" /* GoatsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__goats_service__["a" /* GoatsService */]])
    ], GoatsViewModel);
    return GoatsViewModel;
}());

//# sourceMappingURL=goats.viewmodel.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map