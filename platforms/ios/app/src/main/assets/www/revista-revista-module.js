(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["revista-revista-module"],{

/***/ "./src/app/revista/revista.module.ts":
/*!*******************************************!*\
  !*** ./src/app/revista/revista.module.ts ***!
  \*******************************************/
/*! exports provided: RevistaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevistaPageModule", function() { return RevistaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _revista_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./revista.page */ "./src/app/revista/revista.page.ts");







var routes = [
    {
        path: '',
        component: _revista_page__WEBPACK_IMPORTED_MODULE_6__["RevistaPage"]
    }
];
var RevistaPageModule = /** @class */ (function () {
    function RevistaPageModule() {
    }
    RevistaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_revista_page__WEBPACK_IMPORTED_MODULE_6__["RevistaPage"]]
        })
    ], RevistaPageModule);
    return RevistaPageModule;
}());



/***/ }),

/***/ "./src/app/revista/revista.page.html":
/*!*******************************************!*\
  !*** ./src/app/revista/revista.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>revista</ion-title>\n  </ion-toolbar>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"openCart()\">\n      <ion-badge *ngIf=\"cart.length > 0\"> {{ cart.length }} </ion-badge>\n      <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon> \n    </ion-button>\n  </ion-buttons> \n</ion-header>\n\n<ion-content color=\"dark\">\n\n  <div *ngFor=\"let cat of items\" class=\"category-block\" >\n\n    <ion-row no-padding class=\"category-banner\">\n      <ion-col text-left button (click)=\"cat.expanded = !cat.expanded\" align-self-center >\n     {{ cat.category }}\n      </ion-col>\n\n    </ion-row>\n\n\n  <ion-slides [options]=\"sliderConfig\" >\n    <ion-slide *ngFor=\"let product of cat.products\">\n      <div *ngIf=\"cat.expanded\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title color=\"light\">\n            {{ product.name }}\n          ${{ product.price }} \n          </ion-card-title>\n          <ion-card-content>\n            <img src=\"{{ product.image }}\">\n            <ion-button color=\"tertiary \" expand=\"full\" (click)=\"addToCart(product)\">Pedir</ion-button>\n        </ion-card-content>\n       </ion-card-header>\n      </ion-card>\n     </div>\n    </ion-slide>\n  </ion-slides>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/revista/revista.page.scss":
/*!*******************************************!*\
  !*** ./src/app/revista/revista.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  margin-bottom: 4px; }\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-dark);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aXN0YS9DOlxcR2lvdmFubnlcXGlvbmljNGxvZ2luXFxsb2dpbi9zcmNcXGFwcFxccmV2aXN0YVxccmV2aXN0YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaURBQWlEO0VBQ2pELGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmV2aXN0YS9yZXZpc3RhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmNhdGVnb3J5LWJsb2NrIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC5jYXRlZ29yeS1iYW5uZXIge1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/revista/revista.page.ts":
/*!*****************************************!*\
  !*** ./src/app/revista/revista.page.ts ***!
  \*****************************************/
/*! exports provided: RevistaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevistaPage", function() { return RevistaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_revista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../cart-revista.service */ "./src/app/cart-revista.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RevistaPage = /** @class */ (function () {
    function RevistaPage(cartRevistaService, router, actRoute) {
        this.cartRevistaService = cartRevistaService;
        this.router = router;
        this.actRoute = actRoute;
        this.cart = [];
        this.items = [];
        this.expanded = false;
        this.sliderConfig = {
            spaceBetween: 10,
            centeredSlides: true,
        };
    }
    RevistaPage.prototype.ngOnInit = function () {
        this.cart = this.cartRevistaService.getCart();
        this.items = this.cartRevistaService.getProductos();
    };
    RevistaPage.prototype.addToCart = function (product) {
        this.cartRevistaService.addProduct(product);
    };
    RevistaPage.prototype.openCart = function () {
        this.router.navigate(['cart-revista']);
    };
    RevistaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-revista',
            template: __webpack_require__(/*! ./revista.page.html */ "./src/app/revista/revista.page.html"),
            styles: [__webpack_require__(/*! ./revista.page.scss */ "./src/app/revista/revista.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cart_revista_service__WEBPACK_IMPORTED_MODULE_2__["CartRevistaService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RevistaPage);
    return RevistaPage;
}());



/***/ })

}]);
//# sourceMappingURL=revista-revista-module.js.map