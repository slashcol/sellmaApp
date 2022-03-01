import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartRevistaPage } from './cart-revista.page';
var routes = [
    {
        path: '',
        component: CartRevistaPage
    }
];
var CartRevistaPageModule = /** @class */ (function () {
    function CartRevistaPageModule() {
    }
    CartRevistaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CartRevistaPage]
        })
    ], CartRevistaPageModule);
    return CartRevistaPageModule;
}());
export { CartRevistaPageModule };
//# sourceMappingURL=cart-revista.module.js.map