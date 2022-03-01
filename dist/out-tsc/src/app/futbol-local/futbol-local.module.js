import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FutbolLocalPage } from './futbol-local.page';
import { PipesModule } from '../pipes/pipes.module';
var routes = [
    {
        path: '',
        component: FutbolLocalPage
    }
];
var FutbolLocalPageModule = /** @class */ (function () {
    function FutbolLocalPageModule() {
    }
    FutbolLocalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                PipesModule
            ],
            declarations: [FutbolLocalPage]
        })
    ], FutbolLocalPageModule);
    return FutbolLocalPageModule;
}());
export { FutbolLocalPageModule };
//# sourceMappingURL=futbol-local.module.js.map