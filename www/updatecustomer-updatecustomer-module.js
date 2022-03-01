(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["updatecustomer-updatecustomer-module"],{

/***/ "./src/app/updatecustomer/updatecustomer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.module.ts ***!
  \*********************************************************/
/*! exports provided: UpdatecustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecustomerPageModule", function() { return UpdatecustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updatecustomer.page */ "./src/app/updatecustomer/updatecustomer.page.ts");







var routes = [
    {
        path: '',
        component: _updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecustomerPage"]
    }
];
var UpdatecustomerPageModule = /** @class */ (function () {
    function UpdatecustomerPageModule() {
    }
    UpdatecustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_updatecustomer_page__WEBPACK_IMPORTED_MODULE_6__["UpdatecustomerPage"]]
        })
    ], UpdatecustomerPageModule);
    return UpdatecustomerPageModule;
}());



/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.html":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n\n      <ion-buttons slot=\"end\"  >\n    <ion-button  slot=\"end\" color=\"secondary\" fill=\"outline\">\n  {{nombre}}\n      <ion-icon name=\"trending-up\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Desliza hacia abajo para Actualizar\" refreshingSpinner=\"dots\"\n      refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n \n  <!--\n  <ion-item>\n    <ion-label position=\"floating\"> nombre </ion-label>\n    <ion-input type=\"label\" [(ngModel)]=\"name_customer\"></ion-input>\n  </ion-item>\n-->\n<!-- \n    <ion-label color=\"primary\" position=\"floating\"> Describe tu Transferencia </ion-label>\n    <ion-textarea color=\"medium\" [(ngModel)]=\"saldo\">  </ion-textarea>\n\n -->\n\n  <ion-item  >\n    <ion-label color=\"primary\" position=\"floating\"> Monto </ion-label>\n    <ion-input type=\"number\"  [(ngModel)]=\"abono\"> </ion-input>\n  </ion-item>\n\n \n\n  <ion-content padding >\n      <ion-button  expand=\"block\" color=\"tertiary\"  (click)=\"updateProses()\" fill=\"outline\">\n        Abonar $ {{ abono }} a {{ nombre }}\n        <ion-icon slot=\"end\" name=\"paper-plane\"></ion-icon>\n      </ion-button>\n      <br>\n      <br>\n\n      Saldo Actual:\n  <p class=\"data\" >{{ saldo }}   </p>   \n  Abono: \n  <p class=\"data\" >{{ abono }}   </p>  \n \n  <p class=\"data\" >=============  </p>  \n  Nuevo Saldo:\n  <p class=\"data\" >{{ saldo - abono }}   </p>    \n\n\n      \n  \n     <!--  <ion-button expand=\"block\" color=\"danger\" *ngIf=\"monto_customer > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n         Ups... $ {{ monto_customer }} superan tus $ {{ upsaldo.saldo }} de Saldo\n          <ion-icon slot=\"end\" name=\"paper-plane\"></ion-icon>\n        </ion-button>\n -->\n  </ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n  background-color: darkslategray; }\n\np {\n  text-align: center;\n  color: #797373; }\n\np.data {\n  color: #4b91e0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlY3VzdG9tZXIvQzpcXFVzZXJzXFx1c3VhcmlvXFxEb2N1bWVudHNcXGNhcmxvc1xcaW9uaWM0bG9naW5cXGxvZ2luL3NyY1xcYXBwXFx1cGRhdGVjdXN0b21lclxcdXBkYXRlY3VzdG9tZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQStCLEVBQUE7O0FBR25DO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQXlCLEVBQUE7O0FBRzdCO0VBRUksY0FBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZWN1c3RvbWVyL3VwZGF0ZWN1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICAgIFxyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDEyMSwgMTE1LCAxMTUpO1xyXG59XHJcblxyXG5wLmRhdGF7XHJcblxyXG4gICAgY29sb3I6IHJnYig3NSwgMTQ1LCAyMjQpO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/updatecustomer/updatecustomer.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/updatecustomer/updatecustomer.page.ts ***!
  \*******************************************************/
/*! exports provided: UpdatecustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecustomerPage", function() { return UpdatecustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");







var UpdatecustomerPage = /** @class */ (function () {
    function UpdatecustomerPage(postPvdr, router, fcm, toastController, actRoute, storage) {
        this.postPvdr = postPvdr;
        this.router = router;
        this.fcm = fcm;
        this.toastController = toastController;
        this.actRoute = actRoute;
        this.storage = storage;
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.user = '';
        this.nombre = '';
        this.direccion = '';
    }
    UpdatecustomerPage.prototype.ngOnInit = function () {
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
        //  this.ionViewWillEnter() ;
        this.fcm.getToken().then(function (token) {
            // backend.registerToken(token);
            console.log(token);
            _this.token = token;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            console.log("actualizacion del tokend " + token);
        });
    };
    UpdatecustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        //this.loadCustomer(this.login_id);
        //this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            //this.login_id = this.anggota.login_id;     
            /*  this.user = this.anggota.user;
             this.telefono = this.anggota.telefono; */
            _this.username = _this.anggota.username;
            _this.identificacion = _this.anggota.identificacion;
        });
    };
    UpdatecustomerPage.prototype.updateProses = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /*    if (this.name_customer == ''){
                     const toast = await this.toastController.create({
                       message: 'Customer is required',
                       duration: 2000
                     });
                     toast.present();
                   } else if (this.desc_customer == ''){
                     const toast = await this.toastController.create({
                       message: this.username +  ', Cuentale a ' + this.name_customer + ' de tu transferencia' ,
                       duration: 2000
                     });
                     toast.present();
                   } else if (this.monto_customer == null){
                     const toast = await this.toastController.create({
                       message: 'Ingresa Un Monto Valido',
                       duration: 2000
                     });
                     toast.present();
                   }  else if (this.abono == 0){
                     const toast = await this.toastController.create({
                       message: 'Ingresa Un Monto Valido',
                       duration: 2000
                     });
                     toast.present();
                     } else */ {
                    body = {
                        aksi: 'update',
                        idMeta: this.idMeta,
                        telefono: this.telefono,
                        nombre: this.nombre,
                        abono: this.abono,
                        saldo: this.saldo,
                        iniciocredito: this.iniciocredito,
                        codigo: this.codigo,
                        valorcuota: this.valorcuota,
                        plazo: this.plazo,
                    };
                    // if ( this.saldo > this.monto_customer  ) { 
                    this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var alertpesan, toast, toast;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    alertpesan = data.msg;
                                    if (!data.success) return [3 /*break*/, 2];
                                    this.registrarAbono();
                                    // this.abono = null ;
                                    this.router.navigate(['/customer']);
                                    return [4 /*yield*/, this.toastController.create({
                                            message: 'Abono Exitoso',
                                            duration: 2000
                                        })];
                                case 1:
                                    toast = _a.sent();
                                    console.log(this.abono);
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
                    /*
                    }else{
                      const toast = await this.toastController.create({
                        message: 'saldo',
                        duration: 2000
                      });
                      toast.present();
                    }
                    */
                }
                return [2 /*return*/];
            });
        });
    };
    UpdatecustomerPage.prototype.registrarAbono = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: 'updateAbono',
                    idMeta: this.idMeta,
                    user: this.user,
                    nombre: this.nombre,
                    direccion: this.direccion,
                    telefono: this.telefono,
                    identificacion: this.identificacion,
                    codigo: this.codigo,
                    valoratrasos: this.valoratrasos,
                    atrazos: this.atrazos,
                    iniciocredito: this.iniciocredito,
                    ultimoabono: this.ultimoabono,
                    valorcuota: this.valorcuota,
                    diadepago: this.diadepago,
                    abono: this.abono,
                    saldo: this.saldo,
                    plazo: this.plazo,
                    credito: this.credito
                };
                // if ( this.saldo > this.monto_customer  ) { 
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                this.router.navigate(['/customer']);
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Abono Exitoso',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                console.log(this.abono);
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
    //notificacion del envio
    UpdatecustomerPage.prototype.addNoti = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: 'Noti0817',
                };
                this.postPvdr.postData(body, 'notificaciones.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
    UpdatecustomerPage.prototype.proseslogout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Debes Ingresar de nuevo por seguridad',
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
    UpdatecustomerPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 500);
    };
    //aqui va la funcion para usar el salgo
    /*   async RecargaProces(){
        const toast = await this.toastController.create({
          message: 'Revisa Tu Monto',
          duration: 2000
     
        });
    
        this.monto_customer = null;
        //this.router.navigate(['/customer']);
      }
     */
    /*  async UpinProces(){
       let body = {
         aksi: '017834595',
         monto_customer : this.monto_customer,
        saldo : this.saldo,
         login_id : this.login_id,
       };
       this.postPvdr.postData(body, 'file_aksi.php').subscribe( async data => {
         var alertpesan = data.msg;
         if (data.success) {
           //this.proseslogout()
           // this.router.navigate(['/customer']);
           const toast = await this.toastController.create({
             message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
             duration: 2000
        
           });
           
           //console.log(this.contact_customer);
           toast.present();
         } else {
           const toast = await this.toastController.create({
             message: alertpesan,
             duration: 2000
           });
               }
       
         
       });
   
     }
    */
    /*  loadToken() {
     
       return new Promise(resolve => {
         let body = {
           aksi: 'tokenes',
         contact_customer: this.contact_customer,
           user_id :this.user_id
          
         };
         //console.log(this.login_id);
   
         this.postPvdr.postData(body, 'notificaciones.php').subscribe(data => {
           if(data.result) {
             for(let upsaldo of data.result) {
              this.upsaldos.push(upsaldo)
             
              
           }
           }
           console.log(this.saldo);
           resolve(true);
         });
        
       });
     }
    */
    UpdatecustomerPage.prototype.loadSaldo = function () {
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
    UpdatecustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatecustomer',
            template: __webpack_require__(/*! ./updatecustomer.page.html */ "./src/app/updatecustomer/updatecustomer.page.html"),
            styles: [__webpack_require__(/*! ./updatecustomer.page.scss */ "./src/app/updatecustomer/updatecustomer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_post_provider__WEBPACK_IMPORTED_MODULE_2__["PostProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], UpdatecustomerPage);
    return UpdatecustomerPage;
}());



/***/ })

}]);
//# sourceMappingURL=updatecustomer-updatecustomer-module.js.map