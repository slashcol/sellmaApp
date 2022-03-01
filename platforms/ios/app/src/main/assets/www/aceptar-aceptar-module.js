(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aceptar-aceptar-module"],{

/***/ "./src/app/aceptar/aceptar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aceptar/aceptar.module.ts ***!
  \*******************************************/
/*! exports provided: AceptarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarPageModule", function() { return AceptarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aceptar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aceptar.page */ "./src/app/aceptar/aceptar.page.ts");







var routes = [
    {
        path: '',
        component: _aceptar_page__WEBPACK_IMPORTED_MODULE_6__["AceptarPage"]
    }
];
var AceptarPageModule = /** @class */ (function () {
    function AceptarPageModule() {
    }
    AceptarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aceptar_page__WEBPACK_IMPORTED_MODULE_6__["AceptarPage"]]
        })
    ], AceptarPageModule);
    return AceptarPageModule;
}());



/***/ }),

/***/ "./src/app/aceptar/aceptar.page.html":
/*!*******************************************!*\
  !*** ./src/app/aceptar/aceptar.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n\n      <ion-buttons slot=\"end\"  *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button  slot=\"end\" color=\"secondary\" fill=\"outline\">\n      Su Saldo $ {{upsaldo.saldo}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Desliza hacia abajo para Actualizar\" refreshingSpinner=\"dots\"\n      refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n \n  <!--\n  <ion-item>\n    <ion-label position=\"floating\"> nombre </ion-label>\n    <ion-input type=\"label\" [(ngModel)]=\"name_customer\"></ion-input>\n  </ion-item>\n-->\n<!-- <h6 padding=\"1px\" >Te los envío porque: </h6> -->\n  <ion-item>    \n    <ion-label color=\"medium\" > {{ desc_customer }} </ion-label>\n  </ion-item>\n\n \n  <ion-item  >\n    <ion-label slot=\"start\" color=\"primary\"> Monto: </ion-label> \n    <ion-label slot=\"end\"  color=\"medium\" > {{ monto_customer }} </ion-label>\n  </ion-item>\n\n \n\n  <ion-content *ngFor=\"let upsaldo of upsaldos\"  >\n      <ion-button  expand=\"block\" color=\"tertiary\" (click)=\"updateProses()\" fill=\"outline\">\n        Aceptar $ {{ monto_customer }} de {{ name_customer }}\n        <ion-icon slot=\"end\" name=\"done-all\"></ion-icon>\n      </ion-button>\n  \n     <!--  <ion-button expand=\"block\" color=\"danger\" *ngIf=\"monto_customer > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n         Ups... $ {{ monto_customer }} superan tus $ {{ upsaldo.saldo }} de Saldo\n          <ion-icon slot=\"end\" name=\"paper-plane\"></ion-icon>\n        </ion-button> -->\n\n  </ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/aceptar/aceptar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aceptar/aceptar.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c6 {\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  width: 50%;\n  height: 40px;\n  border-radius: 20px;\n  background-color: transparent;\n  -webkit-animation: roll 2s 4s infinite;\n          animation: roll 2s 4s infinite; }\n\n@-webkit-keyframes roll {\n  to {\n    -webkit-transform: translate(0px, 20px);\n            transform: translate(0px, 20px);\n    background-color: transparent;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7); } }\n\n@keyframes roll {\n  to {\n    -webkit-transform: translate(0px, 20px);\n            transform: translate(0px, 20px);\n    background-color: transparent;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7); } }\n\nh1 {\n  position: absolute;\n  top: -15px;\n  color: white;\n  left: 50px;\n  text-align: center;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNlcHRhci9DOlxcR2lvdmFubnlcXGlvbmljNGxvZ2luXFxsb2dpbi9zcmNcXGFwcFxcYWNlcHRhclxcYWNlcHRhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ087RUFDQyxrQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVU7RUFDVixVQUFTO0VBQ1QsWUFBVztFQUNYLG1CQUFrQjtFQUNsQiw2QkFBNEI7RUFDNUIsc0NBQTZCO1VBQTdCLDhCQUE2QixFQUFBOztBQUtyQztFQUNBO0lBRUksdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQiw2QkFBOEI7SUFDOUIseUNBQXNDLEVBQUEsRUFBQTs7QUFMMUM7RUFDQTtJQUVJLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsNkJBQThCO0lBQzlCLHlDQUFzQyxFQUFBLEVBQUE7O0FBUTFDO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxZQUFZO0VBQ1osVUFBUztFQUNULGtCQUFrQjtFQUNsQixVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2VwdGFyL2FjZXB0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgLmM2e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDoxMDBweDtcbiAgICAgICAgbGVmdDoxMDBweDtcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICBoZWlnaHQ6NDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50OyAgICAgICAgXG4gICAgICAgIGFuaW1hdGlvbjpyb2xsIDJzIDRzIGluZmluaXRlO1xuXG4gICAgICBcblxuXG5Aa2V5ZnJhbWVzIHJvbGx7XG50b3tcbiAgIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwyMHB4ICkgO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IDsgXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLCAuNyk7XG4gXG4gICAgIFxuICAgIH1cbiBcbn0gIFxufVxuICAgXG5oMXtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDotMTVweDtcbmNvbG9yOiB3aGl0ZTtcbmxlZnQ6NTBweDtcbnRleHQtYWxpZ246IGNlbnRlcjtcbndpZHRoOjUwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/aceptar/aceptar.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aceptar/aceptar.page.ts ***!
  \*****************************************/
/*! exports provided: AceptarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceptarPage", function() { return AceptarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var AceptarPage = /** @class */ (function () {
    function AceptarPage(postPvdr, router, toastController, actRoute, storage) {
        this.postPvdr = postPvdr;
        this.router = router;
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
    AceptarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.id;
            _this.name_customer = data.name;
            _this.name_destinatario = data.destinatario;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.monto_customer = data.monto;
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            console.log(data);
        });
    };
    AceptarPage.prototype.ionViewWillEnter = function () {
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
    AceptarPage.prototype.updateProses = function () {
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
                            aksi: '1144168921',
                            customer_id: this.id,
                            name_customer: this.name_customer,
                            name_destinatario: this.name_destinatario,
                            desc_customer: this.desc_customer,
                            contact_customer: this.contact_customer,
                            monto_customer: this.monto_customer,
                            saldo: this.saldo,
                            login_id: this.login_id,
                            user_id: this.user_id,
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
    AceptarPage.prototype.proseslogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Logout successful',
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
    AceptarPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 500);
    };
    //aqui va la funcion para usar el salgo
    AceptarPage.prototype.RecargaProces = function () {
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
    AceptarPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '87081758385',
                    monto_customer: this.monto_customer,
                    saldo: this.saldo,
                    login_id: this.login_id,
                    user_id: this.user_id,
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
    AceptarPage.prototype.loadSaldo = function () {
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
    AceptarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aceptar',
            template: __webpack_require__(/*! ./aceptar.page.html */ "./src/app/aceptar/aceptar.page.html"),
            styles: [__webpack_require__(/*! ./aceptar.page.scss */ "./src/app/aceptar/aceptar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], AceptarPage);
    return AceptarPage;
}());



/***/ })

}]);
//# sourceMappingURL=aceptar-aceptar-module.js.map