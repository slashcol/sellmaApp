import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RevistaPage } from './revista.page';
var routes = [
    {
        path: '',
        component: RevistaPage
    }
];
var RevistaPageModule = /** @class */ (function () {
    function RevistaPageModule() {
    }
    RevistaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [RevistaPage]
        })
    ], RevistaPageModule);
    return RevistaPageModule;
}());
export { RevistaPageModule };
//# sourceMappingURL=revista.module.js.map