(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Completa los datos...</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Nombre y Apellidos del Asesor  </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"full_name\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label position=\"floating\"> Numero Celular </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"phone_number\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> 4 Ultimos digitos de la Cedula  </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"identificacion\"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label position=\"floating\"> Usuario </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\"> Contraseña </ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Confirma tu Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"confirm_password\"></ion-input>\n      </ion-item>\n\n   <!--    <ion-item>  \n        <ion-label text-center>   Selecciona 2 imagenes </ion-label>  \n<br>\n<br>\n      <ion-button expand=\"full\" fill=\"outline\" (click)=\"abrirGaleria()\">    \n        Documento y Prfil   <br>          \n        <ion-icon name=\"images\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <div id=\"LoadedImages\" *ngIf=\"fotos\">\n       <ion-item *ngFor=\"let item of fotos; let i = index\">           \n          <ion-icon name=\"close-circle\" (click)=\"borrarFoto(i)\"></ion-icon>\n          <img [src]=\"item\" class=\"imagenes\">   \n      </ion-item> -->\n     <!--       <ion-item>       \n        <img src=\"http://lorempixel.com/350/230\" >        \n          <ion-icon name=\"close-circle-outline\" class=\"imagenes\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <img src=\"http://lorempixel.com/350/230\" >\n        <ion-icon name=\"close-circle-outline\" class=\"imagenes\"></ion-icon>\n      </ion-item>\n    </div>\n    -->\n    </ion-list>\n  \n    <div padding>\n      <ion-button expand=\"full\" fill=\"outline\" (click)=\"addRegister()\">Registrate</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\" (click)=\"formLogin()\">Ya estoy Registrado</ion-button>\n    </div>\n  \n  </ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center; }\n\n.imagenes {\n  height: 20%;\n  width: 20%; }\n\n#LoadedImages ion-item {\n  display: inline-block;\n  padding: 20 !important;\n  width: 50%; }\n\n#LoadedImages ion-item .item-inner {\n    padding: 0 !important; }\n\n#LoadedImages ion-item .item-inner .input-wrapper ion-label {\n      margin: 0 !important; }\n\n#LoadedImages ion-item .item-inner .input-wrapper ion-label ion-icon {\n        color: #FFF;\n        position: absolute;\n        z-index: 9;\n        font-size: 4rem;\n        right: 0;\n        text-shadow: #1c1c1c 1px 1px 1px; }\n\n#LoadedImages ion-item .item-inner .input-wrapper ion-label img {\n        width: 100%;\n        height: auto;\n        border-radius: 5px;\n        opacity: .85; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFx1c3VhcmlvXFxEb2N1bWVudHNcXGNhcmxvc1xcaW9uaWM0bG9naW5cXGxvZ2luL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBbUIsRUFBQTs7QUFJdkI7RUFFSSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUlkO0VBRVEscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7O0FBSmxCO0lBTVkscUJBQXFCLEVBQUE7O0FBTmpDO01BU29CLG9CQUFvQixFQUFBOztBQVR4QztRQVd3QixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixlQUFlO1FBQ2YsUUFBUTtRQUNSLGdDQUFnQyxFQUFBOztBQWhCeEQ7UUFtQndCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlcyB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XG59XG5cblxuLmltYWdlbmVzIHtcblxuICAgIGhlaWdodDogMjAlO1xuICAgIHdpZHRoOiAyMCU7XG5cbiAgfVxuXG4jTG9hZGVkSW1hZ2VzIHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMjAgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAjMWMxYzFjIDFweCAxcHggMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44NTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _providers_post_imagen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/post-imagen.service */ "./src/providers/post-imagen.service.ts");








var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, postImagen, formBuilder, loadingCtrl, alertCtrl, imagePicker, toastController, postPvdr) {
        this.router = router;
        this.postImagen = postImagen;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.toastController = toastController;
        this.postPvdr = postPvdr;
        this.fotos = [];
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.datos = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            correo: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
                ]
            ],
            contrasena: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)
                ]
            ],
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterPage.prototype.addRegister = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, toast, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.full_name == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Falta Nombre de usuario',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 2:
                        if (!(this.phone_number == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero de telefono ',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 4:
                        if (!(this.identificacion == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa identificacion ',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 6:
                        if (!(this.username == '')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Nombre de Usuario',
                                duration: 2000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 8:
                        if (!(this.password == '')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Contraseña',
                                duration: 2000
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 10:
                        if (!(this.password != this.confirm_password)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Contraseña no Coincide',
                                duration: 2000
                            })];
                    case 11:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 12:
                        body = {
                            full_name: this.full_name,
                            phone_number: this.phone_number,
                            identificacion: this.identificacion,
                            username: this.username,
                            password: this.password,
                            aksi: 'add_register'
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/login']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Register successfully',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
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
                        _a.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentarLoader = function () {
        this.loading = this.loadingCtrl.create({
            message: 'Registrando...',
            duration: 2000
        });
        this.loading.present();
    };
    RegisterPage.prototype.mostrar_mensaje = function (msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msj,
                            duration: 3000,
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.abrirGaleria = function () {
        /*  let arr = [];
        arr[0] = 'http://lorempixel.com/350/230/';
        arr[1] = 'http://lorempixel.com/400/200/';
    
        this.fotos = arr; */
        var _this = this;
        var options = {
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(options)
            .then(function (results) {
            _this.fotos = results;
            /*   for (var i = 0; i < results.length; i++) {
                  console.log('Image URI: ' + results[i]);
            } */
        }, function (err) {
            _this.mostrar_mensaje('no carga la foto');
        });
    };
    RegisterPage.prototype.borrarFoto = function (index) {
        this.fotos.splice(index, 1);
    };
    RegisterPage.prototype.registrar = function () {
        var _this = this;
        if (this.fotos.length < 1) {
            this.mostrar_mensaje('Debes seleccionar una foto reciente');
            return;
        }
        this.postImagen.getFormulario(this.fotos)
            .then(function (result) {
            _this.formulario = result;
            _this.formulario.append('nombre', _this.datos.get('nombre').value);
            _this.formulario.append('correo', _this.datos.get('correo').value);
            _this.formulario.append('contrasena', _this.datos.get('contrasena').value);
            _this.postPvdr.addUser(_this.formulario)
                .then(function (result) {
                if (result['error']) {
                    // this.presentarAlerta(result['mensaje']);
                }
                else {
                    //Eliminación de los valores
                    _this.datos.get('nombre').setValue('');
                    _this.datos.get('correo').setValue('');
                    _this.datos.get('contrasena').setValue('');
                    /*------------------------------------------*/
                    _this.fotos = [];
                    //  this.presentarAlerta(result['mensaje']);
                }
                _this.loading.dismiss();
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
            });
        })
            .catch(function (err) {
            _this.mostrar_mensaje(err);
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_imagen_service__WEBPACK_IMPORTED_MODULE_7__["PostImagenService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map