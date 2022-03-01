(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recargas-miviles-recargas-miviles-module"],{

/***/ "./src/app/modal-movistar/modal-movistar.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modal-movistar/modal-movistar.module.ts ***!
  \*********************************************************/
/*! exports provided: ModalMovistarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMovistarPageModule", function() { return ModalMovistarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_movistar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-movistar.page */ "./src/app/modal-movistar/modal-movistar.page.ts");






/*
const routes: Routes = [
  {
    path: '',
    component: ModalMovistarPage
  }
];
 */
var ModalMovistarPageModule = /** @class */ (function () {
    function ModalMovistarPageModule() {
    }
    ModalMovistarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_modal_movistar_page__WEBPACK_IMPORTED_MODULE_5__["ModalMovistarPage"]]
        })
    ], ModalMovistarPageModule);
    return ModalMovistarPageModule;
}());



/***/ }),

/***/ "./src/app/modal-movistar/modal-movistar.page.html":
/*!*********************************************************!*\
  !*** ./src/app/modal-movistar/modal-movistar.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar color=\"dark\" >\n        <div   *ngFor=\"let upsaldo of upsaldos\" >\n      <ion-button slot=\"start\"  expand=\"block\" color=\"secondary\" fill=\"outline\">\n        Tienes para recargas $ {{upsaldo.saldo}}\n        <ion-icon name=\"phone-portrait\"></ion-icon>\n      </ion-button>\n     <!--  <ion-buttons slot=\"end\">\n          <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n        </ion-buttons>  -->\n      </div>\n    </ion-toolbar>\n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n  \n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n</ion-header>\n\n<ion-content color=\"dark\" padding fullscreen >\n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n          refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n        </ion-refresher-content>\n      </ion-refresher>\n<!-- \n<p>\n  {{ no_abonado }}  - {{ valor }} \n</p> -->\n\n<div class=\"carga-box\" >\n    <h1>Paquetes Movistar</h1>\n    \n    \n    \n    <div class=\"textbox\">\n      <input type=\"number\" [(ngModel)]=\"no_abonado\" placeholder=\"Numero\">\n    </div>\n    <br>\n<ion-item color=\"dark\" >\n    <ion-label color=\"light\" >Escoge Tu paquete</ion-label>\n    <ion-select color=\"dark\" [(ngModel)]=\"operador\" >\n      <ion-select-option value=\"102\">1 PAQUETE</ion-select-option>\n      <ion-select-option value=\"103\">2 PAQUETE</ion-select-option>\n      <ion-select-option  value=\"104\">3 PAQUETE</ion-select-option>\n      <ion-select-option value=\"105\"> 4 PAQUETE</ion-select-option>\n       <ion-select-option value=\"106\"> 5 PAQUETE</ion-select-option>\n      <ion-select-option value=\"107\"> 6 PAQUETE</ion-select-option>\n      <ion-select-option value=\"108\"> 7 PAQUETE</ion-select-option>\n      <ion-select-option value=\"109\"> 8 PAQUETE</ion-select-option>\n      <ion-select-option value=\"110\"> 9 PAQUETE</ion-select-option>\n      <ion-select-option value=\"111\"> 10 PAQUETE</ion-select-option>\n      <ion-select-option value=\"112\">11 PAQUETE</ion-select-option>\n      <ion-select-option value=\"113\">12 PAQUETE</ion-select-option>\n      <ion-select-option  value=147>13 PAQUETE</ion-select-option>\n      <ion-select-option value=\"148\"> 14 PAQUETE</ion-select-option>\n       <ion-select-option value=\"149\"> 15 PAQUETE</ion-select-option>\n      <ion-select-option value=\"150\"> 16 PAQUETE</ion-select-option>\n      <ion-select-option value=\"151\"> 17 PAQUETE</ion-select-option>\n      <ion-select-option value=\"152\"> 18 PAQUETE</ion-select-option>\n      <ion-select-option value=\"153\"> 19 PAQUETE</ion-select-option>\n      <ion-select-option value=\"154\"> 20 PAQUETE</ion-select-option>\n      <ion-select-option value=\"188\">21 PAQUETE</ion-select-option>\n      <ion-select-option value=\"189\">22 PAQUETE</ion-select-option>\n      <ion-select-option  value=\"235\">23 PAQUETE</ion-select-option>\n      <ion-select-option value=\"236\"> 24 PAQUETE</ion-select-option>\n       <ion-select-option value=\"237\"> 25 PAQUETE</ion-select-option>\n      <ion-select-option value=\"238\"> 26 PAQUETE</ion-select-option>\n  \n    </ion-select>\n  </ion-item>\n  \n\n<!--  <ion-button  (click)=\"EnviarDatos()\"\n             color=\"secondary\" expand=\"full\" >\n   Listo\n </ion-button>\n-->\n\n<div class=\"textbox\">\n  <input type=\"number\" [(ngModel)]=\"valor\" placeholder=\"Valor\">\n</div>\n \n  \n    \n  \n    \n  \n    \n   \n    <!-- <ion-grid fixed>\n      <ion-row >\n        <ion-col size-sm=\"3\" size-lg=\"3\" size-md=\"3\" size=\"3\" size-xs=\"3\" *ngFor=\"let imagen of imagenes\"  >        \n           <ion-buttons>\n              <ion-button>\n          <ion-avatar item-start>  <img src=\"{{imagen}}\"/> </ion-avatar>                  \n        </ion-button>\n      </ion-buttons>\n        </ion-col>\n     \n      </ion-row>\n    </ion-grid> -->    \n  \n    <br>\n      \n    <div *ngFor=\"let upsaldo of upsaldos\"  >\n      <ion-button  expand=\"block\" color=\"success\" *ngIf=\"upsaldo.saldo >= valor\"  (click)=\"hacerRecarga()\" fill=\"outline\">\n        Recargar $ {{ valor }} al {{ no_abonado }}\n        <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n      </ion-button>\n  \n      <ion-button expand=\"block\" color=\"danger\" *ngIf=\"valor > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n         Ups... $ {{ upsaldo.saldo }}  no alcanza\n          <ion-icon slot=\"start\" name=\"outlet\"></ion-icon>\n        </ion-button>\n  \n      </div>  \n  \n \n  <br>\n    <button  (click)=\"salirSinNada()\" class=\"btn2\">Mejor en otro momento</button> \n    </div>\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n     <div>\n       <p>1- 10MB+10MIN+25WP_1D $1,000 </p>\n       <p>2- 50MB+20MIN+70WP_3D $3,000</p>\n       <p>3- Min Ilimit Todo Operador+150MB Full +300MB de WHTP +130MB de FBK y TWIT +10 SMS 7D $6,000</p>\n       <p>4- 15 DIAS o 320MB Redes y Wp+500MB+100SMS TD+Ilimitado TD $20,000</p>\n       <p>5- 100MB_1D $1,700</p>\n       <p>6- 210MB_2D $3,200</p>\n       <p>7- 500 MB de Datos Full $4,900</p>\n       <p>8- 7 DIAS o 1434MB de Internet + 150MB Whatsapp 13,900</p>\n       <p>9- 20MIN_1D $1,000</p>\n       <p>10- 50MIN_3D $2,900</p>\n       <p>11- 85MIN_7D $4,900</p>\n       <p>12- 550MIN_30D  $22,900</p>\n       <p>13- 1GB+MIN ILIMITDOS_7D  $10,000</p>\n       <p>14- 2GB+MINILIMTADOS_15D   $20,000</p>\n       <p>15- Full 2.5 GB + 200 MB WhatsApp 15D  $24,900</p>\n       <p>16- Activa 200 minutos Todo Destino 30 dias $9,900</p>\n       <p>17- Minutos Ilimitados Todo Destino 30 dias $30,000</p>\n       <p>18- 5 Minutos a Venezuela  $1,000</p>\n       <p>19- 25 Minutos a Venezuela  $5,500</p>\n       <p>20- 100 Minutos a Venezuela $20,000</p>\n       <p>21- MINILIM+1.7GB_30D $40,000</p>\n       <p>22- MINILIM+990MB_30D $25,000</p>\n       <p>23- Ilim Mov+50MB Full +20Min TodoOperador +70MB de WHTP +50MB de FB y TWIT +5SMS $3,000</p>\n       <p>24- 100 Min Todo Operador +2GB Full +SMS Ilimitados Movistar +20 SMS 15D  $20,000</p>\n       <p>25- 20 minutos (1.200 segundos) a Todo Operador  $1,000</p>\n       <p>26- MIN ILIMTS TODO OPERADOR + 1.8 GB Full +550MB Chat Whtpp +500MB FB y TW +80SMS 30D $40,000</p>\n  \n     </div>\n  \n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/modal-movistar/modal-movistar.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/modal-movistar/modal-movistar.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carga-box {\n  width: 280px;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white; }\n\nh6 {\n  color: #4caf50;\n  text-align: center; }\n\n.carga-box h1 {\n  float: left;\n  font-size: 30px;\n  border-bottom: 6px solid #4caf50;\n  margin-bottom: 50px;\n  padding: 13px 0; }\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 30px;\n  padding: 8px, 0;\n  margin: 8px, 0;\n  border-bottom: 1px solid #4caf50; }\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 20px;\n  float: left;\n  margin: 10px; }\n\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #4caf50;\n  color: white;\n  padding: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n.btn2 {\n  width: 100%;\n  background: none;\n  border: 2px solid #2e81b8;\n  color: white;\n  padding: 5px;\n  font-size: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtbW92aXN0YXIvQzpcXEdpb3Zhbm55XFxpb25pYzRsb2dpblxcbG9naW4vc3JjXFxhcHBcXG1vZGFsLW1vdmlzdGFyXFxtb2RhbC1tb3Zpc3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixZQUFhLEVBQUE7O0FBR2pCO0VBQ0csY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFakI7RUFDSyxXQUFXO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUlmO0VBQ0ksV0FBVztFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtbW92aXN0YXIvbW9kYWwtbW92aXN0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmdhLWJveHtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGNvbG9yOiAgd2hpdGU7XG5cbn1cbmg2e1xuICAgY29sb3I6ICM0Y2FmNTA7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJnYS1ib3ggaDF7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjNGNhZjUwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogMTNweCAwO1xufVxuXG4udGV4dGJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiA4cHgsIDA7XG4gICAgbWFyZ2luOiA4cHgsIDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Y2FmNTA7XG59XG4udGV4dGJveCBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgIG1hcmdpbjogMTBweDtcbn1cbi5idG57XG4gICAgIHdpZHRoOiAxMDAlO1xuYmFja2dyb3VuZDogbm9uZTtcbmJvcmRlcjogMnB4IHNvbGlkICM0Y2FmNTA7XG5jb2xvcjogd2hpdGU7XG5wYWRkaW5nOiA1cHg7XG5mb250LXNpemU6IDI1cHg7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmJ0bjJ7XG4gICAgd2lkdGg6IDEwMCU7XG5iYWNrZ3JvdW5kOiBub25lO1xuYm9yZGVyOiAycHggc29saWQgIzJlODFiODtcbmNvbG9yOiB3aGl0ZTtcbnBhZGRpbmc6IDVweDtcbmZvbnQtc2l6ZTogMjBweDtcbmN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modal-movistar/modal-movistar.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/modal-movistar/modal-movistar.page.ts ***!
  \*******************************************************/
/*! exports provided: ModalMovistarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalMovistarPage", function() { return ModalMovistarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
//import { ModalRecargasPage } from '../modal-recargas/modal-recargas.page';
var ModalMovistarPage = /** @class */ (function () {
    function ModalMovistarPage(router, toastController, storage, modalCtr, actRoute, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.modalCtr = modalCtr;
        this.actRoute = actRoute;
        this.postPvdr = postPvdr;
        /*  operador= {
        oper:null
      }  */
        this.data = [
            {
                name: 'Claro',
                color: 'danger',
                selected: false
            },
            {
                name: 'Movistar',
                color: 'success',
                selected: false
            },
            {
                name: 'Tigo',
                color: 'secondary',
                selected: false
            },
            {
                name: 'Virgin',
                color: 'tertiary',
                selected: false
            }
        ];
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.no_abonado = '';
        this.valor = '';
        this.customer = false;
        this.operador = [];
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.imagenes = [
            'assets/comunic/claro.jpeg',
            'assets/comunic/movistar.jpeg',
            'assets/comunic/tigo.jpeg',
            'assets/comunic/virgin.png',
        ];
    }
    ModalMovistarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            console.log(data);
        });
    };
    ModalMovistarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.saldo = _this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    ModalMovistarPage.prototype.salirSinNada = function () {
        this.modalCtr.dismiss();
    };
    ModalMovistarPage.prototype.EnviarDatos = function () {
        this.modalCtr.dismiss({
            producto: '1',
            operador: 'claro'
        });
    };
    ModalMovistarPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    ModalMovistarPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    ModalMovistarPage.prototype.hacerRecarga = function () {
        this.UpinProces();
        this.modalCtr.dismiss();
        this.addRecarga();
    };
    ModalMovistarPage.prototype.addRecarga = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.no_abonado == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero valido',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(this.operador == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingrese un operador movil',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.valor == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'ingresa un valor valido',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 6:
                        body = {
                            aksi: '345456789',
                            saldo: this.saldo,
                            user_id: this.user_id,
                            no_abonado: this.no_abonado,
                            valor: this.valor,
                            operador: this.operador
                        };
                        this.postPvdr.postData(body, 'mi_version.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        //console.log(this.contact_customer);
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        console.log('aqui no pasa nada');
                                        return [4 /*yield*/, this.toastController.create({
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
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ModalMovistarPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '87081721321',
                    valor: this.valor,
                    saldo: this.saldo,
                    user_id: this.user_id,
                    login_id: this.login_id,
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                this.proseslogout();
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                console.log(this.valor);
                                console.log(this.saldo);
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
    ModalMovistarPage.prototype.proseslogout = function () {
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
    ModalMovistarPage.prototype.loadSaldo = function () {
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
    //claro
    /* async datosClaro(){
     const modal = await this.modalCtr.create({
        component: ModalRecargasPage,
        componentProps:{
          no_abonado: this.no_abonado,
          valor: this.valor,
          paquete: '',
          operador: ''
         
        }
      });
    await modal.present();
    
      const { data } = await modal.onDidDismiss();
    
      console.log('Mostrara', data);
      
    
    } */
    /*
    async datosMovistar(){
      const modal = await this.modalCtr.create({
         component: ModalMovistarPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosTigo(){
      const modal = await this.modalCtr.create({
         component: ModalTigoPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosVirgin(){
      const modal = await this.modalCtr.create({
         component: ModalVirginPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
     */
    ModalMovistarPage.prototype.onClick = function (check) {
        console.log(check);
    };
    ModalMovistarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-movistar',
            template: __webpack_require__(/*! ./modal-movistar.page.html */ "./src/app/modal-movistar/modal-movistar.page.html"),
            styles: [__webpack_require__(/*! ./modal-movistar.page.scss */ "./src/app/modal-movistar/modal-movistar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], ModalMovistarPage);
    return ModalMovistarPage;
}());



/***/ }),

/***/ "./src/app/modal-recargas/modal-recargas.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modal-recargas/modal-recargas.module.ts ***!
  \*********************************************************/
/*! exports provided: ModalRecargasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRecargasPageModule", function() { return ModalRecargasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_recargas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-recargas.page */ "./src/app/modal-recargas/modal-recargas.page.ts");






/* const routes: Routes = [
  {
    path: '',
    component: ModalRecargasPage
  }
]; */
var ModalRecargasPageModule = /** @class */ (function () {
    function ModalRecargasPageModule() {
    }
    ModalRecargasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_modal_recargas_page__WEBPACK_IMPORTED_MODULE_5__["ModalRecargasPage"]]
        })
    ], ModalRecargasPageModule);
    return ModalRecargasPageModule;
}());



/***/ }),

/***/ "./src/app/modal-recargas/modal-recargas.page.html":
/*!*********************************************************!*\
  !*** ./src/app/modal-recargas/modal-recargas.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar color=\"dark\" >\n        <div   *ngFor=\"let upsaldo of upsaldos\" >\n      <ion-button slot=\"start\"  expand=\"block\" color=\"secondary\" fill=\"outline\">\n        Tienes para recargas $ {{upsaldo.saldo}}\n        <ion-icon name=\"phone-portrait\"></ion-icon>\n      </ion-button>\n     <!--  <ion-buttons slot=\"end\">\n          <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n        </ion-buttons>  -->\n      </div>\n    </ion-toolbar>\n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n  \n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n</ion-header>\n\n<ion-content color=\"dark\" padding fullscreen >\n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n          refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n        </ion-refresher-content>\n      </ion-refresher>\n    \n<!-- \n  <p>\n    {{ no_abonado }}  - {{ valor }} \n  </p> -->\n\n  <div class=\"carga-box\" >\n      <h1>Paquetes Claro</h1>\n      \n      \n      \n      <div class=\"textbox\">\n        <input type=\"number\" [(ngModel)]=\"no_abonado\" placeholder=\"Numero\">\n      </div>\n      <br>\n  <ion-item color=\"dark\" >\n      <ion-label color=\"light\" >Escoge Tu paquete</ion-label>\n      <ion-select color=\"dark\" [(ngModel)]=\"operador\" >\n          <ion-select-option value=\"244\">1 PAQUETE</ion-select-option>\n          <ion-select-option value=\"245\">2 PAQUETE</ion-select-option>\n          <ion-select-option  value=\"246\">3 PAQUETE</ion-select-option>\n          <ion-select-option value=\"238\"> 4 PAQUETE</ion-select-option>\n           <ion-select-option value=\"248\"> 5 PAQUETE</ion-select-option>\n          <ion-select-option value=\"73\"> 6 PAQUETE</ion-select-option>\n          <ion-select-option value=\"249\"> 7 PAQUETE</ion-select-option>\n          <ion-select-option value=\"68\"> 8 PAQUETE</ion-select-option>\n          <ion-select-option value=\"70\"> 9 PAQUETE</ion-select-option>\n          <ion-select-option value=\"74\"> 10 PAQUETE</ion-select-option>\n          <ion-select-option value=\"98\">11 PAQUETE</ion-select-option>\n          <ion-select-option value=\"186\">12 PAQUETE</ion-select-option>\n          <ion-select-option  value=71>13 PAQUETE</ion-select-option>\n          <ion-select-option value=\"72\"> 14 PAQUETE</ion-select-option>\n           <ion-select-option value=\"64\"> 15 PAQUETE</ion-select-option>\n          <ion-select-option value=\"65\"> 16 PAQUETE</ion-select-option>\n          <ion-select-option value=\"66\"> 17 PAQUETE</ion-select-option>\n          <ion-select-option value=\"250\"> 18 PAQUETE</ion-select-option>\n          <ion-select-option value=\"251\"> 19 PAQUETE</ion-select-option>\n          <ion-select-option value=\"252\"> 20 PAQUETE</ion-select-option>\n          <ion-select-option value=\"253\">21 PAQUETE</ion-select-option>\n          <ion-select-option value=\"92\">22 PAQUETE</ion-select-option>\n          <ion-select-option  value=\"181\">23 PAQUETE</ion-select-option>\n          <ion-select-option value=\"179\"> 24 PAQUETE</ion-select-option>\n           <ion-select-option value=\"95\"> 25 PAQUETE</ion-select-option>\n          <ion-select-option value=\"76\"> 26 PAQUETE</ion-select-option>\n    \n      </ion-select>\n    </ion-item>\n    \n\n  <!--  <ion-button  (click)=\"EnviarDatos()\"\n               color=\"secondary\" expand=\"full\" >\n     Listo\n   </ion-button>\n-->\n\n<div class=\"textbox\">\n    <input type=\"number\" [(ngModel)]=\"valor\" placeholder=\"Valor\">\n  </div>\n   \n    \n      \n    \n      \n    \n      \n     \n      <!-- <ion-grid fixed>\n        <ion-row >\n          <ion-col size-sm=\"3\" size-lg=\"3\" size-md=\"3\" size=\"3\" size-xs=\"3\" *ngFor=\"let imagen of imagenes\"  >        \n             <ion-buttons>\n                <ion-button>\n            <ion-avatar item-start>  <img src=\"{{imagen}}\"/> </ion-avatar>                  \n          </ion-button>\n        </ion-buttons>\n          </ion-col>\n       \n        </ion-row>\n      </ion-grid> -->    \n    \n      <br>\n      \n      <div *ngFor=\"let upsaldo of upsaldos\"  >\n        <ion-button  expand=\"block\" color=\"success\" *ngIf=\"upsaldo.saldo >= valor\"  (click)=\"hacerRecarga()\" fill=\"outline\">\n          Recargar $ {{ valor }} al {{ no_abonado }}\n          <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n        </ion-button>\n    \n        <ion-button expand=\"block\" color=\"danger\" *ngIf=\"valor > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n           Ups... $ {{ upsaldo.saldo }}  no alcanza\n            <ion-icon slot=\"start\" name=\"outlet\"></ion-icon>\n          </ion-button>\n    \n        </div>\n    \n      \n    \n   \n    <br>\n      <button  (click)=\"salirSinNada()\" class=\"btn2\">Mejor en otro momento</button> \n      </div>\n\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n   <div>\n     <p>1- 6D $6,000 Llamadas y sms ilimitados+170Mb incluye Whatsp,Facebook y Twitter </p>\n     <p>2- 10D $10,000 Llamadas y sms ilimitados+400Mb incluye Whatsp,Facebook y Twitter</p>\n     <p>3- 20D $20,000 Llamadas y sms ilimitados+850Mb incluye Whatsp,Facebook y Twitter</p>\n     <p>4- 30D $40,000 Llamadas y sms ilimitados + 1.8GB incluye Whatsp, Facebook y Twitter</p>\n     <p>5- 15D $20,000 TD Ilimitados Internet 2GB Minutos y SMS</p>\n     <p>6- 5D  $5,000 100 MINUTOS</p>\n     <p>7- $3,000 50 Min TD.+ Internet 60MB + WhatsApp + Facebook + Twitter + 500 SMS  </p>\n     <p>8- $3,000 2 DIAS 60 MINUTOS </p>\n     <p>9- $1,000 1 DIA 20 MINUTOS</p>\n     <p>10- $9,900 20 DIAS 200 MINUTOS</p>\n     <p>11- $5,000 18 minutos a venezuela</p>\n     <p>12- $5,000 30MIN USA CAN PR MEX</p>\n     <p>13- $2,000 1 DIA  100MB Navegacion</p>\n     <p>14- $4,000 3 DIAS  220MB Navegacion</p>\n     <p>15- $2,000 1 DIA  50MB + Whatsapp + Facebook + Twitter</p>\n     <p>16- $4,000 3 DIAS 120MB + Whatsapp + Facebook + Twitter</p>\n     <p>17- $15,000 7 DIAS 500MB + Whatsapp + Facebook + Twitter</p>\n     <p>18- INALAMBRICO 2GB $21,900</p>\n     <p>19- INALAMBRICO 2GB $39,900</p>\n     <p>20- INALAMBRICO 10GB $59,900</p>\n     <p>21- INALAMBRICO 20GB $99,900</p>\n     <p>22- 1dia $2,500 Instagram</p>\n     <p>23- 7D $15,000 INSTAGRAM_ILIMIT</p>\n     <p>24- Navegacion Ilimitada 2 horas $5,000</p>\n     <p>25- youtube 1 hora $3,000</p>\n     <p>26- Whatsapp 30 DIAS $18,000</p>\n\n   </div>\n\n    \n    \n    </ion-content>\n    \n"

/***/ }),

/***/ "./src/app/modal-recargas/modal-recargas.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/modal-recargas/modal-recargas.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carga-box {\n  width: 280px;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white; }\n\nh6 {\n  color: #4caf50;\n  text-align: center; }\n\n.carga-box h1 {\n  float: left;\n  font-size: 30px;\n  border-bottom: 6px solid #4caf50;\n  margin-bottom: 50px;\n  padding: 13px 0; }\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 30px;\n  padding: 8px, 0;\n  margin: 8px, 0;\n  border-bottom: 1px solid #4caf50; }\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 20px;\n  float: left;\n  margin: 10px; }\n\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #4caf50;\n  color: white;\n  padding: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n.btn2 {\n  width: 100%;\n  background: none;\n  border: 2px solid #2e81b8;\n  color: white;\n  padding: 5px;\n  font-size: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtcmVjYXJnYXMvQzpcXEdpb3Zhbm55XFxpb25pYzRsb2dpblxcbG9naW4vc3JjXFxhcHBcXG1vZGFsLXJlY2FyZ2FzXFxtb2RhbC1yZWNhcmdhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixZQUFhLEVBQUE7O0FBR2pCO0VBQ0csY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFakI7RUFDSyxXQUFXO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUlmO0VBQ0ksV0FBVztFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtcmVjYXJnYXMvbW9kYWwtcmVjYXJnYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmdhLWJveHtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIGNvbG9yOiAgd2hpdGU7XG5cbn1cbmg2e1xuICAgY29sb3I6ICM0Y2FmNTA7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJnYS1ib3ggaDF7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjNGNhZjUwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogMTNweCAwO1xufVxuXG4udGV4dGJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nOiA4cHgsIDA7XG4gICAgbWFyZ2luOiA4cHgsIDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Y2FmNTA7XG59XG4udGV4dGJveCBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICBjb2xvcjogd2hpdGU7XG4gICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgIG1hcmdpbjogMTBweDtcbn1cbi5idG57XG4gICAgIHdpZHRoOiAxMDAlO1xuYmFja2dyb3VuZDogbm9uZTtcbmJvcmRlcjogMnB4IHNvbGlkICM0Y2FmNTA7XG5jb2xvcjogd2hpdGU7XG5wYWRkaW5nOiA1cHg7XG5mb250LXNpemU6IDI1cHg7XG5jdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmJ0bjJ7XG4gICAgd2lkdGg6IDEwMCU7XG5iYWNrZ3JvdW5kOiBub25lO1xuYm9yZGVyOiAycHggc29saWQgIzJlODFiODtcbmNvbG9yOiB3aGl0ZTtcbnBhZGRpbmc6IDVweDtcbmZvbnQtc2l6ZTogMjBweDtcbmN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modal-recargas/modal-recargas.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/modal-recargas/modal-recargas.page.ts ***!
  \*******************************************************/
/*! exports provided: ModalRecargasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalRecargasPage", function() { return ModalRecargasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
//import { ModalRecargasPage } from '../modal-recargas/modal-recargas.page';
/*
import { ModalMovistarPage } from '../modal-movistar/modal-movistar.page';
import { ModalTigoPage } from '../modal-tigo/modal-tigo.page';
import { ModalVirginPage } from '../modal-virgin/modal-virgin.page';
 */
var ModalRecargasPage = /** @class */ (function () {
    function ModalRecargasPage(router, toastController, storage, modalCtr, actRoute, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.modalCtr = modalCtr;
        this.actRoute = actRoute;
        this.postPvdr = postPvdr;
        /*  operador= {
          oper:null
        }  */
        this.data = [
            {
                name: 'Claro',
                color: 'danger',
                selected: false
            },
            {
                name: 'Movistar',
                color: 'success',
                selected: false
            },
            {
                name: 'Tigo',
                color: 'secondary',
                selected: false
            },
            {
                name: 'Virgin',
                color: 'tertiary',
                selected: false
            }
        ];
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.no_abonado = '';
        this.valor = '';
        this.customer = false;
        this.operador = [];
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.imagenes = [
            'assets/comunic/claro.jpeg',
            'assets/comunic/movistar.jpeg',
            'assets/comunic/tigo.jpeg',
            'assets/comunic/virgin.png',
        ];
    }
    ModalRecargasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            console.log(data);
        });
    };
    ModalRecargasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.saldo = _this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    ModalRecargasPage.prototype.salirSinNada = function () {
        this.modalCtr.dismiss();
    };
    ModalRecargasPage.prototype.EnviarDatos = function () {
        this.modalCtr.dismiss({
            producto: '1',
            operador: 'claro'
        });
    };
    ModalRecargasPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    ModalRecargasPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    ModalRecargasPage.prototype.hacerRecarga = function () {
        this.UpinProces();
        this.modalCtr.dismiss();
        this.addRecarga();
    };
    ModalRecargasPage.prototype.addRecarga = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.no_abonado == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero valido',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(this.operador == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingrese un operador movil',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.valor == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'ingresa un valor valido',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 6:
                        body = {
                            aksi: '345456789',
                            saldo: this.saldo,
                            user_id: this.user_id,
                            no_abonado: this.no_abonado,
                            valor: this.valor,
                            operador: this.operador
                        };
                        this.postPvdr.postData(body, 'mi_version.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        //console.log(this.contact_customer);
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        console.log('aqui no pasa nada');
                                        return [4 /*yield*/, this.toastController.create({
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
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ModalRecargasPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '87081721321',
                    valor: this.valor,
                    saldo: this.saldo,
                    user_id: this.user_id,
                    login_id: this.login_id,
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                this.proseslogout();
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                console.log(this.valor);
                                console.log(this.saldo);
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
    ModalRecargasPage.prototype.proseslogout = function () {
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
    ModalRecargasPage.prototype.loadSaldo = function () {
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
    //claro
    /* async datosClaro(){
     const modal = await this.modalCtr.create({
        component: ModalRecargasPage,
        componentProps:{
          no_abonado: this.no_abonado,
          valor: this.valor,
          paquete: '',
          operador: ''
         
        }
      });
    await modal.present();
    
      const { data } = await modal.onDidDismiss();
    
      console.log('Mostrara', data);
      
    
    } */
    /*
    async datosMovistar(){
      const modal = await this.modalCtr.create({
         component: ModalMovistarPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosTigo(){
      const modal = await this.modalCtr.create({
         component: ModalTigoPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosVirgin(){
      const modal = await this.modalCtr.create({
         component: ModalVirginPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
     */
    ModalRecargasPage.prototype.onClick = function (check) {
        console.log(check);
    };
    ModalRecargasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-recargas',
            template: __webpack_require__(/*! ./modal-recargas.page.html */ "./src/app/modal-recargas/modal-recargas.page.html"),
            styles: [__webpack_require__(/*! ./modal-recargas.page.scss */ "./src/app/modal-recargas/modal-recargas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], ModalRecargasPage);
    return ModalRecargasPage;
}());



/***/ }),

/***/ "./src/app/modal-tigo/modal-tigo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modal-tigo/modal-tigo.module.ts ***!
  \*************************************************/
/*! exports provided: ModalTigoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTigoPageModule", function() { return ModalTigoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_tigo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-tigo.page */ "./src/app/modal-tigo/modal-tigo.page.ts");






/* const routes: Routes = [
  {
    path: '',
    component: ModalTigoPage
  }
];
 */
var ModalTigoPageModule = /** @class */ (function () {
    function ModalTigoPageModule() {
    }
    ModalTigoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            declarations: [_modal_tigo_page__WEBPACK_IMPORTED_MODULE_5__["ModalTigoPage"]]
        })
    ], ModalTigoPageModule);
    return ModalTigoPageModule;
}());



/***/ }),

/***/ "./src/app/modal-tigo/modal-tigo.page.html":
/*!*************************************************!*\
  !*** ./src/app/modal-tigo/modal-tigo.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar color=\"dark\" >\n        <div   *ngFor=\"let upsaldo of upsaldos\" >\n      <ion-button slot=\"start\"  expand=\"block\" color=\"secondary\" fill=\"outline\">\n        Tienes para recargas $ {{upsaldo.saldo}}\n        <ion-icon name=\"phone-portrait\"></ion-icon>\n      </ion-button>\n     <!--  <ion-buttons slot=\"end\">\n          <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n        </ion-buttons>  -->\n      </div>\n    </ion-toolbar>\n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n  \n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n</ion-header>\n\n<ion-content color=\"dark\" padding fullscreen >\n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n          refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n        </ion-refresher-content>\n      </ion-refresher>\n<!-- \n<p>\n  {{ no_abonado }}  - {{ valor }} \n</p> -->\n\n<div class=\"carga-box\" >\n    <h1>Paquetes Tigo</h1>\n    \n    \n    \n    <div class=\"textbox\">\n      <input type=\"number\" [(ngModel)]=\"no_abonado\" placeholder=\"Numero\">\n    </div>\n    <br>\n<ion-item color=\"dark\" >\n    <ion-label color=\"light\" >Escoge Tu paquete</ion-label>\n    <ion-select color=\"dark\" [(ngModel)]=\"operador\" >\n      <ion-select-option value=\"155\">1 PAQUETE</ion-select-option>\n      <ion-select-option value=\"241\">2 PAQUETE</ion-select-option>\n      <ion-select-option  value=\"85\">3 PAQUETE</ion-select-option>\n      <ion-select-option value=\"190\"> 4 PAQUETE</ion-select-option>\n       <ion-select-option value=\"191\"> 5 PAQUETE</ion-select-option>\n      <ion-select-option value=\"15\"> 6 PAQUETE</ion-select-option>\n      <ion-select-option value=\"17\"> 7 PAQUETE</ion-select-option>\n      <ion-select-option value=\"33\"> 8 PAQUETE</ion-select-option>\n      <ion-select-option value=\"34\"> 9 PAQUETE</ion-select-option>\n      <ion-select-option value=\"43\"> 10 PAQUETE</ion-select-option>\n      <ion-select-option value=\"80\">11 PAQUETE</ion-select-option>\n      <ion-select-option value=\"82\">12 PAQUETE</ion-select-option>\n      <ion-select-option  value=83>13 PAQUETE</ion-select-option>\n      <ion-select-option value=\"205\"> 14 PAQUETE</ion-select-option>\n       <ion-select-option value=\"206\"> 15 PAQUETE</ion-select-option>\n      <ion-select-option value=\"207\"> 16 PAQUETE</ion-select-option>\n      <ion-select-option value=\"208\"> 17 PAQUETE</ion-select-option>\n      <ion-select-option value=\"209\"> 18 PAQUETE</ion-select-option>\n      <ion-select-option value=\"210\"> 19 PAQUETE</ion-select-option>\n      <ion-select-option value=\"239\"> 20 PAQUETE</ion-select-option>\n      <ion-select-option value=\"12\">21 PAQUETE</ion-select-option>\n      <ion-select-option value=\"19\">22 PAQUETE</ion-select-option>\n      <ion-select-option  value=\"20\">23 PAQUETE</ion-select-option>\n     \n        \n  \n    </ion-select>\n  </ion-item>\n  \n\n<!--  <ion-button  (click)=\"EnviarDatos()\"\n             color=\"secondary\" expand=\"full\" >\n   Listo\n </ion-button>\n-->\n\n<div class=\"textbox\">\n  <input type=\"number\" [(ngModel)]=\"valor\" placeholder=\"Valor\">\n</div>\n \n  \n    \n  \n    \n  \n    \n   \n    <!-- <ion-grid fixed>\n      <ion-row >\n        <ion-col size-sm=\"3\" size-lg=\"3\" size-md=\"3\" size=\"3\" size-xs=\"3\" *ngFor=\"let imagen of imagenes\"  >        \n           <ion-buttons>\n              <ion-button>\n          <ion-avatar item-start>  <img src=\"{{imagen}}\"/> </ion-avatar>                  \n        </ion-button>\n      </ion-buttons>\n        </ion-col>\n     \n      </ion-row>\n    </ion-grid> -->    \n  \n    <br>\n      \n    <div *ngFor=\"let upsaldo of upsaldos\"  >\n      <ion-button  expand=\"block\" color=\"success\" *ngIf=\"upsaldo.saldo >= valor\"  (click)=\"hacerRecarga()\" fill=\"outline\">\n        Recargar $ {{ valor }} al {{ no_abonado }}\n        <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n      </ion-button>\n  \n      <ion-button expand=\"block\" color=\"danger\" *ngIf=\"valor > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n         Ups... $ {{ upsaldo.saldo }}  no alcanza\n          <ion-icon slot=\"start\" name=\"outlet\"></ion-icon>\n        </ion-button>\n  \n      </div>\n  \n    \n  \n \n  <br>\n    <button  (click)=\"salirSinNada()\" class=\"btn2\">Mejor en otro momento</button> \n    </div>\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n     <div>\n       <p>1- 15MIN TDN_1D $2,000</p>\n       <p>2- 30 MIN + 5 SMS A TODO DESTINO + 500 MB  $5,000</p>\n       <p>3- 170MB MINILIMITDO_6D $6,000</p>\n       <p>4- Minutos Ilimitados a TDN 15 Dias $15,000</p>\n       <p>5- Minutos ilimitados a TDN 30 Dias $30,000</p>\n       <p>6- 7 DIAS O 600MB INT $14,900</p>\n       <p>7- INT TOTA 2 GB 30DIAS $39,000</p>\n       <p>8- 50MIN+500MB TD O 7D $18,900</p>\n       <p>9- 7 MIN + 3SMS TD 1DIA $1,000</p>\n       <p>10- ALLNET 1DIA $4,900</p>\n       <p>11- 250MB+70MIN 0 10D $10,00</p>\n       <p>12- 500MB+ILIM TD O 3D $5,000</p>\n       <p>13- 1GB+ILIM TD O 7D $10,000</p>\n       <p>14- INTERNET 150MB 2DIAS $3,000</p>\n       <p>15- 2GB_MINILIMTADOS_15D $20,000</p>\n       <p>16- 400MB+MINILIMTDO_10D $10,000</p>\n       <p>17- 60MB+20MNTS-2D $3,000</p>\n       <p>18- 850MB+MINILIMTDO_20D  $20,000</p>\n       <p>19- ILIM TD 1 DIA $4,900</p>\n       <p>20- MIN + SMS ILIMITADOS A TODO DESTINO + 1 GB  $10,000</p>\n       <p>21- 5 MIN LDI DIA $3,100</p>\n       <p>22- 10MINT LDI 2DIAS $5,400</p>\n       <p>23- 30 MIN LDI 15 DIAS $15,600</p>\n    \n  \n     </div> \n  \n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/modal-tigo/modal-tigo.page.scss":
/*!*************************************************!*\
  !*** ./src/app/modal-tigo/modal-tigo.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carga-box {\n  width: 280px;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white; }\n\nh6 {\n  color: #4caf50;\n  text-align: center; }\n\n.carga-box h1 {\n  float: left;\n  font-size: 30px;\n  border-bottom: 6px solid #4caf50;\n  margin-bottom: 50px;\n  padding: 13px 0; }\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 30px;\n  padding: 8px, 0;\n  margin: 8px, 0;\n  border-bottom: 1px solid #4caf50; }\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 20px;\n  float: left;\n  margin: 10px; }\n\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #4caf50;\n  color: white;\n  padding: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n.btn2 {\n  width: 100%;\n  background: none;\n  border: 2px solid #2e81b8;\n  color: white;\n  padding: 5px;\n  font-size: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtdGlnby9DOlxcR2lvdmFubnlcXGlvbmljNGxvZ2luXFxsb2dpbi9zcmNcXGFwcFxcbW9kYWwtdGlnb1xcbW9kYWwtdGlnby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixZQUFhLEVBQUE7O0FBR2pCO0VBQ0csY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFakI7RUFDSyxXQUFXO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUlmO0VBQ0ksV0FBVztFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtdGlnby9tb2RhbC10aWdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJnYS1ib3h7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBjb2xvcjogIHdoaXRlO1xuXG59XG5oNntcbiAgIGNvbG9yOiAjNGNhZjUwO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZ2EtYm94IGgxe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzRjYWY1MDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmc6IDEzcHggMDtcbn1cblxuLnRleHRib3h7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogOHB4LCAwO1xuICAgIG1hcmdpbjogOHB4LCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGNhZjUwO1xufVxuLnRleHRib3ggaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgIGZsb2F0OiBsZWZ0O1xuICAgICBtYXJnaW46IDEwcHg7XG59XG4uYnRue1xuICAgICB3aWR0aDogMTAwJTtcbmJhY2tncm91bmQ6IG5vbmU7XG5ib3JkZXI6IDJweCBzb2xpZCAjNGNhZjUwO1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogNXB4O1xuZm9udC1zaXplOiAyNXB4O1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5idG4ye1xuICAgIHdpZHRoOiAxMDAlO1xuYmFja2dyb3VuZDogbm9uZTtcbmJvcmRlcjogMnB4IHNvbGlkICMyZTgxYjg7XG5jb2xvcjogd2hpdGU7XG5wYWRkaW5nOiA1cHg7XG5mb250LXNpemU6IDIwcHg7XG5jdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/modal-tigo/modal-tigo.page.ts":
/*!***********************************************!*\
  !*** ./src/app/modal-tigo/modal-tigo.page.ts ***!
  \***********************************************/
/*! exports provided: ModalTigoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTigoPage", function() { return ModalTigoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
//import { ModalRecargasPage } from '../modal-recargas/modal-recargas.page';
var ModalTigoPage = /** @class */ (function () {
    function ModalTigoPage(router, toastController, storage, modalCtr, actRoute, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.modalCtr = modalCtr;
        this.actRoute = actRoute;
        this.postPvdr = postPvdr;
        /*  operador= {
        oper:null
      }  */
        this.data = [
            {
                name: 'Claro',
                color: 'danger',
                selected: false
            },
            {
                name: 'Movistar',
                color: 'success',
                selected: false
            },
            {
                name: 'Tigo',
                color: 'secondary',
                selected: false
            },
            {
                name: 'Virgin',
                color: 'tertiary',
                selected: false
            }
        ];
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.no_abonado = '';
        this.valor = '';
        this.customer = false;
        this.operador = [];
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.imagenes = [
            'assets/comunic/claro.jpeg',
            'assets/comunic/movistar.jpeg',
            'assets/comunic/tigo.jpeg',
            'assets/comunic/virgin.png',
        ];
    }
    ModalTigoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            console.log(data);
        });
    };
    ModalTigoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.saldo = _this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    ModalTigoPage.prototype.salirSinNada = function () {
        this.modalCtr.dismiss();
    };
    ModalTigoPage.prototype.EnviarDatos = function () {
        this.modalCtr.dismiss({
            producto: '1',
            operador: 'claro'
        });
    };
    ModalTigoPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    ModalTigoPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    ModalTigoPage.prototype.hacerRecarga = function () {
        this.UpinProces();
        this.modalCtr.dismiss();
        this.addRecarga();
    };
    ModalTigoPage.prototype.addRecarga = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.no_abonado == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero valido',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(this.operador == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingrese un operador movil',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.valor == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'ingresa un valor valido',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 6:
                        body = {
                            aksi: '345456789',
                            saldo: this.saldo,
                            user_id: this.user_id,
                            no_abonado: this.no_abonado,
                            valor: this.valor,
                            operador: this.operador
                        };
                        this.postPvdr.postData(body, 'mi_version.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        //console.log(this.contact_customer);
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        console.log('aqui no pasa nada');
                                        return [4 /*yield*/, this.toastController.create({
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
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ModalTigoPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '87081721321',
                    valor: this.valor,
                    saldo: this.saldo,
                    user_id: this.user_id,
                    login_id: this.login_id,
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                this.proseslogout();
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                console.log(this.valor);
                                console.log(this.saldo);
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
    ModalTigoPage.prototype.proseslogout = function () {
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
    ModalTigoPage.prototype.loadSaldo = function () {
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
    //claro
    /* async datosClaro(){
     const modal = await this.modalCtr.create({
        component: ModalRecargasPage,
        componentProps:{
          no_abonado: this.no_abonado,
          valor: this.valor,
          paquete: '',
          operador: ''
         
        }
      });
    await modal.present();
    
      const { data } = await modal.onDidDismiss();
    
      console.log('Mostrara', data);
      
    
    } */
    /*
    async datosMovistar(){
      const modal = await this.modalCtr.create({
         component: ModalMovistarPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosTigo(){
      const modal = await this.modalCtr.create({
         component: ModalTigoPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosVirgin(){
      const modal = await this.modalCtr.create({
         component: ModalVirginPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
     */
    ModalTigoPage.prototype.onClick = function (check) {
        console.log(check);
    };
    ModalTigoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-tigo',
            template: __webpack_require__(/*! ./modal-tigo.page.html */ "./src/app/modal-tigo/modal-tigo.page.html"),
            styles: [__webpack_require__(/*! ./modal-tigo.page.scss */ "./src/app/modal-tigo/modal-tigo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], ModalTigoPage);
    return ModalTigoPage;
}());



/***/ }),

/***/ "./src/app/modal-virgin/modal-virgin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modal-virgin/modal-virgin.module.ts ***!
  \*****************************************************/
/*! exports provided: ModalVirginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalVirginPageModule", function() { return ModalVirginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_virgin_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-virgin.page */ "./src/app/modal-virgin/modal-virgin.page.ts");






/* const routes: Routes = [
  {
    path: '',
    component: ModalVirginPage
  }
]; */
var ModalVirginPageModule = /** @class */ (function () {
    function ModalVirginPageModule() {
    }
    ModalVirginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
                /*   RouterModule.forChild(routes) */
            ],
            declarations: [_modal_virgin_page__WEBPACK_IMPORTED_MODULE_5__["ModalVirginPage"]]
        })
    ], ModalVirginPageModule);
    return ModalVirginPageModule;
}());



/***/ }),

/***/ "./src/app/modal-virgin/modal-virgin.page.html":
/*!*****************************************************!*\
  !*** ./src/app/modal-virgin/modal-virgin.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n    <ion-toolbar color=\"dark\" >\n        <div   *ngFor=\"let upsaldo of upsaldos\" >\n      <ion-button slot=\"start\"  expand=\"block\" color=\"secondary\" fill=\"outline\">\n        Tienes para recargas $ {{upsaldo.saldo}}\n        <ion-icon name=\"phone-portrait\"></ion-icon>\n      </ion-button>\n     <!--  <ion-buttons slot=\"end\">\n          <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n        </ion-buttons>  -->\n      </div>\n    </ion-toolbar>\n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n  \n    <!-- <ion-searchbar color=\"dark\" animated \n                            (ionChange)=\"buscar( $event )\"></ion-searchbar>\n   -->\n</ion-header>\n<ion-content color=\"dark\" padding fullscreen >\n    <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n          refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n        </ion-refresher-content>\n      </ion-refresher>\n<!-- \n<p>\n  {{ no_abonado }}  - {{ valor }} \n</p> -->\n\n<div class=\"carga-box\" >\n    <h1>Paquetes Virgin</h1>\n    \n    \n    \n    <div class=\"textbox\">\n      <input type=\"number\" [(ngModel)]=\"no_abonado\" placeholder=\"Numero\">\n    </div>\n    <br>\n<ion-item color=\"dark\" >\n    <ion-label color=\"light\" >Escoge Tu paquete</ion-label>\n    <ion-select color=\"dark\" [(ngModel)]=\"operador\" >\n      <ion-select-option value=\"130\">1 PAQUETE</ion-select-option>\n      <ion-select-option value=\"125\">2 PAQUETE</ion-select-option>\n      <ion-select-option  value=\"126\">3 PAQUETE</ion-select-option>\n      <ion-select-option value=\"127\"> 4 PAQUETE</ion-select-option>\n       <ion-select-option value=\"123\"> 5 PAQUETE</ion-select-option>\n      <ion-select-option value=\"124\"> 6 PAQUETE</ion-select-option>\n  \n  \n    </ion-select>\n  </ion-item>\n  \n\n<!--  <ion-button  (click)=\"EnviarDatos()\"\n             color=\"secondary\" expand=\"full\" >\n   Listo\n </ion-button>\n-->\n\n<div class=\"textbox\">\n  <input type=\"number\" [(ngModel)]=\"valor\" placeholder=\"Valor\">\n</div>\n \n  \n    \n  \n    \n  \n    \n   \n    <!-- <ion-grid fixed>\n      <ion-row >\n        <ion-col size-sm=\"3\" size-lg=\"3\" size-md=\"3\" size=\"3\" size-xs=\"3\" *ngFor=\"let imagen of imagenes\"  >        \n           <ion-buttons>\n              <ion-button>\n          <ion-avatar item-start>  <img src=\"{{imagen}}\"/> </ion-avatar>                  \n        </ion-button>\n      </ion-buttons>\n        </ion-col>\n     \n      </ion-row>\n    </ion-grid> -->    \n  \n    <br>\n      \n    <div *ngFor=\"let upsaldo of upsaldos\"  >\n      <ion-button  expand=\"block\" color=\"success\" *ngIf=\"upsaldo.saldo >= valor\"  (click)=\"hacerRecarga()\" fill=\"outline\">\n        Recargar $ {{ valor }} al {{ no_abonado }}\n        <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n      </ion-button>\n  \n      <ion-button expand=\"block\" color=\"danger\" *ngIf=\"valor > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n         Ups... $ {{ upsaldo.saldo }}  no alcanza\n          <ion-icon slot=\"start\" name=\"outlet\"></ion-icon>\n        </ion-button>\n  \n      </div>\n  \n    \n  \n \n  <br>\n    <button  (click)=\"salirSinNada()\" class=\"btn2\">Mejor en otro momento</button> \n    </div>\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n     <div>\n       <p>1- 1DIA 10 mins TD+10Mins virgin $1,000 </p>\n       <p>2- 1DIA, Minutos TD ilimitado + whatsapp ilimitado $3,000</p>\n       <p>3- 2DIAS Minutos TD ilimitados + whatsapp ilimitado $5,000</p>\n       <p>4- 7DIAS Minutos TD ilimitados + whatsapp ilimitado $10,000</p>\n       <p>5- 15DIAS Int 500MB+Ilimitado TD+WP ILIMITADO+10SMS $18,000</p>\n       <p>6- 30DIAS Int 1.5GB+300 Min TD+min Virg Ilimitado+WP ilimitado+ $30,000</p>\n      \n  \n     </div>\n  \n\n  \n  \n  </ion-content>\n  \n"

/***/ }),

/***/ "./src/app/modal-virgin/modal-virgin.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/modal-virgin/modal-virgin.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carga-box {\n  width: 280px;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white; }\n\nh6 {\n  color: #4caf50;\n  text-align: center; }\n\n.carga-box h1 {\n  float: left;\n  font-size: 30px;\n  border-bottom: 6px solid #4caf50;\n  margin-bottom: 50px;\n  padding: 13px 0; }\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 30px;\n  padding: 8px, 0;\n  margin: 8px, 0;\n  border-bottom: 1px solid #4caf50; }\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 20px;\n  float: left;\n  margin: 10px; }\n\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #4caf50;\n  color: white;\n  padding: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n.btn2 {\n  width: 100%;\n  background: none;\n  border: 2px solid #2e81b8;\n  color: white;\n  padding: 5px;\n  font-size: 20px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwtdmlyZ2luL0M6XFxHaW92YW5ueVxcaW9uaWM0bG9naW5cXGxvZ2luL3NyY1xcYXBwXFxtb2RhbC12aXJnaW5cXG1vZGFsLXZpcmdpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixZQUFhLEVBQUE7O0FBR2pCO0VBQ0csY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFakI7RUFDSyxXQUFXO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUlmO0VBQ0ksV0FBVztFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtdmlyZ2luL21vZGFsLXZpcmdpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZ2EtYm94e1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgY29sb3I6ICB3aGl0ZTtcblxufVxuaDZ7XG4gICBjb2xvcjogIzRjYWY1MDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmdhLWJveCBoMXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICM0Y2FmNTA7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nOiAxM3B4IDA7XG59XG5cbi50ZXh0Ym94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDhweCwgMDtcbiAgICBtYXJnaW46IDhweCwgMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRjYWY1MDtcbn1cbi50ZXh0Ym94IGlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICBmbG9hdDogbGVmdDtcbiAgICAgbWFyZ2luOiAxMHB4O1xufVxuLmJ0bntcbiAgICAgd2lkdGg6IDEwMCU7XG5iYWNrZ3JvdW5kOiBub25lO1xuYm9yZGVyOiAycHggc29saWQgIzRjYWY1MDtcbmNvbG9yOiB3aGl0ZTtcbnBhZGRpbmc6IDVweDtcbmZvbnQtc2l6ZTogMjVweDtcbmN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uYnRuMntcbiAgICB3aWR0aDogMTAwJTtcbmJhY2tncm91bmQ6IG5vbmU7XG5ib3JkZXI6IDJweCBzb2xpZCAjMmU4MWI4O1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogNXB4O1xuZm9udC1zaXplOiAyMHB4O1xuY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modal-virgin/modal-virgin.page.ts":
/*!***************************************************!*\
  !*** ./src/app/modal-virgin/modal-virgin.page.ts ***!
  \***************************************************/
/*! exports provided: ModalVirginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalVirginPage", function() { return ModalVirginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
//import { ModalRecargasPage } from '../modal-recargas/modal-recargas.page';
var ModalVirginPage = /** @class */ (function () {
    function ModalVirginPage(router, toastController, storage, modalCtr, actRoute, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.modalCtr = modalCtr;
        this.actRoute = actRoute;
        this.postPvdr = postPvdr;
        /*  operador= {
        oper:null
      }  */
        this.data = [
            {
                name: 'Claro',
                color: 'danger',
                selected: false
            },
            {
                name: 'Movistar',
                color: 'success',
                selected: false
            },
            {
                name: 'Tigo',
                color: 'secondary',
                selected: false
            },
            {
                name: 'Virgin',
                color: 'tertiary',
                selected: false
            }
        ];
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.no_abonado = '';
        this.valor = '';
        this.customer = false;
        this.operador = [];
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.imagenes = [
            'assets/comunic/claro.jpeg',
            'assets/comunic/movistar.jpeg',
            'assets/comunic/tigo.jpeg',
            'assets/comunic/virgin.png',
        ];
    }
    ModalVirginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            console.log(data);
        });
    };
    ModalVirginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.saldo = _this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    ModalVirginPage.prototype.salirSinNada = function () {
        this.modalCtr.dismiss();
    };
    ModalVirginPage.prototype.EnviarDatos = function () {
        this.modalCtr.dismiss({
            producto: '1',
            operador: 'claro'
        });
    };
    ModalVirginPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    ModalVirginPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    ModalVirginPage.prototype.hacerRecarga = function () {
        this.UpinProces();
        this.modalCtr.dismiss();
        this.addRecarga();
    };
    ModalVirginPage.prototype.addRecarga = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.no_abonado == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero valido',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(this.operador == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingrese un operador movil',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.valor == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'ingresa un valor valido',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 6:
                        body = {
                            aksi: '345456789',
                            saldo: this.saldo,
                            user_id: this.user_id,
                            no_abonado: this.no_abonado,
                            valor: this.valor,
                            operador: this.operador
                        };
                        this.postPvdr.postData(body, 'mi_version.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        //console.log(this.contact_customer);
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        console.log('aqui no pasa nada');
                                        return [4 /*yield*/, this.toastController.create({
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
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ModalVirginPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '87081721321',
                    valor: this.valor,
                    saldo: this.saldo,
                    user_id: this.user_id,
                    login_id: this.login_id,
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                this.proseslogout();
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                console.log(this.valor);
                                console.log(this.saldo);
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
    ModalVirginPage.prototype.proseslogout = function () {
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
    ModalVirginPage.prototype.loadSaldo = function () {
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
    //claro
    /* async datosClaro(){
     const modal = await this.modalCtr.create({
        component: ModalRecargasPage,
        componentProps:{
          no_abonado: this.no_abonado,
          valor: this.valor,
          paquete: '',
          operador: ''
         
        }
      });
    await modal.present();
    
      const { data } = await modal.onDidDismiss();
    
      console.log('Mostrara', data);
      
    
    } */
    /*
    async datosMovistar(){
      const modal = await this.modalCtr.create({
         component: ModalMovistarPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosTigo(){
      const modal = await this.modalCtr.create({
         component: ModalTigoPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
    
    
    async datosVirgin(){
      const modal = await this.modalCtr.create({
         component: ModalVirginPage,
         componentProps:{
           no_abonado: this.no_abonado,
           valor: this.valor,
           paquete: '',
           operador: ''
          
         }
       });
    await modal.present();
    
       const { data } = await modal.onDidDismiss();
    
       console.log('Mostrara', data);
       
    
     }
     */
    ModalVirginPage.prototype.onClick = function (check) {
        console.log(check);
    };
    ModalVirginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal-virgin',
            template: __webpack_require__(/*! ./modal-virgin.page.html */ "./src/app/modal-virgin/modal-virgin.page.html"),
            styles: [__webpack_require__(/*! ./modal-virgin.page.scss */ "./src/app/modal-virgin/modal-virgin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], ModalVirginPage);
    return ModalVirginPage;
}());



/***/ }),

/***/ "./src/app/recargas-miviles/recargas-miviles.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/recargas-miviles/recargas-miviles.module.ts ***!
  \*************************************************************/
/*! exports provided: RecargasMivilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecargasMivilesPageModule", function() { return RecargasMivilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recargas_miviles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recargas-miviles.page */ "./src/app/recargas-miviles/recargas-miviles.page.ts");
/* harmony import */ var _modal_recargas_modal_recargas_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-recargas/modal-recargas.page */ "./src/app/modal-recargas/modal-recargas.page.ts");
/* harmony import */ var _modal_recargas_modal_recargas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-recargas/modal-recargas.module */ "./src/app/modal-recargas/modal-recargas.module.ts");
/* harmony import */ var _modal_movistar_modal_movistar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-movistar/modal-movistar.module */ "./src/app/modal-movistar/modal-movistar.module.ts");
/* harmony import */ var _modal_movistar_modal_movistar_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modal-movistar/modal-movistar.page */ "./src/app/modal-movistar/modal-movistar.page.ts");
/* harmony import */ var _modal_tigo_modal_tigo_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modal-tigo/modal-tigo.page */ "./src/app/modal-tigo/modal-tigo.page.ts");
/* harmony import */ var _modal_virgin_modal_virgin_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modal-virgin/modal-virgin.page */ "./src/app/modal-virgin/modal-virgin.page.ts");
/* harmony import */ var _modal_tigo_modal_tigo_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modal-tigo/modal-tigo.module */ "./src/app/modal-tigo/modal-tigo.module.ts");
/* harmony import */ var _modal_virgin_modal_virgin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modal-virgin/modal-virgin.module */ "./src/app/modal-virgin/modal-virgin.module.ts");















var routes = [
    {
        path: '',
        component: _recargas_miviles_page__WEBPACK_IMPORTED_MODULE_6__["RecargasMivilesPage"]
    }
];
var RecargasMivilesPageModule = /** @class */ (function () {
    function RecargasMivilesPageModule() {
    }
    RecargasMivilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _modal_recargas_modal_recargas_page__WEBPACK_IMPORTED_MODULE_7__["ModalRecargasPage"],
                _modal_movistar_modal_movistar_page__WEBPACK_IMPORTED_MODULE_10__["ModalMovistarPage"],
                _modal_tigo_modal_tigo_page__WEBPACK_IMPORTED_MODULE_11__["ModalTigoPage"],
                _modal_virgin_modal_virgin_page__WEBPACK_IMPORTED_MODULE_12__["ModalVirginPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _modal_recargas_modal_recargas_module__WEBPACK_IMPORTED_MODULE_8__["ModalRecargasPageModule"],
                _modal_movistar_modal_movistar_module__WEBPACK_IMPORTED_MODULE_9__["ModalMovistarPageModule"],
                _modal_tigo_modal_tigo_module__WEBPACK_IMPORTED_MODULE_13__["ModalTigoPageModule"],
                _modal_virgin_modal_virgin_module__WEBPACK_IMPORTED_MODULE_14__["ModalVirginPageModule"]
            ],
            declarations: [_recargas_miviles_page__WEBPACK_IMPORTED_MODULE_6__["RecargasMivilesPage"]]
        })
    ], RecargasMivilesPageModule);
    return RecargasMivilesPageModule;
}());



/***/ }),

/***/ "./src/app/recargas-miviles/recargas-miviles.page.html":
/*!*************************************************************!*\
  !*** ./src/app/recargas-miviles/recargas-miviles.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar color=\"dark\" >\n      <div   *ngFor=\"let upsaldo of upsaldos\" >\n    <ion-button slot=\"start\"  expand=\"block\" color=\"secondary\" fill=\"outline\">\n      Tienes para recargas $ {{upsaldo.saldo}}\n      <ion-icon name=\"phone-portrait\"></ion-icon>\n    </ion-button>\n   <!--  <ion-buttons slot=\"end\">\n        <ion-back-button text=\"Volver\" icon=\"return-left\" color=\"tertiary\" fill=\"outline\"></ion-back-button>\n      </ion-buttons>  -->\n    </div>\n  </ion-toolbar>\n  <!-- <ion-searchbar color=\"dark\" animated \n                          (ionChange)=\"buscar( $event )\"></ion-searchbar>\n -->\n</ion-header>\n\n\n\n<ion-content color=\"dark\" padding fullscreen >\n  <ion-refresher  slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"dots\"\n      refreshingText=\" Estamos Trabajando... {{ username }} \"  >\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n \n\n  <div class=\"carga-box\" >\n<h1>Recargas Moviles</h1>\n\n\n\n<div class=\"textbox\">\n  <input type=\"number\" [(ngModel)]=\"no_abonado\" placeholder=\"Numero\">\n</div>\n<br>\n\n<!-- <ion-item color=\"dark\" *ngFor=\"let check of data\" (click)=\"onClick(check)\" >\n\n<ion-label> {{ check.name }} </ion-label>\n  <input [(ngModel)]=\"check.selected\" slot=\"start\" [color]=\"check.color\"></ion-checkbox>  \n\n</ion-item> -->\n\n<ion-item color=\"dark\" >\n  <ion-label color=\"light\" >Operador</ion-label>\n  <ion-select color=\"dark\" [(ngModel)]=\"operador\" >\n      <ion-select-option  value=\"1\">Claro</ion-select-option>\n      <ion-select-option value=\"2\">Movistar</ion-select-option>\n       <ion-select-option value=\"3\">Tigo</ion-select-option>\n      <ion-select-option value=\"4\">Virgin</ion-select-option>\n      <ion-select-option value=\"6\">Exito</ion-select-option>\n      <ion-select-option value=\"7\">DirecTv</ion-select-option>\n      <ion-select-option value=\"8\">Avantel</ion-select-option>\n      <ion-select-option value=\"9\">ETB</ion-select-option>\n\n  </ion-select>\n</ion-item>\n\n\n<div class=\"textbox\">\n    <input type=\"number\" [(ngModel)]=\"valor\" placeholder=\"Valor\">\n  </div>\n \n  <h6>\n    Compra qui tus paquetes\n  </h6>\n  \n\n  <ion-grid fixed  >\n    <ion-row >\n      <ion-col size=\"3\" >        \n          <ion-avatar item-start (click)=\"datosClaro()\" >  <img src=\"../../assets/comunic/claro.jpeg \"/> </ion-avatar>\n\n                         \n      </ion-col>\n      <ion-col size=\"3\" >     \n               <ion-avatar item-start (click)=\"datosMovistar()\"  >  <img src=\"../../assets/comunic/movistar.jpeg \"/> </ion-avatar>                       \n    </ion-col>\n    <ion-col size=\"3\" >        \n     \n      <ion-avatar item-start  (click)=\"datosTigo()\"  >  <img src=\"../../assets/comunic/tigo.jpeg\"/> </ion-avatar>\n              \n  </ion-col>\n  <ion-col size=\"3\" >        \n    \n    <ion-avatar item-start (click)=\"datosVirgin()\"  >  <img src=\"../../assets/comunic/virgin.png \"/> </ion-avatar>                \n</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n \n  <!-- <ion-grid fixed>\n    <ion-row >\n      <ion-col size-sm=\"3\" size-lg=\"3\" size-md=\"3\" size=\"3\" size-xs=\"3\" *ngFor=\"let imagen of imagenes\"  >        \n         <ion-buttons>\n            <ion-button>\n        <ion-avatar item-start>  <img src=\"{{imagen}}\"/> </ion-avatar>                  \n      </ion-button>\n    </ion-buttons>\n      </ion-col>\n   \n    </ion-row>\n  </ion-grid> -->\n\n\n  <br>\n  \n  <div *ngFor=\"let upsaldo of upsaldos\"  >\n    <ion-button  expand=\"block\" color=\"success\" *ngIf=\"upsaldo.saldo >= valor\"  (click)=\"hacerRecarga()\" fill=\"outline\">\n      Recargar $ {{ valor}} al {{ no_abonado}}\n      <ion-icon slot=\"start\" name=\"phone-portrait\"></ion-icon>\n    </ion-button>\n\n    <ion-button expand=\"block\" color=\"danger\" *ngIf=\"valor > upsaldo.saldo\" (click)=\"RecargaProces()\" fill=\"outline\">\n       Ups... $ {{ upsaldo.saldo }}  no alcanza\n        <ion-icon slot=\"start\" name=\"outlet\"></ion-icon>\n      </ion-button>\n\n    </div>\n\n  </div>\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/recargas-miviles/recargas-miviles.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/recargas-miviles/recargas-miviles.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carga-box {\n  width: 280px;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: white; }\n\nh6 {\n  color: #4caf50;\n  text-align: center; }\n\n.carga-box h1 {\n  float: left;\n  font-size: 30px;\n  border-bottom: 6px solid #4caf50;\n  margin-bottom: 50px;\n  padding: 13px 0; }\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 30px;\n  padding: 8px, 0;\n  margin: 8px, 0;\n  border-bottom: 1px solid #4caf50; }\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 20px;\n  float: left;\n  margin: 10px; }\n\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #4caf50;\n  color: white;\n  padding: 5px;\n  font-size: 25px;\n  cursor: pointer; }\n\n.operadores {\n  border: 1px solid;\n  border-color: #4caf50; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjYXJnYXMtbWl2aWxlcy9DOlxcR2lvdmFubnlcXGlvbmljNGxvZ2luXFxsb2dpbi9zcmNcXGFwcFxccmVjYXJnYXMtbWl2aWxlc1xccmVjYXJnYXMtbWl2aWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQStCO1VBQS9CLGdDQUErQjtFQUMvQixZQUFhLEVBQUE7O0FBR2pCO0VBQ0csY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdyQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFakI7RUFDSyxXQUFXO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVjYXJnYXMtbWl2aWxlcy9yZWNhcmdhcy1taXZpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJnYS1ib3h7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBjb2xvcjogIHdoaXRlO1xuXG59XG5oNntcbiAgIGNvbG9yOiAjNGNhZjUwO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZ2EtYm94IGgxe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzRjYWY1MDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmc6IDEzcHggMDtcbn1cblxuLnRleHRib3h7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgcGFkZGluZzogOHB4LCAwO1xuICAgIG1hcmdpbjogOHB4LCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGNhZjUwO1xufVxuLnRleHRib3ggaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgIGZsb2F0OiBsZWZ0O1xuICAgICBtYXJnaW46IDEwcHg7XG59XG4uYnRue1xuICAgICB3aWR0aDogMTAwJTtcbmJhY2tncm91bmQ6IG5vbmU7XG5ib3JkZXI6IDJweCBzb2xpZCAjNGNhZjUwO1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogNXB4O1xuZm9udC1zaXplOiAyNXB4O1xuY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3BlcmFkb3Jlc3tcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICM0Y2FmNTA7XG59Il19 */"

/***/ }),

/***/ "./src/app/recargas-miviles/recargas-miviles.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/recargas-miviles/recargas-miviles.page.ts ***!
  \***********************************************************/
/*! exports provided: RecargasMivilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecargasMivilesPage", function() { return RecargasMivilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _modal_recargas_modal_recargas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-recargas/modal-recargas.page */ "./src/app/modal-recargas/modal-recargas.page.ts");
/* harmony import */ var _modal_movistar_modal_movistar_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-movistar/modal-movistar.page */ "./src/app/modal-movistar/modal-movistar.page.ts");
/* harmony import */ var _modal_tigo_modal_tigo_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-tigo/modal-tigo.page */ "./src/app/modal-tigo/modal-tigo.page.ts");
/* harmony import */ var _modal_virgin_modal_virgin_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modal-virgin/modal-virgin.page */ "./src/app/modal-virgin/modal-virgin.page.ts");






//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';




var RecargasMivilesPage = /** @class */ (function () {
    function RecargasMivilesPage(router, toastController, storage, modalCtr, actRoute, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.modalCtr = modalCtr;
        this.actRoute = actRoute;
        this.postPvdr = postPvdr;
        /*  operador= {
          oper:null
        }  */
        this.data = [
            {
                name: 'Claro',
                color: 'danger',
                selected: false
            },
            {
                name: 'Movistar',
                color: 'success',
                selected: false
            },
            {
                name: 'Tigo',
                color: 'secondary',
                selected: false
            },
            {
                name: 'Virgin',
                color: 'tertiary',
                selected: false
            }
        ];
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.no_abonado = '';
        this.valor = '';
        this.customer = false;
        this.operador = [];
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.imagenes = [
            'assets/comunic/claro.jpeg',
            'assets/comunic/movistar.jpeg',
            'assets/comunic/tigo.jpeg',
            'assets/comunic/virgin.png',
        ];
    }
    RecargasMivilesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            console.log(data);
        });
    };
    RecargasMivilesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.saldo = _this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    RecargasMivilesPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    RecargasMivilesPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    RecargasMivilesPage.prototype.hacerRecarga = function () {
        this.UpinProces();
        //this.router.navigate(['/login']);
        this.addRecarga();
    };
    RecargasMivilesPage.prototype.addRecarga = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.no_abonado == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero valido',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(this.operador == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingrese un operador movil',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.valor == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'ingresa un valor valido',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 7];
                    case 6:
                        body = {
                            aksi: '345456789',
                            saldo: this.saldo,
                            user_id: this.user_id,
                            no_abonado: this.no_abonado,
                            valor: this.valor,
                            operador: this.operador
                        };
                        this.postPvdr.postData(body, 'charger.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        //console.log(this.contact_customer);
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        console.log('aqui no pasa nada');
                                        return [4 /*yield*/, this.toastController.create({
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
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    RecargasMivilesPage.prototype.UpinProces = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                body = {
                    aksi: '87081721321',
                    valor: this.valor,
                    saldo: this.saldo,
                    user_id: this.user_id,
                    login_id: this.login_id,
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                this.proseslogout();
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                console.log(this.valor);
                                console.log(this.saldo);
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
    RecargasMivilesPage.prototype.proseslogout = function () {
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
    RecargasMivilesPage.prototype.loadSaldo = function () {
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
    //claro
    RecargasMivilesPage.prototype.datosClaro = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: _modal_recargas_modal_recargas_page__WEBPACK_IMPORTED_MODULE_6__["ModalRecargasPage"],
                            componentProps: {
                                no_abonado: this.no_abonado,
                                valor: this.valor,
                                paquete: '',
                                operador: ''
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Mostrara', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    RecargasMivilesPage.prototype.datosMovistar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: _modal_movistar_modal_movistar_page__WEBPACK_IMPORTED_MODULE_7__["ModalMovistarPage"],
                            componentProps: {
                                no_abonado: this.no_abonado,
                                valor: this.valor,
                                paquete: '',
                                operador: ''
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Mostrara', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    RecargasMivilesPage.prototype.datosTigo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: _modal_tigo_modal_tigo_page__WEBPACK_IMPORTED_MODULE_8__["ModalTigoPage"],
                            componentProps: {
                                no_abonado: this.no_abonado,
                                valor: this.valor,
                                paquete: '',
                                operador: ''
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Mostrara', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    RecargasMivilesPage.prototype.datosVirgin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: _modal_virgin_modal_virgin_page__WEBPACK_IMPORTED_MODULE_9__["ModalVirginPage"],
                            componentProps: {
                                no_abonado: this.no_abonado,
                                valor: this.valor,
                                paquete: '',
                                operador: ''
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('Mostrara', data);
                        return [2 /*return*/];
                }
            });
        });
    };
    RecargasMivilesPage.prototype.onClick = function (check) {
        console.log(check);
    };
    RecargasMivilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recargas-miviles',
            template: __webpack_require__(/*! ./recargas-miviles.page.html */ "./src/app/recargas-miviles/recargas-miviles.page.html"),
            styles: [__webpack_require__(/*! ./recargas-miviles.page.scss */ "./src/app/recargas-miviles/recargas-miviles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], RecargasMivilesPage);
    return RecargasMivilesPage;
}());



/***/ })

}]);
//# sourceMappingURL=recargas-miviles-recargas-miviles-module.js.map