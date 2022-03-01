import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartRevistaService } from './../cart-revista.service';
import { Router, ActivatedRoute } from '@angular/router';
var RevistaPage = /** @class */ (function () {
    function RevistaPage(cartRevistaService, router, actRoute) {
        this.cartRevistaService = cartRevistaService;
        this.router = router;
        this.actRoute = actRoute;
        this.cart = [];
        this.items = [];
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
    RevistaPage = tslib_1.__decorate([
        Component({
            selector: 'app-revista',
            templateUrl: './revista.page.html',
            styleUrls: ['./revista.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartRevistaService, Router, ActivatedRoute])
    ], RevistaPage);
    return RevistaPage;
}());
export { RevistaPage };
//# sourceMappingURL=revista.page.js.map