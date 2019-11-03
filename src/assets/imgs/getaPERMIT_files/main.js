webpackJsonp([32],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddguestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__savemessage_savemessage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addnewvehiclemodal_addnewvehiclemodal__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddguestPage = /** @class */ (function () {
    function AddguestPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    AddguestPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad AddguestPage');
    };
    AddguestPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    AddguestPage.prototype.thnakyouModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__savemessage_savemessage__["a" /* SavemessagePage */]);
        modal.present();
    };
    AddguestPage.prototype.addVehicle = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__addnewvehiclemodal_addnewvehiclemodal__["a" /* AddnewvehiclemodalPage */]);
        modal.present();
    };
    AddguestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addguest',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/addguest/addguest.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()" style="margin-left: -10px;">\n             <!--  <img src="assets/imgs/request-permit/back.png"/> -->\n             <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">Add Guest</ion-col>\n        <ion-col col-2>\n            <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 2.5em;color:#fff;"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n                \n                  <ion-item>\n                    <ion-label stacked>First Name</ion-label>\n                    <ion-input type="text" placeholder="Enter guest first name"></ion-input>\n                    <hr>\n                  </ion-item>\n            \n                \n                  <ion-item>\n                    <ion-label stacked>Last Name</ion-label>\n                    <ion-input type="password" placeholder="Enter guest last name"></ion-input>\n                    <hr>\n                  </ion-item>\n\n                  <ion-item>\n                        <ion-label stacked>Email Address</ion-label>\n                        <ion-input type="password" placeholder="Enter guest email address"></ion-input>\n                </ion-item>\n\n                <button ion-button block outline class="addButton" (click)="addVehicle()">Add Vehicle</button>\n                <!-- \n                <ion-item>\n                    <ion-label stacked>Plate No.</ion-label>\n                    <ion-input type="password" placeholder="Enter Plate No."></ion-input>\n            </ion-item>\n\n            <ion-item>\n                    <ion-label stacked>VIN</ion-label>\n                    <ion-input type="password" placeholder="Enter VIN"></ion-input>\n            </ion-item> -->\n        </ion-list>\n</ion-content>\n\n\n<ion-footer>\n    <ion-row>   \n        <button ion-button full class="footerBtn border" (click)="thnakyouModal()">Save</button>    \n        <button ion-button full class="footerBtn border">Save & New</button> \n        <button ion-button full class="footerBtn">Cancel</button>    \n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/addguest/addguest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */]])
    ], AddguestPage);
    return AddguestPage;
}());

//# sourceMappingURL=addguest.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavemessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SavemessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SavemessagePage = /** @class */ (function () {
    function SavemessagePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    SavemessagePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SavemessagePage');
    };
    SavemessagePage.prototype.closeThankYouModal = function () {
        this.viewCtrl.dismiss();
    };
    SavemessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-savemessage',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/savemessage/savemessage.html"*/'\n<ion-content style="font-weight: 100;color: #5e5e5e;">\n    <button ion-button clear class="close" (click)="closeThankYouModal()">\n        <ion-icon name="close" class="icons"></ion-icon>\n      </button>\n  <ion-grid class="success"><ion-icon name="ios-checkmark-circle-outline" class="successIcon"></ion-icon>\n  </ion-grid>\n  <ion-row style="font-size: 1.5em;width: 90%;margin: auto;">\n    <ion-col text-center>Your Vehicle Information Successfully Inserted</ion-col>\n  </ion-row>\n  <ion-row style="font-size: 3em;color: #14b250;">\n      <ion-col text-center>Thank You!</ion-col>\n    </ion-row>\n  </ion-content>\n  '/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/savemessage/savemessage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], SavemessagePage);
    return SavemessagePage;
}());

//# sourceMappingURL=savemessage.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactusPage = /** @class */ (function () {
    function ContactusPage(toastCtrl, navCtrl, navParams, formBuilder, customService) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.customService = customService;
        this.contactUsDetail = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]),
            comment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])
        });
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        //   console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.goback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    ContactusPage.prototype.doSubmit = function () {
        this.selected = false;
        if (!this.contactUsDetail.controls.mobile.value || !this.contactUsDetail.controls.name.value) {
            //var message = '';
            if (!this.contactUsDetail.controls.name.value) {
                this.customService.showErrorMsgByToast(this.customService.errorMessageArr.nameRequired);
                this.selected = true;
            }
            else if (!this.contactUsDetail.controls.email.value) {
                this.customService.showErrorMsgByToast(this.customService.errorMessageArr.emailRequired);
            }
            else if (!this.contactUsDetail.controls.mobile.value) {
                this.customService.showErrorMsgByToast(this.customService.errorMessageArr.mobileRequired);
            }
            else if (!this.contactUsDetail.controls.comment.value) {
                this.customService.showErrorMsgByToast(this.customService.errorMessageArr.commentRequired);
            }
        }
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/contactus/contactus.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()" style="margin-left: -10px;">\n                    <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n                    <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n                  </button>\n        </ion-col>\n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">Contact Us</ion-col>\n        <ion-col col-2>\n\n        </ion-col>\n    </ion-row>\n</ion-header>\n<ion-content padding>\n    <form novalidate [formGroup]="contactUsDetail">\n        <ion-row class="cstmRow">\n            <ion-col class="cstmSpan"><b>ContactUs -</b>&nbsp;(844)357- 4995</ion-col>\n        </ion-row>\n        <ion-list inset class=\'contact_list\'>\n            <ion-item class="animated fadeInLeft">\n                <!-- <ion-label class="cstmLabel" >Name</ion-label> -->\n                <ion-input type="text" placeholder="Name" [class.highlight]="selected == 1" [(ngModel)]="contactUsDetail.name" class="form-control" formControlName="name"></ion-input>\n                <ion-icon name="ios-person-outline" item-right primary></ion-icon>\n            </ion-item>\n\n            <ion-item class="animated fadeInRight">\n                <!-- <ion-label class="cstmLabel">Email</ion-label> -->\n                <ion-input type="email" placeholder="Email" [class.highlight]="selected == 2" [(ngModel)]="contactUsDetail.email" class="form-control" formControlName="email"></ion-input>\n                <ion-icon name="ios-mail-outline" item-right primary></ion-icon>\n            </ion-item>\n\n            <ion-item class="animated fadeInLeft">\n                <!-- <ion-label class="cstmLabel">Mobile</ion-label> -->\n                <ion-input type="number" placeholder="Mobile" [class.highlight]="selected == 3" [(ngModel)]="contactUsDetail.mobile" class="form-control" formControlName="mobile"></ion-input>\n                <ion-icon name="ios-call-outline" item-right primary></ion-icon>\n            </ion-item>\n            <ion-item class="animated fadeInRight cstmTextarea">\n                <!-- <ion-label stacked class="cstmLabel">Comment Request</ion-label>  -->\n                <ion-textarea rows="7" placeholder="Comment" [class.highlight1]="selected == 4" [(ngModel)]="contactUsDetail.comment" class="form-control" formControlName="comment"></ion-textarea>\n            </ion-item>\n        </ion-list>\n    </form>\n</ion-content>\n<ion-footer>\n    <button ion-button class="footerBtn animated bounceInUp cstmBtn1" (click)="doSubmit();">Send email </button>\n    <button ion-button class="footerBtn animated bounceInUp cstmBtn2" type="reset">Cancel </button>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/contactus/contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_common_services_common_services__["a" /* CommonServicesProvider */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddvehiclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myvehiclemodal_myvehiclemodal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__master_data_master_data__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permitreceipt_permitreceipt__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { UploaddocumentsPage } from '../uploaddocuments/uploaddocuments';




var AddvehiclePage = /** @class */ (function () {
    function AddvehiclePage(loadingCtrl, http, navCtrl, navParams, alertCtrl, modalCtrl, customService) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.customService = customService;
        this.currentDate = new Date();
        this.vehicleArray = [];
        this.requestParams = '';
    }
    AddvehiclePage.prototype.ionViewDidLoad = function () {
        this.requestParams = JSON.parse(this.navParams.get('requestParams'));
        var vhclData = JSON.parse(localStorage.getItem('vehicleData'));
        this.vehicleArray = vhclData;
        console.log(vhclData);
        if (vhclData != null) {
            localStorage.setItem('plate', vhclData[0].plate);
            localStorage.setItem('Account_VehicleId', vhclData[0].Account_VehicleId);
        }
        console.log(this.currentDate);
    };
    AddvehiclePage.prototype.toDocumentUpload = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Creating Application..."
        });
        try {
            var vhclData = JSON.parse(localStorage.getItem('vehicleData'));
            if (vhclData == null) {
                var alert_1 = this.alertCtrl.create({
                    title: 'Alert',
                    subTitle: 'Please Add Vehicle.',
                    buttons: ['Ok']
                });
                alert_1.present();
                return false;
            }
            var userDetails = JSON.parse(localStorage.getItem('loginData'));
            //let permitDetails = JSON.parse(localStorage.getItem('permitData'));
            //let addressDetails = JSON.parse(localStorage.getItem('AddressData'));
            var permitTypeId = this.requestParams.PermitTypeId;
            var AddressId = this.requestParams.AccountAddressID;
            var cityZoneId = this.requestParams.CityZoneID;
            var permitTierConfig = this.requestParams.PermitTypeTierConfigId;
            var stokeId = '';
            var data = {
                "AgencyID": userDetails.AgencyID,
                "AccountID": userDetails.AccountID,
                "PermitTypeId": permitTypeId,
                "AccountAddressID": AddressId,
                "PermitTypeTierConfigId": permitTierConfig,
                "PermitTypeProrateConfigId": "",
                "PermitStockID": "1327",
                "CityZoneID": cityZoneId,
                "PermitStartDate": this.currentDate,
                "PermitEndDate": this.currentDate,
                "ApplicationDesc": "",
                "VehicleRequired": "1",
                "AllotedPermit": "0",
                "DeliveryMessage": "N/A"
            };
            loader.present();
            // let authData = localStorage.getItem('token');
            // let headers = {
            //   headers: new HttpHeaders().set('Authorization', authData)
            // };
            // this.http.post('http://216.237.9.126/api/Permit/CreateApplication', data, headers)
            //   .subscribe(res => {
            //     console.log(res);
            //     this.createApplicationVeh(res);
            //     loader.dismiss();
            //   }, (err) => {
            //     console.log(err);
            //     loader.dismiss();
            //   });
            this.customService.requestViaPost(data, 'CreateApplication').subscribe(function (response) {
                console.log(response);
                _this.createApplicationVeh(response.Data);
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    AddvehiclePage.prototype.createApplicationVeh = function (d) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Creating Application Vehicle..."
        });
        try {
            localStorage.setItem('ApplicationID', d.ApplicationDetail[0].ApplicationId);
            var vehicleInfo = JSON.parse(localStorage.vehicleData);
            var plate = vehicleInfo[0].LicensePlate;
            var AccountVehicleId = vehicleInfo[0].Account_VehicleId;
            var data = {
                "ApplicationID": d.ApplicationDetail[0].ApplicationId,
                "AgencyID": d.ApplicationDetail[0].AgencyId,
                "AccountID": d.ApplicationDetail[0].AccountId,
                "AccountVehicleID": AccountVehicleId,
                "LicensePlate": plate
            };
            loader.present();
            this.customService.requestViaPost(data, 'CreateApplicationVehicle').subscribe(function (response) {
                console.log(response);
                if (response.Status == true) {
                    _this.createPermit();
                }
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    AddvehiclePage.prototype.createPermit = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Creating Permit..."
        });
        try {
            var Details = JSON.parse(localStorage.getItem('loginData'));
            var appId = localStorage.getItem('ApplicationID');
            var permitTypeId = this.requestParams.PermitTypeId;
            var data = {
                "AgencyID": Details.AgencyID,
                "AccountID": Details.AccountID,
                "ApplicationID": appId,
                "PermitTypeId": permitTypeId
            };
            loader.present();
            this.customService.requestViaPost(data, 'CreatePermit').subscribe(function (response) {
                console.log(response);
                localStorage.setItem('permitDetails', JSON.stringify(response.Data.PermitDetail[0]));
                //localStorage.setItem('permitDetails', JSON.stringify(res));
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__permitreceipt_permitreceipt__["a" /* PermitreceiptPage */], null, { animation: 'fade-transition', direction: 'forward' });
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    AddvehiclePage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
        });
    };
    AddvehiclePage.prototype.myVehiclesModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__myvehiclemodal_myvehiclemodal__["a" /* MyvehiclemodalPage */]);
        modal.onDidDismiss(function (data) {
            //console.log(data) // this data is the data when you dismiss
            _this.ionViewDidLoad();
        });
        modal.present();
    };
    AddvehiclePage.prototype.masterData = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__master_data_master_data__["a" /* MasterDataPage */]);
        modal.onDidDismiss(function (data) {
            var vhclData = JSON.parse(localStorage.getItem('vehicleData'));
            _this.vehicleArray = vhclData;
            console.log(vhclData);
            if (vhclData != null) {
                localStorage.setItem('plate', vhclData[0].plate);
                localStorage.setItem('Account_VehicleId', vhclData[0].Account_VehicleId);
            }
            _this.ionViewDidLoad();
        });
        modal.present();
    };
    AddvehiclePage.prototype.scanPlate = function () {
        var alert = this.alertCtrl.create({
            title: 'Notification',
            subTitle: 'Comming Soon.........!',
            buttons: ['Ok']
        });
        alert.present();
        return;
    };
    AddvehiclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addvehicle',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/addvehicle/addvehicle.html"*/'<ion-header style="background: #00a3bc;color:#fff;">\n  <ion-row>\n      <ion-col col-2>\n        <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n          <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n        </button>\n      </ion-col> \n      <ion-col col-8 text-center class="title">Add Vehicle</ion-col>\n      <span class="cart">2</span>\n      <img class="cartImg" src="assets/imgs/request-permit/cart-icon.png"/>\n         <ion-col col-2>\n          <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" class="info"></ion-icon>\n            </button>\n      </ion-col>   \n    </ion-row>\n  \n<ion-row text-center>\n  <ion-col style="border-bottom: 3px solid #00ed3d;">\n      <img style="width:25%;" src="assets/imgs/request-permit/permit-green.png"/>\n      <p style="color:#00ed3d">Permits</p>\n      <img class="custmImg" src="assets/imgs/request-permit/green-arrow.png"/>\n  </ion-col>\n  <ion-col>\n      <img style="width:38%;" src="assets/imgs/request-permit/vehicle-yellow.png"/>\n      <p style="color:yellow;margin: 6%;">Vehicles</p>\n      <img class="custmImg" src="assets/imgs/request-permit/white-arrow.png"/>\n  </ion-col>\n  <ion-col>\n      <img style="width:25%;" src="assets/imgs/request-permit/documents-white.png"/>\n      <p>Documents</p>\n  </ion-col>\n</ion-row>\n</ion-header>\n\n<ion-content style="background: #efefef;">  \n  <div style="box-shadow: 0 4px 8px #8a8a8a;background: #fff;padding-top: 1%;margin-bottom: 2%;">\n      <ion-label class="note">Add your Vehicles from below options </ion-label>\n    <ion-row text-center style="padding: 3% 0 0;border-top: 1px solid #ccc;color: #5e5e5e;">\n      <ion-col col-4 (click)="scanPlate()"><img src="assets/imgs/scan-2.png"/><ion-label>Scan Plate</ion-label></ion-col>\n      <ion-col col-4 (click)="scanPlate()"><img src="assets/imgs/number-plate-2.png"/><ion-label>Plate/VIN</ion-label></ion-col>\n      <ion-col col-4 (click)="masterData()"><img src="assets/imgs/documents-list-2.png"/><ion-label>Vehicle Master</ion-label></ion-col>\n    </ion-row>\n    <!-- {{currentDate | date:\'yyyy-mm-dd HH:mm:ss\'}} -->\n\n    \n</div>\n<div style="height:82%;background: #fff;padding-top: 1%;">\n<ion-label class="note1">Selected Vehicle List</ion-label>\n  <ion-row style="font-size: 1.1em;font-weight: 500;color:#5e5e5e;background: #d6d6d6;padding-left: 1%;"><ion-col col-5 style="margin:auto">Plate/Vin</ion-col><ion-col col-6 style="margin:auto">Issued To</ion-col><ion-col></ion-col></ion-row>\n<ion-grid>\n<ion-row class="vehicleRow" style="padding-top:0%;" *ngFor="let vehicle of vehicleArray, let i=index"><ion-col col-5>{{vehicle.LicensePlate}}</ion-col><ion-col col-6>{{vehicle.IssueTo}}</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<!-- <ion-row class="vehicleRow"><ion-col col-5>633334</ion-col><ion-col col-6>Rock</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633335</ion-col><ion-col col-6>Peter</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633336</ion-col><ion-col col-6>Client</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633337</ion-col><ion-col col-6>Kevin</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633338</ion-col><ion-col col-6>Enna</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633323</ion-col><ion-col col-6>steven</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633324</ion-col><ion-col col-6>Rock</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633325</ion-col><ion-col col-6>Peter</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633326</ion-col><ion-col col-6>Client</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n<ion-row class="vehicleRow"><ion-col col-5>633238</ion-col><ion-col col-6>Enna</ion-col><ion-col col-1><img src="assets/imgs/request-permit/gray-delete.png"/></ion-col></ion-row>\n -->\n</ion-grid>\n</div>\n<!-- <ion-row style="display: none" [(ngModel)]="CurrentDate"> {{currentDate | date:\'yyyy-mm-dd HH:mm:ss\'}}</ion-row> -->\n</ion-content>\n<ion-footer>\n  <button ion-button full class="footerBtn" (click)="toDocumentUpload()" >Next</button>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/addvehicle/addvehicle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_common_services_common_services__["a" /* CommonServicesProvider */]])
    ], AddvehiclePage);
    return AddvehiclePage;
}());

//# sourceMappingURL=addvehicle.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addnewvehiclemodal_addnewvehiclemodal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guestlist_guestlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SendinvitationPage } from '../sendinvitation/sendinvitation';



var MasterDataPage = /** @class */ (function () {
    function MasterDataPage(loadingCtrl, http, navCtrl, navParams, viewCtrl, modalCtrl, events, customService) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.customService = customService;
        this.masterData = "myVehicles";
        this.isAndroid = false;
        //selectedData: any = {};
        this.userData = {};
        this.mastervehicleArray = [];
        this.secondFormVal = [];
        this.filter = false;
        this.selectedData = [];
        this.tabs = '0';
    }
    MasterDataPage.prototype.ionViewDidLoad = function () {
        this.getMasterList();
    };
    //get master vehicle data from servie--------------->
    MasterDataPage.prototype.getMasterList1 = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Fething Vehicle List..."
        });
        var Details = JSON.parse(localStorage.getItem('useData'));
        this.userData.accountId = Details.AccountID;
        this.userData.agencyId = Details.AgencyID;
        var data = {
            "AccountID": this.userData.accountId,
            "AgencyID": this.userData.agencyId
        };
        loader.present();
        var authData = localStorage.getItem('token');
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', authData)
        };
        this.http.post('http://216.237.9.126/api/Permit/GetVehicleList', data, headers)
            .subscribe(function (res) {
            console.log(res);
            var vehicleList = res.Vehicle;
            // let vehicleList;
            for (var _i = 0, vehicleList_1 = vehicleList; _i < vehicleList_1.length; _i++) {
                var i = vehicleList_1[_i];
                _this.mastervehicleArray.push({ 'plate': i.LicensePlate, 'issueTo': i.IssueTo, 'make': i.make, 'vin': i.VIN, 'state': i.State, 'modal': i.MODEL, 'Account_VehicleId': i.Account_VehicleId });
            }
            loader.dismiss();
            console.log(_this.mastervehicleArray);
        }, function (err) {
            console.log(err);
            loader.dismiss();
        });
    };
    MasterDataPage.prototype.getMasterList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        try {
            loader.present();
            var Details = JSON.parse(localStorage.getItem('loginData'));
            this.userData.accountId = Details.AccountID;
            this.userData.agencyId = Details.AgencyID;
            var parameters = {
                "AccountID": this.userData.accountId,
                "AgencyID": this.userData.agencyId
            };
            this.customService.requestViaPost(parameters, 'GetVehicleList').subscribe(function (response) {
                _this.mastervehicleArray = response.Data.VehicleList;
                console.log(_this.mastervehicleArray);
                // for (let i of vehicleList) {
                //   this.vehicleArray.push({ 'plate': i.LicensePlate, 'issueTo': i.IssueTo, 'make': i.MAKE, 'vin': i.VIN, 'state': i.State, 'model': i.MODEL });
                // }
                //this.vehicleArrayList = this.vehicleArray;
                //this.setFilteredItems();
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    /***********************slide Tabs***********************/
    MasterDataPage.prototype.selectTab = function (index) {
        this.pageSlider.slideTo(index);
    };
    MasterDataPage.prototype.changeWillSlide = function ($event) {
        this.tabs = $event._snapIndex.toString();
    };
    MasterDataPage.prototype.closePop = function () {
        this.viewCtrl.dismiss();
    };
    MasterDataPage.prototype.AddGuest = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__guestlist_guestlist__["a" /* GuestlistPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    /************************************************** */
    MasterDataPage.prototype.AddVehicle = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__addnewvehiclemodal_addnewvehiclemodal__["a" /* AddnewvehiclemodalPage */]);
        modal.present();
    };
    MasterDataPage.prototype.chooseData = function () {
        var vhclData = JSON.stringify(this.selectedData);
        localStorage.setItem('vehicleData', vhclData);
        this.viewCtrl.dismiss();
        //this.navCtrl.push(AddvehiclePage, null, { animation: 'fade-transition', direction: 'forward' });
        // this.viewCtrl.dismiss(this.selectedData);
    };
    //save selected vehicle to array----------------------->
    MasterDataPage.prototype.onFilterChange = function (val, eve) {
        this.selectedData.push(val); // to add value to group array
        return;
        this.filter = !this.filter;
        if (this.selectedData.length == 0) {
            if (this.filter == true) {
                this.selectedData.push(val); // to add value to group array
                // }else{
                // this.selectedData.pop();// to add value to group array 
            }
        }
        else {
            //this.AddVehicle();
            //this.selectedData.pop();// to add value to group array 
        }
        var vhclData = JSON.stringify(this.selectedData);
        localStorage.setItem('vehicleData', vhclData);
        console.log(this.filter);
        console.log(this.selectedData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* Slides */])
    ], MasterDataPage.prototype, "pageSlider", void 0);
    MasterDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-master-data',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/master-data/master-data.html"*/'            <!--////////////// Important code for maaster Data ///////////////////////-->\n\n <!-- <ion-header>\n    <ion-toolbar no-border-top>\n      <ion-segment [(ngModel)]="masterData">\n        <ion-segment-button value="myVehicles">\n             Vehicles List\n        </ion-segment-button>\n        <ion-segment-button value="Guest">\n            Guest List\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n      <div [ngSwitch]="masterData">\n        <ion-list *ngSwitchCase="\'myVehicles\'">\n            <ion-row class="vehicleRow"><ion-col col-5>633333</ion-col><ion-col col-5>Steve</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633334</ion-col><ion-col col-5>Rock</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633335</ion-col><ion-col col-5>Ford</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633336</ion-col><ion-col col-5>Peter</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633337</ion-col><ion-col col-5>Tony</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633338</ion-col><ion-col col-5>Sophia</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633339</ion-col><ion-col col-5>Emma</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633340</ion-col><ion-col col-5>Olivia</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-footer>\n                <ion-row>   \n                  <button ion-button full class="footerBtn border" (click)="closePop()">Cancel</button>    \n                  <button ion-button full class="footerBtn" >Add</button>    \n                </ion-row>\n            </ion-footer>\n          </ion-list>\n    \n        <ion-list *ngSwitchCase="\'Guest\'">\n            <ion-row class="vehicleRow"><ion-col col-5>633333</ion-col><ion-col col-5>Steve</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633334</ion-col><ion-col col-5>Rock</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633335</ion-col><ion-col col-5>Ford</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633336</ion-col><ion-col col-5>Peter</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633337</ion-col><ion-col col-5>Tony</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633338</ion-col><ion-col col-5>Sophia</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633339</ion-col><ion-col col-5>Emma</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-row class="vehicleRow"><ion-col col-5>633340</ion-col><ion-col col-5>Olivia</ion-col><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col></ion-row>\n            <ion-footer>\n                <ion-row>   \n                  <button ion-button full class="footerBtn1 border" (click)="closePop()">Cancel</button> \n                  <button ion-button full class="footerBtn1 border" >Invite</button>   \n                  <button ion-button full class="footerBtn1" >Add</button>    \n                </ion-row>\n            </ion-footer>\n          </ion-list>\n</div>\n</ion-content>   -->  \n\n<ion-header>\n    <ion-segment [(ngModel)]="tabs">\n        <ion-segment-button (click)="selectTab(0)" value="0">My Vehicles</ion-segment-button>\n        <ion-segment-button (click)="selectTab(1)" value="1">Guest Vehicles</ion-segment-button>\n        <div id="slide" class="slide"></div>\n      </ion-segment>\n   <!--  <ion-row style="padding: 2% 0;text-align: center;font-size: 1.5em;background: #00a3bc;color:#fff;"><ion-col>Vehicles List</ion-col><ion-col>Guest List</ion-col></ion-row> -->\n   </ion-header>\n   \n   <ion-content>\n     <ion-row class="headerRow"><ion-col></ion-col><ion-col  col-6>Plate/VIN</ion-col><ion-col col-4 text-left>Issued To</ion-col></ion-row>\n    <ion-slides #pageSlider (ionSlideWillChange)="changeWillSlide($event)">\n      <ion-slide>\n          <ion-row class="vehicleRow" *ngFor="let vehicle of mastervehicleArray, let i=index"><ion-col class="check"><ion-checkbox class="checkIcon" (click)="onFilterChange(vehicle)"></ion-checkbox></ion-col><ion-col col-6>{{vehicle.LicensePlate}}</ion-col><ion-col col-4 text-left>{{vehicle.IssueTo}}</ion-col></ion-row>\n          <!-- <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633334</ion-col><ion-col col-4 text-left>Rock</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633335</ion-col><ion-col col-4 text-left>Ford</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633336</ion-col><ion-col col-4 text-left>Peter</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633337</ion-col><ion-col col-4 text-left>Tony</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633338</ion-col><ion-col col-4 text-left>Sophia</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633339</ion-col><ion-col col-4 text-left>Emma</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633340</ion-col><ion-col col-4 text-left>Olivia</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633333</ion-col><ion-col col-4 text-left>Steve</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633334</ion-col><ion-col col-4 text-left>Rock</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633335</ion-col><ion-col col-4 text-left>Ford</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633336</ion-col><ion-col col-4 text-left>Peter</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633337</ion-col><ion-col col-4 text-left>Tony</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633338</ion-col><ion-col col-4 text-left>Sophia</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633339</ion-col><ion-col col-4 text-left>Emma</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633340</ion-col><ion-col col-4 text-left>Olivia</ion-col></ion-row>\n           -->\n          <ion-icon name="add-circle" (click)="AddVehicle()"></ion-icon>\n      </ion-slide>\n      \n      <ion-slide>\n          <ion-row class="vehicleRow" *ngFor="let vehicle of mastervehicleArray, let i=index"><ion-col class="check"><ion-checkbox class="checkIcon" (click)="onFilterChange(vehicle)"></ion-checkbox></ion-col><ion-col col-6>{{vehicle.LicensePlate}}</ion-col><ion-col col-4 text-left>{{vehicle.IssueTo}}</ion-col></ion-row>\n          <!-- <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633333</ion-col><ion-col col-4 text-left>Steve</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633334</ion-col><ion-col col-4 text-left>Rock</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633335</ion-col><ion-col col-4 text-left>Ford</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633336</ion-col><ion-col col-4 text-left>Peter</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633337</ion-col><ion-col col-4 text-left>Tony</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633338</ion-col><ion-col col-4 text-left>Sophia</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633339</ion-col><ion-col col-4 text-left>Emma</ion-col></ion-row>\n          <ion-row class="vehicleRow"><ion-col class="check"><ion-checkbox class="checkIcon"></ion-checkbox></ion-col><ion-col col-6>633340</ion-col><ion-col col-4 text-left>Olivia</ion-col></ion-row> -->\n      \n          <!--<ion-footer>\n              <ion-row>   \n                <button ion-button full class="footerBtn border" (click)="closePop()">Cancel</button> \n                 <button ion-button full class="footerBtn1 border" (click)="inviteGuest()">Invite</button>    \n                <button ion-button full class="footerBtn" >Done</button>    \n              </ion-row>\n          </ion-footer>-->\n          <ion-icon name="add-circle" (click)="AddGuest()"></ion-icon>\n      </ion-slide>\n     \n    </ion-slides>\n   </ion-content>\n\n   <ion-footer>\n      <ion-row>   \n        <button ion-button full class="footerBtn border" (click)="closePop()">Cancel</button>    \n        <button ion-button full class="footerBtn" (click)="chooseData()">Done</button>    \n      </ion-row>\n  </ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/master-data/master-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common_services_common_services__["a" /* CommonServicesProvider */]])
    ], MasterDataPage);
    return MasterDataPage;
}());

//# sourceMappingURL=master-data.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditguestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditguestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditguestPage = /** @class */ (function () {
    function EditguestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditguestPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad EditguestPage');
    };
    EditguestPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    EditguestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editguest',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/editguest/editguest.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n              <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n              <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">Edit Guest Information</ion-col>\n        <ion-col col-2>\n            <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 2.5em;color:#fff;"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n                \n                  <ion-item>\n                    <ion-label stacked>First Name</ion-label>\n                    <ion-input type="text" placeholder="Enter guest first name"></ion-input>\n                    <hr>\n                  </ion-item>\n            \n                \n                  <ion-item>\n                    <ion-label stacked>Last Name</ion-label>\n                    <ion-input type="password" placeholder="Enter guest last name"></ion-input>\n                    <hr>\n                  </ion-item>\n\n                  <ion-item>\n                        <ion-label stacked>Email Address</ion-label>\n                        <ion-input type="password" placeholder="Enter guest email address"></ion-input>\n                </ion-item>\n\n        </ion-list>\n</ion-content>\n\n\n<ion-footer>\n    <ion-row>   \n        <button ion-button full class="footerBtn border">Save</button>    \n        <button ion-button full class="footerBtn">Cancel</button>    \n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/editguest/editguest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], EditguestPage);
    return EditguestPage;
}());

//# sourceMappingURL=editguest.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendinvitationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SendinvitationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendinvitationPage = /** @class */ (function () {
    function SendinvitationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SendinvitationPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SendinvitationPage');
    };
    SendinvitationPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    SendinvitationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendinvitation',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/sendinvitation/sendinvitation.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n             <!--  <img src="assets/imgs/request-permit/back.png"/> -->\n             <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">Send Invitation</ion-col>\n        <ion-col col-2>\n            <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 2.5em;color:#fff;"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n                \n                  <ion-item>\n                    <ion-label stacked>To</ion-label>\n                    <ion-input type="text" placeholder="stevenjo@gmail.com:jhonk@gmail.com"></ion-input>\n                    <hr>\n                  </ion-item>\n            \n                \n                  <ion-item>\n                    <ion-label stacked>Sub</ion-label>\n                    <ion-input type="password" placeholder="Permit invitation"></ion-input>\n                    <hr>\n                  </ion-item>\n\n                  <ion-item>\n                        <ion-label stacked>Message</ion-label>\n                        <ion-input type="password" placeholder="Enter message"></ion-input>\n                </ion-item>\n\n                \n\n        </ion-list>\n</ion-content>\n\n\n<ion-footer>\n    <ion-row>   \n        <button ion-button full class="footerBtn border">Send</button>    \n        <button ion-button full class="footerBtn">Cancel</button>    \n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/sendinvitation/sendinvitation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], SendinvitationPage);
    return SendinvitationPage;
}());

//# sourceMappingURL=sendinvitation.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypermitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requestnewpermit_requestnewpermit__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mycart_mycart__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MypermitPage = /** @class */ (function () {
    function MypermitPage(loadingCtrl, navCtrl, navParams, customService, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customService = customService;
        this.alertCtrl = alertCtrl;
        this.searchTerm = '';
        this.permitList = [];
        this.permitArrayList = [];
        this.shownGroup = null;
        // this.initializeItems();
    }
    MypermitPage.prototype.ionViewDidLoad = function () {
        this.getPermitList();
        // console.log('ionViewDidLoad MypermitPage');
    };
    MypermitPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    /*
       buttonClicked: boolean = true; //Whatever you want to initialise it as
       showMoreData() {
              this.buttonClicked = !this.buttonClicked;
        }
    
        buttonClicked1: boolean = false; //Whatever you want to initialise it as
        showMoreData1() {
               this.buttonClicked1 = !this.buttonClicked1;
         }
    
         buttonClicked2: boolean = false; //Whatever you want to initialise it as
         showMoreData2() {
                this.buttonClicked2 = !this.buttonClicked2;
          }
    
          buttonClicked3: boolean = false; //Whatever you want to initialise it as
          showMoreData3() {
                 this.buttonClicked3 = !this.buttonClicked3;
           } */
    MypermitPage.prototype.toCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mycart_mycart__["a" /* MycartPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    MypermitPage.prototype.requestNewPermit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__requestnewpermit_requestnewpermit__["a" /* RequestnewpermitPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    MypermitPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MypermitPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MypermitPage.prototype.getPermitList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Creating Permit..."
        });
        try {
            var Details = JSON.parse(localStorage.getItem('loginData'));
            var data = {
                "AgencyID": Details.AgencyID,
                "AccountID": Details.AccountID,
            };
            loader.present();
            this.customService.requestViaPost(data, 'GetPermitDetails').subscribe(function (response) {
                console.log(response);
                _this.permitList = response.Data.PERMIT_DETAILS;
                _this.permitArrayList = _this.permitList;
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    MypermitPage.prototype.setFilteredItems = function () {
        var q = this.searchTerm;
        // if the value is an empty string don't filter the items
        if (q == undefined) {
            return;
        }
        var newarr = [];
        newarr = this.permitArrayList;
        this.permitList = newarr;
        return this.permitList = this.permitList.filter(function (v) {
            if (v.PERMIT && v.DESCRIPTON) {
                if (v.PERMIT.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.DESCRIPTON.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
            }
            //return false;
        });
    };
    MypermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mypermit',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/mypermit/mypermit.html"*/' <ion-header>\n\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n          <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n            <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n          </button>\n        </ion-col> \n        <ion-col col-6 text-center class="title">My Permits</ion-col>\n        <ion-col col-1 style="padding:0">\n                <span class="cart">2</span> \n                <img class="cartImg" src="assets/imgs/request-permit/cart-icon.png" (click)="toCart()"/>\n        </ion-col>\n        \n        <ion-col col-2>\n            <button ion-button clear>\n                <ion-icon name="ios-information-circle-outline" style="font-size: 2.2em;color:#fff;"></ion-icon>\n              </button>\n        </ion-col>  \n      </ion-row>\n      <ion-item style="padding:0">\n          <ion-searchbar type="text" placeholder="Search by Name,Permit and Address" [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n          <!-- <ion-icon name="ios-search" item-right primary style="color:#00a3bc;font-weight: bold;"></ion-icon> -->\n        </ion-item>\n</ion-header>\n\n<ion-content style="background:#ccc;">\n<ion-grid class="custmGrid" *ngFor="let permitDetail of permitList">\n        <ion-row class="grayRow">\n                <ion-col col-4>Permit</ion-col>\n                <ion-col col-4>Plate/Vin</ion-col>\n                <ion-col col-4>Status</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>{{permitDetail.PERMIT}}</ion-col> \n                <ion-col col-4>{{permitDetail.PLATE_VIN}}</ion-col>             \n                <ion-col col-4 style="color: #14b250;">{{permitDetail.STATUS}}</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow"><ion-col>Description</ion-col></ion-row>\n            <ion-row class="des"><ion-col> {{permitDetail.DESCRIPTON}}</ion-col></ion-row>\n      <ion-item style="font-size: 1em;padding: 0;"  *ngIf="isGroupShown(1)">\n            <ion-row class="grayRow">\n                <ion-col col-4>Issued</ion-col>\n                <ion-col col-4>Valid From</ion-col>\n                <ion-col col-4>Valid To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>{{permitDetail.ISSUED}}</ion-col> \n                <ion-col col-4>{{permitDetail.VALIDFROM}}</ion-col>\n                <ion-col col-4>{{permitDetail.VALIDTO}}</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow">\n                <ion-col col-4>Issued To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt"> \n                 \n                <ion-col col-4>{{permitDetail.ISSUEDTO}}</ion-col>\n            </ion-row>\n      </ion-item>\n  <ion-row>\n      <ion-col></ion-col>\n  <ion-col>\n    <button ion-button block outline class="renew">Renew</button>\n  </ion-col>\n   <ion-col>\n        <button ion-button block outline class="more" (click)="toggleGroup(1)" *ngIf="!isGroupShown(1)">More</button>\n        <button ion-button block outline class="less" (click)="toggleGroup(1)" *ngIf="isGroupShown(1)">More</button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- <ion-grid class="custmGrid">\n        <ion-row class="grayRow">\n                <ion-col col-4>Permit</ion-col>\n                <ion-col col-4>Plate/Vin</ion-col>\n                <ion-col col-4>Status</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>17RO110</ion-col> \n                <ion-col col-4>622224</ion-col>             \n                <ion-col col-4 style="color: #14b250;">Active</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow"><ion-col>Description</ion-col></ion-row>\n            <ion-row class="des"><ion-col> Permit issued with discount to $150 from $222</ion-col></ion-row>\n      <ion-item style="font-size: 1em;padding: 0;"  *ngIf="isGroupShown(2)">\n            <ion-row class="grayRow">\n                <ion-col col-4>Issued</ion-col>\n                <ion-col col-4>Valid From</ion-col>\n                <ion-col col-4>Valid To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>03/29/2018</ion-col> \n                <ion-col col-4>03/28/2018</ion-col>\n                <ion-col col-4>04/05/2018</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow">\n                 \n                <ion-col col-4>Issued To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt"> \n                 \n                <ion-col col-4>Steven</ion-col>\n            </ion-row>\n      </ion-item>\n  <ion-row>\n        <ion-col></ion-col>\n  <ion-col>\n  <button ion-button block outline class="renew">Renew</button>\n  </ion-col>\n\n  <ion-col>\n    <button ion-button block outline class="more" (click)="toggleGroup(2)" *ngIf="!isGroupShown(2)">More</button>\n    <button ion-button block outline class="less" (click)="toggleGroup(2)" *ngIf="isGroupShown(2)">More</button>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class="custmGrid">\n        <ion-row class="grayRow">\n                <ion-col col-4>Permit</ion-col>\n                <ion-col col-4>Plate/Vin</ion-col>\n                <ion-col col-4>Status</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>17RO110</ion-col> \n                <ion-col col-4>622225</ion-col>             \n                <ion-col col-4 style="color: #14b250;">Active</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow"><ion-col>Description</ion-col></ion-row>\n            <ion-row class="des"><ion-col> Permit issued with discount to $150 from $222</ion-col></ion-row>\n      <ion-item style="font-size: 1em;padding: 0;" *ngIf="isGroupShown(3)">\n            <ion-row class="grayRow">\n                <ion-col col-4>Issued</ion-col>\n                <ion-col col-4>Valid From</ion-col>\n                <ion-col col-4>Valid To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>03/29/2018</ion-col> \n                <ion-col col-4>03/28/2018</ion-col>\n                <ion-col col-4>04/05/2018</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow">\n                 \n                <ion-col col-4>Issued To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt"> \n                 \n                <ion-col col-4>Steven</ion-col>\n            </ion-row>\n      </ion-item>\n<ion-row>\n        <ion-col></ion-col>\n<ion-col>\n<button ion-button block outline class="renew">Renew</button>\n</ion-col>\n<ion-col>\n        <button ion-button block outline class="more" (click)="toggleGroup(3)" *ngIf="!isGroupShown(3)">More</button>\n        <button ion-button block outline class="less" (click)="toggleGroup(3)" *ngIf="isGroupShown(3)">More</button>\n      </ion-col>\n</ion-row>\n</ion-grid>\n\n<ion-grid class="custmGrid">\n        <ion-row class="grayRow">\n                <ion-col col-4>Permit</ion-col>\n                <ion-col col-4>Plate/Vin</ion-col>\n                <ion-col col-4>Status</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>17RO110</ion-col> \n                <ion-col col-4>622226</ion-col>             \n                <ion-col col-4 style="color: #14b250;">Active</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow"><ion-col>Description</ion-col></ion-row>\n            <ion-row class="des"><ion-col> Permit issued with discount to $150 from $222</ion-col></ion-row>\n      <ion-item style="font-size: 1em;padding: 0;" *ngIf="isGroupShown(4)">\n            <ion-row class="grayRow">\n                <ion-col col-4>Issued</ion-col>\n                <ion-col col-4>Valid From</ion-col>\n                <ion-col col-4>Valid To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>03/29/2018</ion-col> \n                <ion-col col-4>03/28/2018</ion-col>\n                <ion-col col-4>04/05/2018</ion-col>\n            </ion-row>\n  \n            <ion-row class="custmRow">\n                 \n                <ion-col col-4>Issued To</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt"> \n                 \n                <ion-col col-4>Steven</ion-col>\n            </ion-row>\n      </ion-item>\n<ion-row>\n        <ion-col></ion-col>\n<ion-col>\n<button ion-button block outline class="renew">Renew</button>\n</ion-col>\n<ion-col>\n        <button ion-button block outline class="more" (click)="toggleGroup(4)" *ngIf="!isGroupShown(4)">More</button>\n        <button ion-button block outline class="less" (click)="toggleGroup(4)" *ngIf="isGroupShown(4)">More</button>\n      </ion-col>\n</ion-row>\n</ion-grid> -->\n\n</ion-content>\n\n<ion-footer>\n    <button ion-button full style="background:#14b250;margin: 0;padding: 6%;text-transform: none;font-size: 1.2em;" (click)="requestNewPermit()">Request New Permit</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/mypermit/mypermit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_services_common_services__["a" /* CommonServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MypermitPage);
    return MypermitPage;
}());

//# sourceMappingURL=mypermit.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou_thankyou__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.account = false;
        this.visible = false;
        this.address = false;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    PaymentPage.prototype.toThankyou = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__thankyou_thankyou__["a" /* ThankyouPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    PaymentPage.prototype.toggle = function () {
        this.account = !this.account;
    };
    PaymentPage.prototype.toggle1 = function () {
        this.visible = !this.visible;
    };
    PaymentPage.prototype.toggle2 = function () {
        this.address = !this.address;
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/payment/payment.html"*/'<ion-header>\n\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n          <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n            <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n            <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n          </button>\n        </ion-col> \n        <ion-col col-8 text-center class="title">Billing Information</ion-col>\n        <ion-col col-2>\n            <button ion-button clear>\n                <ion-icon name="ios-information-circle-outline" class="icons"></ion-icon>\n              </button>\n        </ion-col>   \n      </ion-row>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-row style="background:#ccc;padding: 2%;font-weight: 500;font-size: 1.1em;" (click)="toggle()">\n    <ion-col col-11 style="margin:auto;">Use Account Address</ion-col>\n    <ion-col style="padding:0;">\n            <ion-checkbox></ion-checkbox>\n           <!--  <img src="assets/imgs/request-permit/uncheck.png" *ngIf="!account"/>\n            <img src="assets/imgs/request-permit/active-check.png" *ngIf="account"/> -->\n    </ion-col>\n  </ion-row>\n\n<ion-grid style="padding: 0;margin: .5% 0;">\n  <ion-row style="background:#ebebeb;padding: 2%;color: #282828;font-weight: 500;">Billing Information</ion-row>\n  <ion-row>\n    <ion-col>\n        <ion-item >\n            <ion-label stacked>First Name</ion-label>\n            <ion-input type="text" placeholder="Steven"></ion-input>\n          </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item >\n            <ion-label stacked>Last Name</ion-label>\n            <ion-input type="text" placeholder="Rock"></ion-input>\n          </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col>\n          <ion-item >\n              <ion-label stacked>Street</ion-label>\n              <ion-input type="text" placeholder="601 Powell PL"></ion-input>\n            </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item >\n              <ion-label stacked>City</ion-label>\n              <ion-input type="text" placeholder="Newport Beach"></ion-input>\n            </ion-item>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col>\n          <ion-item>\n              <ion-label stacked>State</ion-label>\n              <ion-select>\n                    <ion-option value="nes" selected>California</ion-option>\n                    <ion-option value="n64">Nintendo64</ion-option>\n              </ion-select>\n          </ion-item>\n      </ion-col>\n      <ion-col>\n          <ion-item >\n              <ion-label stacked>Zip Code</ion-label>\n              <ion-input type="text" placeholder="92663"></ion-input>\n            </ion-item>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-item >\n          <ion-label stacked>Email Address</ion-label>\n          <ion-input type="text" placeholder="cgh@test.com"></ion-input>\n        </ion-item>\n  </ion-row>\n  <ion-row style="background:#ccc;padding:2%;margin-top:4%;font-weight: 500;font-size: 1.1em;" (click)="toggle1()">\n    <ion-col col-11>Payment Method</ion-col>\n    <ion-col style="padding:0;">\n        <!-- <img src="assets/imgs/request-permit/uncheck.png" *ngIf="!visible"/>\n        <img src="assets/imgs/request-permit/active-check.png" *ngIf="visible"/> -->\n        <ion-checkbox></ion-checkbox>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid style="padding: 0;margin: .5% 0;">\n    <ion-row style="background:#ebebeb;padding: 2%;color: #282828;font-weight: 500;">Credit Card Information</ion-row>\n    <ion-row>\n        <ion-col style="margin: auto;">\n           Card Type\n        </ion-col>\n        <ion-col>\n            <img src="assets/imgs/payment-option.png"/>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-item >\n            <ion-label stacked>Card Number</ion-label>\n            <ion-input type="text" placeholder="xxxx-xxxx-xxxx-xxxx"></ion-input>\n          </ion-item>\n      </ion-row>\n      <span style="margin: 2% 2% 0;color: #3b3b3b;font-size: 1.1em;font-weight:500;">Expiration Date</span>\n      <ion-row>\n        <ion-col>\n            <ion-item>\n                    <ion-label stacked></ion-label>\n                <ion-select>\n                      <ion-option value="nes" selected>Jan</ion-option>\n                      <ion-option value="n64">Nintendo64</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n        <ion-col>\n            <ion-item>\n                    <ion-label stacked></ion-label>\n                <ion-select>\n                      <ion-option value="nes" selected>2021</ion-option>\n                      <ion-option value="n64">Nintendo64</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n        </ion-row>\n        <ion-row>\n                <ion-item >\n                    <ion-label stacked>Card Code</ion-label>\n                    <ion-input type="text" placeholder="xxxx-xxxx-xxxx-xxxx"></ion-input>\n                  </ion-item>\n        </ion-row>\n        <span class="smallTxt">3 or 4 digit number on the back of the credit card</span>\n</ion-grid>\n<ion-row style="background:#ebebeb;padding:2%;margin-top: 5%;color: #8a8a8a;" (click)="toggle2();">\n    <ion-col col-1 style="margin: auto;padding:0;">\n           <!--  <img src="assets/imgs/request-permit/uncheck.png" *ngIf="!address"/>\n            <img src="assets/imgs/request-permit/active-check.png" *ngIf="address"/> -->\n            <ion-checkbox></ion-checkbox>\n    </ion-col>\n     <ion-col style="margin: auto;"> By submitting my order,I agree to the Terms of Sale and the Privacy Policy of the getaPERMIT.net</ion-col>       \n</ion-row>\n</ion-content>\n\n\n<ion-footer>  \n      <button ion-button full class="footerBtn" (click)="toThankyou()">Pay</button>\n      <button ion-button full class="footerBtn">Cancel</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThankyouPage = /** @class */ (function () {
    function ThankyouPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThankyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankyouPage');
    };
    ThankyouPage.prototype.toDashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/thankyou/thankyou.html"*/'\n<ion-content style="font-weight: 100;color: #5e5e5e;">\n<ion-grid class="success"><ion-icon name="ios-checkmark-circle-outline" class="successIcon"></ion-icon>\n</ion-grid>\n<ion-row style="font-size: 1.5em;">\n  <ion-col text-center>Payment Successfully Processed.</ion-col>\n</ion-row>\n<ion-row style="font-size: 3em;">\n    <ion-col text-center>Thank You!</ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n    <button ion-button full class="backBtn" (click)="toDashboard()">Back To Home</button>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/thankyou/thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentapprovePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycart_mycart__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentapprovePage = /** @class */ (function () {
    function DocumentapprovePage(navCtrl, navParams, customService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customService = customService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.applicationList = [];
        this.shownGroup = null;
    }
    DocumentapprovePage.prototype.ionViewDidLoad = function () {
        this.getApplicationList();
        // console.log('ionViewDidLoad DocumentapprovePage');
    };
    DocumentapprovePage.prototype.toCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mycart_mycart__["a" /* MycartPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DocumentapprovePage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    DocumentapprovePage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    DocumentapprovePage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    DocumentapprovePage.prototype.getApplicationList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Creating Permit..."
        });
        try {
            var Details = JSON.parse(localStorage.getItem('loginData'));
            var data = {
                "AgencyID": Details.AgencyID,
                "AccountID": Details.AccountID,
            };
            loader.present();
            this.customService.requestViaPost(data, 'GetApplicationDetails').subscribe(function (response) {
                console.log(response);
                _this.applicationList = response.Data.APPLICATION_DETAILS;
                //this.permitArrayList = this.permitList;
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    DocumentapprovePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentapprove',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/documentapprove/documentapprove.html"*/'<ion-header>\n\n  <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n                <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n                \n                  <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n                </button>\n              </ion-col> \n    <ion-col col-8 text-center class="title">My Applications</ion-col>\n    <span class="cart">2</span>\n    <img style="position:absolute;right: 18%;top: 15%;" src="assets/imgs/request-permit/cart-icon.png" (click)="toCart()"/>\n    <ion-col col-2>\n        <button ion-button clear>\n            <ion-icon name="ios-information-circle-outline" style="font-size: 10vw;color:#fff;"></ion-icon>\n          </button>\n    </ion-col>   \n  </ion-row>\n\n</ion-header>\n\n\n<ion-content style="background:#ccc;">\n\n<ion-grid class="custmGrid" *ngFor="let applicationDetail of applicationList">\n    <ion-row class="grayRow">\n        <ion-col col-4>Application No</ion-col>\n        <ion-col col-4>Plate/Vin</ion-col>\n        <ion-col col-4>Status</ion-col>\n    </ion-row>\n    <ion-row class="boldRow">\n        <ion-col col-4>{{applicationDetail.APPLICATIONNO}}</ion-col>\n        <ion-col col-4>{{applicationDetail.PLATE_VIN}} </ion-col>\n        <ion-col col-4 style="color: #14b250;">{{applicationDetail.STATUS}}</ion-col>\n    </ion-row>\n\n    <ion-row class="grayRow customMargin"><ion-col>Description</ion-col></ion-row>\n    <ion-row class="des"><ion-col> {{applicationDetail.DESCRIPTION}}</ion-col></ion-row>\n   <ion-item style="font-size: 1em;padding: 0;" *ngIf="isGroupShown(1)">\n    <ion-row class="grayRow">\n        <ion-col col-4>Submit Date</ion-col>        \n        <ion-col col-4>Issued To</ion-col>\n        <ion-col col-4>Delivery Option</ion-col>\n    </ion-row>\n    <ion-row class="boldRow">\n        <ion-col col-4>{{applicationDetail.SUBMITDT}}</ion-col>        \n        <ion-col col-4>{{applicationDetail.ISSUEDTOCSV}}</ion-col>\n        <ion-col col-4>{{applicationDetail.DELIVERYMESSAGE}}</ion-col>\n    </ion-row>\n\n    <ion-row class="grayRow customMargin">\n        <ion-col col-4>Change Date</ion-col>\n        <ion-col col-4>Address</ion-col>\n        <ion-col col-4>Permit</ion-col>\n    </ion-row>\n    <ion-row class="boldRow">\n        <ion-col col-4>{{applicationDetail.CHANGEDATE}}</ion-col>\n        <ion-col col-4>{{applicationDetail.ADDRESS}}</ion-col>\n        <ion-col col-4>{{applicationDetail.PERMITNUMBER}}</ion-col>\n    </ion-row>\n\n </ion-item>\n <ion-row>\n     <ion-col col-4></ion-col>\n <ion-col col-4>\n        <button ion-button block outline  (click)="toCart()">Add to Cart</button>\n </ion-col>\n <ion-col col-4>\n    <button ion-button block outline class="more" (click)="toggleGroup(1)" *ngIf="!isGroupShown(1)">More</button>\n    <button ion-button block outline class="less" (click)="toggleGroup(1)" *ngIf="isGroupShown(1)">More</button>\n </ion-col>\n </ion-row>\n</ion-grid>\n\n<!-- <ion-grid class="custmGrid">\n  <ion-row class="grayRow">\n      <ion-col col-4>Application No</ion-col>\n      <ion-col col-4>Plate/Vin</ion-col>\n      <ion-col col-4>Status</ion-col>\n  </ion-row>\n  <ion-row class="boldRow">\n      <ion-col col-4>15349</ion-col>\n      <ion-col col-4>AD12</ion-col>\n      <ion-col col-4 style="color: #14b250;">Pre-approved</ion-col>\n  </ion-row>\n\n  <ion-row class="grayRow customMargin"><ion-col>Description</ion-col></ion-row>\n  <ion-row class="des"><ion-col> Permit issued with discount to $150 from $222</ion-col></ion-row>\n  <ion-item style="font-size: 1em;padding: 0;" *ngIf="isGroupShown(2)">\n  <ion-row class="grayRow">\n      <ion-col col-4>Submit Date</ion-col>     \n      <ion-col col-4>Issued To</ion-col>\n      <ion-col col-4>Delivery Option</ion-col>\n  </ion-row>\n  <ion-row class="boldRow">\n      <ion-col col-4>03/28/2018</ion-col>     \n      <ion-col col-4>GDF56</ion-col>\n      <ion-col col-4>By Mail</ion-col>\n  </ion-row>\n\n  <ion-row class="grayRow customMargin">\n      <ion-col col-4>Change Date</ion-col>\n      <ion-col col-4>Address</ion-col>\n      <ion-col col-4>Permit</ion-col>\n  </ion-row>\n  <ion-row class="boldTxt">\n      <ion-col col-4>06/04/2018</ion-col>\n      <ion-col col-4>12 Herbert St</ion-col>\n      <ion-col col-4>---</ion-col>\n  </ion-row>\n\n </ion-item>\n <ion-row>\n        <ion-col col-4></ion-col>\n    <ion-col col-4>\n           <button ion-button block outline  (click)="toCart()">Add to Cart</button>\n    </ion-col>\n    <ion-col col-4>\n       <button ion-button block outline class="more" (click)="toggleGroup(2)" *ngIf="!isGroupShown(2)">More</button>\n       <button ion-button block outline class="less" (click)="toggleGroup(2)" *ngIf="isGroupShown(2)">More</button>\n    </ion-col>\n    </ion-row>\n</ion-grid>\n\n<ion-grid class="custmGrid">\n  <ion-row>\n      <ion-col col-4>Application No</ion-col>\n      <ion-col col-4>Plate/Vin</ion-col>\n      <ion-col col-4>Status</ion-col>\n  </ion-row>\n  <ion-row class="boldRow">\n      <ion-col col-4>15350</ion-col>\n      <ion-col col-4>AD12</ion-col>\n      <ion-col col-4 style="color: #14b250;">Pre-approved</ion-col>\n  </ion-row>\n\n  <ion-row class="grayRow customMargin"><ion-col>Description</ion-col></ion-row>\n  <ion-row class="des"><ion-col> Permit issued with discount to $150 from $222</ion-col></ion-row>\n  <ion-item style="font-size: 1em;padding: 0;" *ngIf="isGroupShown(3)">\n  <ion-row class="grayRow">\n      <ion-col col-4>Submit Date</ion-col>      \n      <ion-col col-4>Issued To</ion-col>\n      <ion-col col-4>Delivery Option</ion-col>\n  </ion-row>\n  <ion-row class="boldTxt">\n      <ion-col col-4>03/28/2018</ion-col>      \n      <ion-col col-4>GDF56</ion-col>\n      <ion-col col-4>By Mail</ion-col>\n  </ion-row>\n\n  <ion-row class="grayRow customMargin">\n      <ion-col col-4>Change Date</ion-col>\n      <ion-col col-4>Address</ion-col>\n      <ion-col col-4>Permit</ion-col>\n  </ion-row>\n  <ion-row class="boldTxt">\n      <ion-col col-4>06/04/2018</ion-col>\n      <ion-col col-4>12 Herbert St</ion-col>\n      <ion-col col-4>---</ion-col>\n  </ion-row>\n\n </ion-item>\n <ion-row>\n        <ion-col col-4></ion-col>\n    <ion-col col-4>\n           <button ion-button block outline  (click)="toCart()">Add to Cart</button>\n    </ion-col>\n    <ion-col col-4>\n       <button ion-button block outline class="more" (click)="toggleGroup(3)" *ngIf="!isGroupShown(3)">More</button>\n       <button ion-button block outline class="less" (click)="toggleGroup(3)" *ngIf="isGroupShown(3)">More</button>\n    </ion-col>\n    </ion-row>\n</ion-grid>\n\n<ion-grid class="custmGrid">\n  <ion-row>\n      <ion-col col-4>Application No</ion-col>\n      <ion-col col-4>Plate/Vin</ion-col>\n      <ion-col col-4>Status</ion-col>\n  </ion-row>\n  <ion-row class="boldTxt">\n      <ion-col col-4>15351</ion-col>\n      <ion-col col-4>AD12</ion-col>\n      <ion-col col-4 style="color: #14b250;">Pre-approved</ion-col>\n  </ion-row>\n\n  <ion-row class="grayRow customMargin"><ion-col>Description</ion-col></ion-row>\n  <ion-row class="des"><ion-col> Permit issued with discount to $150 from $222</ion-col></ion-row>\n  <ion-item style="font-size: 1em;padding: 0;" *ngIf="isGroupShown(4)">\n  <ion-row class="grayRow">\n      <ion-col col-4>Submit Date</ion-col>     \n      <ion-col col-4>Issued To</ion-col>\n      <ion-col col-4>Delivery Option</ion-col>\n  </ion-row>\n  <ion-row class="boldTxt">\n      <ion-col col-4>03/28/2018</ion-col>      \n      <ion-col col-4>GDF56</ion-col>\n      <ion-col col-4>By Mail</ion-col>\n  </ion-row>\n\n  <ion-row class="grayRow customMargin">\n      <ion-col col-4>Change Date</ion-col>\n      <ion-col col-4>Address</ion-col>\n      <ion-col col-4>Permit</ion-col>\n  </ion-row>\n  <ion-row class="boldTxt">\n      <ion-col col-4>06/04/2018</ion-col>\n      <ion-col col-4>12 Herbert St</ion-col>\n      <ion-col col-4>---</ion-col>\n  </ion-row>\n\n </ion-item>\n <ion-row>\n        <ion-col col-4></ion-col>\n    <ion-col col-4>\n           <button ion-button block outline  (click)="toCart()">Add to Cart</button>\n    </ion-col>\n    <ion-col col-4>\n       <button ion-button block outline class="more" (click)="toggleGroup(4)" *ngIf="!isGroupShown(4)">More</button>\n       <button ion-button block outline class="less" (click)="toggleGroup(4)" *ngIf="isGroupShown(4)">More</button>\n    </ion-col>\n    </ion-row>\n</ion-grid> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/documentapprove/documentapprove.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__["a" /* CommonServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], DocumentapprovePage);
    return DocumentapprovePage;
}());

//# sourceMappingURL=documentapprove.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualpermitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploaddocumentvirtual_uploaddocumentvirtual__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myvehiclemodal_myvehiclemodal__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VirtualpermitPage = /** @class */ (function () {
    function VirtualpermitPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.visible = false;
    }
    VirtualpermitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VirtualpermitPage');
    };
    VirtualpermitPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    VirtualpermitPage.prototype.toVirtalDocument = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__uploaddocumentvirtual_uploaddocumentvirtual__["a" /* UploaddocumentvirtualPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    VirtualpermitPage.prototype.vehiclesModel = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__myvehiclemodal_myvehiclemodal__["a" /* MyvehiclemodalPage */]);
        modal.present();
    };
    VirtualpermitPage.prototype.toggle1 = function () {
        this.visible = !this.visible;
    };
    VirtualpermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-virtualpermit',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/virtualpermit/virtualpermit.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n          <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n            <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n            <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n          </button>\n        </ion-col> \n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;">Request Permit</ion-col>\n        <span class="cart">2</span>\n        <img style="position:absolute;right: 15%;top: 15%;" src="assets/imgs/request-permit/cart-icon.png"/>\n        <ion-col col-2>\n            <button ion-button clear>\n                <ion-icon name="ios-information-circle-outline" style="font-size: 2em;color:#fff;"></ion-icon>\n              </button>\n        </ion-col>   \n      </ion-row>\n  \n</ion-header>\n\n<ion-content> \n<ion-row style="margin: 1% 0% 0 3%;">\n  <ion-col col-2 text-left style="font-size:1.11em;color:#5e5e5e;margin: auto;">Name:</ion-col>\n  <ion-col text-left style="font-size:1.3em;">Steven Rock</ion-col>\n</ion-row>\n\n<ion-item>\n    <ion-label stacked>Address</ion-label>\n    <ion-select >\n      <ion-option>12375,Herbert ST,district 12</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label stacked>Permit</ion-label>\n      <ion-select >\n        <ion-option>2018 Mater Residential Permit</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-row style="background: #efefef;margin-top: 2%;padding: 2%;font-size:1.3em;">\n        <ion-col col-9>Permit Cost :</ion-col>\n        <ion-col style="color: #14b250;font-weight: bold;" text-right>$20.00</ion-col>\n      </ion-row>\n\n      <ion-item>\n          <ion-label stacked>Delivery Option</ion-label>\n          <ion-select >\n            <ion-option>By Email</ion-option>\n          </ion-select>\n        </ion-item>\n      \n        <ion-item>\n            <ion-label stacked>Media Type</ion-label>\n            <ion-select >\n              <ion-option>First two residential permits to be mailed</ion-option>\n            </ion-select>\n        </ion-item>\n      <ion-row>\n        <ion-col col-6>\n            <ion-item >\n              <ion-label stacked>Plate/Vin Number</ion-label>\n              <ion-input type="text" placeholder="Plate/Vin Number"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6 style="margin: auto;">\n        <button ion-button block outline style="width: 92%;text-transform: none;margin:1% 4% 0;" (click)="vehiclesModel()">My Vehicles</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col col-6>\n        <ion-item >\n          <ion-label stacked>Start Date</ion-label>\n          <ion-input type="date" placeholder="17-04-2018" class="calIcon"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item >\n          <ion-label stacked>End Date</ion-label>\n          <ion-input type="date" placeholder="18-04-2018" class="calIcon"></ion-input>\n        </ion-item>\n    </ion-col>\n  </ion-row>\n\n\n    <ion-row text-center style="background:#efefef;margin-top: 2%;display:none;">\n      <ion-col style="border-right: 1px solid;padding:0;">\n      <h6>Stock Range</h6>\n      <ion-label style="margin: 3%;">(1001-9999)</ion-label>\n      </ion-col>\n      <ion-col style="padding:0;">\n          <h6>Permits Remaning</h6>\n          <ion-label style="margin: 3%">8998</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style="padding:2%;margin-top:4%;" (click)="toggle1()">\n      <ion-col col-11>Exempt/Non-Profit</ion-col>\n      <ion-col style="padding:0;">\n          <img src="assets/imgs/request-permit/uncheck.png" *ngIf="!visible"/>\n          <img src="assets/imgs/request-permit/active-check.png" *ngIf="visible"/>\n      </ion-col>\n    </ion-row>\n  \n\n      <!-- <span style="margin: 2% 2% 0;font-size: .8em;color: #ccc;">3 or 4 digit number on the back of the credit card</span> -->\n</ion-content>\n<ion-footer>\n    <button ion-button full style="background:#14b250;margin: 0;padding: 6%;text-transform: none;font-size: 1.2em;" (click)="toVirtalDocument()">Next</button>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/virtualpermit/virtualpermit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */]])
    ], VirtualpermitPage);
    return VirtualpermitPage;
}());

//# sourceMappingURL=virtualpermit.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaddocumentvirtualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploaddocumentvirtualPage = /** @class */ (function () {
    function UploaddocumentvirtualPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.photo = "";
        this.photo1 = "";
    }
    UploaddocumentvirtualPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploaddocumentvirtualPage');
    };
    UploaddocumentvirtualPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    UploaddocumentvirtualPage.prototype.takePicture = function () {
        var _this = this;
        try {
            var options = {
                quality: 50,
                sourceType: this.camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                mediaType: this.camera.MediaType.VIDEO
            };
            this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                //let base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.photo = imageData;
                //console.log(this.photo);
            }, function (err) {
                // Handle error
                alert(err);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    UploaddocumentvirtualPage.prototype.takePicture1 = function () {
        var _this = this;
        try {
            var options = {
                quality: 50,
                sourceType: this.camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                mediaType: this.camera.MediaType.VIDEO
            };
            this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                //let base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.photo1 = imageData;
                //console.log(this.photo);
            }, function (err) {
                // Handle error
                alert(err);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    UploaddocumentvirtualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uploaddocumentvirtual',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/uploaddocumentvirtual/uploaddocumentvirtual.html"*/'<ion-header>\n  <ion-row style="background: #00a3bc;color:#fff;">\n      <ion-col col-2>\n        <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n          <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n          <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n        </button>\n      </ion-col> \n      <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;">Upload Documents</ion-col>\n      <span class="cart">2</span>\n      <img style="position:absolute;right: 16%;top: 20%;" src="assets/imgs/request-permit/cart-icon.png"/>\n         <ion-col col-2>\n          <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 2em;color:#fff;"></ion-icon>\n            </button>\n      </ion-col>   \n    </ion-row>\n</ion-header>\n<ion-content style="background:#efefef;">\n<ion-grid style="background:#fff;box-shadow: 0 4px 8px #ccc;">\n  <ion-row>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Application Vehicle</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Documents</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="position:relative;">\n    <ion-col col-6>\n    <span style="font-size: 4vw;color:#3b3b3b;">Document Image</span><br>\n    <span style="font-size:3vw;color:#ccc;">2 MB Max Size,(jpg, pdf, Doc)</span>\n    </ion-col>\n    <ion-col col-6>\n      <img class="docImage" src="data:image/jpeg;base64,{{this.photo}}" alt="image"/>\n    </ion-col>\n    <ion-fab class="camIcon">\n        <button ion-fab mini style="background:#ff9600;"><img src="assets/imgs/upload.png"/></button>\n        <ion-fab-list side="bottom">\n          <button ion-fab  (click)="takePicture()" style="background:#a76e9d;color:#fff;"><ion-icon name="camera"></ion-icon></button>\n          <button ion-fab style="background: #00a3bc;color: #fff;"><ion-icon name="md-document"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n   <!--  <img class="camIcon" src="assets/imgs/request-permit/camera.png" (click)="takePicture()"/> -->\n  </ion-row>\n  \n\n  <ion-row>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Upload Date</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Is Mandatory:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid style="background:#fff;box-shadow: 0 4px 8px #ccc;margin-top:2%">\n  <ion-row>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Application Vehicle</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Documents</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="position:relative;">\n    <ion-col col-6>\n    <span style="font-size: 4vw;color:#3b3b3b;">Document Image</span><br>\n    <span style="font-size:3vw;color:#ccc;">2 MB Max Size,(jpg, pdf, Doc)</span>\n    </ion-col>\n    <ion-col col-6>\n      <img class="docImage" src="data:image/jpeg;base64,{{this.photo1}}" alt="image"/>\n    </ion-col>\n    <ion-fab class="camIcon">\n        <button ion-fab mini style="background:#ff9600;"><img src="assets/imgs/upload.png"/></button>\n        <ion-fab-list side="top">\n          <button ion-fab style="background: #00a3bc;color: #fff;"><ion-icon name="md-document"></ion-icon></button>\n          <button ion-fab  (click)="takePicture2()" style="background:#a76e9d;color:#fff;"><ion-icon name="camera"></ion-icon></button>\n        </ion-fab-list>\n      </ion-fab>\n <!--    <img class="camIcon" src="assets/imgs/request-permit/camera.png" (click)="takePicture1()"/> -->\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Upload Date</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col col-6>\n      <ion-item >\n        <ion-label stacked>Is Mandatory:</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n</ion-content>\n<ion-footer>\n  <ion-row>\n  \n    <button ion-button full class="footerBtn border">Submit</button>\n  \n  <button ion-button full class="footerBtn">Cancel</button>\n  \n</ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/uploaddocumentvirtual/uploaddocumentvirtual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], UploaddocumentvirtualPage);
    return UploaddocumentvirtualPage;
}());

//# sourceMappingURL=uploaddocumentvirtual.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentlistPage = /** @class */ (function () {
    function DocumentlistPage(navCtrl, navParams, photoViewer, customService, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoViewer = photoViewer;
        this.customService = customService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.photo = "assets/imgs/dk.jpg";
        this.photo1 = "";
        this.documentList = [];
    }
    DocumentlistPage.prototype.ionViewDidLoad = function () {
        this.getApplicationList();
        //this.photo=localStorage.getItem('pic1');
        //this.photo1=localStorage.getItem('pic2');
    };
    DocumentlistPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    DocumentlistPage.prototype.zoomImage = function () {
        this.photoViewer.show('assets/imgs/dk.jpg', '', { share: false });
    };
    DocumentlistPage.prototype.getApplicationList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Creating Permit..."
        });
        try {
            var Details = JSON.parse(localStorage.getItem('loginData'));
            var parameters = {
                "AccountID": Details.AccountID,
                "AgencyID": Details.AgencyID
            };
            loader.present();
            this.customService.requestViaPost(parameters, 'GetAccountDocumentDetail').subscribe(function (response) {
                console.log(response);
                _this.documentList = response.Data.Account_Document_Detail;
                //this.permitArrayList = this.permitList;
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    DocumentlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documentlist',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/documentlist/documentlist.html"*/'<ion-header>\n  <ion-row style="background: #00a3bc;color:#fff;">\n      <ion-col col-2>\n        <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n          <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n          <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n        </button>\n      </ion-col> \n      <ion-col col-8 text-center class="title">My Documents</ion-col>\n         <ion-col col-2>\n          <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 2.5em;color:#fff;"></ion-icon>\n            </button>\n      </ion-col>   \n    </ion-row>\n</ion-header>\n<ion-content style="background:#ccc;" >\n\n    <ion-grid style="background:#fff;box-shadow: 2px 4px 8px #8a8a8a;" *ngFor="let docDetail of documentList; let i=index">\n        <ion-row style="border-bottom: 1px solid #ccc;" *ngIf=\'i==0\'>\n            <ion-col col-6 class="caption">Account Address</ion-col>\n                <ion-col col-6  class="caption">{{docDetail[\'AccountAddress\']}}</ion-col> \n        </ion-row>   \n        <ion-row style="position:relative;padding: 1% 0;" >\n            <ion-col col-6 class="docType"> {{docDetail[\'DocumentSubGroupName\']}}</ion-col>\n            <ion-col col-6>\n              <img class="docImage" src="http://stage.getapermit.net/Images/Documents/{{docDetail.DocumentImageName}}" alt="" imageViewer/>\n            </ion-col>\n          </ion-row>   \n          \n          <!-- <ion-row style="position:relative;padding: 1% 0;">\n              <ion-col col-6 class="docType"> Vehicle Registration </ion-col>\n              <ion-col col-6>\n                <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n              </ion-col>\n            </ion-row> -->\n    \n    </ion-grid>\n\n    <!-- <ion-grid style="background:#fff;box-shadow: 2px 4px 8px #8a8a8a;margin-top:2%">\n        <ion-row style="border-bottom: 1px solid #ccc;">\n            <ion-col col-9 class="caption">Upload Document for Plate/Vin #</ion-col>\n                <ion-col class="caption"> 1654549 </ion-col>\n        </ion-row>   \n        <ion-row style="position:relative;padding: 1% 0;">\n            <ion-col col-6 class="docType"> Driving License </ion-col>\n            <ion-col col-6>\n              <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n            </ion-col>\n          </ion-row>   \n          \n          <ion-row style="position:relative;padding: 1% 0;">\n              <ion-col col-6 class="docType"> Vehicle Registration </ion-col>\n              <ion-col col-6>\n                <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n              </ion-col>\n            </ion-row>\n    \n    </ion-grid>\n\n    <ion-grid style="background:#fff;box-shadow: 2px 4px 8px #8a8a8a;margin:2% 0">\n        <ion-row style="border-bottom: 1px solid #ccc;">\n            <ion-col col-9 class="caption">Upload Document for Plate/Vin #</ion-col>\n                <ion-col class="caption"> 1984459 </ion-col>\n        </ion-row>   \n        <ion-row style="position:relative;padding: 1% 0;">\n            <ion-col col-6 class="docType"> Driving License </ion-col>\n            <ion-col col-6>\n              <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n            </ion-col>\n        </ion-row>   \n          \n          <ion-row style="position:relative;padding: 1% 0;">\n              <ion-col col-6 class="docType"> Vehicle Registration </ion-col>\n              <ion-col col-6>\n                <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n              </ion-col>\n          </ion-row>\n    \n    </ion-grid>   -->\n\n<!-- <ion-grid class="cstmGrid">\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="grayClr">Application Vehicle</ion-label>\n        <ion-label class="Rfont">6333338</ion-label>\n    </ion-col>\n    <ion-col col-6>\n        <ion-label class="grayClr">Documents</ion-label>\n        <ion-label class="Rfont">Vehicle Registration</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-6>\n    <span style="font-size: 4vw;color:#5e5e5e;">Document Image</span><br>\n    <span style="font-size:3vw;color:#736464;font-weight: 500;">2 MB Max Size,(jpg, pdf, Doc)</span>\n    </ion-col>\n    <ion-col col-6>\n     <img class="docImage" src="assets/imgs/dk.jpg" imageViewer/>\n    </ion-col>\n  </ion-row>\n  \n\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="grayClr">Upload Date</ion-label>\n        <ion-label class="Rfont">05/04/2018</ion-label>\n    </ion-col>\n    <ion-col col-6>\n        <div class="mDiv">\n            <span class="cstmSpan"><ion-label class="grayClr"> Is Mandatory: &nbsp; &nbsp;</ion-label></span>\n            <span class="cstmSpan"><ion-label class="Rfont" style="font-size: 4.8vw;">Yes</ion-label></span>\n          </div>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid class="cstmGrid" style="margin-top:2%">\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="grayClr">Application Vehicle</ion-label>\n        <ion-label class="Rfont">6333338</ion-label>\n    </ion-col>\n    <ion-col col-6>\n        <ion-label class="grayClr">Documents</ion-label>\n        <ion-label class="Rfont">Driving License</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-6>\n    <span style="font-size: 4vw;color:#5e5e5e;">Document Image</span><br>\n    <span style="font-size:3vw;color:#736464;font-weight: 500;">2 MB Max Size,(jpg, pdf, Doc)</span>\n   </ion-col>\n    <ion-col col-6>\n      <img class="docImage" src="assets/imgs/dk.jpg" imageViewer/>\n    </ion-col>\n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="grayClr">Upload Date</ion-label>\n        <ion-label class="Rfont">05/04/2018</ion-label>\n    </ion-col>\n    <ion-col col-6>\n        <div class="mDiv">\n            <span class="cstmSpan"><ion-label class="grayClr"> Is Mandatory: &nbsp; &nbsp;</ion-label></span>\n            <span class="cstmSpan"><ion-label class="Rfont" style="font-size: 4.8vw;">Yes</ion-label></span>\n          </div>\n    </ion-col>\n  </ion-row>\n\n</ion-grid> -->\n\n</ion-content>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/documentlist/documentlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__["a" /* CommonServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], DocumentlistPage);
    return DocumentlistPage;
}());

//# sourceMappingURL=documentlist.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqPage = /** @class */ (function () {
    function FaqPage(navCtrl, navParams, viewCtrl, customService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.customService = customService;
        this.loadingCtrl = loadingCtrl;
        this.faqList = [];
        this.shownGroup = null;
        this.isGroupShown = function (group) {
            return this.shownGroup === group;
        };
    }
    FaqPage.prototype.ionViewDidLoad = function () {
        this.getFaq();
    };
    /*  closeModal(){
       this.viewCtrl.dismiss();
     } */
    FaqPage.prototype.goback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    FaqPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    FaqPage.prototype.getFaq = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        try {
            loader.present();
            var Details = JSON.parse(localStorage.getItem('loginData'));
            var parameters = {
                "AgencyID": Details.AgencyID,
            };
            this.customService.requestViaPost(parameters, 'GETFAQ').subscribe(function (response) {
                if (response.Status) {
                    _this.faqList = response.Data['FAQ Details'];
                    loader.dismiss();
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.Message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/faq/faq.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()" style="margin-left: -10px;">\n            <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n            <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">FAQ</ion-col>\n        <ion-col col-2>\n\n        </ion-col>\n    </ion-row>\n</ion-header>\n<ion-content>\n    <ion-grid class="custmGrid" *ngFor="let d of faqList; let i=index">\n        <ion-row class="cstmRow">\n            <ion-col [innerHTML]="d.Question"></ion-col>\n            <ion-col col-1>\n                <img src="assets/imgs/request-permit/blue-up-arrow.png" (click)="toggleGroup(i)" *ngIf="!isGroupShown(i)" />\n                <img src="assets/imgs/request-permit/blue-drop-arrow.png" (click)="toggleGroup(i)" *ngIf="isGroupShown(i)" />\n            </ion-col>\n        </ion-row>\n        <ion-item class="cstmItem" *ngIf="isGroupShown(i)">\n            <ion-row class="grayRow" [innerHTML]="d.Answer"></ion-row>>\n               \n            </ion-row>\n        </ion-item>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__["a" /* CommonServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__["a" /* CommonServicesProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]) === "function" && _e || Object])
    ], FaqPage);
    return FaqPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegaltermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LegaltermsPage = /** @class */ (function () {
    function LegaltermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LegaltermsPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad LegaltermsPage');
    };
    LegaltermsPage.prototype.goback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    LegaltermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-legalterms',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/legalterms/legalterms.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()" style="margin-left: -10px;">\n                <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n                <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n              </button>\n        </ion-col>\n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">Legal Terms</ion-col>\n        <ion-col col-2>\n\n        </ion-col>\n    </ion-row>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            <h2>Acceptance of Terms and Conditions</h2>\n            <p class="cstmPara">Welcome to getaPERMIT.net. A self-service web site for permit management and information. If you wish to use this web site, you accept these terms and conditions, without change. getaPERMIT.net is operated by Turbo Data Systems, Inc. (TDS)\n                on behalf its Agencies on an \'as is\', \'as available\' basis. Your access to, and use of, the getaPERMIT.net web site, demonstrates your acceptance of the following terms and conditions: </p>\n            <h2>Age Requirement for Payment</h2>\n            <p class="cstmPara">Ability to make a payment is not being offered to children, but only to adults who possess a credit card. If you are under the age of 18 years, you may only use this service with the participation of a parent or guardian.</p>\n            <h2>Function of getaPERMIT.net</h2>\n            <p class="cstmPara">getaPERMIT.net is designed as a fulfillment mechanism and information source for permits offered/issued by our customers. This is a service created for the convenience of the public.</p>\n            <h2>Fees for Service</h2>\n            <p class="cstmPara">You may or may not be charged an Internet Service fee for this service depending on the issuing Agency. If applicable an Internet service fee will be included in the total charge for the transaction. You acknowledge that this fee, if any,\n                is non-refundable.</p>\n            <h2>Refund Policy</h2>\n            <p class="cstmPara">Payments on this web site are for permit fees issued by our customers. There are no refunds given.</p>\n            <h2>Privacy Policy</h2>\n            <p class="cstmPara">To process a payment, we will require certain information. Using getaPERMIT.net constitutes consent to our use of the information as described in this notice. To complete the transaction, you will be required to provide the name as it appears\n                on the credit card, billing address of the credit card holder, credit card number and credit card expiration date. We also will ask for an e-mail address to send an electronic receipt to. No permit issuing Agency or TDS employee will have\n                access to getaPERMIT.net card holder information other than the employees who maintain the administrative interface for fees. The information will not be disclosed to other entities or third parties, except as required by law. It will\n                not be used for any purpose other than to pay the permit fee.</p>\n            <h2>Security</h2>\n            <p class="cstmPara">GetaPERMIT.net uses Secure Socket Layering (SSL) to encrypt your personal credit information, including your credit card number, before it submitted to the processor over the Internet. SSL technology is the industry standard for securing online\n                transactions.\n            </p>\n            <h2>Protection of Intellectual Property</h2>\n            <p class="cstmPara">The text, images, logos, pictures, button icons, and images are the property of TDS or its software vendors and is protected by United States and International copyright laws. All software on this site is the property of the TDS or its software\n                vendors and is protected by United States and International copyright laws. Use of the content on this website by you, or anyone authorized by you, is prohibited unless specifically permitted by these Terms and Conditions or by prior written\n                consent of TDS. TDS neither warrants nor represents that your use of materials displayed on this site will not infringe rights of third parties.</p>\n            <h2>Disclaimers</h2>\n            <p class="cstmPara">GetaPERMIT.net is operated by TDS on behalf of its customers. TDS makes every effort to produce and publish the most current and accurate information possible. No warranties, expressed or implied, are provided for the data herein, its use\n                or interpretation. Information provided should not be relied upon for any type of legal action.</p>\n            <h2>Limitation of Liability</h2>\n            <p class="cstmPara">Under no circumstances shall TDS or any of its officers, agents, employees, vendors or suppliers be liable for any direct or indirect losses or damages arising out of or in connection with the use of or inability to use getaPERMIT.net. This\n                is a comprehensive limitation of liability that applies to all losses and damages of any kind (whether general, special, consequential, incidental, exemplary, or otherwise, including without limitation, loss of data, income or profits),\n                whether in contract, negligence or other tortuous action, even if an authorized agent, employee, or vendor has been advised of or should have known of the possibility of such damages. If you are dissatisfied with getaPERMIT.net or any\n                content thereof, your sole and exclusive remedy is to discontinue using it. You acknowledge by your use of getaPERMIT.net that your use is at your sole risk.</p>\n            <h2>Choice of Law and Choice of Venue</h2>\n            <p class="cstmPara">By using getaPERMIT.net, you agree and acknowledge that your access of and use of getaPERMIT.net is subject to these terms and conditions, as well as to all applicable laws, as governed and interpreted pursuant to the laws of California. For\n                any claim or cause of action arising out of or related to use of getaPERMIT.net, you agree to submit to the personal and exclusive jurisdiction of the State of California.</p>\n            <h2>Integration, Modification and Severability of Terms</h2>\n            <p class="cstmPara">Unless otherwise specified in this document, this agreement constitutes the entire agreement between you and getaPERMIT.net with respect to this site. We reserve the right to make changes to our site, policies, or Terms and Conditions of Service\n                at any time, without prior notice. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining\n                condition.</p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/legalterms/legalterms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], LegaltermsPage);
    return LegaltermsPage;
}());

//# sourceMappingURL=legalterms.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__information_information__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Http, Headers, RequestOptions, Response } from '@angular/http';




var LoginPage = /** @class */ (function () {
    function LoginPage(loadingCtrl, http, navCtrl, navParams, popoverCtrl, modalCtrl, alertCtrl, customService, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.customService = customService;
        this.toastCtrl = toastCtrl;
        this.login = {
            username: '',
            password: ''
        };
        this.checkbox = false;
        this.backButtonClickedFlag = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        localStorage.removeItem('permitDetails');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        if (localStorage.getItem('username') != "" && localStorage.getItem('username') != undefined && localStorage.getItem("rememberMe") == "true") {
            this.login = {
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password')
            };
        }
    };
    LoginPage.prototype.doLogin1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    LoginPage.prototype.onFilterChange = function (eve) {
        this.checkbox = !this.checkbox;
        console.log(this.checkbox);
        // localStorage.setItem("rememberMe", this.checkbox.toString());
    };
    LoginPage.prototype.presentInfoModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__information_information__["a" /* InformationPage */]);
        modal.present();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Logging in..."
        });
        if (this.login.username == '' || this.login.password == '' || this.login.username == undefined || this.login.password == undefined) {
            this.customService.showErrorMsgByToast(this.customService.errorMessageArr.loginRequired);
            return;
        }
        if (this.checkbox == true) {
            localStorage.setItem('username', this.login.username);
            localStorage.setItem('password', this.login.password);
        }
        try {
            loader.present();
            var parameters = 'grant_type=password&username=hff@test.test&password=Password1';
            // var parameters =  'grant_type=password&username=' + this.login.username + '&password=' + this.login.password;
            this.customService.doLogin(parameters, 'login').subscribe(function (response) {
                console.log(response);
                localStorage.setItem('loginData', JSON.stringify(response));
                _this.getData(response); //call api to get user data
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                    //this.navCtrl.setRoot("DashboardPage",{ direction: 'forword' });
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    LoginPage.prototype.getData = function (res) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Logging in..."
        });
        loader.present();
        var authData = res.token_type + ' ' + res.access_token;
        localStorage.setItem('token', authData);
        try {
            loader.present();
            var parameters = { 'AccountID': res.AccountID };
            //  var parameters =  {
            //   "username": this.login.username,
            //   "password": this.login.password
            //  }; 
            this.customService.requestViaPost(parameters, 'GetProfile').subscribe(function (response) {
                var data = JSON.stringify(response.Data.Profile_Details[0]);
                // this.getPermit();
                localStorage.setItem('useData', data);
                loader.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
                return;
                if (response.error == 'false') {
                    console.log(response);
                    //this.navCtrl.setRoot("DashboardPage",{ direction: 'forword' });
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/login/login.html"*/'<ion-content class="main">\n    \n<ion-row >\n    <ion-col col-2></ion-col>\n    <ion-col col-8 class="lgnText" padding><img src="assets/imgs/login/getapermit.png"/></ion-col>\n    <ion-col col-2 class="infoIcon" padding (click)="presentInfoModal()"><ion-icon name="ios-information-circle-outline"></ion-icon></ion-col>\n</ion-row>\n<ion-card class="login">\n   <ion-row text-center class="loginTxt"> <ion-col>LOGIN USING YOUR ACCOUNT</ion-col> </ion-row>\n   <ion-list inset>\n    <ion-item class="border">\n        <ion-input type="text" id="username"  placeholder="Username" class=" userIcon" [(ngModel)]="login.username"></ion-input>\n    </ion-item>\n   <ion-item class="border">\n        <ion-input type="password" id="password" placeholder="Password" class=" passIcon" [(ngModel)]="login.password"></ion-input>\n        \n    </ion-item>\n    \n    <ion-row>\n        <ion-col col-7>\n        <ion-item class="item-trns" class="remember">\n        <ion-label>Remember Me</ion-label>\n        <ion-checkbox [(ngModel)]="checkbox" (click)="onFilterChange()"></ion-checkbox>\n        </ion-item>\n        </ion-col>\n        <ion-col col-5 class="reset">Reset Password!</ion-col>\n    </ion-row>\n\n    <button ion-button block class="lgnbtn" (click)="doLogin()">Login</button>\n\n    <button ion-button block outline class="regBtn">Register New Account</button>\n    </ion-list>\n\n   \n</ion-card>\n\n<ion-row text-center class="footerTxt">\n     <ion-col text-right style="border-right: 1px solid #fff;padding: 0 5px;">LEGAL TERMS</ion-col>\n    \n     <ion-col text-left style="padding: 0 5px;">PRIVACY POLICY</ion-col>\n </ion-row>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* PopoverController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_common_services_common_services__["a" /* CommonServicesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_common_services_common_services__["a" /* CommonServicesProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]) === "function" && _j || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacypolicyPage = /** @class */ (function () {
    function PrivacypolicyPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    PrivacypolicyPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PrivacypolicyPage');
    };
    PrivacypolicyPage.prototype.goback = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    PrivacypolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-privacypolicy',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/privacypolicy/privacypolicy.html"*/'<ion-header>\n    <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()" style="margin-left: -10px;">\n                    <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n                    <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n                  </button>\n        </ion-col>\n        <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">Privacy Policy</ion-col>\n        <ion-col col-2>\n\n        </ion-col>\n    </ion-row>\n</ion-header>\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n            <h2>Acceptance of Terms and Conditions</h2>\n            <p class="cstmPara">Welcome to getaPERMIT.net. A self-service web site for permit management and information. If you wish to use this web site, you accept these terms and conditions, without change. getaPERMIT.net is operated by Turbo Data Systems, Inc. (TDS)\n                on behalf its Agencies on an \'as is\', \'as available\' basis. Your access to, and use of, the getaPERMIT.net web site, demonstrates your acceptance of the following terms and conditions: </p>\n            <h2>Age Requirement for Payment</h2>\n            <p class="cstmPara">Ability to make a payment is not being offered to children, but only to adults who possess a credit card. If you are under the age of 18 years, you may only use this service with the participation of a parent or guardian.</p>\n            <h2>Function of getaPERMIT.net</h2>\n            <p class="cstmPara">getaPERMIT.net is designed as a fulfillment mechanism and information source for permits offered/issued by our customers. This is a service created for the convenience of the public.</p>\n            <h2>Fees for Service</h2>\n            <p class="cstmPara">You may or may not be charged an Internet Service fee for this service depending on the issuing Agency. If applicable an Internet service fee will be included in the total charge for the transaction. You acknowledge that this fee, if any,\n                is non-refundable.</p>\n            <h2>Refund Policy</h2>\n            <p class="cstmPara">Payments on this web site are for permit fees issued by our customers. There are no refunds given.</p>\n            <h2>Privacy Policy</h2>\n            <p class="cstmPara">To process a payment, we will require certain information. Using getaPERMIT.net constitutes consent to our use of the information as described in this notice. To complete the transaction, you will be required to provide the name as it appears\n                on the credit card, billing address of the credit card holder, credit card number and credit card expiration date. We also will ask for an e-mail address to send an electronic receipt to. No permit issuing Agency or TDS employee will have\n                access to getaPERMIT.net card holder information other than the employees who maintain the administrative interface for fees. The information will not be disclosed to other entities or third parties, except as required by law. It will\n                not be used for any purpose other than to pay the permit fee.</p>\n            <h2>Security</h2>\n            <p class="cstmPara">GetaPERMIT.net uses Secure Socket Layering (SSL) to encrypt your personal credit information, including your credit card number, before it submitted to the processor over the Internet. SSL technology is the industry standard for securing online\n                transactions.\n            </p>\n            <h2>Protection of Intellectual Property</h2>\n            <p class="cstmPara">The text, images, logos, pictures, button icons, and images are the property of TDS or its software vendors and is protected by United States and International copyright laws. All software on this site is the property of the TDS or its software\n                vendors and is protected by United States and International copyright laws. Use of the content on this website by you, or anyone authorized by you, is prohibited unless specifically permitted by these Terms and Conditions or by prior written\n                consent of TDS. TDS neither warrants nor represents that your use of materials displayed on this site will not infringe rights of third parties.</p>\n            <h2>Disclaimers</h2>\n            <p class="cstmPara">GetaPERMIT.net is operated by TDS on behalf of its customers. TDS makes every effort to produce and publish the most current and accurate information possible. No warranties, expressed or implied, are provided for the data herein, its use\n                or interpretation. Information provided should not be relied upon for any type of legal action.</p>\n            <h2>Limitation of Liability</h2>\n            <p class="cstmPara">Under no circumstances shall TDS or any of its officers, agents, employees, vendors or suppliers be liable for any direct or indirect losses or damages arising out of or in connection with the use of or inability to use getaPERMIT.net. This\n                is a comprehensive limitation of liability that applies to all losses and damages of any kind (whether general, special, consequential, incidental, exemplary, or otherwise, including without limitation, loss of data, income or profits),\n                whether in contract, negligence or other tortuous action, even if an authorized agent, employee, or vendor has been advised of or should have known of the possibility of such damages. If you are dissatisfied with getaPERMIT.net or any\n                content thereof, your sole and exclusive remedy is to discontinue using it. You acknowledge by your use of getaPERMIT.net that your use is at your sole risk.</p>\n            <h2>Choice of Law and Choice of Venue</h2>\n            <p class="cstmPara">By using getaPERMIT.net, you agree and acknowledge that your access of and use of getaPERMIT.net is subject to these terms and conditions, as well as to all applicable laws, as governed and interpreted pursuant to the laws of California. For\n                any claim or cause of action arising out of or related to use of getaPERMIT.net, you agree to submit to the personal and exclusive jurisdiction of the State of California.</p>\n            <h2>Integration, Modification and Severability of Terms</h2>\n            <p class="cstmPara">Unless otherwise specified in this document, this agreement constitutes the entire agreement between you and getaPERMIT.net with respect to this site. We reserve the right to make changes to our site, policies, or Terms and Conditions of Service\n                at any time, without prior notice. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining\n                condition.\n            </p>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/privacypolicy/privacypolicy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */]])
    ], PrivacypolicyPage);
    return PrivacypolicyPage;
}());

//# sourceMappingURL=privacypolicy.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, customService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customService = customService;
        this.loadingCtrl = loadingCtrl;
        this.profiledata = [];
        this.visible = false;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.getProfile();
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.goback = function () {
        //this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    ProfilePage.prototype.toggle1 = function () {
        this.visible = !this.visible;
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Creating Permit..."
        });
        try {
            var Details = JSON.parse(localStorage.getItem('loginData'));
            var data = {
                "AccountID": Details.AccountID,
            };
            loader.present();
            this.customService.requestViaPost(data, 'GetProfile').subscribe(function (response) {
                console.log(response);
                _this.profiledata = response.Data.Profile_Details[0];
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/profile/profile.html"*/'<ion-content>\n  <ion-grid class="uprGrid">\n      <ion-row class="headerRow">\n          <ion-col col-2>\n            <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n              <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n              <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n            </button>\n          </ion-col> \n          <ion-col col-8 text-center class="title">Profile</ion-col>\n          <ion-col col-2>\n            <button ion-button clear>        \n            </button>\n          </ion-col> \n        </ion-row>\n    <span class="profileImg"></span>\n     <ion-row class="nameRow">{{profiledata.FIRSTNAME}}  &nbsp;<span style="font-weight:100;">{{profiledata.LASTNAME}} </span></ion-row>\n  </ion-grid>\n  <ion-row style="padding: 0 2%;color: #282828;margin-top: 2%;font-size: 1.1em;">\n    <ion-col>Type</ion-col>\n    <ion-col text-right>Status</ion-col>\n  </ion-row>\n  <ion-row style="padding: 0 2%;color: #3b3b3b;">\n      <ion-col class="customeCol">{{profiledata.TYPE}}</ion-col>\n      <ion-col text-right style="color:#14b250;font-weight:bold;font-size: 1.2em;padding: 0 5px 5px;">{{profiledata.STATUS}}</ion-col>\n  </ion-row>\n\n  <ion-grid style="padding: 0;margin-top:2%;">\n    <ion-row style="background: #ebebeb;padding: 1% 2%;font-weight: 500;font-size: 1.1em;" (click)="toggle1()">\n      <ion-col>Primary Contact</ion-col>\n      <ion-col col-1>\n          <img src="assets/imgs/request-permit/blue-up-arrow.png" *ngIf="!visible"/>\n          <img src="assets/imgs/request-permit/blue-drop-arrow.png" *ngIf="visible"/>\n    </ion-col>\n    </ion-row>\n\n    <div class="customDIv" *ngIf="!visible">\n      <ion-row>\n        <ion-col class="grayColor">Name</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="customeCol">{{profiledata.FIRSTNAME}} {{profiledata.LASTNAME}}</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="grayColor">Email Address</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="customeCol">{{profiledata.EMAILADDRESS}}</ion-col>\n      </ion-row>\n      <ion-row class="grayColor">\n          <ion-col>Phone</ion-col>\n          <ion-col>Ext.</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="customeCol">{{profiledata.PHONE}}</ion-col>\n          <ion-col class="customeCol">{{profiledata.EXT}}</ion-col>\n      </ion-row>\n\n      <ion-row class="grayColor">\n            <ion-col>Address</ion-col>\n            <ion-col>City Zone</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class="customeCol">{{profiledata.ADDRESS}}</ion-col>\n            <ion-col class="customeCol">{{profiledata.CITYZONENAME}}</ion-col>\n        </ion-row>\n        \n\n      <ion-row class="grayColor">\n            <ion-col>City</ion-col>\n            <ion-col>State</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class="customeCol">{{profiledata.CITY}}</ion-col>\n            <ion-col class="customeCol">{{profiledata.STATE}}</ion-col>\n        </ion-row>\n        <ion-row class="grayColor">\n               \n                <ion-col>Zipcode</ion-col>\n            </ion-row>\n            <ion-row>\n               \n                <ion-col class="customeCol">{{profiledata.ZIPCODE}}</ion-col>\n            </ion-row>\n           \n      <!-- <ion-row>\n          <ion-col class="grayColor">Address</ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class="customeCol">{{profiledata.Address}}</ion-col>\n      </ion-row> -->\n          </div> \n  </ion-grid>\n\n  <ion-grid style="padding: 0;margin-top:2%;">\n      <ion-row style="background: #ebebeb;padding: 1% 2%;font-weight: 500;font-size: 1.1em;" (click)="toggle1()">\n        <ion-col>Secondary Contact</ion-col>\n        <ion-col col-1>\n                <img src="assets/imgs/request-permit/blue-up-arrow.png" *ngIf="visible"/>\n                <img src="assets/imgs/request-permit/blue-drop-arrow.png" *ngIf="!visible"/>\n        </ion-col>\n      </ion-row>\n  \n      <div class="customDIv" *ngIf="visible">\n          <ion-row>\n              <ion-col class="grayColor">Name</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class="customeCol">{{profiledata.SECONDARYCONTACT}}</ion-col>\n            </ion-row>\n            <!-- <ion-row>\n                <ion-col class="grayColor">Email Address</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class="customeCol">testing12@test.com</ion-col>\n            </ion-row> -->\n            <!-- <ion-row class="grayColor">\n                <ion-col>Phone</ion-col>\n                <ion-col>Ext.</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class="customeCol">01928374650</ion-col>\n                <ion-col class="customeCol">099</ion-col>\n            </ion-row> -->\n            <!-- <ion-row>\n                <ion-col class="grayColor">Address</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class="customeCol">12375 Herbert ST,District 12</ion-col>\n            </ion-row> -->\n            </div>\n    </ion-grid>\n    <ion-grid style="padding: 0;margin-top:2%;" *ngIf="profiledata.ADDMAILINGADDRESS">\n            <ion-row style="background: #ebebeb;padding: 1% 2%;font-weight: 500;font-size: 1.1em;" (click)="toggle1()">\n              <ion-col>Mailing Address</ion-col>\n              <ion-col col-1>\n                      <img src="assets/imgs/request-permit/blue-up-arrow.png" *ngIf="visible"/>\n                      <img src="assets/imgs/request-permit/blue-drop-arrow.png" *ngIf="!visible"/>\n              </ion-col>\n            </ion-row>\n        \n            <div class="customDIv" *ngIf="visible">\n                <ion-row>\n                    <ion-col class="grayColor">Address</ion-col>\n                  </ion-row>\n                  <ion-row>\n                      <ion-col class="customeCol">{{profiledata.MAILINGADDRESS}}</ion-col>\n                  </ion-row>\n                  <ion-row class="grayColor">\n                        <ion-col>City</ion-col>\n                        <ion-col>State</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="customeCol">{{profiledata.MAILINGCITY}}</ion-col>\n                        <ion-col class="customeCol">{{profiledata.MAILINGSTATE}}</ion-col>\n                    </ion-row>\n                    <ion-row class="grayColor">\n                            \n                            <ion-col>Zipcode</ion-col>\n                        </ion-row>\n                        <ion-row>\n                            \n                            <ion-col class="customeCol">{{profiledata.MAILINGZIPCODE}}</ion-col>\n                    </ion-row>\n                  </div>\n          </ion-grid>\n          <ion-grid style="padding: 0;margin-top:2%;" *ngIf="profiledata.ADDPOBOXMAILINGADDRESS">\n            <ion-row style="background: #ebebeb;padding: 1% 2%;font-weight: 500;font-size: 1.1em;" (click)="toggle1()">\n                <ion-col>P.O Box Address</ion-col>\n                <ion-col col-1>\n                        <img src="assets/imgs/request-permit/blue-up-arrow.png" *ngIf="visible"/>\n                        <img src="assets/imgs/request-permit/blue-drop-arrow.png" *ngIf="!visible"/>\n                </ion-col>\n            </ion-row>\n        \n            <div class="customDIv" *ngIf="visible">\n                <ion-row>\n                    <ion-col class="grayColor">Address</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="customeCol">{{profiledata.MAILINGADDRESS}}</ion-col>\n                    </ion-row>\n                    <ion-row class="grayColor">\n                        <ion-col>City</ion-col>\n                        <ion-col>State</ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col class="customeCol">{{profiledata.MAILINGCITY}}</ion-col>\n                        <ion-col class="customeCol">{{profiledata.MAILINGSTATE}}</ion-col>\n                    </ion-row>\n                    <ion-row class="grayColor">\n                            \n                            <ion-col>Zipcode</ion-col>\n                        </ion-row>\n                        <ion-row>\n                            \n                            <ion-col class="customeCol">{{profiledata.MAILINGZIPCODE}}</ion-col>\n                    </ion-row>\n                    </div>\n            </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__["a" /* CommonServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addguest/addguest.module": [
		449,
		31
	],
	"../pages/addnewvehiclemodal/addnewvehiclemodal.module": [
		450,
		30
	],
	"../pages/addvehicle/addvehicle.module": [
		452,
		29
	],
	"../pages/contactus/contactus.module": [
		451,
		28
	],
	"../pages/dashboard/dashboard.module": [
		453,
		27
	],
	"../pages/documentapprove/documentapprove.module": [
		454,
		26
	],
	"../pages/documentlist/documentlist.module": [
		458,
		25
	],
	"../pages/editguest/editguest.module": [
		455,
		24
	],
	"../pages/faq/faq.module": [
		456,
		23
	],
	"../pages/guestlist/guestlist.module": [
		457,
		22
	],
	"../pages/information/information.module": [
		459,
		21
	],
	"../pages/legalterms/legalterms.module": [
		460,
		20
	],
	"../pages/login/login.module": [
		461,
		19
	],
	"../pages/master-data/master-data.module": [
		462,
		18
	],
	"../pages/myapplication/myapplication.module": [
		464,
		17
	],
	"../pages/mycart/mycart.module": [
		463,
		16
	],
	"../pages/mypermit/mypermit.module": [
		466,
		15
	],
	"../pages/myvehiclemodal/myvehiclemodal.module": [
		465,
		14
	],
	"../pages/payment/payment.module": [
		468,
		13
	],
	"../pages/permitreceipt/permitreceipt.module": [
		467,
		12
	],
	"../pages/printreport/printreport.module": [
		469,
		11
	],
	"../pages/privacypolicy/privacypolicy.module": [
		470,
		10
	],
	"../pages/profile/profile.module": [
		471,
		9
	],
	"../pages/renewpermit/renewpermit.module": [
		472,
		8
	],
	"../pages/requestnewpermit/requestnewpermit.module": [
		476,
		7
	],
	"../pages/savemessage/savemessage.module": [
		473,
		6
	],
	"../pages/sendinvitation/sendinvitation.module": [
		474,
		5
	],
	"../pages/thankyou/thankyou.module": [
		475,
		4
	],
	"../pages/uploaddocuments/uploaddocuments.module": [
		478,
		3
	],
	"../pages/uploaddocumentvirtual/uploaddocumentvirtual.module": [
		477,
		2
	],
	"../pages/vehicle-details/vehicle-details.module": [
		479,
		1
	],
	"../pages/virtualpermit/virtualpermit.module": [
		480,
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
webpackAsyncContext.id = 212;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
        'Access-Control-Allow-Origin': '*',
        'content': "application/json",
        'content-type': "application/json",
    })
};
/*
  Generated class for the CommonServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonServicesProvider = /** @class */ (function () {
    function CommonServicesProvider(http, app, loadingCtrl, toastCtrl) {
        this.http = http;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.apiEndpointNew = 'http://216.237.9.126/';
        this.apiEndpointPermit = 'http://216.237.9.126/api/Permit/';
        this.timeOut = 400000;
        this.token = '';
        this.errorMessageArr = {};
        this.errorMessageArr.timeoutMessage = 'Something went wrong. please retry.';
        this.errorMessageArr.requiredField = 'Please fill all required field.';
        this.errorMessageArr.loginRequired = 'Please Enter Valid Username and Password.';
    }
    CommonServicesProvider.prototype.requestViaPost = function (params, actionName) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': '*',
                'content': "application/json",
                'content-type': "application/json",
                'Authorization': localStorage.getItem('token')
            })
        };
        return this.http.post(this.apiEndpointPermit + actionName, params, httpOptions).timeout(this.timeOut);
    };
    CommonServicesProvider.prototype.requestViaGet = function (params, actionName) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Access-Control-Allow-Origin': '*',
                'content': "application/json",
                'content-type': "application/json",
                'Authorization': localStorage.getItem('token')
            })
        };
        httpOptions['params'] = params;
        return this.http.get(this.apiEndpointNew + actionName, httpOptions).timeout(this.timeOut);
    };
    CommonServicesProvider.prototype.doLogin = function (params, actionName) {
        // httpOptions['params']=params;
        return this.http.post(this.apiEndpointNew + actionName, params).timeout(this.timeOut);
    };
    CommonServicesProvider.prototype.showErrorMsgByToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    CommonServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["y" /* ToastController */]])
    ], CommonServicesProvider);
    return CommonServicesProvider;
}());

/****************Implemented API In New flow*************** */
/*********
 * login
 * GetProfile
 * GetVehicleList
 * Search Vichle without API
 */ 
//# sourceMappingURL=common-services.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requestnewpermit_requestnewpermit__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mypermit_mypermit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentapprove_documentapprove__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mycart_mycart__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__virtualpermit_virtualpermit__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__documentlist_documentlist__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__myvehiclemodal_myvehiclemodal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__information_information__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { LoginPage } from '../login/login';








var DashboardPage = /** @class */ (function () {
    function DashboardPage(http, navCtrl, navParams, modalCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userData = {};
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        var displayData = JSON.parse(localStorage.getItem('useData'));
        //  console.log(displayData);
        this.userData.type = displayData.TYPE;
        this.userData.status = displayData.STATUS;
        // this.userData.accountId = displayData.AccountID;
        //console.log(this.userData.AccountType);
    };
    DashboardPage.prototype.requestNewPermit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__requestnewpermit_requestnewpermit__["a" /* RequestnewpermitPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DashboardPage.prototype.myPermit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mypermit_mypermit__["a" /* MypermitPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DashboardPage.prototype.myApplications = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__documentapprove_documentapprove__["a" /* DocumentapprovePage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DashboardPage.prototype.myVehicles = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__myvehiclemodal_myvehiclemodal__["a" /* MyvehiclemodalPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DashboardPage.prototype.myDocuments = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__documentlist_documentlist__["a" /* DocumentlistPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DashboardPage.prototype.toCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__mycart_mycart__["a" /* MycartPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DashboardPage.prototype.toMyApplication = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__virtualpermit_virtualpermit__["a" /* VirtualpermitPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    DashboardPage.prototype.presentInfoModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__information_information__["a" /* InformationPage */]);
        modal.present();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/dashboard/dashboard.html"*/'<ion-content>\n\n<ion-row style="height: 10%;">\n  <ion-col col-2>\n    <button ion-button menuToggle left clear class="leftMenu">\n        <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-col> \n  <ion-col col-8 text-left class="title"></ion-col>\n  <span class="cart">0</span> \n  <img class="cartIcon" src="assets/imgs/dashboard/black-cart.png" (click)="toCart()"/>\n  <ion-col col-2>\n      <button ion-button clear end (click)="presentInfoModal()">\n          <ion-icon name="ios-information-circle-outline" style="font-size: 2.5em;" color="dark"></ion-icon>\n        </button>\n  </ion-col>  \n</ion-row>\n\n<ion-item class="headerBg"></ion-item>\n<ion-row class="textRow animated fadeInLeft" >\n  <ion-col col-7 text-left>Account Type:&nbsp;<span class="boldFont">{{userData.type}}</span></ion-col>\n  <ion-col col-5 text-right>Status:&nbsp;<span class="boldFont">{{userData.status}}</span></ion-col>\n</ion-row>\n\n<ion-row style="border-bottom: 1px solid #ccc;" class="animated fadeInLeft">\n    <ion-col col-1 text-center style="font-size: 1.8em;margin: auto;"><ion-icon name="ios-notifications-outline"></ion-icon></ion-col>\n    <ion-col col-10 text-left class="notificationText">Your Permit #1850 expiring soon...</ion-col>\n    <ion-col col-1 text-center style="font-size: 2em;"><img src="assets/imgs/request-permit/red-arrow.png"/></ion-col>\n</ion-row>\n<ion-grid style="height: 50vh;">\n<ion-row style="position:relative">\n  <ion-col class="imgDash img1 animated pulse" (click)="myPermit()"></ion-col>\n  <span class="text1">My Permits</span>\n  <div class="count1"><span style="vertical-align: middle;">0</span></div> \n  <ion-col class="imgDash img2 animated pulse" (click)="myApplications()"></ion-col>\n  <span class="text2">My Applications</span>\n  <div class="count2"><span style="vertical-align: middle;">0</span></div>  \n</ion-row>\n<ion-row style="border-top: 1px solid #ccc;position:relative">\n    <ion-col class="imgDash img3 animated pulse" (click)="myVehicles()"></ion-col>\n    <span class="text1">My Vehicles</span>\n    <div class="count3"><span style="vertical-align: middle;">0</span></div> \n    <ion-col class="imgDash img4 animated pulse" (click)="myDocuments()"></ion-col>\n    <span class="text2">My Documents</span>\n</ion-row>\n</ion-grid>\n\n\n</ion-content>\n<ion-footer>\n    <button ion-button full class="footerBtn animated bounceInUp" (click)="requestNewPermit()">Request New Permit</button>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyapplicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyapplicationPage = /** @class */ (function () {
    function MyapplicationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyapplicationPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MyapplicationPage');
    };
    MyapplicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myapplication',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/myapplication/myapplication.html"*/'<ion-header>\n  \n    <ion-row class="headerRow">\n      <ion-col col-2>\n        <button ion-button menuToggle left clear class="Menu">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-col> \n      <ion-col col-8 text-center class="title">My Applications</ion-col>\n      <ion-col col-2>\n          <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 10vw;color:#fff;"></ion-icon>\n            </button>\n      </ion-col>   \n    </ion-row>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n  \n  <ion-grid class="customGrid">\n      <ion-row class="grayTxt">\n          <ion-col col-4>Application No</ion-col>\n          <ion-col col-4>Plate/Vin</ion-col>\n          <ion-col col-4>Status</ion-col>\n      </ion-row>\n      <ion-row class="boldTxt">\n          <ion-col col-4>15348</ion-col>\n          <ion-col col-4>AD12</ion-col>\n          <ion-col col-4 style="color: #14b250;">Pre-approved</ion-col>\n      </ion-row>\n  \n      <ion-row class="grayTxt"><ion-col>Description</ion-col></ion-row>\n      <ion-row><ion-col>2017 Permit issued with discount to $150 from $222...</ion-col></ion-row>\n     <ion-item style="font-size: 1em;padding: 0;">\n      <ion-row class="grayTxt">\n          <ion-col col-4>Submit Date</ion-col>\n          \n          <ion-col col-4>Issued To</ion-col>\n      </ion-row>\n      <ion-row class="boldTxt">\n          <ion-col col-4>03/28/2018</ion-col>\n          <ion-col col-4>AD12</ion-col>\n          <ion-col col-4>GDF56</ion-col>\n      </ion-row>\n  \n      <ion-row class="grayTxt">\n          <ion-col col-4>Change Date</ion-col>\n          <ion-col col-4>Address</ion-col>\n          <ion-col col-4>Permit</ion-col>\n      </ion-row>\n      <ion-row class="boldTxt">\n          <ion-col col-4>06/04/2018</ion-col>\n          <ion-col col-4>12 Herbert St</ion-col>\n          <ion-col col-4>---</ion-col>\n      </ion-row>\n  \n      <ion-row class="grayTxt">\n        <ion-col col-4>Delivery Type</ion-col>\n        <ion-col col-4>Delivery Option</ion-col>\n        <ion-col col-4>Temp Issued</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>---</ion-col>\n        <ion-col col-4>By Mail</ion-col>\n        <ion-col col-4>---</ion-col>\n    </ion-row>\n   </ion-item>\n   <ion-row>\n   <ion-col>\n   <button ion-button block outline>Paynow</button>\n   </ion-col>\n   <ion-col>\n   <button ion-button block outline class="more">More</button>\n   </ion-col>\n   </ion-row>\n  </ion-grid>\n  \n  <ion-grid class="customGrid">\n    <ion-row class="grayTxt">\n        <ion-col col-4>Application No</ion-col>\n        <ion-col col-4>Plate/Vin</ion-col>\n        <ion-col col-4>Status</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>15349</ion-col>\n        <ion-col col-4>AD12</ion-col>\n        <ion-col col-4 style="color: #14b250;">Pre-approved</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt"><ion-col>Description:</ion-col></ion-row>\n    <ion-row><ion-col>2017 Permit issued with discount to $150 from $222...</ion-col></ion-row>\n    <ion-item style="font-size: 1em;padding: 0;" *ngIf="buttonClicked">\n    <ion-row class="grayTxt">\n        <ion-col col-4>Submit Date</ion-col>\n        <ion-col col-4>Plate/Vin</ion-col>\n        <ion-col col-4>Issued To</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>03/28/2018</ion-col>\n        <ion-col col-4>AD12</ion-col>\n        <ion-col col-4>GDF56</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt">\n        <ion-col col-4>Change Date</ion-col>\n        <ion-col col-4>Address</ion-col>\n        <ion-col col-4>Permit</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>06/04/2018</ion-col>\n        <ion-col col-4>12 Herbert St</ion-col>\n        <ion-col col-4>---</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt">\n      <ion-col col-4>Delivery Type</ion-col>\n      <ion-col col-4>Delivery Option</ion-col>\n      <ion-col col-4>Temp Issued</ion-col>\n   </ion-row>\n   <ion-row class="boldTxt">\n      <ion-col col-4>---</ion-col>\n      <ion-col col-4>By Mail</ion-col>\n      <ion-col col-4>---</ion-col>\n   </ion-row>\n   </ion-item>\n   <ion-row>\n   <ion-col>\n   <button ion-button block outline>Paynow</button>\n   </ion-col>\n   <ion-col>\n   <button ion-button block outline class="more" (click)="showMoreData()">More</button>\n   </ion-col>\n   </ion-row>\n  </ion-grid>\n  \n  <ion-grid class="customGrid">\n    <ion-row class="grayTxt">\n        <ion-col col-4>Application No</ion-col>\n        <ion-col col-4>Plate/Vin</ion-col>\n        <ion-col col-4>Status</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>15350</ion-col>\n        <ion-col col-4>AD12</ion-col>\n        <ion-col col-4 style="color: #14b250;">Pre-approved</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt"><ion-col>Description:</ion-col></ion-row>\n    <ion-row><ion-col>2017 Permit issued with discount to $150 from $222...</ion-col></ion-row>\n    <ion-item style="font-size: 1em;padding: 0;" *ngIf="buttonClicked">\n    <ion-row class="grayTxt">\n        <ion-col col-4>Submit Date</ion-col>\n        <ion-col col-4>Plate/Vin</ion-col>\n        <ion-col col-4>Issued To</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>03/28/2018</ion-col>\n        <ion-col col-4>AD12</ion-col>\n        <ion-col col-4>GDF56</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt">\n        <ion-col col-4>Change Date</ion-col>\n        <ion-col col-4>Address</ion-col>\n        <ion-col col-4>Permit</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>06/04/2018</ion-col>\n        <ion-col col-4>12 Herbert St</ion-col>\n        <ion-col col-4>---</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt">\n      <ion-col col-4>Delivery Type</ion-col>\n      <ion-col col-4>Delivery Option</ion-col>\n      <ion-col col-4>Temp Issued</ion-col>\n   </ion-row>\n   <ion-row class="boldTxt">\n      <ion-col col-4>---</ion-col>\n      <ion-col col-4>By Mail</ion-col>\n      <ion-col col-4>---</ion-col>\n   </ion-row>\n   </ion-item>\n   <ion-row>\n   <ion-col>\n   <button ion-button block outline>Paynow</button>\n   </ion-col>\n   <ion-col>\n   <button ion-button block outline class="more" (click)="showMoreData()">More</button>\n   </ion-col>\n   </ion-row>\n  </ion-grid>\n  \n  <ion-grid class="customGrid">\n    <ion-row class="grayTxt">\n        <ion-col col-4>Application No</ion-col>\n        <ion-col col-4>Plate/Vin</ion-col>\n        <ion-col col-4>Status</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>15351</ion-col>\n        <ion-col col-4>AD12</ion-col>\n        <ion-col col-4 style="color: #14b250;">Pre-approved</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt"><ion-col>Description:</ion-col></ion-row>\n    <ion-row><ion-col>2017 Permit issued with discount to $150 from $222...</ion-col></ion-row>\n    <ion-item style="font-size: 1em;padding: 0;" *ngIf="buttonClicked">\n    <ion-row class="grayTxt">\n        <ion-col col-4>Submit Date</ion-col>\n        <ion-col col-4>Plate/Vin</ion-col>\n        <ion-col col-4>Issued To</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>03/28/2018</ion-col>\n        <ion-col col-4>AD12</ion-col>\n        <ion-col col-4>GDF56</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt">\n        <ion-col col-4>Change Date</ion-col>\n        <ion-col col-4>Address</ion-col>\n        <ion-col col-4>Permit</ion-col>\n    </ion-row>\n    <ion-row class="boldTxt">\n        <ion-col col-4>06/04/2018</ion-col>\n        <ion-col col-4>12 Herbert St</ion-col>\n        <ion-col col-4>---</ion-col>\n    </ion-row>\n  \n    <ion-row class="grayTxt">\n      <ion-col col-4>Delivery Type</ion-col>\n      <ion-col col-4>Delivery Option</ion-col>\n      <ion-col col-4>Temp Issued</ion-col>\n   </ion-row>\n   <ion-row class="boldTxt">\n      <ion-col col-4>---</ion-col>\n      <ion-col col-4>By Mail</ion-col>\n      <ion-col col-4>---</ion-col>\n   </ion-row>\n   </ion-item>\n   <ion-row>\n   <ion-col>\n   <button ion-button block outline>Paynow</button>\n   </ion-col>\n   <ion-col>\n   <button ion-button block outline class="more" (click)="showMoreData()">More</button>\n   </ion-col>\n   </ion-row>\n  </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/myapplication/myapplication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], MyapplicationPage);
    return MyapplicationPage;
}());

//# sourceMappingURL=myapplication.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrintreportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrintreportPage = /** @class */ (function () {
    function PrintreportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PrintreportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrintreportPage');
    };
    PrintreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-printreport',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/printreport/printreport.html"*/'<!--\n  Generated template for the PrintreportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>printreport</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/printreport/printreport.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], PrintreportPage);
    return PrintreportPage;
}());

//# sourceMappingURL=printreport.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenewpermitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RenewpermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RenewpermitPage = /** @class */ (function () {
    function RenewpermitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RenewpermitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RenewpermitPage');
    };
    RenewpermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-renewpermit',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/renewpermit/renewpermit.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>renewpermit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/renewpermit/renewpermit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], RenewpermitPage);
    return RenewpermitPage;
}());

//# sourceMappingURL=renewpermit.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaddocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_path__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permitreceipt_permitreceipt__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploaddocumentsPage = /** @class */ (function () {
    function UploaddocumentsPage(navCtrl, navParams, platform, actionSheetCtrl, camera, popoverCtrl, fileChooser, filePath) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.popoverCtrl = popoverCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.photo = "assets/imgs/dk.jpg";
        this.photo1 = "assets/imgs/dk.jpg";
    }
    UploaddocumentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploaddocumentsPage');
    };
    UploaddocumentsPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    /****************************************************************** */
    UploaddocumentsPage.prototype.takePicture = function () {
        var _this = this;
        try {
            var options = {
                quality: 50,
                sourceType: this.camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                mediaType: this.camera.MediaType.VIDEO
            };
            this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                //let base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.photo = 'data:image/jpeg;base64,' + imageData;
                localStorage.setItem('pic1', _this.photo);
                //console.log(this.photo);
            }, function (err) {
                // Handle error
                alert(err);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    /*********************************************************** */
    UploaddocumentsPage.prototype.takePicture1 = function () {
        var _this = this;
        try {
            var options = {
                quality: 50,
                sourceType: this.camera.PictureSourceType.CAMERA,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                mediaType: this.camera.MediaType.VIDEO
            };
            this.camera.getPicture(options).then(function (imageData) {
                _this.photo1 = 'data:image/jpeg;base64,' + imageData;
                localStorage.setItem('pic2', _this.photo1);
            }, function (err) {
                alert(err);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    /**************************************************************************** */
    UploaddocumentsPage.prototype.browseFile = function () {
        var _this = this;
        /* this.fileChooser.open().then(uri => {
          this.filePath.resolveNativePath(uri)
          .then(filePath => console.log(filePath))
          .catch(err => console.log(err));})
        .catch(e => console.log(e)); */
        try {
            var options = {
                quality: 50,
                sourceType: 0,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                //let base64Image = 'data:image/jpeg;base64,' + imageData;
                _this.photo = 'data:image/jpeg;base64,' + imageData;
                localStorage.setItem('pic1', _this.photo);
                //console.log(this.photo);
            }, function (err) {
                // Handle error
                alert(err);
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    /****************************************** */
    UploaddocumentsPage.prototype.permitReceipt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__permitreceipt_permitreceipt__["a" /* PermitreceiptPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    /********************************************************************** */
    UploaddocumentsPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            // title: 'Choose your Option',
            buttons: [
                {
                    icon: 'camera',
                    text: 'Camera',
                    // role: 'Camera',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.takePicture();
                    }
                },
                {
                    icon: 'md-document',
                    text: 'Choose File',
                    handler: function () {
                        // console.log('Archive clicked');
                        _this.browseFile();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    /************************************************************************ */
    UploaddocumentsPage.prototype.presentActionSheet1 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            // title: 'Choose your Option',
            buttons: [
                {
                    icon: 'camera',
                    text: 'Camera',
                    // role: 'Camera',
                    handler: function () {
                        //console.log('Destructive clicked');
                        _this.takePicture1();
                    }
                },
                {
                    icon: 'md-document',
                    text: 'Choose File',
                    handler: function () {
                        // console.log('Archive clicked');
                        _this.browseFile();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    UploaddocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uploaddocuments',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/uploaddocuments/uploaddocuments.html"*/'<ion-header style="background: #00a3bc;color:#fff;">\n  <ion-row >\n      <ion-col col-2>\n        <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n          <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n          <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>          \n        </button>\n      </ion-col> \n      <ion-col col-8 text-center class="title">Upload Documents</ion-col>\n      <span class="cart">2</span>\n      <img class="cartImg" src="assets/imgs/request-permit/cart-icon.png"/>\n         <ion-col col-2>\n          <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 2.2em;color:#fff;"></ion-icon>\n            </button>\n      </ion-col>   \n    </ion-row>\n    \n<ion-row text-center>\n  <ion-col style="border-bottom: 3px solid #00ed3d;">\n      <img style="width:25%;" src="assets/imgs/request-permit/permit-green.png"/>\n      <p style="color:#00ed3d">Permits</p>\n      <img class="arrowImg" src="assets/imgs/request-permit/green-arrow.png"/>\n  </ion-col>\n  <ion-col style="border-bottom: 3px solid #00ed3d;">\n      <img style="width:38%;" src="assets/imgs/request-permit/vehicle-green.png"/>\n      <p style="color:#00ed3d;margin: 6%;">Vehicles</p>\n      <img class="arrowImg" src="assets/imgs/request-permit/white-arrow.png"/>\n  </ion-col>\n  <ion-col>\n      <img style="width:25%;" src="assets/imgs/request-permit/documents-yellow.png"/>\n      <p style="color:yellow">Documents</p>\n  </ion-col>\n</ion-row>\n</ion-header>\n<ion-content style="background:#efefef;">\n  <ion-label class="note">*2 MB Max Size per document(jpg, pdf, Doc)</ion-label>\n    <ion-grid style="background:#fff;box-shadow: 0 4px 8px #8a8a8a;">\n        <ion-row style="border-bottom: 1px solid #ccc;padding: 2% 0;">\n            <ion-col col-9 class="boldRow">Upload Document for Plate/Vin #</ion-col>\n                <ion-col class="Rfont"> 6333338 </ion-col> \n        </ion-row>   \n        <ion-row style="position:relative;padding: 3% 0;">\n            <ion-col col-6 class="docType"> Driving License </ion-col>\n            <ion-col col-6>\n              <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n            </ion-col>\n          \n            <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet()" />\n          </ion-row>   \n          \n          <ion-row style="position:relative;padding: 3% 0;">\n              <ion-col col-6 class="docType"> Vehicle Registration </ion-col>\n              <ion-col col-6>\n                <img class="docImage" src="{{this.photo1}}" alt="" imageViewer/>\n              </ion-col>\n            \n              <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet1()" />\n            </ion-row>\n    \n    </ion-grid>\n\n    <ion-grid style="background:#fff;box-shadow: 0 4px 8px #8a8a8a;margin-top:2%">\n        <ion-row style="border-bottom: 1px solid #ccc;padding: 2% 0;">\n            <ion-col col-9 class="boldRow">Upload Document for Plate/Vin #</ion-col>\n                <ion-col class="Rfont"> 1654549 </ion-col>\n        </ion-row>   \n        <ion-row style="position:relative;padding: 3% 0;">\n            <ion-col col-6 class="docType"> Driving License </ion-col>\n            <ion-col col-6>\n              <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n            </ion-col>\n          \n            <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet()" />\n          </ion-row>   \n          \n          <ion-row style="position:relative;padding: 3% 0;">\n              <ion-col col-6 class="docType"> Vehicle Registration </ion-col>\n              <ion-col col-6>\n                <img class="docImage" src="{{this.photo1}}" alt="" imageViewer/>\n              </ion-col>\n            \n              <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet1()" />\n            </ion-row>\n    \n    </ion-grid>\n\n    <ion-grid style="background:#fff;box-shadow: 0 4px 8px #8a8a8a;margin:2% 0">\n        <ion-row style="border-bottom: 1px solid #ccc;padding: 2% 0;">\n            <ion-col col-9 class="boldRow">Upload Document for Plate/Vin #</ion-col>\n                <ion-col class="Rfont"> 1984459 </ion-col>\n        </ion-row>   \n        <ion-row style="position:relative;padding: 3% 0;">\n            <ion-col col-6 class="docType"> Driving License </ion-col>\n            <ion-col col-6>\n              <img class="docImage" src="{{this.photo}}" alt="" imageViewer/>\n            </ion-col>\n          \n            <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet()" />\n          </ion-row>   \n          \n          <ion-row style="position:relative;padding: 3% 0;">\n              <ion-col col-6 class="docType"> Vehicle Registration </ion-col>\n              <ion-col col-6>\n                <img class="docImage" src="{{this.photo1}}" alt="" imageViewer/>\n              </ion-col>\n            \n              <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet1()" />\n            </ion-row>\n    \n    </ion-grid>  \n\n<!-- <ion-grid style="background:#fff;box-shadow: 0 4px 8px #8a8a8a;">\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="boldRow">Application Vehicle</ion-label>\n        <ion-label class="Rfont">6333338</ion-label>\n    \n    </ion-col>\n    <ion-col col-6>\n        <ion-label class="boldRow">Documents</ion-label>\n        <ion-label class="Rfont">Driving License</ion-label>\n     \n    </ion-col>\n  </ion-row>\n\n  <ion-row style="position:relative;">\n    <ion-col col-6>\n    <span class="nameTxt">Document Image</span><br>\n    <span style="font-size:3vw;color:#8b8b8b;font-weight: 500;">2 MB Max Size,(jpg, pdf, Doc)</span>\n    </ion-col>\n    <ion-col col-6>\n      <img class="docImage" src="data:image/jpeg;base64,{{this.photo}}" alt="image" imageViewer/>\n    </ion-col>\n  \n    <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet()" />\n  </ion-row>\n  \n\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="boldRow">Upload Date</ion-label>\n        <ion-label class="Rfont">05/04/2018</ion-label>\n    \n    </ion-col>\n    <ion-col col-6>\n        <div class="mDiv">\n          <span class="cstmSpan"><ion-label>Is Mandatory: &nbsp; &nbsp;</ion-label></span>\n          <span class="cstmSpan" style="color: #8b8b8b;">Yes</span>\n        </div>\n     \n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n<ion-grid style="background:#fff;box-shadow: 0 4px 8px #8a8a8a;margin-top:2%">\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="boldRow">Application Vehicle</ion-label>\n        <ion-label class="Rfont">6333338</ion-label>\n    </ion-col>\n    <ion-col col-6>\n        <ion-label class="boldRow">Documents</ion-label>\n        <ion-label class="Rfont">Vehicle Registration</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style="position:relative;">\n    <ion-col col-6>\n    <span class="nameTxt">Document Image</span><br>\n    <span style="font-size:3vw;color:#8b8b8b;font-weight: 500;">2 MB Max Size,(jpg, pdf, Doc)</span>\n    </ion-col>\n    <ion-col col-6>\n      <img class="docImage" src="data:image/jpeg;base64,{{this.photo1}}" alt="image" imageViewer/>\n    </ion-col>\n    <img class="camIcon" src="assets/imgs/upload.png" (click)="presentActionSheet1()" />\n   \n  </ion-row>\n\n\n  <ion-row>\n    <ion-col col-6>\n        <ion-label class="boldRow">Upload Date</ion-label>\n        <ion-label class="Rfont">05/04/2018</ion-label>\n    </ion-col>\n    <ion-col col-6>\n        <div class="mDiv">\n            <span class="cstmSpan"><ion-label>Is Mandatory: &nbsp; &nbsp;</ion-label></span>\n            <span class="cstmSpan" style="color: #8b8b8b;">Yes</span>\n          </div>\n     \n    </ion-col>\n  </ion-row>\n\n</ion-grid> -->\n\n</ion-content>\n<ion-footer>\n  <ion-row>\n  \n    <button ion-button full class="footerBtn border" (click)="permitReceipt()">Submit</button>\n  \n  <button ion-button full class="footerBtn">Cancel</button>\n  \n</ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/uploaddocuments/uploaddocuments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_path__["a" /* FilePath */]])
    ], UploaddocumentsPage);
    return UploaddocumentsPage;
}());

//# sourceMappingURL=uploaddocuments.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VehicleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VehicleDetailsPage = /** @class */ (function () {
    function VehicleDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VehicleDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehicleDetailsPage');
    };
    VehicleDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vehicle-details',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/vehicle-details/vehicle-details.html"*/'<!--\n  Generated template for the VehicleDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>vehicleDetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/vehicle-details/vehicle-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], VehicleDetailsPage);
    return VehicleDetailsPage;
}());

//# sourceMappingURL=vehicle-details.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



try {
    if (this.platform.is('ios') || this.platform.is('android')) {
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
    }
}
catch (e) {
    console.log("not a device");
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_information_information__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mypermit_mypermit__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_printreport_printreport__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_renewpermit_renewpermit__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_requestnewpermit_requestnewpermit__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addvehicle_addvehicle__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_uploaddocuments_uploaddocuments__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_documentapprove_documentapprove__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_mycart_mycart__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_payment_payment__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_thankyou_thankyou__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_virtualpermit_virtualpermit__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_contactus_contactus__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_faq_faq__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_guestlist_guestlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_legalterms_legalterms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_permitreceipt_permitreceipt__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_privacypolicy_privacypolicy__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_myapplication_myapplication__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_uploaddocumentvirtual_uploaddocumentvirtual__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_documentlist_documentlist__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_myvehiclemodal_myvehiclemodal__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_addnewvehiclemodal_addnewvehiclemodal__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_addguest_addguest__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_editguest_editguest__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_sendinvitation_sendinvitation__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_savemessage_savemessage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_vehicle_details_vehicle_details__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_master_data_master_data__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { HomePage } from '../pages/home/home';




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                // HomePage,
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_36__pages_myvehiclemodal_myvehiclemodal__["a" /* MyvehiclemodalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_37__pages_addnewvehiclemodal_addnewvehiclemodal__["a" /* AddnewvehiclemodalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */], __WEBPACK_IMPORTED_MODULE_35__pages_documentlist_documentlist__["a" /* DocumentlistPage */], __WEBPACK_IMPORTED_MODULE_38__pages_addguest_addguest__["a" /* AddguestPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_information_information__["a" /* InformationPage */], __WEBPACK_IMPORTED_MODULE_34__pages_uploaddocumentvirtual_uploaddocumentvirtual__["a" /* UploaddocumentvirtualPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mypermit_mypermit__["a" /* MypermitPage */], __WEBPACK_IMPORTED_MODULE_33__pages_myapplication_myapplication__["a" /* MyapplicationPage */], __WEBPACK_IMPORTED_MODULE_41__pages_savemessage_savemessage__["a" /* SavemessagePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_printreport_printreport__["a" /* PrintreportPage */], __WEBPACK_IMPORTED_MODULE_25__pages_virtualpermit_virtualpermit__["a" /* VirtualpermitPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_renewpermit_renewpermit__["a" /* RenewpermitPage */], __WEBPACK_IMPORTED_MODULE_23__pages_payment_payment__["a" /* PaymentPage */], __WEBPACK_IMPORTED_MODULE_39__pages_editguest_editguest__["a" /* EditguestPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_requestnewpermit_requestnewpermit__["a" /* RequestnewpermitPage */], __WEBPACK_IMPORTED_MODULE_24__pages_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addvehicle_addvehicle__["a" /* AddvehiclePage */], __WEBPACK_IMPORTED_MODULE_22__pages_mycart_mycart__["a" /* MycartPage */], __WEBPACK_IMPORTED_MODULE_40__pages_sendinvitation_sendinvitation__["a" /* SendinvitationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_uploaddocuments_uploaddocuments__["a" /* UploaddocumentsPage */], __WEBPACK_IMPORTED_MODULE_21__pages_documentapprove_documentapprove__["a" /* DocumentapprovePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_contactus_contactus__["a" /* ContactusPage */], __WEBPACK_IMPORTED_MODULE_27__pages_faq_faq__["a" /* FaqPage */], __WEBPACK_IMPORTED_MODULE_28__pages_guestlist_guestlist__["a" /* GuestlistPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_legalterms_legalterms__["a" /* LegaltermsPage */], __WEBPACK_IMPORTED_MODULE_30__pages_permitreceipt_permitreceipt__["a" /* PermitreceiptPage */], __WEBPACK_IMPORTED_MODULE_43__pages_master_data_master_data__["a" /* MasterDataPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */], __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_42__pages_vehicle_details_vehicle_details__["a" /* VehicleDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addguest/addguest.module#AddguestPageModule', name: 'AddguestPage', segment: 'addguest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addnewvehiclemodal/addnewvehiclemodal.module#AddnewvehiclemodalPageModule', name: 'AddnewvehiclemodalPage', segment: 'addnewvehiclemodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addvehicle/addvehicle.module#AddvehiclePageModule', name: 'AddvehiclePage', segment: 'addvehicle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documentapprove/documentapprove.module#DocumentapprovePageModule', name: 'DocumentapprovePage', segment: 'documentapprove', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editguest/editguest.module#EditguestPageModule', name: 'EditguestPage', segment: 'editguest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guestlist/guestlist.module#GuestlistPageModule', name: 'GuestlistPage', segment: 'guestlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/documentlist/documentlist.module#DocumentlistPageModule', name: 'DocumentlistPage', segment: 'documentlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/legalterms/legalterms.module#LegaltermsPageModule', name: 'LegaltermsPage', segment: 'legalterms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/master-data/master-data.module#MasterDataPageModule', name: 'MasterDataPage', segment: 'master-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mycart/mycart.module#MycartPageModule', name: 'MycartPage', segment: 'mycart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myapplication/myapplication.module#MyapplicationPageModule', name: 'MyapplicationPage', segment: 'myapplication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myvehiclemodal/myvehiclemodal.module#MyvehiclemodalPageModule', name: 'MyvehiclemodalPage', segment: 'myvehiclemodal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypermit/mypermit.module#MypermitPageModule', name: 'MypermitPage', segment: 'mypermit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permitreceipt/permitreceipt.module#PermitreceiptPageModule', name: 'PermitreceiptPage', segment: 'permitreceipt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/printreport/printreport.module#PrintreportPageModule', name: 'PrintreportPage', segment: 'printreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacypolicy/privacypolicy.module#PrivacypolicyPageModule', name: 'PrivacypolicyPage', segment: 'privacypolicy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/renewpermit/renewpermit.module#RenewpermitPageModule', name: 'RenewpermitPage', segment: 'renewpermit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/savemessage/savemessage.module#SavemessagePageModule', name: 'SavemessagePage', segment: 'savemessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendinvitation/sendinvitation.module#SendinvitationPageModule', name: 'SendinvitationPage', segment: 'sendinvitation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyou/thankyou.module#ThankyouPageModule', name: 'ThankyouPage', segment: 'thankyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requestnewpermit/requestnewpermit.module#RequestnewpermitPageModule', name: 'RequestnewpermitPage', segment: 'requestnewpermit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploaddocumentvirtual/uploaddocumentvirtual.module#UploaddocumentvirtualPageModule', name: 'UploaddocumentvirtualPage', segment: 'uploaddocumentvirtual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploaddocuments/uploaddocuments.module#UploaddocumentsPageModule', name: 'UploaddocumentsPage', segment: 'uploaddocuments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehicle-details/vehicle-details.module#VehicleDetailsPageModule', name: 'VehicleDetailsPage', segment: 'vehicle-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/virtualpermit/virtualpermit.module#VirtualpermitPageModule', name: 'VirtualpermitPage', segment: 'virtualpermit', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                // HomePage,
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_36__pages_myvehiclemodal_myvehiclemodal__["a" /* MyvehiclemodalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_37__pages_addnewvehiclemodal_addnewvehiclemodal__["a" /* AddnewvehiclemodalPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dashboard_dashboard__["a" /* DashboardPage */], __WEBPACK_IMPORTED_MODULE_35__pages_documentlist_documentlist__["a" /* DocumentlistPage */], __WEBPACK_IMPORTED_MODULE_38__pages_addguest_addguest__["a" /* AddguestPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_information_information__["a" /* InformationPage */], __WEBPACK_IMPORTED_MODULE_34__pages_uploaddocumentvirtual_uploaddocumentvirtual__["a" /* UploaddocumentvirtualPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_mypermit_mypermit__["a" /* MypermitPage */], __WEBPACK_IMPORTED_MODULE_33__pages_myapplication_myapplication__["a" /* MyapplicationPage */], __WEBPACK_IMPORTED_MODULE_41__pages_savemessage_savemessage__["a" /* SavemessagePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_printreport_printreport__["a" /* PrintreportPage */], __WEBPACK_IMPORTED_MODULE_25__pages_virtualpermit_virtualpermit__["a" /* VirtualpermitPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_renewpermit_renewpermit__["a" /* RenewpermitPage */], __WEBPACK_IMPORTED_MODULE_23__pages_payment_payment__["a" /* PaymentPage */], __WEBPACK_IMPORTED_MODULE_39__pages_editguest_editguest__["a" /* EditguestPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_requestnewpermit_requestnewpermit__["a" /* RequestnewpermitPage */], __WEBPACK_IMPORTED_MODULE_24__pages_thankyou_thankyou__["a" /* ThankyouPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addvehicle_addvehicle__["a" /* AddvehiclePage */], __WEBPACK_IMPORTED_MODULE_22__pages_mycart_mycart__["a" /* MycartPage */], __WEBPACK_IMPORTED_MODULE_40__pages_sendinvitation_sendinvitation__["a" /* SendinvitationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_uploaddocuments_uploaddocuments__["a" /* UploaddocumentsPage */], __WEBPACK_IMPORTED_MODULE_21__pages_documentapprove_documentapprove__["a" /* DocumentapprovePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_contactus_contactus__["a" /* ContactusPage */], __WEBPACK_IMPORTED_MODULE_27__pages_faq_faq__["a" /* FaqPage */], __WEBPACK_IMPORTED_MODULE_28__pages_guestlist_guestlist__["a" /* GuestlistPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_legalterms_legalterms__["a" /* LegaltermsPage */], __WEBPACK_IMPORTED_MODULE_30__pages_permitreceipt_permitreceipt__["a" /* PermitreceiptPage */], __WEBPACK_IMPORTED_MODULE_43__pages_master_data_master_data__["a" /* MasterDataPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */], __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */], __WEBPACK_IMPORTED_MODULE_42__pages_vehicle_details_vehicle_details__["a" /* VehicleDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_photo_viewer__["a" /* PhotoViewer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_46__providers_common_services_common_services__["a" /* CommonServicesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contactus_contactus__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_faq_faq__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_guestlist_guestlist__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_legalterms_legalterms__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_permitreceipt_permitreceipt__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_privacypolicy_privacypolicy__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, app, alertCtrl, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.token = '';
        this.useData = '';
        this.initializeApp();
        this.token = localStorage.getItem('token');
        this.useData = localStorage.getItem('useData');
        if (this.token && this.useData) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */];
        }
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */], image: "assets/imgs/menu/home.png" },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */], image: "assets/imgs/menu/my-profile.png" },
            { title: 'Permit Receipt', component: __WEBPACK_IMPORTED_MODULE_10__pages_permitreceipt_permitreceipt__["a" /* PermitreceiptPage */], image: "assets/imgs/menu/permit-receive.png" },
            { title: 'Manage Guest', component: __WEBPACK_IMPORTED_MODULE_8__pages_guestlist_guestlist__["a" /* GuestlistPage */], image: "assets/imgs/menu/guest-list.png" },
            { title: 'Legal Terms', component: __WEBPACK_IMPORTED_MODULE_9__pages_legalterms_legalterms__["a" /* LegaltermsPage */], image: "assets/imgs/menu/legal-terms.png" },
            { title: 'Privacy Policy', component: __WEBPACK_IMPORTED_MODULE_11__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */], image: "assets/imgs/menu/privacy-policy.png" },
            { title: 'FAQ', component: __WEBPACK_IMPORTED_MODULE_7__pages_faq_faq__["a" /* FaqPage */], image: "assets/imgs/menu/faq.png" },
            { title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__pages_contactus_contactus__["a" /* ContactusPage */], image: "assets/imgs/menu/contact.png" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.platform.registerBackButtonAction(function () {
                var alert;
                if (_this.nav.canGoBack()) {
                    _this.nav.pop();
                }
                else {
                    if (alert) {
                        alert.dismiss();
                        //this.alert =null;     
                    }
                    else {
                        _this.showAlert();
                    }
                }
            });
        });
    };
    MyApp.prototype.showAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Exit?',
            message: 'Do you want to exit the app?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // this.alert =null;
                    }
                },
                {
                    text: 'Exit',
                    handler: function () {
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present();
    };
    /*    public showToast() {
            let toast = this.toastCtrl.create({
              message: 'Press Again to exit',
              duration: 2000,
              position: 'bottom'
            });

            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();
          } */
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.nav.push(page.component);
    };
    MyApp.prototype.doLogout = function () {
        // let alert = this.alertCtrl.create({
        //   message: 'Do you want to logout?',
        //   buttons: [{
        //     text: "Yes",
        //     handler: () => { 
        var _this = this;
        //       localStorage.setItem('token','');
        //       this.nav.setRoot(page.component);
        //     }
        //   }, {
        //     text: "No",
        //     role: 'cancel'
        //   }],enableBackdropDismiss :false
        // })
        var alert = this.alertCtrl.create({
            title: 'Confirm Logout',
            message: 'Are you sure you want to log out?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        localStorage.setItem('token', '');
                        localStorage.setItem('loginData', '');
                        localStorage.setItem('useData', '');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
                        //this.nav.push(page.component);
                    }
                }
            ], enableBackdropDismiss: false
        });
        alert.present();
    };
    MyApp.prototype.goPage = function () {
        this.app.getRootNav().popToRoot();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar style="background: #00a3bc;">\n      <ion-title text-center><img src="assets/imgs/login/getapermit.png"/></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon item-start><img src="{{p.image}}"/></ion-icon>{{p.title}}\n      </button>\n    </ion-list> \n   <!--  <ion-list>\n        <button ion-item (click)="openPage(LoginPage)">\n            <ion-icon item-start><img src="assets/imgs/menu/home.png"/></ion-icon>\n              Home\n        </button>\n        <button ion-item>\n            <ion-icon item-start><img src="assets/imgs/menu/my-profile.png"/></ion-icon>\n              My Profile\n        </button>\n        <button ion-item>\n            <ion-icon item-start><img src="assets/imgs/menu/permit-receive.png"/></ion-icon>\n              Permit Receipt\n        </button>\n        <button ion-item>\n            <ion-icon item-start><img src="assets/imgs/menu/guest-list.png"/></ion-icon>\n              Guest List\n        </button>\n        <button ion-item>\n            <ion-icon item-start><img src="assets/imgs/menu/legal-terms.png"/></ion-icon>\n              Legal Terms\n        </button>\n        <button ion-item>\n            <ion-icon item-start><img src="assets/imgs/menu/privacy-policy.png"/></ion-icon>\n              Privacy Policy\n        </button>\n        <button ion-item>\n            <ion-icon item-start><img src="assets/imgs/menu/faq.png"/></ion-icon>\n              FAQ\n        </button>\n        <button ion-item>\n            <ion-icon item-start><img src="assets/imgs/menu/contact.png"/></ion-icon>\n              Contact Us\n        </button>\n    </ion-list> -->\n  </ion-content>\n<ion-footer>\n    <button menuClose ion-item (click)="doLogout()"  style="background:#ebebeb;">\n        <ion-icon item-start><img src="assets/imgs/menu/logout.png"/></ion-icon>\n          Logout\n    </button>\n</ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
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
            selector: 'page-list',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewvehiclemodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common_services_common_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddnewvehiclemodalPage = /** @class */ (function () {
    function AddnewvehiclemodalPage(navCtrl, loadingCtrl, navParams, viewCtrl, toastCtrl, customService, FormBuild) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.customService = customService;
        this.FormBuild = FormBuild;
        this.makeList = [];
        this.modelList = [];
        this.yearList = [];
        this.colorList = [];
        this.typeList = [];
        this.vehicleData = [];
        this.title = '';
        this.Account_VehicleId = '';
        this.expiryMonthList = ["January", "February", "March", "April", "May",
            "June", "July", "August", "September", "October",
            "November", "December"];
        this.loaderGlob = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.vehicleDetailForm = this.FormBuild.group({
            LicensePlate: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            State: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            IssueTo: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            VehicleMakeID: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            VehicleModelID: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            VehicleTypeID: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            VehicleColorID: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            VehicleYearID: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            RegistrationMonth: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            RegistrationYear: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
        });
    }
    AddnewvehiclemodalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddnewvehiclemodalPage.prototype.ionViewDidLoad = function () {
        this.getMakeList();
        //this.getTypeList();
        this.vehicleData = this.navParams.get('vehicleData');
        this.title = this.navParams.get('title');
        if (this.title == 'Update Vehicle') {
            this.clear('update');
        }
    };
    AddnewvehiclemodalPage.prototype.getMakeList = function () {
        // let loader = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        var _this = this;
        try {
            this.loaderGlob.present();
            var parameters = {};
            this.customService.requestViaPost(parameters, 'GetVehicleMake').subscribe(function (response) {
                _this.makeList = response.Data.VehicleMake;
                _this.getColorList();
                //loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    _this.loaderGlob.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (err) {
                console.log(err);
                _this.loaderGlob.dismiss();
                var toast = _this.toastCtrl.create({
                    message: _this.customService.errorMessageArr.timeoutMessage,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        catch (e) {
            console.log(e);
            this.loaderGlob.dismiss();
        }
    };
    AddnewvehiclemodalPage.prototype.getModalList = function (make) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        try {
            loader.present();
            var parameters = {
                "VEHICLEMAKEID": make
            };
            this.customService.requestViaPost(parameters, 'GetVehicleModel').subscribe(function (response) {
                _this.modelList = response.Data.VEHICLEMODEL;
                //this.setFilteredItems();
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                    //this.navCtrl.setRoot("DashboardPage",{ direction: 'forword' });
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: _this.customService.errorMessageArr.timeoutMessage,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    AddnewvehiclemodalPage.prototype.getYearList = function (modalId) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        try {
            loader.present();
            var parameters = {
                "VEHICLEMODELID": modalId
            };
            this.customService.requestViaPost(parameters, 'GetVehicleYear').subscribe(function (response) {
                _this.yearList = response.Data.VEHICLEYEAR;
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                    //this.navCtrl.setRoot("DashboardPage",{ direction: 'forword' });
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: _this.customService.errorMessageArr.timeoutMessage,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    AddnewvehiclemodalPage.prototype.getColorList = function () {
        // let loader = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        var _this = this;
        try {
            // loader.present();
            var parameters = {};
            this.customService.requestViaPost(parameters, 'GetVehicleColor').subscribe(function (response) {
                _this.colorList = response.Data.VehicleColor;
                _this.getTypeList();
                //loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                    //this.navCtrl.setRoot("DashboardPage",{ direction: 'forword' });
                }
                else {
                    _this.loaderGlob.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (err) {
                console.log(err);
                _this.loaderGlob.dismiss();
                var toast = _this.toastCtrl.create({
                    message: _this.customService.errorMessageArr.timeoutMessage,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        catch (e) {
            console.log(e);
            this.loaderGlob.dismiss();
        }
    };
    AddnewvehiclemodalPage.prototype.getTypeList = function () {
        // let loader = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        var _this = this;
        try {
            // loader.present();
            var parameters = {};
            this.customService.requestViaPost(parameters, 'GetVehicleType').subscribe(function (response) {
                _this.typeList = response.Data.VehicleType;
                _this.loaderGlob.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                    //this.navCtrl.setRoot("DashboardPage",{ direction: 'forword' });
                }
                else {
                    _this.loaderGlob.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (err) {
                console.log(err);
                _this.loaderGlob.dismiss();
                var toast = _this.toastCtrl.create({
                    message: _this.customService.errorMessageArr.timeoutMessage,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        catch (e) {
            console.log(e);
            this.loaderGlob.dismiss();
        }
    };
    AddnewvehiclemodalPage.prototype.clear = function (requestType) {
        if (requestType == 'update') {
            var vehicleData = JSON.parse(this.vehicleData);
            this.getModalList(vehicleData.VehicleMakeId);
            this.getYearList(vehicleData.VehicleModelId);
            this.Account_VehicleId = vehicleData.Account_VehicleId;
            this.vehicleDetailForm.patchValue({ 'LicensePlate': vehicleData.LicensePlate });
            this.vehicleDetailForm.patchValue({ 'State': vehicleData.State });
            this.vehicleDetailForm.patchValue({ 'IssueTo': vehicleData.IssueTo });
            this.vehicleDetailForm.patchValue({ 'VehicleMakeID': vehicleData.VehicleMakeId });
            this.vehicleDetailForm.patchValue({ 'VehicleModelID': vehicleData.VehicleModelId });
            this.vehicleDetailForm.patchValue({ 'VehicleTypeID': vehicleData.VehicleTypeId });
            this.vehicleDetailForm.patchValue({ 'VehicleColorID': vehicleData.VehicleColorId });
            this.vehicleDetailForm.patchValue({ 'VehicleYearID': vehicleData.VehicleYearId });
            this.vehicleDetailForm.patchValue({ 'RegistrationMonth': vehicleData.RegistrationMonth });
            this.vehicleDetailForm.patchValue({ 'RegistrationYear': vehicleData.RegistrationYear });
        }
        else {
            this.vehicleDetailForm.patchValue({ 'LicensePlate': '' });
            this.vehicleDetailForm.patchValue({ 'State': '' });
            this.vehicleDetailForm.patchValue({ 'IssueTo': '' });
            this.vehicleDetailForm.patchValue({ 'VehicleMakeID': '' });
            this.vehicleDetailForm.patchValue({ 'VehicleModelID': '' });
            this.vehicleDetailForm.patchValue({ 'VehicleTypeID': '' });
            this.vehicleDetailForm.patchValue({ 'VehicleColorID': '' });
            this.vehicleDetailForm.patchValue({ 'VehicleYearID': '' });
            this.vehicleDetailForm.patchValue({ 'RegistrationMonth': '' });
            this.vehicleDetailForm.patchValue({ 'RegistrationYear': '' });
        }
    };
    AddnewvehiclemodalPage.prototype.addNewVehicle = function (saveType) {
        var _this = this;
        if (!this.vehicleDetailForm.valid) {
            var toast = this.toastCtrl.create({
                message: this.customService.errorMessageArr.requiredField,
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        try {
            loader.present();
            var Details = JSON.parse(localStorage.getItem('loginData'));
            var vehicleFormData = this.vehicleDetailForm.value;
            var methodName = 'CreateEditAccountVehicle';
            vehicleFormData['ACCOUNT_VEHICLEID'] = '';
            vehicleFormData['OperationType'] = 'INSERT';
            if (this.title == 'Update Vehicle') {
                vehicleFormData['OperationType'] = 'UPDATE';
                vehicleFormData['ACCOUNT_VEHICLEID'] = this.Account_VehicleId;
                //methodName = 'UpdateAccountVehicle';
            }
            vehicleFormData['AgencyID'] = Details.AgencyID;
            vehicleFormData['AccountID'] = Details.AccountID;
            vehicleFormData['CreatedBy'] = Details.AccountID;
            this.customService.requestViaPost(vehicleFormData, methodName).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                if (saveType == 'save') {
                    _this.viewCtrl.dismiss({ 'status': 'true' });
                }
                else {
                    _this.clear('clear');
                }
                return;
                if (response.error == 'false') {
                    console.log(response);
                    //this.navCtrl.setRoot("DashboardPage",{ direction: 'forword' });
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: response.message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: _this.customService.errorMessageArr.timeoutMessage,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    AddnewvehiclemodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addnewvehiclemodal',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/addnewvehiclemodal/addnewvehiclemodal.html"*/'<ion-header>\n  <ion-row class="headerRow">\n      <ion-col col-2></ion-col>\n      <ion-col col-8 text-center class="title">{{title}}</ion-col>\n        <ion-col col-2 style="padding-left: 10px;">\n          <button ion-button clear (click)="closeModal()">\n              <ion-icon name="close" class="close"></ion-icon>\n            </button>\n      </ion-col>  \n    </ion-row>\n</ion-header>\n\n\n<ion-content>\n  <form [formGroup]="vehicleDetailForm">\n  <ion-row>\n      <ion-col col-6>\n        <ion-item >\n          <ion-label  class="required" stacked>Plate/VIN</ion-label>\n          <ion-input type="text" formControlName="LicensePlate" placeholder="Enter Plate no./VIN"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n          <ion-item>\n              <ion-label class="required" stacked>State </ion-label>\n                <ion-select formControlName="State">\n                    <ion-option value="" selected>Select State</ion-option>\n                    <ion-option value="CALIFORNIA">CALIFORNIA</ion-option>\n                    <!-- <ion-option value="n64">Nintendo64</ion-option> -->\n                </ion-select>\n            </ion-item>\n          </ion-col>\n    <!-- <span class="orSpan">or</span>\n      <ion-col col-6>\n        <ion-item >\n          <ion-label stacked>Vin:</ion-label>\n          <ion-input type="text" placeholder="Enter Vin no."></ion-input>\n        </ion-item>\n      </ion-col> -->\n    </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n              <ion-label class="required" stacked>Issued To </ion-label>\n              <ion-input type="text" formControlName="IssueTo" placeholder="Enter Plate Issued To"></ion-input>\n          </ion-item>\n        </ion-col>  \n        <ion-col col-6>\n            <ion-item>\n                <ion-label class="required" stacked>Make </ion-label>\n                <ion-select formControlName="VehicleMakeID"  (ionChange)="getModalList($event)">\n                    <ion-option value="" selected>Select Make</ion-option>\n                    <ion-option *ngFor="let make of makeList; let i = index" value="{{make.MAKEID}}">{{make.MAKENAME}}</ion-option>\n                </ion-select>\n            </ion-item>\n          </ion-col> \n      </ion-row>\n    \n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n              <ion-label class="required" stacked>Model </ion-label>\n              <ion-select formControlName="VehicleModelID" (ionChange)="getYearList($event)">\n                  <ion-option value="" selected>Select Model</ion-option>\n                  <ion-option *ngFor="let model of modelList; let i = index" value="{{model.ID}}">{{model.NAME}}</ion-option>\n              </ion-select>\n          </ion-item>\n        </ion-col>  \n        <ion-col col-6>\n          <ion-item>\n              <ion-label class="required" stacked>Year </ion-label>\n              <ion-select formControlName="VehicleYearID" >\n                  <ion-option value="" selected>Select Year</ion-option>\n                  <ion-option *ngFor="let Year of yearList; let i = index" value="{{Year.ID}}">{{Year.NAME}}</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n    \n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n              <ion-label class="required" stacked>Color </ion-label>\n              <ion-select formControlName="VehicleColorID">\n                  <ion-option value="" selected>Select Color</ion-option>\n                  <ion-option *ngFor="let Color of colorList; let i = index" value="{{Color.ID}}">{{Color.NAME}}</ion-option>\n              </ion-select>\n          </ion-item>\n        </ion-col>  \n        <ion-col col-6>\n          <ion-item>\n              <ion-label class="required" stacked>Type </ion-label>\n              <ion-select formControlName="VehicleTypeID">\n                  <ion-option value="" selected>Select Type</ion-option>\n                  <ion-option *ngFor="let Type of typeList; let i = index" value="{{Type.ID}}">{{Type.NAME}}</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n    \n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n              <ion-label class="required" stacked>Reg. Expiry Month </ion-label>\n              <ion-select formControlName="RegistrationMonth">\n                  <ion-option value="" selected>Select Expiry Month</ion-option>\n                  <ion-option *ngFor="let Month of expiryMonthList; let i = index" value="{{i+1}}">{{Month}}</ion-option>\n              </ion-select>\n              <!-- <ion-input type="text" formControlName="RegistrationMonth" placeholder="Enter Reg. Expiry Month"></ion-input> -->\n          </ion-item>\n        </ion-col>  \n        <ion-col col-6>\n          <ion-item>\n               <ion-label class="required" stacked>Reg. Expiry Year </ion-label>\n               <ion-input type="text" formControlName="RegistrationYear" placeholder="Enter Reg. Expiry Year"></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n    \n      <ion-row>\n         \n        \n      </ion-row>\n    </form>      \n</ion-content>\n\n<ion-footer *ngIf="title!=\'Add New Vehicle\'">\n    <button ion-button full class="footerBtn" style="width:50%" (click)="addNewVehicle(\'save\');">Save</button>\n    <button ion-button full class="footerBtn" style="width:50%" (click)="closeModal()">Cancel</button>\n  </ion-footer>\n<ion-footer *ngIf="title==\'Add New Vehicle\'">\n  <button ion-button full class="footerBtn" (click)="addNewVehicle(\'save\');">Save</button>\n  <button ion-button full class="footerBtn" (click)="addNewVehicle();">Save And New</button>\n  <button ion-button full class="footerBtn" (click)="closeModal()">Cancel</button>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/addnewvehiclemodal/addnewvehiclemodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_common_services_common_services__["a" /* CommonServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], AddnewvehiclemodalPage);
    return AddnewvehiclemodalPage;
}());

//# sourceMappingURL=addnewvehiclemodal.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyvehiclemodalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addnewvehiclemodal_addnewvehiclemodal__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyvehiclemodalPage = /** @class */ (function () {
    function MyvehiclemodalPage(loadingCtrl, http, navCtrl, navParams, viewCtrl, modalCtrl, toastCtrl, customService, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.customService = customService;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.vehicleArray = [];
        this.userData = {};
        this.itemsSearch = [];
        this.vehicleArrayList = [];
        this.searchTerm = '';
        this.shownGroup = null;
        //this.getVehicleList();
    }
    MyvehiclemodalPage.prototype.ionViewDidLoad = function () {
        this.getVehicleList();
    };
    MyvehiclemodalPage.prototype.closeVehicleModal = function () {
        this.viewCtrl.dismiss();
    };
    MyvehiclemodalPage.prototype.addNewVehicleModal = function () {
        var _this = this;
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__addnewvehiclemodal_addnewvehiclemodal__["a" /* AddnewvehiclemodalPage */], { title: 'Add New Vehicle' });
        modalPage.onDidDismiss(function (data) {
            if (data) {
                if (data.status == 'true') {
                    console.log('hi');
                    _this.getVehicleList();
                }
            }
        });
        modalPage.present();
        // let modal = this.modalCtrl.create(AddnewvehiclemodalPage);
        //modal.present();
    };
    MyvehiclemodalPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MyvehiclemodalPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    MyvehiclemodalPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    MyvehiclemodalPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        //this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //to get vehicle list from service------------------->
    MyvehiclemodalPage.prototype.getVehicleListold = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Fething Vehicle List..."
        });
        var Details = JSON.parse(localStorage.getItem('useData'));
        this.userData.accountId = Details.AccountID;
        this.userData.agencyId = Details.AgencyID;
        var data = {
            "AccountID": this.userData.accountId,
            "AgencyID": this.userData.agencyId
        };
        /*  let data = {
           "AgencyID": "15",
           "AccountID": "27676"
         }; */
        loader.present();
        var authData = localStorage.getItem('token');
        var headers = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', authData)
        };
        this.http.post('http://216.237.9.126/api/Permit/GetVehicleList', data, headers)
            .subscribe(function (res) {
            console.log(res);
            var vehicleList = res.Vehicle;
            //  let vehicleList
            for (var _i = 0, vehicleList_1 = vehicleList; _i < vehicleList_1.length; _i++) {
                var i = vehicleList_1[_i];
                _this.vehicleArray.push({ 'plate': i.LicensePlate, 'issueTo': i.IssueTo, 'make': i.MAKE, 'vin': i.VIN, 'state': i.State, 'model': i.MODEL });
            }
            loader.dismiss();
        }, function (err) {
            console.log(err);
            loader.dismiss();
        });
    };
    MyvehiclemodalPage.prototype.getVehicleList = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        try {
            loader.present();
            var Details = JSON.parse(localStorage.getItem('loginData'));
            this.userData.accountId = Details.AccountID;
            this.userData.agencyId = Details.AgencyID;
            var parameters = {
                "AccountID": this.userData.accountId,
                "AgencyID": this.userData.agencyId
            };
            this.customService.requestViaPost(parameters, 'GetVehicleList').subscribe(function (response) {
                _this.vehicleArray = response.Data.VehicleList;
                console.log(_this.vehicleArray);
                // for (let i of vehicleList) {
                //   this.vehicleArray.push({ 'plate': i.LicensePlate, 'issueTo': i.IssueTo, 'make': i.MAKE, 'vin': i.VIN, 'state': i.State, 'model': i.MODEL });
                // }
                _this.vehicleArrayList = _this.vehicleArray;
                //this.setFilteredItems();
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    MyvehiclemodalPage.prototype.deleteConfirmation = function (AccountVehicleID) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this item?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.deleteVehicle(AccountVehicleID);
                    }
                }
            ]
        });
        alert.present();
    };
    MyvehiclemodalPage.prototype.deleteVehicle = function (AccountVehicleID) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        try {
            loader.present();
            // let Details = JSON.parse(localStorage.getItem('loginData'));
            // this.userData.accountId = Details.AccountID;
            // this.userData.agencyId = Details.AgencyID;
            var parameters = {
                "AccountVehicleID": AccountVehicleID,
            };
            this.customService.requestViaPost(parameters, 'DeleteAccountVehicle').subscribe(function (response) {
                _this.getVehicleList();
                console.log(_this.vehicleArray);
                // for (let i of vehicleList) {
                //   this.vehicleArray.push({ 'plate': i.LicensePlate, 'issueTo': i.IssueTo, 'make': i.MAKE, 'vin': i.VIN, 'state': i.State, 'model': i.MODEL });
                // }
                //this.vehicleArrayList = this.vehicleArray;
                //this.setFilteredItems();
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    MyvehiclemodalPage.prototype.updateVehicle = function (data) {
        var _this = this;
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__addnewvehiclemodal_addnewvehiclemodal__["a" /* AddnewvehiclemodalPage */], { title: 'Update Vehicle', vehicleData: JSON.stringify(data) });
        modalPage.onDidDismiss(function (data) {
            if (data) {
                if (data.status == 'true') {
                    console.log('hi');
                    _this.getVehicleList();
                }
            }
        });
        modalPage.present();
    };
    MyvehiclemodalPage.prototype.setFilteredItems = function () {
        var q = this.searchTerm;
        // if the value is an empty string don't filter the items
        if (q == undefined) {
            return;
        }
        var newarr = [];
        newarr = this.vehicleArrayList;
        this.vehicleArray = newarr;
        return this.vehicleArray = this.vehicleArray.filter(function (v) {
            if (v.LicensePlate.toLowerCase().indexOf(q.toLowerCase()) > -1 || v.IssueTo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                return true;
            }
            //return false;
        });
    };
    MyvehiclemodalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myvehiclemodal',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/myvehiclemodal/myvehiclemodal.html"*/'<ion-header>\n  \n      <ion-row style="background: #00a3bc;color:#fff;">\n        <ion-col col-2>\n            <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n              <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n            </button>\n          </ion-col> \n          <ion-col col-6 text-center class="title">My Vehicle</ion-col>\n          <ion-col></ion-col>\n    \n        </ion-row>\n        <ion-item >\n            <ion-searchbar type="text"  placeholder="Search by Name,Permit and Address"  [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n            <!-- <ion-icon name="search" item-right primary style="color:#00a3bc;font-weight: 400;" (click)="getItems()"></ion-icon> -->\n          </ion-item> \n  </ion-header>\n  \n  \n  <ion-content style="background:#ccc;">\n    <!-- <div class="defaultSkelton" *ngIf="!vehicleArray.length"></div>	 -->\n    <!-- <ion-grid class="customGrid dataRow list card animated fadeInLeft" *ngFor="let vehicle of vehicleArray"></ion-grid> -->\n  <ion-grid class="customGrid dataRow list card " *ngFor="let vehicle of vehicleArray">\n            <ion-row class="grayColor">\n                <ion-col col-4>License Plate</ion-col>\n                <ion-col col-4>Issue To</ion-col>\n                <ion-col col-4>Make</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>{{vehicle.LicensePlate}}</ion-col>\n                <ion-col col-4>{{vehicle.IssueTo}}</ion-col>\n                <ion-col col-4>{{vehicle.MAKE}}</ion-col>\n            </ion-row>\n      <ion-item class="customItem" >\n            <ion-row class="grayColor">\n                <ion-col col-4>VIN</ion-col>\n                <ion-col col-4>State</ion-col>\n                <ion-col col-4>Model</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>{{vehicle.VIN}}</ion-col>\n                <ion-col col-4>{{vehicle.State }}</ion-col>\n                <ion-col col-4>{{vehicle.MODEL}}</ion-col>\n            </ion-row>           \n          \n      </ion-item>\n      <img class="delIcon" (click)="deleteConfirmation(vehicle.Account_VehicleId);" src="assets/imgs/request-permit/gray-delete.png"/>\n      <img class="editIcon" (click)="updateVehicle(vehicle);" src="assets/imgs/request-permit/edit.png" />\n  </ion-grid>\n  \n  <!-- <ion-grid class="customGrid">\n        <ion-row class="grayColor">\n                <ion-col col-4>License Plate</ion-col>\n                <ion-col col-4>Issue To</ion-col>\n                <ion-col col-4>Make</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>633335</ion-col>\n                <ion-col col-4>steven</ion-col>\n                <ion-col col-4>Acura</ion-col>\n            </ion-row>\n      <ion-item class="customItem" >\n            <ion-row class="grayColor">\n                <ion-col col-4>VIN</ion-col>\n                <ion-col col-4>State</ion-col>\n                <ion-col col-4>Modal</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>---</ion-col>\n                <ion-col col-4>California</ion-col>\n                <ion-col col-4>CL</ion-col>\n            </ion-row>\n    </ion-item>\n    <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n    <img class="editIcon" src="assets/imgs/request-permit/edit.png" />\n  </ion-grid>\n  \n  <ion-grid class="customGrid">\n        <ion-row class="grayColor">\n                <ion-col col-4>License Plate</ion-col>\n                <ion-col col-4>Issue To</ion-col>\n                <ion-col col-4>Make</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>633336</ion-col>\n                <ion-col col-4>steven</ion-col>\n                <ion-col col-4>Acura</ion-col>\n            </ion-row>\n      <ion-item class="customItem" >\n            <ion-row class="grayColor">\n                <ion-col col-4>VIN</ion-col>\n                <ion-col col-4>State</ion-col>\n                <ion-col col-4>Modal</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>---</ion-col>\n                <ion-col col-4>California</ion-col>\n                <ion-col col-4>CL</ion-col>\n            </ion-row>\n  </ion-item>\n  <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n  <img class="editIcon" src="assets/imgs/request-permit/edit.png" />\n  </ion-grid>\n  \n  <ion-grid class="customGrid">\n        <ion-row class="grayColor">\n                <ion-col col-4>License Plate</ion-col>\n                <ion-col col-4>Issue To</ion-col>\n                <ion-col col-4>Make</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>633337</ion-col>\n                <ion-col col-4>steven</ion-col>\n                <ion-col col-4>Acura</ion-col>\n            </ion-row>\n      <ion-item class="customItem" >\n            <ion-row class="grayColor">\n                <ion-col col-4>VIN</ion-col>\n                <ion-col col-4>State</ion-col>\n                <ion-col col-4>Modal</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>---</ion-col>\n                <ion-col col-4>California</ion-col>\n                <ion-col col-4>CL</ion-col>\n            </ion-row>\n  </ion-item>\n    <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n    <img class="editIcon" src="assets/imgs/request-permit/edit.png" />\n  </ion-grid>\n\n  <ion-grid class="customGrid" style="margin-bottom: 1%;">\n        <ion-row class="grayColor">\n                <ion-col col-4>License Plate</ion-col>\n                <ion-col col-4>Issue To</ion-col>\n                <ion-col col-4>Make</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>633338</ion-col>\n                <ion-col col-4>steven</ion-col>\n                <ion-col col-4>Acura</ion-col>\n            </ion-row>\n      <ion-item class="customItem">\n            <ion-row class="grayColor">\n                <ion-col col-4>VIN</ion-col>\n                <ion-col col-4>State</ion-col>\n                <ion-col col-4>Modal</ion-col>\n            </ion-row>\n            <ion-row class="boldTxt">\n                <ion-col col-4>---</ion-col>\n                <ion-col col-4>California</ion-col>\n                <ion-col col-4>CL</ion-col>\n            </ion-row>\n  </ion-item>\n        <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n        <img class="editIcon" src="assets/imgs/request-permit/edit.png" />\n  </ion-grid> -->\n  \n  </ion-content>\n  \n  <ion-footer>\n      <button ion-button full class="footerBtn animated bounceInUp" (click)="addNewVehicleModal()">Add New Vehicles</button>\n  </ion-footer>\n  '/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/myvehiclemodal/myvehiclemodal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_common_services_common_services__["a" /* CommonServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyvehiclemodalPage);
    return MyvehiclemodalPage;
}());

//# sourceMappingURL=myvehiclemodal.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermitreceiptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PermitreceiptPage = /** @class */ (function () {
    function PermitreceiptPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.receipt = {};
    }
    PermitreceiptPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad PermitreceiptPage');
        localStorage.removeItem('vehicleData');
        var receiptInfo = JSON.parse(localStorage.getItem('permitDetails'));
        if (receiptInfo != null) {
            this.receipt.userName = receiptInfo.USERNAME;
            this.receipt.permitName = receiptInfo.PERMITNAME;
            this.receipt.permitStatus = receiptInfo.PERMITSTATUS;
            this.receipt.startDate = receiptInfo.PERMITSTARTDATE;
            this.receipt.endDate = receiptInfo.PERMITENDDATE;
            this.receipt.submitDate = receiptInfo.SUMBITDATE;
            this.receipt.permitDisplay = receiptInfo.PERMITDISPLAY;
            this.receipt.permitCost = receiptInfo.PERMITCOST;
            this.receipt.serviceFee = receiptInfo.SERVICEFEE;
            this.receipt.totalCost = receiptInfo.TOTALPERMITCOST;
        }
    };
    PermitreceiptPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PermitreceiptPage.prototype.saveReceipt = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */], null, { animation: 'ios-transition', direction: 'forward' });
    };
    PermitreceiptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-permitreceipt',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/permitreceipt/permitreceipt.html"*/'<ion-content class="headerBg">\n  <button ion-button menuToggle left clear class="leftMenu">\n    <ion-icon name="menu"></ion-icon>\n  </button>\n  <!--   <button ion-button clear class="close" (click)="close()">\n            <ion-icon name="close"></ion-icon>\n        </button> -->\n  <ion-grid class="cstmGrid">\n    <ion-row style="font-size: 1.1em;">\n      <ion-col>Name</ion-col>\n      <ion-col>Permit</ion-col>\n    </ion-row>\n    <ion-row style="font-size:1.3em;font-weight: 500;">\n      <ion-col>{{receipt.userName}}</ion-col>\n      <ion-col>{{receipt.permitDisplay}}</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 class="headingRow">Submit Date :</ion-col>\n      <ion-col class="dataRow">{{receipt.submitDate | date: \'MM/dd/yyyy\'}}</ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 class="headingRow">Permit :</ion-col>\n      <ion-col class="dataRow">{{receipt.permitName}}</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-label class="lblTxt">Permit Validity</ion-label>\n\n  <ion-grid>\n    <ion-row class="headingRow">\n      <ion-col>Permit Start Date</ion-col>\n      <ion-col>Permit End Date</ion-col>\n    </ion-row>\n    <ion-row class="dataRow">\n      <ion-col>{{receipt.startDate | date: \'MM/dd/yyyy\'}}</ion-col>\n      <ion-col>{{receipt.endDate | date: \'MM/dd/yyyy\'}}</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-label class="lblTxt">Permit Charges</ion-label>\n\n  <ion-grid>\n    <ion-row class="headingRow">\n      <ion-col>Permit Cost</ion-col>\n      <ion-col>Service Fee</ion-col>\n    </ion-row>\n    <ion-row class="dataRow">\n      <ion-col>${{receipt.permitCost}}</ion-col>\n      <ion-col>${{receipt.serviceFee}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class="headingRow">\n      <ion-col>Total Permit Cost</ion-col>\n      <ion-col>Permit Status</ion-col>\n    </ion-row>\n    <ion-row class="dataRow">\n      <ion-col>${{receipt.totalCost}}</ion-col>\n      <ion-col>{{receipt.permitStatus}}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--         <ion-label class="infoTxt">Your application has been submitted for approval.<br>You will be contacted via email with an update</ion-label>\n -->\n  <!-- <ion-label class="infoTxt">You will be contacted via email with an update</ion-label> -->\n\n</ion-content>\n<ion-footer>\n  <button ion-button full class="footerBtn" (click)="saveReceipt()">Done</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/permitreceipt/permitreceipt.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */]])
    ], PermitreceiptPage);
    return PermitreceiptPage;
}());

//# sourceMappingURL=permitreceipt.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_payment__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MycartPage = /** @class */ (function () {
    function MycartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MycartPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MycartPage');
    };
    MycartPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
    };
    MycartPage.prototype.toPaymentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payment_payment__["a" /* PaymentPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    MycartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mycart',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/mycart/mycart.html"*/'<ion-header>\n  <ion-row style="background: #00a3bc;color:#fff;padding: 0;">\n      <ion-col col-2>\n        <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n          <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n          <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n        </button>\n      </ion-col> \n      <ion-col col-8 text-center class="title">My Cart</ion-col>\n      <span class="cart">2</span>\n      <img class="cartImg" src="assets/imgs/request-permit/cart-icon.png"/>\n      <ion-col col-2>\n          <button ion-button clear>\n              <ion-icon name="ios-information-circle-outline" style="font-size: 2.5em;color:#fff;"></ion-icon>\n            </button>\n      </ion-col>   \n    </ion-row>\n</ion-header>\n\n\n<ion-content style="background: #ccc;">\n    <ion-grid class="customGrid">\n        <ion-row class="firstRow">\n            <ion-col col-4>Item No</ion-col>\n            <ion-col col-4>Submit Date</ion-col>\n            <ion-col col-4>App. Vehicle</ion-col>\n            <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n        </ion-row>\n        <ion-row class="boldTxt">\n            <ion-col col-4>1</ion-col>\n            <ion-col col-4>6/4/2018</ion-col>\n            <ion-col col-4>Residential</ion-col>\n        </ion-row>\n    \n        <ion-row class="customRow"><ion-col>Description:</ion-col></ion-row>\n        <ion-row style="color: #3b3b3b;font-weight: 500;font-size: 1.1em;"><ion-col>Permit issued with discount to $150 from $222...</ion-col></ion-row>\n      \n        <ion-row class="customRow">\n            <ion-col col-4>Delivery Option</ion-col>\n            <ion-col col-8>Issued To</ion-col>\n        </ion-row>\n        <ion-row class="boldTxt">\n            <ion-col col-4>By Mail</ion-col>\n            <ion-col col-8>cgh@test.com</ion-col>\n           \n        </ion-row>\n\n        <ion-row class="txt1">\n            <ion-col col-4>Permit Cost</ion-col>\n            <ion-col col-4>Service Fee</ion-col>\n            <ion-col col-4 style="font-weight: 500;color: #3b3b3b;padding: 2px 0;">Total Permit Cost</ion-col>\n        </ion-row>\n        <ion-row class="txt2">\n            <ion-col col-4>$161.00</ion-col>\n            <ion-col col-4>$4.83</ion-col>\n            <ion-col col-4>$165.83</ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class="customGrid" style="margin-top:3%;">\n            <ion-row class="firstRow">\n                    <ion-col col-4>Item No</ion-col>\n                    <ion-col col-4>Submit Date</ion-col>\n                    <ion-col col-4>App. Vehicle</ion-col>\n                    <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n                </ion-row>\n                <ion-row class="boldTxt">\n                    <ion-col col-4>1</ion-col>\n                    <ion-col col-4>6/4/2018</ion-col>\n                    <ion-col col-4>Residential</ion-col>\n                </ion-row>\n            \n                <ion-row class="customRow"><ion-col>Description:</ion-col></ion-row>\n                <ion-row style="color: #3b3b3b;font-weight: 500;font-size: 1.1em;"><ion-col>Permit issued with discount to $150 from $222...</ion-col></ion-row>\n              \n                <ion-row class="customRow">\n                    <ion-col col-4>Delivery Option</ion-col>\n                    <ion-col col-8>Issued To</ion-col>\n                </ion-row>\n                <ion-row class="boldTxt">\n                    <ion-col col-4>By Mail</ion-col>\n                    <ion-col col-8>cgh@test.com</ion-col>\n                   \n                </ion-row>\n        \n                <ion-row class="txt1">\n                    <ion-col col-4>Permit Cost</ion-col>\n                    <ion-col col-4>Service Fee</ion-col>\n                    <ion-col col-4 style="font-weight: 500;color: #3b3b3b;padding: 2px 0;">Total Permit Cost</ion-col>\n                </ion-row>\n                <ion-row class="txt2">\n                    <ion-col col-4>$161.00</ion-col>\n                    <ion-col col-4>$4.83</ion-col>\n                    <ion-col col-4>$165.83</ion-col>\n                </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n<ion-row style="padding:0;">\n  <ion-col style="padding: 3%;background: #fff;text-align: center;color:#3b3b3b;font-size: 1.2em;">Grand Total: &nbsp;<span style="font-weight:bold;font-size: 1.3em;">$342.66</span></ion-col>\n</ion-row>\n      <button ion-button full class="footerBtn">Add Permit</button>\n      <button ion-button full class="footerBtn" (click)="toPaymentPage()">Checkout</button>\n      <button ion-button full class="footerBtn">Cancel</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/mycart/mycart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], MycartPage);
    return MycartPage;
}());

//# sourceMappingURL=mycart.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestnewpermitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addvehicle_addvehicle__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common_services_common_services__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Http, Headers, RequestOptions, Response } from '@angular/http';



var RequestnewpermitPage = /** @class */ (function () {
    function RequestnewpermitPage(loadingCtrl, http, navCtrl, navParams, alertCtrl, customService) {
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.customService = customService;
        this.permit = { Address: '', Permit: '' };
        this.userData = {};
        this.AddressArray = [];
        this.PermitArray = [];
        this.isCost = false;
        this.requestParams = {};
        this.visible = false;
        this.isDelevered = false;
        this.isToggled = false;
    }
    RequestnewpermitPage.prototype.ionViewDidLoad = function () {
        localStorage.removeItem('vehicleData');
        this.GetAccountAddress();
    };
    /************************************************** */
    RequestnewpermitPage.prototype.notify = function () {
        console.log("Toggled: " + this.isToggled);
    };
    /************************************************** */
    RequestnewpermitPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    RequestnewpermitPage.prototype.goToVehicle = function () {
        if (this.permit.Address == '' || this.permit.Address == undefined || this.permit.Address == "Please Select Address") {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Please select Address .',
                buttons: ['Ok']
            });
            alert_1.present();
            return;
        }
        else if (this.permit.Permit == '' || this.permit.Permit == undefined || this.permit.Permit == 'Please Select Permit') {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Please select Permit .',
                buttons: ['Ok']
            });
            alert_2.present();
            return;
        }
        localStorage.setItem('cityId', this.permit.Address.cityZoneid);
        localStorage.setItem('addressid', this.permit.Address.id);
        localStorage.setItem('permitTypeId', this.permit.Permit);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addvehicle_addvehicle__["a" /* AddvehiclePage */], { requestParams: JSON.stringify(this.requestParams) }, { animation: 'fade-transition', direction: 'forward' });
    };
    RequestnewpermitPage.prototype.toggle1 = function () {
        this.visible = !this.visible;
    };
    RequestnewpermitPage.prototype.GetAccountAddress = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        try {
            loader.present();
            var Details = JSON.parse(localStorage.getItem('loginData'));
            this.userData.accountId = Details.AccountID;
            this.userData.agencyId = Details.AgencyID;
            var parameters = {
                "AccountID": this.userData.accountId,
                "AgencyID": this.userData.agencyId
            };
            this.customService.requestViaPost(parameters, 'GetAccountAddress').subscribe(function (response) {
                var list = response.Data.Address;
                _this.AddressArray = list;
                if (_this.AddressArray.length == 1) {
                    _this.permit.Address = _this.AddressArray[0].Account_AddressId + '_' + _this.AddressArray[0].CityZoneId;
                    _this.getPermit(_this.permit.Address);
                }
                console.log(response);
                localStorage.setItem('AddressData', JSON.stringify(response));
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    RequestnewpermitPage.prototype.getPermit = function (param) {
        var _this = this;
        if (!param || param == 'Please Select Address') {
            return;
        }
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        try {
            loader.present();
            var Details = JSON.parse(localStorage.getItem('loginData'));
            this.userData.accountId = Details.AccountID;
            this.userData.agencyId = Details.AgencyID;
            var paramArr = param.split('_');
            this.requestParams.AccountAddressID = paramArr[0];
            this.requestParams.CityZoneID = paramArr[1];
            var parameters = {
                "AccountID": this.userData.accountId,
                "AgencyID": this.userData.agencyId,
                "AccountAddressID": paramArr[0],
                "CityZoneID": paramArr[1],
            };
            this.customService.requestViaPost(parameters, 'GetNewPermit').subscribe(function (response) {
                var list = response.Data.PermitType;
                _this.PermitArray = list;
                console.log(response);
                // localStorage.setItem('PermitTypeTierConfig', response.PermitTypeTierConfig[0].PermitType_TierConfigId);
                // localStorage.setItem('permitStoke', response.PermitStock[0].PermitStockId);
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    RequestnewpermitPage.prototype.getPermitCost = function (permitTypeId) {
        var _this = this;
        if (!permitTypeId || permitTypeId == 'Please Select Permit') {
            return;
        }
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        try {
            loader.present();
            var Details = JSON.parse(localStorage.getItem('loginData'));
            this.userData.accountId = Details.AccountID;
            this.userData.agencyId = Details.AgencyID;
            this.requestParams.PermitTypeId = permitTypeId;
            var parameters = {
                "AgencyId": this.userData.agencyId,
                "PermitTypeId": permitTypeId,
                "AccountId": this.userData.accountId,
                "PermitTypeTierConfigId": "",
                "PermitTypeProrateConfigId": "0",
                "AllowMultipleDays": "1",
                "VehicleRequired": "1",
                "ValidityDaysRequired": "0",
                "DeliveryMessage": "0"
            };
            this.customService.requestViaPost(parameters, 'GetCostofPermit').subscribe(function (response) {
                var PermitAvailabilityDetail = response.Data.PermitAvailabilityDetail;
                //this.PermitArray = list;
                _this.userData.cost = response.Data.PermitCostDetail[0].TotalPermitCost;
                _this.requestParams.PermitTypeTierConfigId = PermitAvailabilityDetail[0].PERMITTYPE_TIERCONFIGID;
                _this.isCost = true;
                console.log(response);
                // localStorage.setItem('PermitTypeTierConfig', response.PermitTypeTierConfig[0].PermitType_TierConfigId);
                // localStorage.setItem('permitStoke', response.PermitStock[0].PermitStockId);
                loader.dismiss();
                return;
                if (response.error == 'false') {
                    console.log(response);
                }
                else {
                    loader.dismiss();
                    _this.customService.showErrorMsgByToast(response.message);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.customService.showErrorMsgByToast(_this.customService.errorMessageArr.timeoutMessage);
            });
        }
        catch (e) {
            console.log(e);
            loader.dismiss();
        }
    };
    RequestnewpermitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-requestnewpermit',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/requestnewpermit/requestnewpermit.html"*/'\n<ion-content>\n  <div style="background: #00a3bc;color:#fff;">\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button clear (click)="goback()" style="margin-left: -10px;">\n          <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n          <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8 text-center class="title">Request Permit</ion-col>\n      <span class="cart">2</span>\n      <img class="cartImg" src="assets/imgs/request-permit/cart-icon.png" />\n      <ion-col col-2>\n        <button ion-button clear>\n          <ion-icon name="ios-information-circle-outline" class="icons"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center style="background: #00a3bc;color:#fff;">\n      <ion-col>\n        <img style="width:25%;" src="assets/imgs/request-permit/permit-yellow.png" />\n        <p style="color:yellow">Permits</p>\n        <img class="arrowImg" src="assets/imgs/request-permit/white-arrow.png" />\n      </ion-col>\n      <ion-col>\n        <img style="width:38%;" src="assets/imgs/request-permit/vehicle-white.png" />\n        <p style="margin: 6%;">Vehicles</p>\n        <img class="arrowImg" src="assets/imgs/request-permit/white-arrow.png" />\n      </ion-col>\n      <ion-col>\n        <img style="width:25%;" src="assets/imgs/request-permit/documents-white.png" />\n        <p>Documents</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <ion-row style="margin: 4% 3% 0;display:none;">\n  <ion-col col-2 text-left class="nameTxt">Name:</ion-col>\n  <ion-col text-left style="font-size:1.3em;font-weight: 500;">Steven Rock</ion-col>\n</ion-row> -->\n\n  <ion-item>\n    <ion-label stacked>Address</ion-label>\n    <ion-select (ionChange)="getPermit($event)" [(ngModel)]="permit.Address">\n        <ion-option [value]="" selected>Please Select Address</ion-option>  \n      <ion-option  *ngFor="let address of AddressArray"  value="{{address.Account_AddressId}}_{{address.CityZoneId}}">{{ address.Display }}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n <ion-item>\n    <ion-label stacked>Permit</ion-label>\n    <ion-select (ionChange)=\'getPermitCost($event)\' [(ngModel)]="permit.Permit">\n       <ion-option [value]="" selected>Please Select Permit</ion-option> \n      <ion-option *ngFor="let permit of PermitArray" value="{{permit.PERMITTYPEID}}">{{ permit.NAME }}</ion-option>\n    </ion-select>\n  </ion-item> \n\n  <ion-row class="pTxt" *ngIf= "isCost">\n      <ion-col col-6></ion-col>\n    <ion-col col-4>Permit Cost</ion-col>\n    <ion-col col-2 class="colorTxt" text-right>${{userData.cost}}</ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="isDelevered">\n    <!-- *ngIf="!this.isToggled" [ngStyle]="{\'color\': \'green\'}" -->\n    <ion-col col-5 class="mediaRow">\n      <ion-label>Delivery Option</ion-label>\n    </ion-col>\n    <ion-col col-2 class="DelTyp positive" *ngIf="!this.isToggled">By Email</ion-col>\n    <ion-col col-2 class="DelTyp" *ngIf="this.isToggled">By Email</ion-col>\n    <ion-col col-2>\n      <ion-toggle checked="false" [(ngModel)]="isToggled" (ionChange)="notify()"></ion-toggle>\n    </ion-col>\n    <ion-col col-3 class="DelTyp positive" *ngIf="this.isToggled">By Pickup</ion-col>\n    <ion-col col-3 class="DelTyp" *ngIf="!this.isToggled">By Pickup</ion-col>\n  </ion-row>\n\n</ion-content>\n<ion-footer>\n  <button ion-button full class="footerBtn" (click)="goToVehicle()">Next</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/requestnewpermit/requestnewpermit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common_services_common_services__["a" /* CommonServicesProvider */]])
    ], RequestnewpermitPage);
    return RequestnewpermitPage;
}());

//# sourceMappingURL=requestnewpermit.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addguest_addguest__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editguest_editguest__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sendinvitation_sendinvitation__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuestlistPage = /** @class */ (function () {
    function GuestlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checked = false;
        this.checked1 = false;
    }
    GuestlistPage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad GuestlistPage');
    };
    GuestlistPage.prototype.check = function () {
        this.checked = !this.checked;
    };
    GuestlistPage.prototype.check1 = function () {
        this.checked1 = !this.checked1;
    };
    GuestlistPage.prototype.goback = function () {
        this.navCtrl.pop({
            animate: true,
            direction: 'back',
            animation: 'ios-transition',
        });
        //this.navCtrl.push(DashboardPage, null, { animation: 'fade-transition', direction: 'forward' });
    };
    GuestlistPage.prototype.toAdd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__addguest_addguest__["a" /* AddguestPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    GuestlistPage.prototype.toInvitation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sendinvitation_sendinvitation__["a" /* SendinvitationPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    GuestlistPage.prototype.toEdit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editguest_editguest__["a" /* EditguestPage */], null, { animation: 'fade-transition', direction: 'forward' });
    };
    GuestlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-guestlist',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/guestlist/guestlist.html"*/'<ion-header>\n  <ion-row style="background: #00a3bc;color:#fff;">\n    <ion-col col-2>\n      <button ion-button clear (click)="goback()"  style="margin-left: -10px;">\n        <!-- <img src="assets/imgs/request-permit/back.png"/> -->\n        <ion-icon name="md-arrow-back" style="font-size: 2.2em;color:#fff;"></ion-icon>\n      </button>\n    </ion-col>\n    <ion-col col-8 text-center style="font-size: 1.3em;margin: auto;font-weight: 500;">Guest List</ion-col>\n    <ion-col col-2>\n      <button ion-button clear>\n        <ion-icon name="ios-information-circle-outline" style="font-size: 2.5em;color:#fff;"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-item style="font-size: 1em;padding:0;">\n      <ion-input type="text" placeholder="Search by Name,Email Address"></ion-input>\n      <ion-icon name="search" item-right primary style="color:#00a3bc;font-weight: 400;"></ion-icon>\n    </ion-item>\n</ion-header>\n\n<ion-content style="background:#ccc;">\n <!--  <ion-item style="font-size: 1em;">\n    <ion-input type="text" placeholder="Search by Name,Email Address"></ion-input>\n    <ion-icon name="search" item-right primary style="color:#00a3bc;font-weight: 400;"></ion-icon>\n  </ion-item> -->\n\n <ion-grid>\n    <ion-checkbox class="checkIcon"></ion-checkbox>\n    <!-- <img class="checkIcon" src="assets/imgs/request-permit/uncheck.png" *ngIf="!checked" (click)="check()"/>\n    <img class="checkIcon" src="assets/imgs/request-permit/active-check.png" *ngIf="checked"(click)="check()"/> -->\n  <ion-item class="items">\n    <ion-row class="headingRow">Name</ion-row>\n    <ion-row class="dataRow">Steven Jon</ion-row>\n  </ion-item>\n  <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n  <img class="editIcon" src="assets/imgs/request-permit/edit.png" (click)="toEdit()"/>\n  <ion-item class="items marginItem">\n    <ion-row class="headingRow">Email Address</ion-row>\n    <ion-row class="dataRow ">Stevenjo@gmail.com</ion-row>\n  </ion-item>\n </ion-grid>\n\n <ion-grid>\n   <!--  <img class="checkIcon" src="assets/imgs/request-permit/uncheck.png" *ngIf="!checked1" (click)="check1()"/>\n    <img class="checkIcon" src="assets/imgs/request-permit/active-check.png" *ngIf="checked1"(click)="check1()"/> -->\n    <ion-checkbox class="checkIcon"></ion-checkbox>\n  <ion-item class="items">\n    <ion-row class="headingRow">Name</ion-row>\n    <ion-row class="dataRow">Steven Jon</ion-row>\n  </ion-item>\n  <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n  <img class="editIcon" src="assets/imgs/request-permit/edit.png" (click)="toEdit()"/>\n  <ion-item class="items marginItem">\n    <ion-row class="headingRow">Email Address</ion-row>\n    <ion-row class="dataRow">Stevenjo@gmail.com</ion-row>\n  </ion-item>\n </ion-grid>\n\n <ion-grid>\n    <!-- <img class="checkIcon" src="assets/imgs/request-permit/uncheck.png" *ngIf="!address"/>\n    <img class="checkIcon" src="assets/imgs/request-permit/active-check.png" *ngIf="address"/> -->\n    <ion-checkbox class="checkIcon"></ion-checkbox>\n  <ion-item class="items">\n    <ion-row class="headingRow">Name</ion-row>\n    <ion-row class="dataRow">Steven Jon</ion-row>\n  </ion-item>\n  <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n  <img class="editIcon" src="assets/imgs/request-permit/edit.png" (click)="toEdit()"/>\n  <ion-item class="items marginItem">\n    <ion-row class="headingRow">Email Address</ion-row>\n    <ion-row class="dataRow">Stevenjo@gmail.com</ion-row>\n  </ion-item>\n </ion-grid>\n\n <ion-grid>\n    <!-- <img class="checkIcon" src="assets/imgs/request-permit/uncheck.png" *ngIf="!address"/>\n    <img class="checkIcon" src="assets/imgs/request-permit/active-check.png" *ngIf="address"/> -->\n    <ion-checkbox class="checkIcon"></ion-checkbox>\n  <ion-item class="items">\n    <ion-row class="headingRow">Name</ion-row>\n    <ion-row class="dataRow">Steven Jon</ion-row>\n  </ion-item>\n  <img class="delIcon" src="assets/imgs/request-permit/gray-delete.png"/>\n  <img class="editIcon" src="assets/imgs/request-permit/edit.png" (click)="toEdit()"/>\n  <ion-item class="items marginItem">\n    <ion-row class="headingRow">Email Address</ion-row>\n    <ion-row class="dataRow">Stevenjo@gmail.com</ion-row>\n  </ion-item>\n </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n    <ion-row>   \n      <button ion-button full class="footerBtn border" (click)="toAdd()">Add</button>    \n      <button ion-button full class="footerBtn" (click)="toInvitation()">Send Invitation</button>    \n    </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/guestlist/guestlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */]])
    ], GuestlistPage);
    return GuestlistPage;
}());

//# sourceMappingURL=guestlist.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams, viewCtrl, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.callNumber = callNumber;
    }
    InformationPage.prototype.closeInfoModal = function () {
        this.viewCtrl.dismiss();
    };
    InformationPage.prototype.call = function () {
        this.callNumber.callNumber("8443574995", true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/information/information.html"*/'<ion-content>\n  <ion-row >\n      <ion-col col-2></ion-col>\n      <ion-col col-8 class="lgnText" padding></ion-col>\n      <ion-col col-2 class="infoIcon" padding (click)="closeInfoModal()"><ion-icon name="close"></ion-icon></ion-col>\n  </ion-row>\n\n<p>\nIf you includede an email address with your 2017 Residential permit applicaiton , a password reset is required to access your account.\n<br>\nClick <span class="decorate">Reset Password</span> and follow the instruction. The email address you provide will be the login "User Name" to access the website.\n</p>\n\n<p>\nFor residents who had 2017 Residential Pemits and did not provide an email address, please send your full name, phone number and resident address to support@getapermit.net. You will receive an email notification to complete your online account access.\n<br>First-time residents\n</p>\n\n<button ion-button class="regBtn">Click here to Register</button>\n<p style="text-align: left;font-size: 4vw;">\nOnly one Residential Account is allowed per address.\n</p>\n</ion-content>\n\n<ion-footer>\n<ion-row class="footerRow">\n  <ion-col col-5 class="contactNum" text-center (click)="call()">844-357-4995</ion-col>\n  <ion-col class="mail" text-center>support@getapermit.net</ion-col>\n</ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/abhinavkumar/Documents/ionicProject/getaPermit/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["A" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map