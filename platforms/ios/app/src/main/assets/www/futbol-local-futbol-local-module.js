(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["futbol-local-futbol-local-module"],{

/***/ "./src/app/futbol-local/futbol-local.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/futbol-local/futbol-local.module.ts ***!
  \*****************************************************/
/*! exports provided: FutbolLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutbolLocalPageModule", function() { return FutbolLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _futbol_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./futbol-local.page */ "./src/app/futbol-local/futbol-local.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _futbol_local_page__WEBPACK_IMPORTED_MODULE_6__["FutbolLocalPage"]
    }
];
var FutbolLocalPageModule = /** @class */ (function () {
    function FutbolLocalPageModule() {
    }
    FutbolLocalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [_futbol_local_page__WEBPACK_IMPORTED_MODULE_6__["FutbolLocalPage"]]
        })
    ], FutbolLocalPageModule);
    return FutbolLocalPageModule;
}());



/***/ }),

/***/ "./src/app/futbol-local/futbol-local.page.html":
/*!*****************************************************!*\
  !*** ./src/app/futbol-local/futbol-local.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"dark\" >\n      <ion-buttons slot=\"start\"  *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button  expand=\"fixed\"  color=\"secondary\" fill=\"outline\">\n      Tu Saldo $ {{upsaldo.saldo}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  \n\n    <!-- <ion-buttons  slot=\"end\" (click)=\"proseslogout()\" >\n      <ion-button expand=\"fixed\"  color=\"tertiary\" color=\"tertiary\" fill=\"outline\">\n    \n        <ion-icon  slot=\"start\" name=\"hand\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" (click)=\"addInvitacion()\">\n      <ion-button expand=\"fixed\"  color=\"tertiary\" fill=\"outline\">\n        Nuevo\n        <ion-icon slot=\"end\" name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n  </ion-toolbar>\n\n \n</ion-header>\n\n\n\n<ion-content padding  > \n\n   \n\n   <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n      refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  \n  \n  \n    <ion-slides  >\n      <ion-slide *ngFor=\"let local of locals\">\n        <div *ngIf=\"local\">  \n            <ion-item >        \n        <ion-card class=\"contenido\" >   \n              \n          <ion-card-header>\n           \n            <ion-card-title color=\"secondary\">\n              {{ local.equipo_uno }} - {{ local.equipo_dos }}\n            </ion-card-title>\n            <ion-card-content>\n              <img src=\"{{local.imagen}}\">\n              <ion-button color=\"tertiary\" expand=\"full\" (click)=\"addToCart(product)\">Apostar</ion-button>\n             El Día- {{ local.fecha_inicio }}\n          </ion-card-content>\n         </ion-card-header>   \n            \n        </ion-card>   \n      </ion-item> \n       </div>\n      </ion-slide>\n    </ion-slides>\n\n\n\n     <ion-button expand=\"block\" (click)=\"scheduleNotification()\">Schedule</ion-button>\n    <ion-button  expand=\"block\" (click)=\"recurringNotification()\">everi minute</ion-button>\n    <ion-button  expand=\"block\" (click)=\"repeatingDaily()\">Daily</ion-button>\n    <ion-button  expand=\"block\" (click)=\"getHall()\">Schedule</ion-button>\n\n\n<ion-list>\n  <ion-item *ngFor=\"let n of scheduled\" >\n<ion-label text-wrap>\n{{ n.id }} - {{ n.title }}\n<p>Trigger: {{ n.trigger | json }} </p>\n</ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    \n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Contactos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n \n\n    \n   \n \n</ion-content>"

/***/ }),

/***/ "./src/app/futbol-local/futbol-local.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/futbol-local/futbol-local.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card.contenido {\n  background: url(\"https://sellmatech.biz/images/cancha.jpeg\"); }\n\n/* page-home{\n    .contenido {\n        background-image: url('../../assets/pic.jpeg ');\n    }\n} */\n\n/* ion-content.contenido {\n    background: url('https://sellmatech.biz/images/pasto.jpg');\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnV0Ym9sLWxvY2FsL0M6XFxHaW92YW5ueVxcaW9uaWM0bG9naW5cXGxvZ2luL3NyY1xcYXBwXFxmdXRib2wtbG9jYWxcXGZ1dGJvbC1sb2NhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Z1dGJvbC1sb2NhbC9mdXRib2wtbG9jYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNERBQTRELEVBQUE7O0FBRWhFOzs7O0dDSUc7O0FEQ0g7O0dDRUciLCJmaWxlIjoic3JjL2FwcC9mdXRib2wtbG9jYWwvZnV0Ym9sLWxvY2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLmNvbnRlbmlkbyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3NlbGxtYXRlY2guYml6L2ltYWdlcy9jYW5jaGEuanBlZycpO1xufVxuLyogcGFnZS1ob21le1xuICAgIC5jb250ZW5pZG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9waWMuanBlZyAnKTtcbiAgICB9XG59ICovXG4vKiBpb24tY29udGVudC5jb250ZW5pZG8ge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zZWxsbWF0ZWNoLmJpei9pbWFnZXMvcGFzdG8uanBnJyk7XG59ICovIiwiaW9uLWNhcmQuY29udGVuaWRvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9zZWxsbWF0ZWNoLmJpei9pbWFnZXMvY2FuY2hhLmpwZWdcIik7IH1cblxuLyogcGFnZS1ob21le1xuICAgIC5jb250ZW5pZG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9waWMuanBlZyAnKTtcbiAgICB9XG59ICovXG4vKiBpb24tY29udGVudC5jb250ZW5pZG8ge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zZWxsbWF0ZWNoLmJpei9pbWFnZXMvcGFzdG8uanBnJyk7XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/futbol-local/futbol-local.page.ts":
/*!***************************************************!*\
  !*** ./src/app/futbol-local/futbol-local.page.ts ***!
  \***************************************************/
/*! exports provided: FutbolLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FutbolLocalPage", function() { return FutbolLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");







//import { Router,  } from '@angular/router';
var FutbolLocalPage = /** @class */ (function () {
    function FutbolLocalPage(plt, localNotifications, lalertCtrl, router, postPvdr, storage, actRoute) {
        var _this = this;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.lalertCtrl = lalertCtrl;
        this.router = router;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.actRoute = actRoute;
        this.scheduled = [];
        this.customer = false;
        this.customers = [];
        this.locals = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.plt.ready().then(function () {
            _this.localNotifications.on('click').subscribe(function (res) {
                console.log('click: ', res);
                var msg = res.data ? res.data.mydata : '';
                _this.showAlert(res.title, res.text, msg);
            });
            _this.localNotifications.on('trigger').subscribe(function (res) {
                console.log('trigger: ', res);
                var msg = res.data ? res.data.mydata : '';
                _this.showAlert(res.title, res.text, msg);
            });
        });
        setTimeout(function () {
            _this.customer = true;
        }, 3000);
    }
    FutbolLocalPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    FutbolLocalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.locals = [];
        this.upsaldos = [];
        this.start = 0;
        this.loadSaldo();
        this.loadRetos();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.identificacion = _this.anggota.identificacion;
            //this.saldo = this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    FutbolLocalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.user_id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.name_destinatario = data.namedest;
            _this.ident_destinatario = data.ident;
            _this.id_local_fut = data.local_fut;
            _this.imagen = data.img;
            _this.equipo_uno = data.uno;
            _this.marcador_1 = data.marc1;
            _this.equipo_dos = data.dos;
            _this.marcador_2 = data.marc2;
            _this.fecha_inicio = data.inicio;
            _this.fecha_final = data.final;
            _this.estado = data.esta;
            console.log(data);
        });
    };
    FutbolLocalPage.prototype.loadData = function (event) {
        this.start += this.limit;
        setTimeout(function () {
            /* this.loadRetos().then(() => {
            event.target.complete();
            }); */
        }, 1500);
    };
    FutbolLocalPage.prototype.loadSaldo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata3',
                saldo: _this.saldo,
                user_id: _this.user_id,
                login_id: _this.login_id
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
    FutbolLocalPage.prototype.loadRetos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: '894773822',
                equipo_uno: _this.equipo_uno,
                user_id: _this.user_id,
                login_id: _this.login_id,
                contact_customer: _this.contact_customer
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var local = _a[_i];
                        _this.locals.push(local);
                    }
                }
                console.log(_this.saldo);
                resolve(true);
            });
        });
    };
    FutbolLocalPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'HOLA ' + this.username,
            text: 'No tienes nada por ahora',
            data: { mydata: 'Este es el archivo de mi mensaje' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["ELocalNotificationTriggerUnit"].SECOND },
        });
    };
    FutbolLocalPage.prototype.recurringNotification = function () {
        this.localNotifications.schedule({
            id: 22,
            title: 'HOLA ' + this.username,
            text: 'Revisa las novedades que tenemos para ti',
            trigger: { every: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["ELocalNotificationTriggerUnit"].HOUR },
        });
    };
    /* repeatingDaily(){
      this.localNotifications.schedule({
        id: 42,
        title: 'Buenos Dias',
        text: 'Tal vez Quieras revisar tus envios de Contactos',
        trigger:{ every: { hour: 8, minute: 0  }},
        //foreground: true
      });
    } */
    FutbolLocalPage.prototype.getHall = function () {
        var _this = this;
        this.localNotifications.getAll().then(function (res) {
            _this.scheduled = res;
        });
    };
    FutbolLocalPage.prototype.showAlert = function (header, sub, msg) {
        this.lalertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['OK']
        }).then(function (alert) { return alert.present(); });
    };
    FutbolLocalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-futbol-local',
            template: __webpack_require__(/*! ./futbol-local.page.html */ "./src/app/futbol-local/futbol-local.page.html"),
            styles: [__webpack_require__(/*! ./futbol-local.page.scss */ "./src/app/futbol-local/futbol-local.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FutbolLocalPage);
    return FutbolLocalPage;
}());



/***/ })

}]);
//# sourceMappingURL=futbol-local-futbol-local-module.js.map