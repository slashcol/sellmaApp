import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ElMundoPage } from './el-mundo.page';
var routes = [
    {
        path: '',
        component: ElMundoPage
    }
];
var ElMundoPageModule = /** @class */ (function () {
    function ElMundoPageModule() {
    }
    ElMundoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ElMundoPage]
        })
    ], ElMundoPageModule);
    return ElMundoPageModule;
}());
export { ElMundoPageModule };
//# sourceMappingURL=el-mundo.module.js.map