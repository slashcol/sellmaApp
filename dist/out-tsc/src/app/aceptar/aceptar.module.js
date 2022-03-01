import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AceptarPage } from './aceptar.page';
var routes = [
    {
        path: '',
        component: AceptarPage
    }
];
var AceptarPageModule = /** @class */ (function () {
    function AceptarPageModule() {
    }
    AceptarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AceptarPage]
        })
    ], AceptarPageModule);
    return AceptarPageModule;
}());
export { AceptarPageModule };
//# sourceMappingURL=aceptar.module.js.map