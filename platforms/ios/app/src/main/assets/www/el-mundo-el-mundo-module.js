(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["el-mundo-el-mundo-module"],{

/***/ "./src/app/el-mundo/el-mundo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/el-mundo/el-mundo.module.ts ***!
  \*********************************************/
/*! exports provided: ElMundoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMundoPageModule", function() { return ElMundoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _el_mundo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./el-mundo.page */ "./src/app/el-mundo/el-mundo.page.ts");







var routes = [
    {
        path: '',
        component: _el_mundo_page__WEBPACK_IMPORTED_MODULE_6__["ElMundoPage"]
    }
];
var ElMundoPageModule = /** @class */ (function () {
    function ElMundoPageModule() {
    }
    ElMundoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_el_mundo_page__WEBPACK_IMPORTED_MODULE_6__["ElMundoPage"]]
        })
    ], ElMundoPageModule);
    return ElMundoPageModule;
}());



/***/ }),

/***/ "./src/app/el-mundo/el-mundo.page.html":
/*!*********************************************!*\
  !*** ./src/app/el-mundo/el-mundo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"dark\" >\n      <ion-buttons slot=\"start\"  *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button  expand=\"fixed\"  color=\"secondary\" fill=\"outline\">\n      Tu Saldo $ {{upsaldo.saldo}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  \n\n    <ion-buttons  slot=\"end\" (click)=\"proseslogout()\" >\n      <ion-button expand=\"fixed\"  color=\"tertiary\" color=\"tertiary\" fill=\"outline\">\n    \n        <ion-icon  slot=\"start\" name=\"hand\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" (click)=\"addInvitacion()\">\n      <ion-button expand=\"fixed\"  color=\"tertiary\" fill=\"outline\">\n        Nuevo\n        <ion-icon slot=\"end\" name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-searchbar color=\"dark\" animated \n                          (ionChange)=\"buscar( $event )\"></ion-searchbar>\n\n</ion-header>\n\n<ion-content color=\"dark\">\n    <br>\n  <section text-center margin-bottom>\n      <h1 style=\"font-size:1.4em\" no-margin>Explora el Mundo , \n      {{ username }}</h1>\n  </section>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        \n        <ion-card class=\"uno\" text-center padding color=\"danger\">\n            <img src=\"../../assets/communicationpng/communication-08.png\">\n         <!--  <ion-icon name=\"person\"></ion-icon> -->\n          <h2>Noticias</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n        \n        <ion-card class=\"dos\" text-center padding color=\"primary\">\n            <img src=\"../../assets/communicationpng/communication-39.png\">\n          <!-- <ion-icon name=\"people\"></ion-icon> -->\n          <h2>Apuestas</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n         \n        <ion-card class=\"tres\" text-center padding color=\"secondary\">\n           <img src=\"../../assets/communicationpng/communication-26.png\">\n         <!--  <ion-icon name=\"person\"></ion-icon> -->\n          <h2>Promos</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n         \n        <ion-card class=\"cuatro\" text-center padding color=\"tertiary\">\n            <img src=\"../../assets/communicationpng/communication-28.png\">\n         <!--  <ion-icon name=\"people\"></ion-icon> -->\n          <h2>lugares</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n      \n        <ion-card (click)=\"goRevista()\" class=\"cinco\" text-center padding color=\"warning\">\n            <img src=\"../../assets/communicationpng/communication-02.png\">\n          <!-- <ion-icon  name=\"person\"></ion-icon> -->\n          <h2>Revistas</h2>\n        </ion-card>\n      </ion-col>\n      <ion-col col-6>\n      \n        <ion-card class=\"seis\" text-center padding color=\"dark\">\n            <img src=\"../../assets/communicationpng/communication-19.png\">\n          <!-- <ion-icon name=\"people\"></ion-icon> -->\n          <h2>Varios</h2>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n     \n\n"

/***/ }),

/***/ "./src/app/el-mundo/el-mundo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/el-mundo/el-mundo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home ion-icon {\n  font-size: 5em; }\n\n/* \n.uno{\n    background-image: url('../../assets/communicationpng/communication-29.png ');\n}\n.dos{\n    background-image: url('../../assets/communicationpng/communication-38.png ');\n}\n.tres{\n    background-image: url('../../assets/communicationpng/communication-26.png ');\n}\n.cuatro{\n    background-image: url('../../assets/communicationpng/communication-29.png ');\n}\n.cinco{\n    background-image: url('../../assets/communicationpng/communication-28.png ');\n}\n.seis{\n    background-image: url('../../assets/communicationpng/communication-13.png ');\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWwtbXVuZG8vQzpcXEdpb3Zhbm55XFxpb25pYzRsb2dpblxcbG9naW4vc3JjXFxhcHBcXGVsLW11bmRvXFxlbC1tdW5kby5wYWdlLnNjc3MiLCJzcmMvYXBwL2VsLW11bmRvL2VsLW11bmRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWMsRUFBQTs7QUFLdEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQ2NHIiwiZmlsZSI6InNyYy9hcHAvZWwtbXVuZG8vZWwtbXVuZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1ob21lIHtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIH1cblxuICAgIFxufVxuLyogXG4udW5ve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NvbW11bmljYXRpb25wbmcvY29tbXVuaWNhdGlvbi0yOS5wbmcgJyk7XG59XG4uZG9ze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NvbW11bmljYXRpb25wbmcvY29tbXVuaWNhdGlvbi0zOC5wbmcgJyk7XG59XG4udHJlc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21tdW5pY2F0aW9ucG5nL2NvbW11bmljYXRpb24tMjYucG5nICcpO1xufVxuLmN1YXRyb3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21tdW5pY2F0aW9ucG5nL2NvbW11bmljYXRpb24tMjkucG5nICcpO1xufVxuLmNpbmNve1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NvbW11bmljYXRpb25wbmcvY29tbXVuaWNhdGlvbi0yOC5wbmcgJyk7XG59XG4uc2Vpc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21tdW5pY2F0aW9ucG5nL2NvbW11bmljYXRpb24tMTMucG5nICcpO1xufSAqLyIsInBhZ2UtaG9tZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNWVtOyB9XG5cbi8qIFxuLnVub3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21tdW5pY2F0aW9ucG5nL2NvbW11bmljYXRpb24tMjkucG5nICcpO1xufVxuLmRvc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21tdW5pY2F0aW9ucG5nL2NvbW11bmljYXRpb24tMzgucG5nICcpO1xufVxuLnRyZXN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvY29tbXVuaWNhdGlvbnBuZy9jb21tdW5pY2F0aW9uLTI2LnBuZyAnKTtcbn1cbi5jdWF0cm97XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvY29tbXVuaWNhdGlvbnBuZy9jb21tdW5pY2F0aW9uLTI5LnBuZyAnKTtcbn1cbi5jaW5jb3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9jb21tdW5pY2F0aW9ucG5nL2NvbW11bmljYXRpb24tMjgucG5nICcpO1xufVxuLnNlaXN7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvY29tbXVuaWNhdGlvbnBuZy9jb21tdW5pY2F0aW9uLTEzLnBuZyAnKTtcbn0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/el-mundo/el-mundo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/el-mundo/el-mundo.page.ts ***!
  \*******************************************/
/*! exports provided: ElMundoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElMundoPage", function() { return ElMundoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






//import { Router,  } from '@angular/router';
var ElMundoPage = /** @class */ (function () {
    function ElMundoPage(router, postPvdr, toastController, storage, actRoute) {
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
    ElMundoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.saldo = data.saldo;
            console.log(data);
        });
    };
    ElMundoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
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
    ElMundoPage.prototype.proseslogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Saliste con Exito',
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
    /* logueo(){
      this.storage.get('session_storage').then((res) => {
      
          this.router.navigate(['/customer']);
      });
    }
     */
    ElMundoPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcontact']);
    };
    ElMundoPage.prototype.addRecarga = function () {
        this.router.navigate(['/recargas-miviles']);
    };
    ElMundoPage.prototype.addInvitacion = function () {
        this.router.navigate(['/invitaciones']);
    };
    ElMundoPage.prototype.goRevista = function () {
        this.router.navigate(['/revista']);
    };
    ElMundoPage.prototype.updateCustomer = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/updatecustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    ElMundoPage.prototype.colores = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    ElMundoPage.prototype.showCustomer = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    ElMundoPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    ElMundoPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    ElMundoPage.prototype.delCustomer = function (id) {
        var _this = this;
        var body = {
            aksi: 'delete',
            customer_id: id
        };
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
            _this.ionViewWillEnter();
        });
    };
    ElMundoPage.prototype.loadCustomer = function (login_id) {
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
    /*   colores(id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login  + '/' + username + '/' + identificacion]);
      } */
    ElMundoPage.prototype.loadSaldo = function () {
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
    ElMundoPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    ElMundoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-el-mundo',
            template: __webpack_require__(/*! ./el-mundo.page.html */ "./src/app/el-mundo/el-mundo.page.html"),
            styles: [__webpack_require__(/*! ./el-mundo.page.scss */ "./src/app/el-mundo/el-mundo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ElMundoPage);
    return ElMundoPage;
}());



/***/ })

}]);
//# sourceMappingURL=el-mundo-el-mundo-module.js.map