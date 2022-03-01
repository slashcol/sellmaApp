import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var CartRevistaService = /** @class */ (function () {
    function CartRevistaService() {
        this.data = [
            {
                category: 'Pacifica',
                expanded: true,
                products: [
                    { id: 0, name: 'Blusa Dama', ref: '787687', price: '23000' },
                    { id: 1, name: 'Jean Classic', ref: '4212', price: '43000' },
                    { id: 2, name: 'Zapatos Niño', ref: '00786', price: '60000' },
                    { id: 3, name: 'Vestido', ref: '23244', price: '72900' }
                ]
            },
            {
                category: 'Todo Hogar',
                products: [
                    { id: 4, name: 'Mac & Chesse', ref: '1122', price: '12567' },
                    { id: 5, name: 'Bolognese', ref: '5446', price: '32000' }
                ]
            },
            {
                category: 'Avon',
                expanded: true,
                products: [
                    { id: 6, name: 'ham & Egg', ref: '27855', price: '29000' },
                    { id: 7, name: 'Basic', ref: '32133', price: '74900' },
                    { id: 8, name: 'Ceaser', ref: '17888', price: '76700' }
                ]
            }
        ];
        this.cart = [];
    }
    CartRevistaService.prototype.getProductos = function () {
        return this.data;
    };
    CartRevistaService.prototype.getCart = function () {
        return this.cart;
    };
    CartRevistaService.prototype.addProduct = function (product) {
        this.cart.push(product);
    };
    CartRevistaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CartRevistaService);
    return CartRevistaService;
}());
export { CartRevistaService };
//# sourceMappingURL=cart-revista.service.js.map