import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartRevistaService } from './../cart-revista.service';
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
                selected[obj.id] = tslib_1.__assign({}, obj, { count: 1 });
            }
        }
        this.selectedItems = Object.keys(selected).map(function (Key) { return selected[Key]; });
        console.log('items: ', this.selectedItems);
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.price); }, 0);
    };
    CartRevistaPage = tslib_1.__decorate([
        Component({
            selector: 'app-cart-revista',
            templateUrl: './cart-revista.page.html',
            styleUrls: ['./cart-revista.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [CartRevistaService])
    ], CartRevistaPage);
    return CartRevistaPage;
}());
export { CartRevistaPage };
//# sourceMappingURL=cart-revista.page.js.map