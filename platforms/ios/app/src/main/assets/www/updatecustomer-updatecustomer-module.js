(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatecustomer-updatecustomer-module"],{

/***/ "./src/app/updatecustomer/updatecustomer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatecustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecustomerPageModule", function() { return UpdatecustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatecustomer.page */ "./src/app/updatecustomer/updatecustomer.page.ts");







var routes = [
    {
        path: '',
        component: _updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecustomerPage"]
    }
];
var UpdatecustomerPageModule = /** @class */ (function () {
    function UpdatecustomerPageModule() {
    }
    UpdatecustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecustomerPage"]]
        })
    ], UpdatecustomerPageModule);
    return UpdatecustomerPageModule;
}());



/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.html":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n\n      <ion-buttons slot=\"end\"  *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button  slot=\"end\" color=\"secondary\" fill=\"outline\">\n      Su Saldo $ {{upsaldo.saldo}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Desliza hacia abajo para Actualizar\" refreshingSpinner=\"dots\"\n      refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n \n  <!--\n  <ion-item>\n    <ion-label position=\"floating\"> nombre </ion-label>\n    <ion-input type=\"label\" [(ngModel)]=\"name_customer\"></ion-input>\n  </ion-item>\n-->\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\"> Describe tu Transferencia </ion-label>\n    <ion-textarea color=\"medium\" [(ngModel)]=\"desc_customer\">  </ion-textarea>\n  </ion-item>\n\n \n  <ion-item  >\n    <ion-label color=\"primary\" position=\"floating\"> Monto </ion-label>\n    <ion-input type=\"number\"  [(ngModel)]=\"monto_customer\"> </ion-input>\n  </ion-item>\n\n \n\n  <ion-content *ngFor=\"let upsaldo of upsaldos\"  >\n      <ion-button  expand=\"block\" color=\"tertiary\" *ngIf=\"upsaldo.saldo > monto_customer\" (click)=\"updateProses()\" fill=\"outline\">\n        Transferir $ {{ monto_customer }} a {{ name_customer }}\n        <ion-icon slot=\"end\" name=\"paper-plane\"></ion-icon>\n      </ion-button>\n  \n      <ion-button expand=\"block\" color=\"danger\" *ngIf=\"monto_customer > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n         Ups... $ {{ monto_customer }} superan tus $ {{ upsaldo.saldo }} de Saldo\n          <ion-icon slot=\"end\" name=\"paper-plane\"></ion-icon>\n        </ion-button>\n\n  </ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWN1c3RvbWVyL3VwZGF0ZWN1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatecustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecustomerPage", function() { return UpdatecustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");







var UpdatecustomerPage = /** @class */ (function () {
    function UpdatecustomerPage(postPvdr, router, fcm, toastController, actRoute, storage) {
        this.postPvdr = postPvdr;
        this.router = router;
        this.fcm = fcm;
        this.toastController = toastController;
        this.actRoute = actRoute;
        this.storage = storage;
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.name_customer = '';
        this.desc_customer = '';
        this.contact_customer = '';
    }
    UpdatecustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.monto_customer = data.monto;
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            _this.token = data.toke;
            console.log(data);
        });
        this.ionViewWillEnter();
        this.fcm.getToken().then(function (token) {
            // backend.registerToken(token);
            console.log(token);
            _this.token = token;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log("actualizacion del tokend " + token);
        });
    };
    UpdatecustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        //this.loadCustomer(this.login_id);
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            //this.login_id = this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.saldo = _this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
            _this.identificacion = _this.anggota.identificacion;
        });
    };
    UpdatecustomerPage.prototype.updateProses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name_customer == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Customer is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 2:
                        if (!(this.desc_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: this.username + ', Cuentale a ' + this.name_customer + ' de tu transferencia',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 4:
                        if (!(this.monto_customer == null)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Un Monto Valido',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 6:
                        if (!(this.monto_customer == 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Un Monto Valido',
                                duration: 2000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 8:
                        body = {
                            aksi: 'update',
                            customer_id: this.id,
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                            contact_customer: this.contact_customer,
                            monto_customer: this.monto_customer,
                            saldo: this.saldo,
                            login_id: this.login_id,
                            username: this.username,
                            identificacion: this.identificacion,
                        };
                        // if ( this.saldo > this.monto_customer  ) { 
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.UpinProces();
                                        this.loadToken();
                                        this.addNoti();
                                        this.proseslogout();
                                        this.monto_customer = null;
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Data updated successful',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        //console.log(this.contact_customer);
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.toastController.create({
                                            message: alertpesan,
                                            duration: 2000
                                        })];
                                    case 3:
                                        toast = _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    //notificacion del envio
    UpdatecustomerPage.prototype.addNoti = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: 'Noti0817',
                    login_id: this.login_id,
                    monto_customer: this.monto_customer,
                    desc_customer: this.desc_customer,
                    username: this.username,
                    contact_customer: this.contact_customer,
                };
                this.postPvdr.postData(body, 'notificaciones.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        alertpesan = data.msg;
                        this.loadToken();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    UpdatecustomerPage.prototype.proseslogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Debes Ingresar de nuevo por seguridad',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdatecustomerPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 500);
    };
    //aqui va la funcion para usar el salgo
    UpdatecustomerPage.prototype.RecargaProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Revisa Tu Monto',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        this.monto_customer = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdatecustomerPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '017834595',
                    monto_customer: this.monto_customer,
                    saldo: this.saldo,
                    login_id: this.login_id,
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                //console.log(this.contact_customer);
                                toast.present();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, this.toastController.create({
                                    message: alertpesan,
                                    duration: 2000
                                })];
                            case 3:
                                toast = _a.sent();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    UpdatecustomerPage.prototype.loadToken = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'tokenes',
                contact_customer: _this.contact_customer,
                user_id: _this.user_id
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'notificaciones.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var upsaldo = _a[_i];
                        _this.upsaldos.push(upsaldo);
                    }
                }
                console.log(_this.saldo);
                resolve(true);
            });
        });
    };
    UpdatecustomerPage.prototype.loadSaldo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata3',
                saldo: _this.saldo,
                user_id: _this.user_id
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var upsaldo = _a[_i];
                        _this.upsaldos.push(upsaldo);
                    }
                }
                console.log(_this.saldo);
                resolve(true);
            });
        });
    };
    UpdatecustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatecustomer',
            template: __webpack_require__(/*! ./updatecustomer.page.html */ "./src/app/updatecustomer/updatecustomer.page.html"),
            styles: [__webpack_require__(/*! ./updatecustomer.page.scss */ "./src/app/updatecustomer/updatecustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], UpdatecustomerPage);
    return UpdatecustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=updatecustomer-updatecustomer-module.js.map