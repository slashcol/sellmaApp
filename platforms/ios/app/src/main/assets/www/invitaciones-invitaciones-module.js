(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invitaciones-invitaciones-module"],{

/***/ "./src/app/invitaciones/invitaciones.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/invitaciones/invitaciones.module.ts ***!
  \*****************************************************/
/*! exports provided: InvitacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitacionesPageModule", function() { return InvitacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _invitaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invitaciones.page */ "./src/app/invitaciones/invitaciones.page.ts");







var routes = [
    {
        path: '',
        component: _invitaciones_page__WEBPACK_IMPORTED_MODULE_6__["InvitacionesPage"]
    }
];
var InvitacionesPageModule = /** @class */ (function () {
    function InvitacionesPageModule() {
    }
    InvitacionesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_invitaciones_page__WEBPACK_IMPORTED_MODULE_6__["InvitacionesPage"]]
        })
    ], InvitacionesPageModule);
    return InvitacionesPageModule;
}());



/***/ }),

/***/ "./src/app/invitaciones/invitaciones.page.html":
/*!*****************************************************!*\
  !*** ./src/app/invitaciones/invitaciones.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\" >\n    <ion-title color=\"tertiary\" > {{ username }}, Agrega Un Amigo</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\"> Nombre Contacto </ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"name_customer\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color=\"primary\" position=\"floating\"> Identificacion Contacto </ion-label>\n    <ion-textarea [(ngModel)]=\"contact_customer\"></ion-textarea>\n  </ion-item>\n \n\n  <ion-button expand=\"block\" padding color=\"tertiary\" *ngIf=\"!id\" (click)=\"createdProses()\" fill=\"outline\">Crear</ion-button>\n  <ion-button expand=\"block\" padding color=\"tertiary\" *ngIf=\"id>=1\" (click)=\"updateProses()\" fill=\"outline\">Enviar</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/invitaciones/invitaciones.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/invitaciones/invitaciones.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludml0YWNpb25lcy9pbnZpdGFjaW9uZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/invitaciones/invitaciones.page.ts":
/*!***************************************************!*\
  !*** ./src/app/invitaciones/invitaciones.page.ts ***!
  \***************************************************/
/*! exports provided: InvitacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitacionesPage", function() { return InvitacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var InvitacionesPage = /** @class */ (function () {
    function InvitacionesPage(postPvdr, router, toastController, actRoute, storage) {
        this.postPvdr = postPvdr;
        this.router = router;
        this.toastController = toastController;
        this.actRoute = actRoute;
        this.storage = storage;
        this.customers = [];
        this.limit = 10;
        this.start = 0;
        this.identificacion = '';
        this.name_customer = '';
        this.desc_customer = '';
        this.contact_customer = '';
        this.phone_customer = '';
    }
    InvitacionesPage.prototype.ngOnInit = function () {
    };
    InvitacionesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.start = 0;
        this.loadCustomer();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.user_id = _this.anggota.user_id;
            _this.username = _this.anggota.username;
            _this.identificacion = _this.anggota.identificacion;
        });
    };
    InvitacionesPage.prototype.loadCustomer = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                limit: _this.limit,
                start: _this.start,
            };
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var customer = _a[_i];
                    _this.customers.push(customer);
                }
                resolve(true);
            });
        });
    };
    InvitacionesPage.prototype.createdProses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name_customer == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un nombre valido',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.contact_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa una identificacion valida',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        body = {
                            aksi: 'addinviteme',
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                            contact_customer: this.contact_customer,
                            identificacion: this.identificacion,
                            login_id: this.user_id,
                            username: this.username
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/customer']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Contacto Agregado',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
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
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    InvitacionesPage.prototype.updateProses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, body;
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
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.desc_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Description is required',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        body = {
                            aksi: 'update',
                            customer_id: this.id,
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                            contact_customer: this.contact_customer,
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/customer']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Data updated successful',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
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
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    InvitacionesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invitaciones',
            template: __webpack_require__(/*! ./invitaciones.page.html */ "./src/app/invitaciones/invitaciones.page.html"),
            styles: [__webpack_require__(/*! ./invitaciones.page.scss */ "./src/app/invitaciones/invitaciones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], InvitacionesPage);
    return InvitacionesPage;
}());



/***/ })

}]);
//# sourceMappingURL=invitaciones-invitaciones-module.js.map