(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfer-transfer-module"],{

/***/ "./src/app/transfer/transfer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.module.ts ***!
  \*********************************************/
/*! exports provided: TransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPageModule", function() { return TransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transfer.page */ "./src/app/transfer/transfer.page.ts");







var routes = [
    {
        path: '',
        component: _transfer_page__WEBPACK_IMPORTED_MODULE_6__["TransferPage"]
    }
];
var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
    TransferPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_transfer_page__WEBPACK_IMPORTED_MODULE_6__["TransferPage"]]
        })
    ], TransferPageModule);
    return TransferPageModule;
}());



/***/ }),

/***/ "./src/app/transfer/transfer.page.html":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n  \n        <ion-buttons slot=\"end\"  *ngFor=\"let upsaldo of upsaldos\" >\n      <ion-button  slot=\"end\" color=\"secondary\" fill=\"outline\">\n        Su Saldo $ {{upsaldo.saldo}}\n        <ion-icon name=\"trending-up\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  \n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content   >\n\n\n      <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n          refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n        </ion-refresher-content>\n      </ion-refresher>\n    \n    \n    \n      <ion-list *ngIf=\"customer\">\n    <ion-card *ngFor=\"let customer of customers\">\n      \n      <ion-item-sliding>     \n       <!--  <ion-item-options   side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\"></ion-item-option>\n        </ion-item-options> -->\n    \n        <!-- <ion-item   *ngIf=\"customer.contact_customer == identificacion \">     -->  \n            <ion-item >       \n       <!--    <ion-item>\n        <ion-avatar item-start>  <img src=\"assets/pic.jpeg \"/> </ion-avatar>\n        </ion-item> -->\n        <ion-icon color=\"tertiary\" name=\"exit\"></ion-icon>    \n          <ion-label text-left  >  {{customer.monto_customer}}</ion-label>   \n          \n               \n          <ion-label slot=\"end\" text-right >{{customer.created_at}}</ion-label>\n          </ion-item>\n    \n        <ion-item-options side=\"end\">\n    \n       <!--    <ion-item-option color=\"secondary\"\n            (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Historial\n          </ion-item-option> -->\n    \n          <ion-item-option (click)=\"updateAceptar(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id,customer.monto_customer, customer.name_destinatario)\">\n            Aceptar</ion-item-option>\n    \n        </ion-item-options> \n      </ion-item-sliding>\n   \n    </ion-card>\n    \n    </ion-list>\n    \n    \n    \n    <ion-list *ngIf=\"!customer\">\n        <ion-card *ngFor=\"let customer of customers \"   >\n          \n          <ion-item-sliding    >     \n            <ion-item-options   side=\"start\">\n              <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n            </ion-item-options>\n        \n            <ion-item   *ngIf=\"customer.login_id == user_id\"  >\n              <ion-item>\n            <ion-avatar item-start> \n               <ion-skeleton-text animated width=\"80%\" > </ion-skeleton-text>\n              </ion-avatar>\n            </ion-item>\n              <ion-label text-left > \n                  <ion-skeleton-text animated width=\"60%\" > </ion-skeleton-text>\n                </ion-label>\n              <ion-label slot=\"end\" text-right >\n                  <ion-skeleton-text animated width=\"40%\" > </ion-skeleton-text>\n              </ion-label>\n              </ion-item>\n        \n            <ion-item-options side=\"end\">\n        \n              <ion-item-option color=\"secondary\"\n                (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Historial\n              </ion-item-option>\n        \n              <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n                Transferir</ion-item-option>\n        \n            </ion-item-options>\n          </ion-item-sliding>\n        \n        </ion-card>\n        \n        </ion-list>\n    \n    \n    \n      <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n  \n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Datos...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    \n    </ion-content>\n    "

/***/ }),

/***/ "./src/app/transfer/transfer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zZmVyL3RyYW5zZmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/transfer/transfer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/transfer/transfer.page.ts ***!
  \*******************************************/
/*! exports provided: TransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferPage", function() { return TransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var TransferPage = /** @class */ (function () {
    function TransferPage(router, postPvdr, toastController, storage, plt, localNotifications, lalertCtrl, actRoute) {
        //Notificaciones
        var _this = this;
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.lalertCtrl = lalertCtrl;
        this.actRoute = actRoute;
        this.customer = false;
        this.scheduled = [];
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.identificacion = '';
        this.plt.ready().then(function () {
            _this.localNotifications.on('click').subscribe(function (res) {
                console.log('click: ', res);
                var msg = res.data ? res.data.mydata : '';
                //this.showAlert(res.title, res.text, msg);    
            });
            _this.localNotifications.on('trigger').subscribe(function (res) {
                console.log('trigger: ', res);
                var msg = res.data ? res.data.mydata : '';
                //this.showAlert(res.title, res.text, msg);
            });
        });
        setTimeout(function () {
            _this.customer = true;
        }, 3000);
    }
    TransferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.saldo = data.saldo;
            _this.name_destinatario = data.namedest;
            _this.monto_customer = data.monto;
            _this.ident_destinatario = data.ident;
            console.log(data);
        });
    };
    TransferPage.prototype.ionViewWillEnter = function () {
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
            _this.identificacion = _this.anggota.identificacion;
            _this.name_destinatario = _this.anggota.name_destinatario;
            _this.ident_destinatario = _this.anggota.ident_destinatario;
        });
    };
    TransferPage.prototype.proseslogout = function () {
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
    TransferPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcustomer']);
    };
    TransferPage.prototype.updateAceptar = function (id, name, desc, contact, login, monto) {
        this.router.navigate(['/aceptar/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + monto]);
    };
    TransferPage.prototype.showCustomer = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    TransferPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    TransferPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    TransferPage.prototype.delCustomer = function (id) {
        var _this = this;
        var body = {
            aksi: 'delete',
            customer_id: id
        };
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
            _this.ionViewWillEnter();
        });
    };
    TransferPage.prototype.loadCustomer = function (login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: '456578980',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id,
                login_id: _this.login_id,
                identificacion: _this.identificacion,
                name_destinatario: _this.name_destinatario,
                ident_destinatario: _this.ident_destinatario,
                pendiente: _this.pendiente
                // saldo : this.saldo
            };
            console.log(_this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var customer = _a[_i];
                        _this.customers.push(customer);
                        if (_this.pendiente) {
                            _this.scheduleNotification();
                            console.log('nada para para mostrar');
                        }
                        else {
                            console.log('hay algo para mostrar para mostrar');
                            console.log(_this.monto_customer);
                            _this.scheduleNotification();
                        }
                    }
                }
                resolve(true);
            });
        });
    };
    TransferPage.prototype.loadSaldo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata3',
                saldo: _this.saldo,
                user_id: _this.user_id
            };
            console.log(_this.login_id);
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
    TransferPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.saldo = this.saldo + this.monto_customer;
                body = {
                    aksi: 'update_transfer',
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
    /*
    showAlert(header, sub, msg){
      this.lalertCtrl.create({
        header: header,
        subHeader: sub,
        message: msg,
        buttons: ['OK']
    
      }).then(alert => alert.present());
        }
  */
    TransferPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'HOLA ' + this.username,
            text: 'Recibiste una transferencia',
            sound: 'assets/sonidos/recibir.mp3',
            data: { mydata: 'si en este momento es SEGURO revisa porfavor' },
            trigger: { in: 1, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["ELocalNotificationTriggerUnit"].SECOND },
        });
    };
    TransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! ./transfer.page.html */ "./src/app/transfer/transfer.page.html"),
            styles: [__webpack_require__(/*! ./transfer.page.scss */ "./src/app/transfer/transfer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_4__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TransferPage);
    return TransferPage;
}());



/***/ })

}]);
//# sourceMappingURL=transfer-transfer-module.js.map