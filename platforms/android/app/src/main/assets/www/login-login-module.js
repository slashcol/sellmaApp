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

module.exports = "<ion-header  >\n  <ion-toolbar color=\"dark\" >\n    <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding=\"40\" color=\"dark\" >\n \n\n <!--    <ion-item expand=\"full\" fill=\"outline\"   color=\"dark\" >\n      <ion-label color=\"primary\"  position=\"floating\">Usuario</ion-label>\n      <ion-input color=\"primary\"  [(ngModel)]=\"username\"></ion-input>\n    </ion-item >  \n    <ion-item  color=\"dark\" >\n      <ion-label color=\"primary\"  position=\"floating\">Contraseña</ion-label>\n      <ion-input color=\"primary\"  type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n  <div padding>\n    <ion-button  expand=\"full\" fill=\"outline\" (click)=\"proseslogin()\" >Entrar</ion-button>\n    <ion-button expand=\"full\" fill=\"outline\" (click)=\"formRegister()\">Registrate</ion-button>\n  </div> -->\n  \n  <ion-list class=\"box\"> \n\n    <ion-input focus  color=\"primary\" type=\"text\"  [(ngModel)]=\"username\" placeholder=\"Usuario\" ></ion-input>\n    \n    <ion-input  color=\"primary\"  type=\"password\" [(ngModel)]=\"password\" placeholder=\"Contraseña\" ></ion-input>\n  \n    <div  padding>\n        <ion-button color=\"secondary\" class=\"botones\" expand=\"full\" fill=\"outline\" (click)=\"proseslogin()\" >Entrar</ion-button>\n        <ion-button color=\"secondary\" expand=\"full\" fill=\"outline\" (click)=\"formRegister()\">Registrate</ion-button> \n      </div> \n\n  </ion-list>\n<!--\n\n  <div class=\"container loader\">\n    <span>S</span>\n    <span>E</span>\n    <span>L</span>\n    <span>L</span>\n    <span>M</span>\n    <span>A</span>\n    \n</div>\n\n-->\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: sans-serif; }\n\n.box {\n  background: none;\n  text-align: center; }\n\n.h1 {\n  color: white;\n  text-transform: uppercase;\n  font-weight: 500; }\n\n.botones {\n  background: none;\n  border-bottom-color: #3498db; }\n\n.box ion-input[type=\"text\"], .box ion-input[type=\"password\"] {\n  border: 0;\n  background: none;\n  display: block;\n  margin: 20px auto;\n  text-align: center;\n  border: 2px solid #3498db;\n  padding: 14px 10px;\n  width: 200px;\n  outline: none;\n  color: #3498db;\n  border-radius: 24px;\n  transition: o 0.25s; }\n\n.box ion-input[type=\"text\"]:focus, .box ion-input[type=\"password\"]:focus {\n  width: 280px;\n  border-color: #2ecc71; }\n\n.loader {\n  position: relative;\n  top: 40%;\n  left: 80%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%); }\n\n.loader span {\n  font-family: arial;\n  font-size: 31px;\n  color: rgba(255, 255, 255, 0.1);\n  display: fixed;\n  transition: all .5s;\n  -webkit-animation: animate 2s infinite;\n          animation: animate 2s infinite; }\n\n.loader span:nth-child(1) {\n  -webkit-animation-delay: .1s;\n          animation-delay: .1s; }\n\n.loader span:nth-child(2) {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s; }\n\n.loader span:nth-child(3) {\n  -webkit-animation-delay: .3s;\n          animation-delay: .3s; }\n\n.loader span:nth-child(4) {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s; }\n\n.loader span:nth-child(5) {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s; }\n\n.loader span:nth-child(6) {\n  -webkit-animation-delay: .6s;\n          animation-delay: .6s; }\n\n.loader span:nth-child(7) {\n  -webkit-animation-delay: .7s;\n          animation-delay: .7s; }\n\n@-webkit-keyframes animate {\n  0% {\n    color: #242627;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    margin-left: 0; }\n  25% {\n    color: #29292e;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n    margin-left: 10;\n    text-shadow: 0 15px 5px black; }\n  100% {\n    color: transparent;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes animate {\n  0% {\n    color: #242627;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    margin-left: 0; }\n  25% {\n    color: #29292e;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n    margin-left: 10;\n    text-shadow: 0 15px 5px black; }\n  100% {\n    color: transparent;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx1c3VhcmlvXFxEb2N1bWVudHNcXGNhcmxvc1xcaW9uaWM0bG9naW5cXGxvZ2luL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsdUJBQXVCLEVBQUE7O0FBRXpCO0VBT0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2xCLDRCQUE2QixFQUFBOztBQUsvQjtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG9EQUE0QztVQUE1Qyw0Q0FBNEMsRUFBQTs7QUFHOUM7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLCtCQUEyQjtFQUMzQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNDQUE4QjtVQUE5Qiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFFRSw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBRUUsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUd0QjtFQUVFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFFRSw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBRUUsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUd0QjtFQUVFLDRCQUFvQjtVQUFwQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFFRSw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0U7SUFDSSxjQUFzQjtJQUN0QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLGNBQWMsRUFBQTtFQUVsQjtJQUNJLGNBQXNCO0lBQ3RCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLDZCQUFxQyxFQUFBO0VBRXpDO0lBQ0ksa0JBQWtCO0lBQ2xCLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBOztBQWQ5QjtFQUNFO0lBQ0ksY0FBc0I7SUFDdEIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixjQUFjLEVBQUE7RUFFbEI7SUFDSSxjQUFzQjtJQUN0QixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZiw2QkFBcUMsRUFBQTtFQUV6QztJQUNJLGtCQUFrQjtJQUNsQixnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gLy8gbWFyZ2luOiAgMDtcbiAgLy9wYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi5ib3h7XG4gLy8gd2lkdGg6IDMwMHB4O1xuICAvL3BhZGRpbmc6IDQwcHg7XG4gLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuIC8vIHRvcDogMzAlO1xuICAvL2xlZnQ6IDUwJTtcbiAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaDF7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5ib3RvbmVze1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICAjMzQ5OGRiO1xuIFxuICBcbiAgfVxuXG4uYm94IGlvbi1pbnB1dFt0eXBlID0gXCJ0ZXh0XCJdLCAuYm94IGlvbi1pbnB1dFt0eXBlID0gXCJwYXNzd29yZFwiXSB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNDk4ZGI7XG4gIHBhZGRpbmc6IDE0cHggMTBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgdHJhbnNpdGlvbjogby4yNXM7XG59XG5cbi5ib3ggaW9uLWlucHV0W3R5cGUgPSBcInRleHRcIl06Zm9jdXMsLmJveCBpb24taW5wdXRbdHlwZSA9IFwicGFzc3dvcmRcIl06Zm9jdXN7XG4gIHdpZHRoOiAyODBweDtcbiAgYm9yZGVyLWNvbG9yOiAjMmVjYzcxOyBcbn1cblxuLmxvYWRlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogODAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmxvYWRlciBzcGFue1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtc2l6ZTogMzFweDtcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICBkaXNwbGF5OiBmaXhlZDtcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDJzIGluZmluaXRlO1xufVxuXG4ubG9hZGVyIHNwYW46bnRoLWNoaWxkKDEpXG57XG4gIGFuaW1hdGlvbi1kZWxheTogLjFzO1xufVxuXG4ubG9hZGVyIHNwYW46bnRoLWNoaWxkKDIpXG57XG4gIGFuaW1hdGlvbi1kZWxheTogLjJzO1xufVxuXG4ubG9hZGVyIHNwYW46bnRoLWNoaWxkKDMpXG57XG4gIGFuaW1hdGlvbi1kZWxheTogLjNzO1xufVxuXG4ubG9hZGVyIHNwYW46bnRoLWNoaWxkKDQpXG57XG4gIGFuaW1hdGlvbi1kZWxheTogLjRzO1xufVxuXG4ubG9hZGVyIHNwYW46bnRoLWNoaWxkKDUpXG57XG4gIGFuaW1hdGlvbi1kZWxheTogLjVzO1xufVxuXG4ubG9hZGVyIHNwYW46bnRoLWNoaWxkKDYpXG57XG4gIGFuaW1hdGlvbi1kZWxheTogLjZzO1xufVxuXG4ubG9hZGVyIHNwYW46bnRoLWNoaWxkKDcpXG57XG4gIGFuaW1hdGlvbi1kZWxheTogLjdzO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGV7XG4gIDAle1xuICAgICAgY29sb3I6IHJnYigzNiwgMzgsIDM5KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIDI1JXtcbiAgICAgIGNvbG9yOiByZ2IoNDEsIDQxLCA0Nik7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMTVweCA1cHggcmdiYSgwLDAsMCwxKTtcbiAgfVxuICAxMDAle1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59Il19 */"

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
                            estado: this.estado,
                            full_name: this.full_name,
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
                                        console.log(data);
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