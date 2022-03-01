(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








var routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]
    }
];
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
            ],
            declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.page.html":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"dark\" >\n      <ion-buttons slot=\"start\"  *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button  expand=\"fixed\"  color=\"secondary\" fill=\"outline\">\n      Tu Saldo $ {{upsaldo.saldo}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n  \n\n    <ion-buttons  slot=\"end\" (click)=\"proseslogout()\" >\n      <ion-button expand=\"fixed\"  color=\"tertiary\" color=\"tertiary\" fill=\"outline\">\n    \n        <ion-icon  slot=\"start\" name=\"hand\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"primary\" (click)=\"addInvitacion()\">\n      <ion-button expand=\"fixed\"  color=\"tertiary\" fill=\"outline\">\n        Nuevo\n        <ion-icon slot=\"end\" name=\"person-add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-searchbar color=\"dark\" animated \n                          (ionChange)=\"buscar( $event )\"></ion-searchbar>\n\n<!--<div class=\"c6\"> <h6 ></h6> </div> -->\n\n<ion-icon class=\"c6\" name=\"arrow-dropdown\" > </ion-icon>\n\n</ion-header>\n\n\n<ion-content class=\"contenido\">\n   \n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n      refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n\n<!--  | filtro: textoBuscar  -->\n  <ion-list class=\"contenido\" *ngIf=\"customer\">\n<ion-card  *ngFor=\"let customer of customers \" >\n  \n  <ion-item-sliding >     \n    <ion-item-options  side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n    </ion-item-options>\n\n    <ion-item class=\"principal\"  *ngIf=\"customer.login_id == user_id\"  >\n    <ion-item >\n    <ion-avatar item-start>  <img src=\"assets/pic.jpeg \"/> </ion-avatar>\n    </ion-item>\n      <ion-label text-left >  {{customer.name_customer}}</ion-label>\n      <ion-label slot=\"end\" text-right >{{customer.contact_customer}}</ion-label>\n      </ion-item>\n\n    <ion-item-options side=\"end\">\n\n      <ion-item-option color=\"secondary\"\n        (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Historial\n      </ion-item-option>\n\n      <ion-item-option color=\"dark\"\n      (click)=\"futbol_local(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Retar\n    </ion-item-option>\n\n      <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n        Transferir</ion-item-option>\n\n    </ion-item-options>\n  </ion-item-sliding>\n\n</ion-card>\n\n</ion-list>\n\n\n\n<ion-list *ngIf=\"!customer\">\n    <ion-card *ngFor=\"let customer of customers \"   >\n      \n      <ion-item-sliding    >     \n        <ion-item-options   side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n        </ion-item-options>\n    \n        <ion-item   *ngIf=\"customer.login_id == user_id\"  >\n          <ion-item>\n        <ion-avatar item-start> \n           <ion-skeleton-text animated width=\"80%\" > </ion-skeleton-text>\n          </ion-avatar>\n        </ion-item>\n          <ion-label text-left > \n              <ion-skeleton-text animated width=\"60%\" > </ion-skeleton-text>\n            </ion-label>\n          <ion-label slot=\"end\" text-right >\n              <ion-skeleton-text animated width=\"40%\" > </ion-skeleton-text>\n          </ion-label>\n          </ion-item>\n    \n        <ion-item-options side=\"end\">\n    \n          <ion-item-option color=\"secondary\"\n            (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.namedest,customer.ident,customer.login_id)\">Historial\n          </ion-item-option>\n    \n          <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n            Transferir</ion-item-option>\n    \n        </ion-item-options>\n      </ion-item-sliding>\n    \n    </ion-card>\n    \n    </ion-list>\n\n\n\n  <ion-infinite-scroll  (ionInfinite)=\"loadData($event)\">\n    \n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Contactos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n \n\n      <ion-fab  horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">          \n        <ion-fab-button color=\"dark\">\n          <ion-icon color=\"secondary\" name=\"finger-print\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"start\">\n          <ion-fab-button color=\"tertiary\" (click)=\"colores(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n            <ion-icon name=\"cash\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"warning\"  (click)=\"addRecarga()\" >\n              <ion-icon name=\"tablet-portrait\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"danger\" (click)=\"futbol_local()\">\n            <ion-icon name=\"pin\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"secondary\" (click)=\"alMundo()\">\n              <ion-icon name=\"planet\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n      \n      </ion-fab>\n  \n   \n \n</ion-content>"

/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list.contenido {\n  background: url(\"https://sellmatech.biz/images/41716.jpg\"); }\n\n.c6 {\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  width: 50%;\n  height: 40px;\n  border-radius: 20px;\n  background-color: transparent;\n  -webkit-animation: roll 2s 4s infinite;\n          animation: roll 2s 4s infinite; }\n\n@-webkit-keyframes roll {\n  to {\n    -webkit-transform: translate(0px, 20px);\n            transform: translate(0px, 20px);\n    background-color: transparent;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7); } }\n\n@keyframes roll {\n  to {\n    -webkit-transform: translate(0px, 20px);\n            transform: translate(0px, 20px);\n    background-color: transparent;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7); } }\n\nh1 {\n  position: absolute;\n  top: -15px;\n  color: white;\n  left: 50px;\n  text-align: center;\n  width: 50%; }\n\n/* ion-item.principal {\n    background: red;\n}\n */\n\n/*\nion-infinite-scroll.contenido {\n    background: url('https://sellmatech.biz/images/cancha.jpg');\n}\nion-infinite-scroll-content.contenido {\n    background: url('https://sellmatech.biz/images/cancha.jpeg');\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvQzpcXEdpb3Zhbm55XFxpb25pYzRsb2dpblxcbG9naW4vc3JjXFxhcHBcXGN1c3RvbWVyXFxjdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUEwRCxFQUFBOztBQVV2RDtFQUNLLGtCQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLFVBQVM7RUFDVCxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLDZCQUE0QjtFQUM1QixzQ0FBNkI7VUFBN0IsOEJBQTZCLEVBQUE7O0FBS3pDO0VBQ0k7SUFFSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLDZCQUE4QjtJQUM5Qix5Q0FBc0MsRUFBQSxFQUFBOztBQUw5QztFQUNJO0lBRUksdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQiw2QkFBOEI7SUFDOUIseUNBQXNDLEVBQUEsRUFBQTs7QUFROUM7RUFDSSxrQkFBa0I7RUFDbEIsVUFBUztFQUNULFlBQVk7RUFDWixVQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVMsRUFBQTs7QUFHYjs7O0VDaEJFOztBRG9CRjs7Ozs7O0dDYkciLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC5jb250ZW5pZG8ge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zZWxsbWF0ZWNoLmJpei9pbWFnZXMvNDE3MTYuanBnJyk7XG59XG5cblxuQGZ1bmN0aW9uIHJhZCgkbnVtYmVyKXtcbiAgICBAcmV0dXJuICRudW1iZXIgKiAzLjE0MTU5MjY1MzU5IC8gMTgwXG59XG5cblxuXG4gICAgICAgLmM2e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOjEwMHB4O1xuICAgICAgICAgICAgbGVmdDoxMDBweDtcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgICAgIGhlaWdodDo0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDsgICAgICAgIFxuICAgICAgICAgICAgYW5pbWF0aW9uOnJvbGwgMnMgNHMgaW5maW5pdGU7XG4gICAgXG4gICAgICAgICAgXG5cblxuQGtleWZyYW1lcyByb2xse1xuICAgIHRve1xuICAgICAgIFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMjBweCApIDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgOyBcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsMCwwLCAuNyk7XG4gICAgIFxuICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgXG59ICBcbn1cbiAgICAgICBcbmgxe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6LTE1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxlZnQ6NTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6NTAlO1xufVxuXG4vKiBpb24taXRlbS5wcmluY2lwYWwge1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cbiAqL1xuLypcbmlvbi1pbmZpbml0ZS1zY3JvbGwuY29udGVuaWRvIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vc2VsbG1hdGVjaC5iaXovaW1hZ2VzL2NhbmNoYS5qcGcnKTtcbn1cbmlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudC5jb250ZW5pZG8ge1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zZWxsbWF0ZWNoLmJpei9pbWFnZXMvY2FuY2hhLmpwZWcnKTtcbn0gKi9cbiIsImlvbi1saXN0LmNvbnRlbmlkbyB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vc2VsbG1hdGVjaC5iaXovaW1hZ2VzLzQxNzE2LmpwZ1wiKTsgfVxuXG4uYzYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDEwMHB4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IHJvbGwgMnMgNHMgaW5maW5pdGU7IH1cblxuQGtleWZyYW1lcyByb2xsIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMjBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7IH0gfVxuXG5oMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBsZWZ0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7IH1cblxuLyogaW9uLWl0ZW0ucHJpbmNpcGFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG4gKi9cbi8qXG5pb24taW5maW5pdGUtc2Nyb2xsLmNvbnRlbmlkbyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3NlbGxtYXRlY2guYml6L2ltYWdlcy9jYW5jaGEuanBnJyk7XG59XG5pb24taW5maW5pdGUtc2Nyb2xsLWNvbnRlbnQuY29udGVuaWRvIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vc2VsbG1hdGVjaC5iaXovaW1hZ2VzL2NhbmNoYS5qcGVnJyk7XG59ICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/customer/customer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");










//import { Router,  } from '@angular/router';
var CustomerPage = /** @class */ (function () {
    function CustomerPage(router, postPvdr, toastController, plt, fcm, 
    //private socket: Socket,
    localNotifications, lalertCtrl, storage, network, dialog, actRoute) {
        var _this = this;
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastController = toastController;
        this.plt = plt;
        this.fcm = fcm;
        this.localNotifications = localNotifications;
        this.lalertCtrl = lalertCtrl;
        this.storage = storage;
        this.network = network;
        this.dialog = dialog;
        this.actRoute = actRoute;
        this.customer = false;
        this.imagen = false;
        this.scheduled = [];
        this.customers = [];
        this.imagens = [];
        this.customeres = [];
        this.upsaldos = [];
        this.limit = 200;
        this.start = 0;
        //notificaciones
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
        //conexiones
        this.network.onDisconnect().subscribe(function () {
            _this.dialog.alert('No tienes Conexion a Internet');
        });
        this.network.onDisconnect().subscribe(function () {
            setTimeout(function () {
                _this.dialog.alert('Estas Conectado a:' + _this.network.type);
            }, 2000);
        });
        setTimeout(function () {
            _this.customer = true;
        }, 2000);
    }
    CustomerPage.prototype.ionViewDidLoad = function () {
        this.UpinProces();
    };
    CustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.user_id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.name_destinatario = data.namedest;
            _this.ident_destinatario = data.ident;
            _this.token = data.toke;
            console.log(data);
        });
        // this.UpinProces();
        // conexio SOCKET-IO
        //this.socket.connect();
        // Notificaciones con FCM 
        this.fcm.getToken().then(function (token) {
            // backend.registerToken(token);
            console.log(token);
            _this.token = token;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log("actualizacion del tokend " + token);
        });
        this.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                console.log('estamos en segundo pano' + JSON.stringify(data));
            }
            else {
                console.log('estamos en primer pano' + JSON.stringify(data));
                _this.localNotifications.schedule({
                    id: Math.floor((Math.random() * 100) + 1),
                    title: 'HOLA ' + _this.username,
                    text: 'Hay algo para ti en primer plano',
                    data: { mydata: 'estas en primer plano' },
                });
            }
        });
        this.localNotifications.on("click").subscribe(function (resultado) {
            console.log(JSON.stringify(resultado));
        });
        /*     this.actRoute.params.subscribe((data: any) =>{
           this.saldo = data.saldo;
                console.log(data);
        
            }); */
    };
    /*  public continuar(){
       this.navCtrl.setRoot(this.customer);
     }
    */
    CustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            // backend.registerToken(token);
            console.log(token);
            _this.token = token;
        });
        this.customers = [];
        this.imagens = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
        this.loadCustomer(this.login_id);
        // this.loadCustomer_Origina(this.login_id)
        this.loadSaldo();
        this.UpinProces();
        this.loadCustomer_notification(this.login_id);
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            //this.saldo = this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    CustomerPage.prototype.proseslogout = function () {
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
    /*  ionViewDidLoad(){
   
       return new Promise(resolve => {
         let body = {
           aksi: '456578980' ,
           
          // saldo : this.saldo
          
         };
         console.log(this.login_id);
   
         this.postPvdr.postData(body, 'file_aksi.php').subscribe(data => {
           if(data.result) {
             for(let customer of data.result) {
              this.customers.push(customer)
             if (data.success) {
            // this.storage.set('session_storage', data.result);
             this.scheduleNotification();
             console.log(data);
              }else {
              console.log('hay algo para mostrar para mostrar');
              
              this.scheduleNotification()
             }
             
              
           }
           }
         
           resolve(true);
         });
        
       });
     } */
    CustomerPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '11223344556677',
                    //monto_customer : this.monto_customer,
                    //saldo : this.saldo,  
                    user_id: this.user_id,
                    token: this.token
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        alertpesan = data.msg;
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /*   ionViewDidLoad(){
    let desconectar = this.network.onDisconnect().subscribe(() => {
      console.log('No hay Conexion a Internet');
      
    });
    let conectar = this.network.onDisconnect().subscribe(() =>{
      console.log('Ahora si estas conectado');
      setTimeout(()=> {
        
        if(this.network.type == 'wifi'){
          console.log('estas por wifi');
        }
        if(this.network.type == 'ethernet'){
          console.log('estas por Eternet');
        }
        if(this.network.type == 'cellular'){
          console.log('estas por celular');
        }
       
        
    
    
      }, 3000);
    });
    
      } */
    /* logueo(){
      this.storage.get('session_storage').then((res) => {
      
          this.router.navigate(['/customer']);
      });
    }
     */
    CustomerPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcontact']);
    };
    CustomerPage.prototype.salaChat = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/chat/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    CustomerPage.prototype.alMundo = function () {
        this.router.navigate(['/el-mundo']);
    };
    CustomerPage.prototype.futbol_local = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/juegos/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    CustomerPage.prototype.addRecarga = function () {
        this.router.navigate(['/recargas-miviles']);
    };
    CustomerPage.prototype.addInvitacion = function () {
        this.router.navigate(['/invitaciones']);
    };
    CustomerPage.prototype.updateCustomer = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/updatecustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    CustomerPage.prototype.colores = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    CustomerPage.prototype.showCustomer = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    CustomerPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    CustomerPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    CustomerPage.prototype.delCustomer = function (id) {
        var _this = this;
        var body = {
            aksi: 'delete',
            customer_id: id
        };
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (_data) {
            _this.ionViewWillEnter();
        });
    };
    //este es el original... el otro es de prueba
    CustomerPage.prototype.loadCustomer_Origina = function (_login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                contact_customer: _this.contact_customer,
                user_id: _this.user_id,
                login_id: _this.login_id,
                identificacion: _this.identificacion
                // saldo : this.saldo|
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var imagen = _a[_i];
                        _this.imagens.push(imagen);
                        /*  if (data.success) {
                         // this.storage.set('session_storage', data.result);
                          this.scheduleNotification();
                          console.log(data);
                         }else {
                         console.log('nada que mostrar');
                         
                         this.scheduleNotification()
                        } */
                    }
                }
                resolve(true);
            });
        });
    };
    CustomerPage.prototype.loadCustomer = function (_login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata_prueba',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id,
                login_id: _this.login_id,
                identificacion: _this.identificacion
                // saldo : this.saldo|
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var customer = _a[_i];
                        _this.customers.push(customer);
                        /*  if (data.success) {
                         // this.storage.set('session_storage', data.result);
                          this.scheduleNotification();
                          console.log(data);
                         }else {
                         console.log('nada que mostrar');
                         
                         this.scheduleNotification()
                        } */
                    }
                }
                resolve(true);
            });
        });
    };
    CustomerPage.prototype.loadCustomer_notification = function (_login_id) {
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
                        if (data.success) {
                            // this.storage.set('session_storage', data.result);
                            _this.scheduleNotification();
                            console.log(data);
                        }
                        else {
                            console.log('hay algo para mostrar para mostrar');
                            _this.scheduleNotification();
                        }
                    }
                }
                resolve(true);
            });
        });
    };
    /*   colores(id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login  + '/' + username + '/' + identificacion]);
      } */
    CustomerPage.prototype.loadSaldo = function () {
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
                        _this.UpinProces();
                        _this.upsaldos.push(upsaldo);
                    }
                }
                console.log(_this.saldo);
                resolve(true);
            });
        });
    };
    CustomerPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    CustomerPage.prototype.showAlert = function (header, sub, msg) {
        this.lalertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['OK']
        }).then(function (alert) { return alert.present(); });
    };
    CustomerPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'HOLA ' + this.username,
            text: 'Hay algo para ti ',
            data: { mydata: 'Revisa lo que te ha llegado' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["ELocalNotificationTriggerUnit"].SECOND },
        });
    };
    CustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.page.html */ "./src/app/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__["FCM"],
            _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["LocalNotifications"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__["Network"],
            _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__["Dialogs"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module.js.map