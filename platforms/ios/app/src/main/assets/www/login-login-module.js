(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header  >\n  <ion-toolbar color=\"dark\" >\n    <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"40\" color=\"dark\" >\n \n\n <!--    <ion-item expand=\"full\" fill=\"outline\"   color=\"dark\" >\n      <ion-label color=\"primary\"  position=\"floating\">Usuario</ion-label>\n      <ion-input color=\"primary\"  [(ngModel)]=\"username\"></ion-input>\n    </ion-item >  \n    <ion-item  color=\"dark\" >\n      <ion-label color=\"primary\"  position=\"floating\">Contraseña</ion-label>\n      <ion-input color=\"primary\"  type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n  <div padding>\n    <ion-button  expand=\"full\" fill=\"outline\" (click)=\"proseslogin()\" >Entrar</ion-button>\n    <ion-button expand=\"full\" fill=\"outline\" (click)=\"formRegister()\">Registrate</ion-button>\n  </div> -->\n  \n  <ion-list class=\"box\"> \n\n    <ion-input focus  color=\"primary\" type=\"text\"  [(ngModel)]=\"username\" placeholder=\"Usuario\" ></ion-input>\n    \n    <ion-input  color=\"primary\"  type=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña\" ></ion-input>\n  \n    <div  padding>\n        <ion-button color=\"secondary\" class=\"botones\" expand=\"full\" fill=\"outline\" (click)=\"proseslogin()\" >Entrar</ion-button>\n        <ion-button color=\"secondary\" expand=\"full\" fill=\"outline\" (click)=\"formRegister()\">Registrate</ion-button>\n      </div> \n\n  </ion-list>\n\n\n  <div class=\"container loader\">\n    <span>S</span>\n    <span>E</span>\n    <span>L</span>\n    <span>L</span>\n    <span>M</span>\n    <span>A</span>\n    \n</div>\n\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif; }\n\n.box {\n  width: 300px;\n  padding: 40px;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: none;\n  text-align: center; }\n\n.h1 {\n  color: white;\n  text-transform: uppercase;\n  font-weight: 500; }\n\n.botones {\n  background: none;\n  border-bottom-color: #3498db; }\n\n.box ion-input[type=\"text\"], .box ion-input[type=\"password\"] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 20px auto;\n  text-align: center;\n  border: 2px solid #3498db;\n  padding: 14px 10px;\n  width: 200px;\n  outline: none;\n  color: #3498db;\n  border-radius: 24px;\n  transition: o 0.25s; }\n\n.box ion-input[type=\"text\"]:focus, .box ion-input[type=\"password\"]:focus {\n  width: 280px;\n  border-color: #2ecc71; }\n\n.loader {\n  position: relative;\n  top: 40%;\n  left: 80%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%); }\n\n.loader span {\n  font-family: arial;\n  font-size: 31px;\n  color: rgba(255, 255, 255, 0.1);\n  display: fixed;\n  transition: all .5s;\n  -webkit-animation: animate 2s infinite;\n          animation: animate 2s infinite; }\n\n.loader span:nth-child(1) {\n  -webkit-animation-delay: .1s;\n          animation-delay: .1s; }\n\n.loader span:nth-child(2) {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s; }\n\n.loader span:nth-child(3) {\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s; }\n\n.loader span:nth-child(4) {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s; }\n\n.loader span:nth-child(5) {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s; }\n\n.loader span:nth-child(6) {\n  -webkit-animation-delay: .6s;\n          animation-delay: .6s; }\n\n.loader span:nth-child(7) {\n  -webkit-animation-delay: .7s;\n          animation-delay: .7s; }\n\n@-webkit-keyframes animate {\n  0% {\n    color: #242627;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    margin-left: 0; }\n  25% {\n    color: #29292e;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n    margin-left: 10;\n    text-shadow: 0 15px 5px black; }\n  100% {\n    color: transparent;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes animate {\n  0% {\n    color: #242627;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    margin-left: 0; }\n  25% {\n    color: #29292e;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n    margin-left: 10;\n    text-shadow: 0 15px 5px black; }\n  100% {\n    color: transparent;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXEdpb3Zhbm55XFxpb25pYzRsb2dpblxcbG9naW4vc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFVO0VBQ1YsVUFBVTtFQUNWLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDbEIsNEJBQTZCLEVBQUE7O0FBSy9CO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1oscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0RBQTRDO1VBQTVDLDRDQUE0QyxFQUFBOztBQUc5QztFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsK0JBQTJCO0VBQzNCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsc0NBQThCO1VBQTlCLDhCQUE4QixFQUFBOztBQUdoQztFQUVFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFFRSw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBRUUsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUd0QjtFQUVFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFFRSw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBRUUsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUd0QjtFQUVFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRTtJQUNJLGNBQXNCO0lBQ3RCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsY0FBYyxFQUFBO0VBRWxCO0lBQ0ksY0FBc0I7SUFDdEIsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsNkJBQXFDLEVBQUE7RUFFekM7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUE7O0FBZDlCO0VBQ0U7SUFDSSxjQUFzQjtJQUN0QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGNBQXNCO0lBQ3RCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLDZCQUFxQyxFQUFBO0VBRXpDO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgbWFyZ2luOiAgMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG4uYm94e1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmgxe1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuYm90b25lc3tcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAgIzM0OThkYjtcbiBcbiAgXG4gIH1cblxuLmJveCBpb24taW5wdXRbdHlwZSA9IFwidGV4dFwiXSwgLmJveCBpb24taW5wdXRbdHlwZSA9IFwicGFzc3dvcmRcIl0ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzQ5OGRiO1xuICBwYWRkaW5nOiAxNHB4IDEwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMzNDk4ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHRyYW5zaXRpb246IG8uMjVzO1xufVxuXG4uYm94IGlvbi1pbnB1dFt0eXBlID0gXCJ0ZXh0XCJdOmZvY3VzLC5ib3ggaW9uLWlucHV0W3R5cGUgPSBcInBhc3N3b3JkXCJdOmZvY3Vze1xuICB3aWR0aDogMjgwcHg7XG4gIGJvcmRlci1jb2xvcjogIzJlY2M3MTsgXG59XG5cbi5sb2FkZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDgwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5sb2FkZXIgc3BhbntcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXNpemU6IDMxcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgZGlzcGxheTogZml4ZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAycyBpbmZpbml0ZTtcbn1cblxuLmxvYWRlciBzcGFuOm50aC1jaGlsZCgxKVxue1xuICBhbmltYXRpb24tZGVsYXk6IC4xcztcbn1cblxuLmxvYWRlciBzcGFuOm50aC1jaGlsZCgyKVxue1xuICBhbmltYXRpb24tZGVsYXk6IC4ycztcbn1cblxuLmxvYWRlciBzcGFuOm50aC1jaGlsZCgzKVxue1xuICBhbmltYXRpb24tZGVsYXk6IC4zcztcbn1cblxuLmxvYWRlciBzcGFuOm50aC1jaGlsZCg0KVxue1xuICBhbmltYXRpb24tZGVsYXk6IC40cztcbn1cblxuLmxvYWRlciBzcGFuOm50aC1jaGlsZCg1KVxue1xuICBhbmltYXRpb24tZGVsYXk6IC41cztcbn1cblxuLmxvYWRlciBzcGFuOm50aC1jaGlsZCg2KVxue1xuICBhbmltYXRpb24tZGVsYXk6IC42cztcbn1cblxuLmxvYWRlciBzcGFuOm50aC1jaGlsZCg3KVxue1xuICBhbmltYXRpb24tZGVsYXk6IC43cztcbn1cblxuQGtleWZyYW1lcyBhbmltYXRle1xuICAwJXtcbiAgICAgIGNvbG9yOiByZ2IoMzYsIDM4LCAzOSk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAyNSV7XG4gICAgICBjb2xvcjogcmdiKDQxLCA0MSwgNDYpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDE1cHggNXB4IHJnYmEoMCwwLDAsMSk7XG4gIH1cbiAgMTAwJXtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/post-provider */ "./src/providers/post-provider.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(router, toastController, postPvdr, navCtrl, storage) {
        this.router = router;
        this.toastController = toastController;
        this.postPvdr = postPvdr;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.formRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginPage.prototype.proseslogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.username != '' && this.password != '')) return [3 /*break*/, 1];
                        body = {
                            username: this.username,
                            password: this.password,
                            aksi: 'login'
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.storage.set('session_storage', data.result);
                                        this.router.navigate(['/customer']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Bienvenido' + this.username,
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
                                        toast.present();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastController.create({
                            message: 'Usuario O contraseña Invalidas',
                            duration: 2000
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3:
                        this.username = '';
                        this.password = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.continuar = function () {
        this.navCtrl.navigateRoot(['/customer']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _providers_post_provider__WEBPACK_IMPORTED_MODULE_4__["PostProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map