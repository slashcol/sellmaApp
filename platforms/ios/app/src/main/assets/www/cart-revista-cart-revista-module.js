(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-revista-cart-revista-module"],{

/***/ "./src/app/cart-revista/cart-revista.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cart-revista/cart-revista.module.ts ***!
  \*****************************************************/
/*! exports provided: CartRevistaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRevistaPageModule", function() { return CartRevistaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_revista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-revista.page */ "./src/app/cart-revista/cart-revista.page.ts");







var routes = [
    {
        path: '',
        component: _cart_revista_page__WEBPACK_IMPORTED_MODULE_6__["CartRevistaPage"]
    }
];
var CartRevistaPageModule = /** @class */ (function () {
    function CartRevistaPageModule() {
    }
    CartRevistaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_revista_page__WEBPACK_IMPORTED_MODULE_6__["CartRevistaPage"]]
        })
    ], CartRevistaPageModule);
    return CartRevistaPageModule;
}());



/***/ }),

/***/ "./src/app/cart-revista/cart-revista.page.html":
/*!*****************************************************!*\
  !*** ./src/app/cart-revista/cart-revista.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons  >\n    <ion-title>cart_revista</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of selectedItems \" lines=\"inset\" >\n      {{ item.count }} x {{ item.name }} - {{ item.price | currency: 'USD'  }}\n      <ion-label slot=\"end\" text-right> {{ (item.price * item.count) | currency: 'USD' }} </ion-label>\n    </ion-item>\n    <ion-item>\n      Total: <span slot=\"end\"> {{ total | currency: 'USD'}} </span>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart-revista/cart-revista.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cart-revista/cart-revista.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtcmV2aXN0YS9jYXJ0LXJldmlzdGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart-revista/cart-revista.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cart-revista/cart-revista.page.ts ***!
  \***************************************************/
/*! exports provided: CartRevistaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRevistaPage", function() { return CartRevistaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_revista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart-revista.service */ "./src/app/cart-revista.service.ts");



var CartRevistaPage = /** @class */ (function () {
    function CartRevistaPage(cartRevistaService) {
        this.cartRevistaService = cartRevistaService;
        this.selectedItems = [];
        this.total = 0;
    }
    CartRevistaPage.prototype.ngOnInit = function () {
        var items = this.cartRevistaService.getCart();
        var selected = {};
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var obj = items_1[_i];
            if (selected[obj.id]) {
                selected[obj.id].count++;
            }
            else {
                selected[obj.id] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, obj, { count: 1 });
            }
        }
        this.selectedItems = Object.keys(selected).map(function (Key) { return selected[Key]; });
        console.log('items: ', this.selectedItems);
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.price); }, 0);
    };
    CartRevistaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart-revista',
            template: __webpack_require__(/*! ./cart-revista.page.html */ "./src/app/cart-revista/cart-revista.page.html"),
            styles: [__webpack_require__(/*! ./cart-revista.page.scss */ "./src/app/cart-revista/cart-revista.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_revista_service__WEBPACK_IMPORTED_MODULE_2__["CartRevistaService"]])
    ], CartRevistaPage);
    return CartRevistaPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-revista-cart-revista-module.js.map