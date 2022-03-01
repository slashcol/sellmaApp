(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addcontact-addcontact-module"],{

/***/ "./src/app/addcontact/addcontact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/addcontact/addcontact.module.ts ***!
  \*************************************************/
/*! exports provided: AddcontactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcontactPageModule", function() { return AddcontactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addcontact_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addcontact.page */ "./src/app/addcontact/addcontact.page.ts");








var routes = [
    {
        path: '',
        component: _addcontact_page__WEBPACK_IMPORTED_MODULE_7__["AddcontactPage"]
    }
];
var AddcontactPageModule = /** @class */ (function () {
    function AddcontactPageModule() {
    }
    AddcontactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]
            ],
            declarations: [_addcontact_page__WEBPACK_IMPORTED_MODULE_7__["AddcontactPage"]]
        })
    ], AddcontactPageModule);
    return AddcontactPageModule;
}());



/***/ }),

/***/ "./src/app/addcontact/addcontact.page.html":
/*!*************************************************!*\
  !*** ./src/app/addcontact/addcontact.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"dark\" >\n      <ion-buttons slot=\"start\"  *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button  expand=\"fixed\"  color=\"secondary\" fill=\"outline\">\n      Su Saldo $ {{upsaldo.saldo}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  \n\n    <ion-buttons  slot=\"end\" (click)=\"proseslogout()\" >\n      <ion-button expand=\"fixed\"  color=\"tertiary\" color=\"tertiary\" fill=\"outline\">\n    \n        <ion-icon  slot=\"start\" name=\"hand\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" (click)=\"addCustomer()\">\n      <ion-button expand=\"fixed\"  color=\"tertiary\" fill=\"outline\">\n        Nuevo\n        <ion-icon slot=\"end\" name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-searchbar color=\"dark\" animated \n                          (ionChange)=\"buscar( $event )\"></ion-searchbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n      refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n  <ion-list *ngIf=\"customer\">\n<ion-card *ngFor=\"let customer of customers | filtro: textoBuscar\" >\n  \n  <ion-item-sliding    >     \n    <ion-item-options   side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n    </ion-item-options>\n\n    <ion-item   *ngIf=\"customer.login_id == user_id\"  >\n      <ion-item>\n    <ion-avatar item-start>  <img src=\"assets/pic.jpeg \"/> </ion-avatar>\n    </ion-item>\n      <ion-label text-left >  {{customer.name_customer}}</ion-label>\n      <ion-label slot=\"end\" text-right >{{customer.contact_customer}}</ion-label>\n      </ion-item>\n\n    <ion-item-options side=\"end\">\n\n      <ion-item-option color=\"secondary\"\n        (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Historial\n      </ion-item-option>\n\n      <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n        Transferir</ion-item-option>\n\n    </ion-item-options>\n  </ion-item-sliding>\n\n</ion-card>\n\n</ion-list>\n\n\n\n<ion-list *ngIf=\"!customer\">\n    <ion-card *ngFor=\"let customer of customers \"   >\n      \n      <ion-item-sliding    >     \n        <ion-item-options   side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n        </ion-item-options>\n    \n        <ion-item   *ngIf=\"customer.login_id == user_id\"  >\n          <ion-item>\n        <ion-avatar item-start> \n           <ion-skeleton-text animated width=\"80%\" > </ion-skeleton-text>\n          </ion-avatar>\n        </ion-item>\n          <ion-label text-left > \n              <ion-skeleton-text animated width=\"60%\" > </ion-skeleton-text>\n            </ion-label>\n          <ion-label slot=\"end\" text-right >\n              <ion-skeleton-text animated width=\"40%\" > </ion-skeleton-text>\n          </ion-label>\n          </ion-item>\n    \n        <ion-item-options side=\"end\">\n    \n          <ion-item-option color=\"secondary\"\n            (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.namedest,customer.ident,customer.login_id)\">Historial\n          </ion-item-option>\n    \n          <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n            Transferir</ion-item-option>\n    \n        </ion-item-options>\n      </ion-item-sliding>\n    \n    </ion-card>\n    \n    </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n      <ion-content>  \n          <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\n            <ion-fab-button color=\"light\">\n              <ion-icon name=\"arrow-dropleft\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-list side=\"start\">\n              <ion-fab-button color=\"light\" (click)=\"colores(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n                <ion-icon name=\"cash\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-button color=\"light\">\n                <ion-icon name=\"logo-twitter\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-button color=\"light\">\n                <ion-icon name=\"logo-vimeo\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab-list>\n          </ion-fab>\n    </ion-content>\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Contactos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/addcontact/addcontact.page.scss":
/*!*************************************************!*\
  !*** ./src/app/addcontact/addcontact.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZGNvbnRhY3QvYWRkY29udGFjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/addcontact/addcontact.page.ts":
/*!***********************************************!*\
  !*** ./src/app/addcontact/addcontact.page.ts ***!
  \***********************************************/
/*! exports provided: AddcontactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcontactPage", function() { return AddcontactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






//import { Router,  } from '@angular/router';
var AddcontactPage = /** @class */ (function () {
    function AddcontactPage(router, postPvdr, toastController, storage, actRoute) {
        var _this = this;
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastController = toastController;
        this.storage = storage;
        this.actRoute = actRoute;
        this.customer = false;
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        setTimeout(function () {
            _this.customer = true;
        }, 3000);
    }
    AddcontactPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.saldo = data.saldo;
            console.log(data);
        });
    };
    AddcontactPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        this.loadCustomer(this.login_id);
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            //this.saldo = this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    AddcontactPage.prototype.proseslogout = function () {
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
    AddcontactPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcustomer']);
    };
    AddcontactPage.prototype.updateCustomer = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/updatecustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    AddcontactPage.prototype.showCustomer = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    AddcontactPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    AddcontactPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    AddcontactPage.prototype.delCustomer = function (id) {
        var _this = this;
        var body = {
            aksi: 'delete',
            customer_id: id
        };
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
            _this.ionViewWillEnter();
        });
    };
    AddcontactPage.prototype.loadCustomer = function (login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id,
                login_id: _this.login_id
                // saldo : this.saldo
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var customer = _a[_i];
                        _this.customers.push(customer);
                    }
                }
                resolve(true);
            });
        });
    };
    AddcontactPage.prototype.colores = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    AddcontactPage.prototype.loadSaldo = function () {
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
    AddcontactPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    AddcontactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcontact',
            template: __webpack_require__(/*! ./addcontact.page.html */ "./src/app/addcontact/addcontact.page.html"),
            styles: [__webpack_require__(/*! ./addcontact.page.scss */ "./src/app/addcontact/addcontact.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddcontactPage);
    return AddcontactPage;
}());



/***/ })

}]);
//# sourceMappingURL=addcontact-addcontact-module.js.map