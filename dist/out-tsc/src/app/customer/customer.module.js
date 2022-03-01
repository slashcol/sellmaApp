import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CustomerPage } from './customer.page';
import { PipesModule } from '../pipes/pipes.module';
var routes = [
    {
        path: '',
        component: CustomerPage
    }
];
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                PipesModule
            ],
            declarations: [CustomerPage]
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());
export { CustomerPageModule };
//# sourceMappingURL=customer.module.js.map