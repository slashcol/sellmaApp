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

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Completa los datos...</ion-title>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Nombre Completo  </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"full_name\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label position=\"floating\"> Numero Celular </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"phone_number\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Identificacion </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"identificacion\"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label position=\"floating\"> Usuario </ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"username\"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label position=\"floating\"> Contraseña </ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> Confirma tu Contraseña</ion-label>\n        <ion-input type=\"password\" [(ngModel)]=\"confirm_password\"></ion-input>\n      </ion-item>\n\n      <ion-item>  \n        <ion-label text-center>   Selecciona 2 imagenes </ion-label>  \n<br>\n<br>\n      <ion-button expand=\"full\" fill=\"outline\" (click)=\"abrirGaleria()\">    \n        Documento y Prfil   <br>          \n        <ion-icon name=\"images\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n    <div id=\"LoadedImages\" *ngIf=\"fotos\">\n       <ion-item *ngFor=\"let item of fotos; let i = index\">           \n          <ion-icon name=\"close-circle\" (click)=\"borrarFoto(i)\" ></ion-icon>\n          <img [src]=\"item\" class=\"imagenes\" >   \n      </ion-item>\n     <!--       <ion-item>       \n        <img src=\"http://lorempixel.com/350/230\" >        \n          <ion-icon name=\"close-circle-outline\" class=\"imagenes\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <img src=\"http://lorempixel.com/350/230\" >\n        <ion-icon name=\"close-circle-outline\" class=\"imagenes\"></ion-icon>\n      </ion-item>-->\n    </div>\n    \n    </ion-list>\n  \n    <div padding>\n      <ion-button expand=\"full\" fill=\"outline\" (click)=\"addRegister()\">Registrate</ion-button>\n      <ion-button expand=\"full\" fill=\"outline\" (click)=\"formLogin()\">Ya estoy Registrado</ion-button>\n    </div>\n  \n  </ion-content>\n\n\n\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-home .imagenes {\n  height: 20%;\n  width: 20%; }\n\npage-home .error-messages {\n  font-size: 0.7em;\n  color: red;\n  text-align: center; }\n\npage-home #LoadedImages ion-item {\n  display: inline-block;\n  padding: 20 !important;\n  width: 31.333%; }\n\npage-home #LoadedImages ion-item .item-inner {\n    padding: 0 !important; }\n\npage-home #LoadedImages ion-item .item-inner .input-wrapper ion-label {\n      margin: 0 !important; }\n\npage-home #LoadedImages ion-item .item-inner .input-wrapper ion-label ion-icon {\n        color: #FFF;\n        position: absolute;\n        z-index: 9;\n        font-size: 4rem;\n        right: 0;\n        text-shadow: #1c1c1c 1px 1px 1px; }\n\npage-home #LoadedImages ion-item .item-inner .input-wrapper ion-label img {\n        width: 100%;\n        height: auto;\n        border-radius: 5px;\n        opacity: .85; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXEdpb3Zhbm55XFxpb25pYzRsb2dpblxcbG9naW4vc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUpsQjtFQVFRLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQW1CLEVBQUE7O0FBVjNCO0VBZVkscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBakIxQjtJQW1CZ0IscUJBQXFCLEVBQUE7O0FBbkJyQztNQXNCd0Isb0JBQW9CLEVBQUE7O0FBdEI1QztRQXdCNEIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsZUFBZTtRQUNmLFFBQVE7UUFDUixnQ0FBZ0MsRUFBQTs7QUE3QjVEO1FBZ0M0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWhvbWUge1xuICAgIC5pbWFnZW5lcyB7XG5cbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIHdpZHRoOiAyMCU7XG5cbiAgICAgIH1cbiAgICAgIC5lcnJvci1tZXNzYWdlcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHRleHQtYWxpZ246ICBjZW50ZXI7XG4gICAgfVxuXG4gICAgI0xvYWRlZEltYWdlcyB7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMzEuMzMzJTtcbiAgICAgICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAjMWMxYzFjIDFweCAxcHggMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44NTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

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
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _providers_post_imagen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/post-imagen.service */ "./src/providers/post-imagen.service.ts");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, postImagen, loadingCtrl, alertCtrl, imagePicker, toastController, postPvdr) {
        this.router = router;
        this.postImagen = postImagen;
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
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterPage.prototype.addRegister = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, toast, toast, body;
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
                        return [3 /*break*/, 15];
                    case 2:
                        if (!(this.phone_number == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero de telefono ',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 15];
                    case 4:
                        if (!(this.identificacion == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa identificacion ',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 15];
                    case 6:
                        if (!(this.username == '')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Nombre de Usuario',
                                duration: 2000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 15];
                    case 8:
                        if (!(this.password == '')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Contraseña',
                                duration: 2000
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 15];
                    case 10:
                        if (!(this.password != this.confirm_password)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Contraseña no Coincide',
                                duration: 2000
                            })];
                    case 11:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 15];
                    case 12:
                        if (!(this.fotos.length < 1)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Debes seleccionar una foto reciente',
                                duration: 2000
                            })];
                    case 13:
                        toast = _a.sent();
                        return [3 /*break*/, 15];
                    case 14:
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
                        _a.label = 15;
                    case 15: return [2 /*return*/];
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
        this.imagePicker.getPictures(options).then(function (results) {
            _this.fotos = results;
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    RegisterPage.prototype.borrarFoto = function (index) {
        this.fotos.splice(index, 1);
    };
    RegisterPage.prototype.registrar = function () {
        if (this.fotos.length < 2) {
            this.mostrar_mensaje('Debes adocionar una foto reciente');
            return;
        }
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _providers_post_imagen_service__WEBPACK_IMPORTED_MODULE_6__["PostImagenService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/providers/post-imagen.service.ts":
/*!**********************************************!*\
  !*** ./src/providers/post-imagen.service.ts ***!
  \**********************************************/
/*! exports provided: PostImagenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostImagenService", function() { return PostImagenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var PostImagenService = /** @class */ (function () {
    function PostImagenService(file, platform) {
        this.file = file;
        this.platform = platform;
        this.stack_aux = [];
    }
    PostImagenService.prototype.getFormulario = function (fotos) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            _this.formulario = new FormData();
            _this.stack_aux = [];
            if (_this.platform.is('cordova')) {
                if (_this.platform.is('ios')) {
                    var _loop_1 = function (i) {
                        _this.file.resolveLocalFilesystemUrl("file://" + fotos[i])
                            .then(function (entry) {
                            return entry.file(function (file) {
                                var reader = new FileReader();
                                reader.onload = function (data) {
                                    console.log("Entre");
                                    var imgBlob = new Blob([reader.result], { type: file.type });
                                    _this.formulario.append('foto' + (i + 1), imgBlob, file.name);
                                    _this.stack_aux.push('foto' + (i + 1));
                                    if (_this.stack_aux.length == fotos.length)
                                        resolve(_this.formulario);
                                };
                                reader.readAsArrayBuffer(file);
                            });
                        }).catch(function (err) {
                            reject(err);
                        })
                            .catch(function (err) {
                            return reject(err);
                        });
                    };
                    for (var i = 0; i < fotos.length; i++) {
                        _loop_1(i);
                    }
                }
                if (_this.platform.is('android')) {
                    var _loop_2 = function (i) {
                        _this.file.resolveLocalFilesystemUrl(fotos[i])
                            .then(function (entry) {
                            return entry.file(function (file) {
                                var reader = new FileReader();
                                reader.onload = function (data) {
                                    console.log("Entre");
                                    var imgBlob = new Blob([reader.result], { type: file.type });
                                    _this.formulario.append('foto' + (i + 1), imgBlob, file.name);
                                    _this.stack_aux.push('foto' + (i + 1));
                                    if (_this.stack_aux.length == fotos.length)
                                        resolve(_this.formulario);
                                };
                                reader.readAsArrayBuffer(file);
                            });
                        }).catch(function (err) {
                            reject(err);
                        })
                            .catch(function (err) {
                            return reject(err);
                        });
                    };
                    for (var i = 0; i < fotos.length; i++) {
                        _loop_2(i);
                    }
                }
            }
            else {
                reject(false);
            }
        });
        return promesa;
    };
    PostImagenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], PostImagenService);
    return PostImagenService;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map