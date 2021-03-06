import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TransferPage } from './transfer.page';
var routes = [
    {
        path: '',
        component: TransferPage
    }
];
var TransferPageModule = /** @class */ (function () {
    function TransferPageModule() {
    }
    TransferPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TransferPage]
        })
    ], TransferPageModule);
    return TransferPageModule;
}());
export { TransferPageModule };
//# sourceMappingURL=transfer.module.js.map