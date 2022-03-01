(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showcustomer-showcustomer-module"],{

/***/ "./src/app/showcustomer/showcustomer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowcustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcustomerPageModule", function() { return ShowcustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showcustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcustomer.page */ "./src/app/showcustomer/showcustomer.page.ts");







var routes = [
    {
        path: '',
        component: _showcustomer_page__WEBPACK_IMPORTED_MODULE_6__["ShowcustomerPage"]
    }
];
var ShowcustomerPageModule = /** @class */ (function () {
    function ShowcustomerPageModule() {
    }
    ShowcustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_showcustomer_page__WEBPACK_IMPORTED_MODULE_6__["ShowcustomerPage"]]
        })
    ], ShowcustomerPageModule);
    return ShowcustomerPageModule;
}());



/***/ }),

/***/ "./src/app/showcustomer/showcustomer.page.html":
/*!*****************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\" >\n    <ion-title color=\"tertiary\" >Detalles de  {{ name_customer }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n  \n  <ion-content>\n    <ion-card  pading color=\"tertiary\" >\n    <ion-card-header>\n        <ion-card-title align=\"center\">{{name_customer}}</ion-card-title>\n      <ion-card-subtitle align=\"center\">Historial de Transferencias</ion-card-subtitle>\n      <ion-card-content align=\"center\">\n          <p>Identificacion: {{ contact_customer }}   </p>     \n          \n          </ion-card-content>\n    </ion-card-header>      \n  </ion-card>\n\n  <ion-content   >\n\n\n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n        refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n      </ion-refresher-content>\n    </ion-refresher>\n  \n  \n  \n    <ion-list *ngIf=\"customer\">\n  <ion-card *ngFor=\"let customer of customers\">\n    \n   <!--  <ion-item-sliding>     \n      <ion-item-options   side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\"></ion-item-option>\n      </ion-item-options> -->\n  \n      <ion-item >         \n     <!--    <ion-item>\n      <ion-avatar item-start>  <img src=\"assets/pic.jpeg \"/> </ion-avatar>\n      </ion-item> -->\n      <ion-icon color=\"tertiary\" name=\"exit\"></ion-icon>    \n        <ion-label text-left  >  {{customer.monto_customer}}</ion-label>   \n        \n             \n        <ion-label slot=\"end\" text-right >{{customer.created_at}}</ion-label>\n        </ion-item>\n  \n    <!--   <ion-item-options side=\"end\">\n  \n        <ion-item-option color=\"secondary\"\n          (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Historial\n        </ion-item-option>\n  \n        <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n          Transferir</ion-item-option>\n  \n      </ion-item-options> \n    </ion-item-sliding>\n  -->\n  </ion-card>\n  \n  </ion-list>\n  \n  \n  \n  <ion-list *ngIf=\"!customer\">\n      <ion-card *ngFor=\"let customer of customers \"   >\n        \n        <ion-item-sliding    >     \n          <ion-item-options   side=\"start\">\n            <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n          </ion-item-options>\n      \n          <ion-item   *ngIf=\"customer.login_id == user_id\"  >\n            <ion-item>\n          <ion-avatar item-start> \n             <ion-skeleton-text animated width=\"80%\" > </ion-skeleton-text>\n            </ion-avatar>\n          </ion-item>\n            <ion-label text-left > \n                <ion-skeleton-text animated width=\"60%\" > </ion-skeleton-text>\n              </ion-label>\n            <ion-label slot=\"end\" text-right >\n                <ion-skeleton-text animated width=\"40%\" > </ion-skeleton-text>\n            </ion-label>\n            </ion-item>\n      \n          <ion-item-options side=\"end\">\n      \n            <ion-item-option color=\"secondary\"\n              (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Historial\n            </ion-item-option>\n      \n            <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n              Transferir</ion-item-option>\n      \n          </ion-item-options>\n        </ion-item-sliding>\n      \n      </ion-card>\n      \n      </ion-list>\n  \n  \n  \n    <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Datos...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/showcustomer/showcustomer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  background-color: darkslategray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2N1c3RvbWVyL0M6XFxHaW92YW5ueVxcaW9uaWM0bG9naW5cXGxvZ2luL3NyY1xcYXBwXFxzaG93Y3VzdG9tZXJcXHNob3djdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nob3djdXN0b21lci9zaG93Y3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/showcustomer/showcustomer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/showcustomer/showcustomer.page.ts ***!
  \***************************************************/
/*! exports provided: ShowcustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcustomerPage", function() { return ShowcustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ShowcustomerPage = /** @class */ (function () {
    function ShowcustomerPage(router, postPvdr, storage, actRoute) {
        var _this = this;
        this.router = router;
        this.postPvdr = postPvdr;
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
    ShowcustomerPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    ShowcustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        this.loadCustomer(this.login_id);
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
    ShowcustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.user_id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.name_destinatario = data.namedest;
            _this.ident_destinatario = data.ident;
            console.log(data);
        });
    };
    ShowcustomerPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    ShowcustomerPage.prototype.loadCustomer = function (login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'gettransfer',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id,
                login_id: _this.login_id,
                contact_customer: _this.contact_customer,
                name_destinatario: _this.name_destinatario,
                ident_destinatario: _this.ident_destinatario
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
    ShowcustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcustomer',
            template: __webpack_require__(/*! ./showcustomer.page.html */ "./src/app/showcustomer/showcustomer.page.html"),
            styles: [__webpack_require__(/*! ./showcustomer.page.scss */ "./src/app/showcustomer/showcustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ShowcustomerPage);
    return ShowcustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=showcustomer-showcustomer-module.js.map