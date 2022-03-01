import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShowcustomerPage } from './showcustomer.page';
var routes = [
    {
        path: '',
        component: ShowcustomerPage
    }
];
var ShowcustomerPageModule = /** @class */ (function () {
    function ShowcustomerPageModule() {
    }
    ShowcustomerPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ShowcustomerPage]
        })
    ], ShowcustomerPageModule);
    return ShowcustomerPageModule;
}());
export { ShowcustomerPageModule };
//# sourceMappingURL=showcustomer.module.js.map