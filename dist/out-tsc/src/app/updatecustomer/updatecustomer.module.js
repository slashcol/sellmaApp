import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatecustomerPage } from './updatecustomer.page';
var routes = [
    {
        path: '',
        component: UpdatecustomerPage
    }
];
var UpdatecustomerPageModule = /** @class */ (function () {
    function UpdatecustomerPageModule() {
    }
    UpdatecustomerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatecustomerPage]
        })
    ], UpdatecustomerPageModule);
    return UpdatecustomerPageModule;
}());
export { UpdatecustomerPageModule };
//# sourceMappingURL=updatecustomer.module.js.map