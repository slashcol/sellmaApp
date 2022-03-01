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

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"dark\" >\n      <ion-buttons slot=\"start\" >\n    <ion-button  expand=\"fixed\"  color=\"secondary\" fill=\"outline\">\n      {{username}}, Tu Recaudo es de  {{resultado}} \n      \n    </ion-button>\n  </ion-buttons>\n\n  \n\n  <!--   <ion-buttons  slot=\"end\" (click)=\"proseslogout()\" >\n      <ion-button expand=\"fixed\"  color=\"tertiary\" color=\"tertiary\" fill=\"outline\">\n    \n        <ion-icon  slot=\"start\" name=\"hand\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n\n     <ion-buttons slot=\"primary\" (click)=\"Updatelogin()\">\n      <ion-button expand=\"fixed\"  color=\"tertiary\" fill=\"outline\">\n       \n        <ion-icon slot=\"end\" name=\"calculator\"></ion-icon>\n      </ion-button>\n    </ion-buttons> \n  </ion-toolbar>\n\n  <ion-searchbar color=\"dark\" animated \n                          (ionChange)=\"buscar( $event )\"></ion-searchbar>\n\n<!--<div class=\"c6\"> <h6 ></h6> </div> -->\n\n<!-- <ion-icon class=\"c6\" name=\"arrow-dropdown\" > </ion-icon> -->\n\n</ion-header>\n\n\n<ion-content>\n   \n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n      refreshingText=\"Cargando Abonos de... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n\n<!--  | filtro: textoBuscar  -->\n  <ion-list *ngIf=\"customer\">\n<ion-card  *ngFor=\"let customer of customers \" >  \n  <ion-item-sliding >     \n<!--     <ion-item-options  side=\"start\">\n      <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n    </ion-item-options> -->\n\n    <ion-item   *ngIf=\"customer.login_id == user\"  >\n<!--     <ion-item >\n    <ion-avatar item-start>  <img src=\"assets/pic.jpeg \"/> </ion-avatar>\n    </ion-item> -->\n      <ion-label text-left >  {{customer.nombre}}</ion-label>\n      <ion-label slot=\"end\" text-right >{{customer.abono}}</ion-label>\n     \n      </ion-item>\n\n  \n  </ion-item-sliding>\n\n</ion-card>\n\n\n\n</ion-list>\n\n\n\n\n<ion-list *ngIf=\"!customer\">\n    <ion-card *ngFor=\"let customer of customers \"   >\n      \n      <ion-item-sliding    >     \n        <ion-item-options   side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"delCustomer(customer.customer_id)\">Eliminar</ion-item-option>\n        </ion-item-options>\n    \n        <ion-item   *ngIf=\"user == user\"  >\n          <ion-item>\n        <ion-avatar item-start> \n           <ion-skeleton-text animated width=\"80%\" > </ion-skeleton-text>\n          </ion-avatar>\n        </ion-item>\n          <ion-label text-left > \n              <ion-skeleton-text animated width=\"60%\" > </ion-skeleton-text>\n            </ion-label>\n          <ion-label slot=\"end\" text-right >\n              <ion-skeleton-text animated width=\"40%\" > </ion-skeleton-text>\n          </ion-label>\n          </ion-item>\n    \n        <ion-item-options side=\"end\">\n    \n          <ion-item-option color=\"secondary\"\n            (click)=\"showCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.namedest,customer.ident,customer.login_id)\">Historial\n          </ion-item-option>\n    \n          <ion-item-option (click)=\"updateCustomer(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n            Transferir</ion-item-option>\n    \n        </ion-item-options>\n      </ion-item-sliding>\n    \n    </ion-card>\n    \n    </ion-list>\n\n\n\n  <ion-infinite-scroll  (ionInfinite)=\"loadData($event)\">\n    \n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Contactos...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n <!-- \n\n      <ion-fab  horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">          \n        <ion-fab-button color=\"dark\">\n          <ion-icon color=\"secondary\" name=\"finger-print\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"start\">\n          <ion-fab-button color=\"tertiary\" (click)=\"colores(customer.customer_id,customer.name_customer,customer.desc_customer,customer.contact_customer,customer.login_id)\">\n            <ion-icon name=\"cash\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"warning\"  (click)=\"addRecarga()\" >\n              <ion-icon name=\"tablet-portrait\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"danger\" (click)=\"futbol_local()\">\n            <ion-icon name=\"pin\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button color=\"secondary\" (click)=\"alMundo()\">\n              <ion-icon name=\"planet\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n      \n      </ion-fab>\n   -->\n   \n \n</ion-content>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _ionic_native_dialogs_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/dialogs/ngx */ "./node_modules/@ionic-native/dialogs/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");










//import { Router,  } from '@angular/router';
var TransferPage = /** @class */ (function () {
    function TransferPage(router, postPvdr, toastController, plt, fcm, 
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
        this.total_r = 0;
        this.customer = false;
        this.imagen = false;
        this.scheduled = [];
        this.customers = [];
        this.imagens = [];
        this.customeres = [];
        this.upsaldos = [];
        this.limit = 200;
        this.start = 0;
        this.hora = new Date();
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
    TransferPage.prototype.ionViewDidLoad = function () {
        this.UpinProces();
    };
    TransferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.idMeta = data.id;
            _this.user = data.user;
            _this.nombre = data.name;
            _this.direccion = data.direc;
            _this.telefono = data.tele;
            _this.identificacion = data.identificacion;
            _this.codigo = data.codi;
            _this.valoratrasos = data.valora;
            _this.atrazos = data.atraz;
            _this.iniciocredito = data.inicioc;
            _this.ultimoabono = data.ultimoa;
            _this.valorcuota = data.valorc;
            _this.diadepago = data.diade;
            _this.abono = data.abon;
            _this.saldo = data.sald;
            _this.plazo = data.plazo;
            _this.credito = data.credi;
            _this.fest = data.fest;
            _this.login_id = data.login;
            _this.username = data.username;
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
    TransferPage.prototype.ionViewWillEnter = function () {
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
    TransferPage.prototype.Updatelogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    user_id: this.user_id,
                    username: this.username,
                    aksi: 'update_login'
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        alertpesan = data.msg;
                        this.proseslogout();
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
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
    TransferPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '11223344556677',
                    //monto_customer : this.monto_customer,
                    //saldo : this.saldo,  
                    user: this.user,
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
    TransferPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcontact']);
    };
    TransferPage.prototype.salaChat = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/chat/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    TransferPage.prototype.alMundo = function () {
        this.router.navigate(['/el-mundo']);
    };
    TransferPage.prototype.futbol_local = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/juegos/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    TransferPage.prototype.addRecarga = function () {
        this.router.navigate(['/recargas-miviles']);
    };
    TransferPage.prototype.addInvitacion = function () {
        this.router.navigate(['/invitaciones']);
    };
    TransferPage.prototype.updateCustomer = function (id, user, name, direc, tele, identificacion, codi, valora, atraz, inicioc, ultimoa, valorc, diade, abon, sald, plazo, credi, fest) {
        this.router.navigate(['/updatecustomer/' + id + '/' + user + '/' + name + '/' + direc + '/' + tele + '/' + identificacion + '/' + codi + '/' + valora + '/' + atraz + '/' + inicioc + '/' + ultimoa + '/' + valorc + '/' + diade + '/' + abon + '/' + sald + '/' + plazo + '/' + credi + '/' + fest]);
    };
    TransferPage.prototype.colores = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    TransferPage.prototype.showCustomer = function (id, user, name, direc, tele, identificacion, codi, valora, atraz, inicioc, ultimoa, valorc, diade, abon, sald, plazo, credi, fest) {
        this.router.navigate(['/showcustomer/' + id + '/' + user + '/' + name + '/' + direc + '/' + tele + '/' + identificacion + '/' + codi + '/' + valora + '/' + atraz + '/' + inicioc + '/' + ultimoa + '/' + valorc + '/' + diade + '/' + abon + '/' + sald + '/' + plazo + '/' + credi + '/' + fest]);
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
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (_data) {
            _this.ionViewWillEnter();
        });
    };
    //este es el original... el otro es de prueba
    TransferPage.prototype.loadCustomer_Origina = function (_login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                contact_customer: _this.contact_customer,
                user: _this.user,
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
    TransferPage.prototype.loadCustomer = function (_login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata_abonos',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id
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
    TransferPage.prototype.loadCustomer_notification = function (_login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: '456578980',
                limit: _this.limit,
                start: _this.start,
                user: _this.user,
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
    TransferPage.prototype.loadSaldo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata3',
                abono: _this.saldo,
                ultimoabono: _this.ultimoabono,
                user_id: _this.user_id
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    _this.resultado = JSON.stringify(data.result);
                }
                console.log(data);
                resolve(true);
            });
        });
    };
    TransferPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    TransferPage.prototype.showAlert = function (header, sub, msg) {
        this.lalertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['OK']
        }).then(function (alert) { return alert.present(); });
    };
    TransferPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'HOLA ' + this.username,
            text: 'Hay algo para ti ',
            data: { mydata: 'Revisa lo que te ha llegado' },
            trigger: { in: 5, unit: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_9__["ELocalNotificationTriggerUnit"].SECOND },
        });
    };
    TransferPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfer',
            template: __webpack_require__(/*! ./transfer.page.html */ "./src/app/transfer/transfer.page.html"),
            styles: [__webpack_require__(/*! ./transfer.page.scss */ "./src/app/transfer/transfer.page.scss")]
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
    ], TransferPage);
    return TransferPage;
}());



/***/ })

}]);
//# sourceMappingURL=transfer-transfer-module.js.map