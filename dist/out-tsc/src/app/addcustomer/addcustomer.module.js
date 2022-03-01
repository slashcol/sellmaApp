import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddcustomerPage } from './addcustomer.page';
import { PipesModule } from '../pipes/pipes.module';
var routes = [
    {
        path: '',
        component: AddcustomerPage
    }
];
var AddcustomerPageModule = /** @class */ (function () {
    function AddcustomerPageModule() {
    }
    AddcustomerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                PipesModule
            ],
            declarations: [AddcustomerPage]
        })
    ], AddcustomerPageModule);
    return AddcustomerPageModule;
}());
export { AddcustomerPageModule };
//# sourceMappingURL=addcustomer.module.js.map