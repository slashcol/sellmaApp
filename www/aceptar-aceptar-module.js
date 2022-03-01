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

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"dark\" >\n <!--      <ion-buttons slot=\"start\"  *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button  expand=\"fixed\"  color=\"secondary\" fill=\"outline\">\n      Tu Saldo $ {{upsaldo.saldo}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons> -->  \n  <ion-buttons slot=\"start\">\n    <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n\n  <ion-searchbar color=\"dark\" animated \n                          (ionChange)=\"buscar( $event )\"></ion-searchbar>\n\n<!--<div class=\"c6\"> <h6 ></h6> </div> -->\n\n<!-- <ion-icon class=\"c6\" name=\"arrow-dropdown\" > </ion-icon> -->\n\n</ion-header>\n\n\n<ion-content color=\"dark\">\n   \n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n      refreshingText=\" Cargando clientes para {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n<!--  | filtro: textoBuscar  -->\n\n\n\n  <ion-list  *ngIf=\"customer\">\n<!--     <ion-reorder-group [disabled]=\"false\" \n    (ionItemReorder)=\"reorder( $event )\" > -->\n\n    \n<ion-card  *ngFor=\"let customer of customers \" >  \n  <ion-item-sliding >     \n  <!--   <ion-item-options  side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"llamada()\"> Llamar </ion-item-option>\n    </ion-item-options> -->\n\n    <ion-item   >\n<!--     <ion-item >\n    <ion-avatar item-start>  <img src=\"assets/pic.jpeg \"/> </ion-avatar>\n    </ion-item> -->\n      <ion-label text-left >  {{customer.nombre}}</ion-label>\n      <ion-label slot=\"end\" text-right >{{customer.telefono}}</ion-label>\n\n      <ion-reorder slot=\"end\">\n\n      </ion-reorder>\n      </ion-item>\n\n    <ion-item-options side=\"end\">\n \n      <ion-item-option color=\"secondary\"\n        (click)=\"showCustomer(customer.idMeta,customer.user,customer.nombre,customer.direccion,customer.telefono,customer.identificacion,customer.codigo,customer.valoratrasos,customer.atrazos,customer.iniciocredito,customer.ultimoabono,customer.valorcuota,customer.diadepago,customer.abono,customer.saldo,customer.plazo,customer.credito,customer.fest)\">Informacion\n      </ion-item-option>\n\n  <!--     <ion-item-option color=\"dark\"\n      (click)=\"futbol_local(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">Retar\n    </ion-item-option>\n -->\n      <ion-item-option (click)=\"updateCustomer(customer.idMeta,customer.user,customer.nombre,customer.direccion,customer.telefono,customer.identificacion,customer.codigo,customer.valoratrasos,customer.atrazos,customer.iniciocredito,customer.ultimoabono,customer.valorcuota,customer.diadepago,customer.abono,customer.saldo,customer.plazo,customer.credito,customer.fest)\">\n        Abonar</ion-item-option>\n\n    </ion-item-options>\n  </ion-item-sliding>\n\n</ion-card>\n<!-- </ion-reorder-group> -->\n</ion-list>\n\n\n\n<ion-list *ngIf=\"!customer\">\n    <ion-card *ngFor=\"let customer of customers \"   >\n      \n      <ion-item-sliding    >     \n        <ion-item-options   side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n        </ion-item-options>\n    \n        <ion-item    >\n          <ion-item>\n        <ion-avatar item-start> \n           <ion-skeleton-text animated width=\"80%\" > </ion-skeleton-text>\n          </ion-avatar>\n        </ion-item>\n          <ion-label text-left > \n              <ion-skeleton-text animated width=\"60%\" > </ion-skeleton-text>\n            </ion-label>\n          <ion-label slot=\"end\" text-right >\n              <ion-skeleton-text animated width=\"40%\" > </ion-skeleton-text>\n          </ion-label>\n          </ion-item>\n    \n        <ion-item-options side=\"end\">\n    \n          <ion-item-option color=\"secondary\"\n            (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.namedest,customer.ident,customer.login_id)\">Historial\n          </ion-item-option>\n    \n          <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n            Transferir</ion-item-option>\n    \n        </ion-item-options>\n      </ion-item-sliding>\n    \n    </ion-card>\n    \n    </ion-list>\n\n\n\n  <ion-infinite-scroll  (ionInfinite)=\"loadData($event)\">\n    \n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Contactos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n \n\n      <ion-fab  horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">          \n        <ion-fab-button color=\"dark\">\n          <ion-icon color=\"secondary\" name=\"finger-print\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"start\">\n          <ion-fab-button color=\"tertiary\" (click)=\"colores(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n            <ion-icon name=\"cash\"></ion-icon>\n          </ion-fab-button>\n         <!--  <ion-fab-button color=\"warning\"  (click)=\"addRecarga()\" >\n              <ion-icon name=\"tablet-portrait\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"danger\" (click)=\"futbol_local()\">\n            <ion-icon name=\"pin\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"secondary\" (click)=\"alMundo()\">\n              <ion-icon name=\"planet\"></ion-icon>\n            </ion-fab-button> -->\n        </ion-fab-list>\n      \n      </ion-fab>\n  \n   \n \n</ion-content>"

/***/ }),

/***/ "./src/app/aceptar/aceptar.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aceptar/aceptar.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c6 {\n  position: absolute;\n  top: 100px;\n  left: 100px;\n  width: 50%;\n  height: 40px;\n  border-radius: 20px;\n  background-color: transparent;\n  -webkit-animation: roll 2s 4s infinite;\n          animation: roll 2s 4s infinite; }\n\n@-webkit-keyframes roll {\n  to {\n    -webkit-transform: translate(0px, 20px);\n            transform: translate(0px, 20px);\n    background-color: transparent;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7); } }\n\n@keyframes roll {\n  to {\n    -webkit-transform: translate(0px, 20px);\n            transform: translate(0px, 20px);\n    background-color: transparent;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.7); } }\n\nh1 {\n  position: absolute;\n  top: -15px;\n  color: white;\n  left: 50px;\n  text-align: center;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNlcHRhci9DOlxcVXNlcnNcXHVzdWFyaW9cXERvY3VtZW50c1xcY2FybG9zXFxpb25pYzRsb2dpblxcbG9naW4vc3JjXFxhcHBcXGFjZXB0YXJcXGFjZXB0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNPO0VBQ0Msa0JBQWtCO0VBQ2xCLFVBQVM7RUFDVCxXQUFVO0VBQ1YsVUFBUztFQUNULFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsNkJBQTRCO0VBQzVCLHNDQUE2QjtVQUE3Qiw4QkFBNkIsRUFBQTs7QUFLckM7RUFDQTtJQUVJLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsNkJBQThCO0lBQzlCLHlDQUFzQyxFQUFBLEVBQUE7O0FBTDFDO0VBQ0E7SUFFSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLDZCQUE4QjtJQUM5Qix5Q0FBc0MsRUFBQSxFQUFBOztBQVExQztFQUNBLGtCQUFrQjtFQUNsQixVQUFTO0VBQ1QsWUFBWTtFQUNaLFVBQVM7RUFDVCxrQkFBa0I7RUFDbEIsVUFBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNlcHRhci9hY2VwdGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgIC5jNntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6MTAwcHg7XG4gICAgICAgIGxlZnQ6MTAwcHg7XG4gICAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDsgICAgICAgIFxuICAgICAgICBhbmltYXRpb246cm9sbCAycyA0cyBpbmZpbml0ZTtcblxuICAgICAgXG5cblxuQGtleWZyYW1lcyByb2xse1xudG97XG4gICBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMjBweCApIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCA7IFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLDAsMCwgLjcpO1xuIFxuICAgICBcbiAgICB9XG4gXG59ICBcbn1cbiAgIFxuaDF7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG50b3A6LTE1cHg7XG5jb2xvcjogd2hpdGU7XG5sZWZ0OjUwcHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG53aWR0aDo1MCU7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");










//import { Router,  } from '@angular/router';

var AceptarPage = /** @class */ (function () {
    function AceptarPage(router, postPvdr, toastController, plt, fcm, 
    //private socket: Socket,
    localNotifications, lalertCtrl, storage, network, dialog, actRoute, callNumber) {
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
        this.callNumber = callNumber;
        this.customer = false;
        this.imagen = false;
        this.scheduled = [];
        this.customers = [];
        this.imagens = [];
        this.customeres = [];
        this.upsaldos = [];
        this.limit = 200;
        this.start = 0;
        this.btnName = 'Enrutar';
        this.flag = false;
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
    AceptarPage.prototype.ionViewDidLoad = function () {
        this.UpinProces();
    };
    AceptarPage.prototype.ngOnInit = function () {
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
    AceptarPage.prototype.ionViewWillEnter = function () {
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
    AceptarPage.prototype.proseslogout = function () {
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
    AceptarPage.prototype.UpinProces = function () {
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
    AceptarPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcontact']);
    };
    AceptarPage.prototype.colores = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    AceptarPage.prototype.updateCustomer = function (id, user, name, direc, tele, identificacion, codi, valora, atraz, inicioc, ultimoa, valorc, diade, abon, sald, plazo, credi, fest) {
        this.router.navigate(['/updatecustomer/' + id + '/' + user + '/' + name + '/' + direc + '/' + tele + '/' + identificacion + '/' + codi + '/' + valora + '/' + atraz + '/' + inicioc + '/' + ultimoa + '/' + valorc + '/' + diade + '/' + abon + '/' + sald + '/' + plazo + '/' + credi + '/' + fest]);
    };
    AceptarPage.prototype.showCustomer = function (id, user, name, direc, tele, identificacion, codi, valora, atraz, inicioc, ultimoa, valorc, diade, abon, sald, plazo, credi, fest) {
        this.router.navigate(['/showcustomer/' + id + '/' + user + '/' + name + '/' + direc + '/' + tele + '/' + identificacion + '/' + codi + '/' + valora + '/' + atraz + '/' + inicioc + '/' + ultimoa + '/' + valorc + '/' + diade + '/' + abon + '/' + sald + '/' + plazo + '/' + credi + '/' + fest]);
    };
    AceptarPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    AceptarPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    AceptarPage.prototype.delCustomer = function (id) {
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
    AceptarPage.prototype.loadCustomer_Origina = function (_login_id) {
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
    AceptarPage.prototype.actionBtn = function () {
        this.flag = true;
    };
    AceptarPage.prototype.reorder = function (event) {
        console.log(event);
        var itemMover = this.customeres.splice(event.detail.from, 1)[0];
        this.customeres.splice(event.detail.to, 0, itemMover);
        /*  this.storage.set('session_storage', this.customers);
      */
        event.detail.complete();
    };
    AceptarPage.prototype.loadCustomer = function (_login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata_prueba_todos',
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
    AceptarPage.prototype.llamada = function () {
        this.callNumber.callNumber(this.customer[4], true)
            .then(function () { return console.log('Llamada exitosa!'); })
            .catch(function () { return console.log('Error al intentar llamar'); });
        console.log(this.customer[4]);
    };
    AceptarPage.prototype.loadCustomer_notification = function (_login_id) {
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
                        _this.UpinProces();
                        _this.upsaldos.push(upsaldo);
                    }
                }
                console.log(_this.saldo);
                resolve(true);
            });
        });
    };
    AceptarPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    AceptarPage.prototype.showAlert = function (header, sub, msg) {
        this.lalertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['OK']
        }).then(function (alert) { return alert.present(); });
    };
    AceptarPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'HOLA ' + this.username,
            text: 'Hay algo para ti ',
            data: { mydata: 'Revisa lo que te ha llegado' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["ELocalNotificationTriggerUnit"].SECOND },
        });
    };
    AceptarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aceptar',
            template: __webpack_require__(/*! ./aceptar.page.html */ "./src/app/aceptar/aceptar.page.html"),
            styles: [__webpack_require__(/*! ./aceptar.page.scss */ "./src/app/aceptar/aceptar.page.scss")]
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
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"]])
    ], AceptarPage);
    return AceptarPage;
}());



/***/ })

}]);
//# sourceMappingURL=aceptar-aceptar-module.js.map