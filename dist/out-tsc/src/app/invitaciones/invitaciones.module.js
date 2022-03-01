import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InvitacionesPage } from './invitaciones.page';
var routes = [
    {
        path: '',
        component: InvitacionesPage
    }
];
var InvitacionesPageModule = /** @class */ (function () {
    function InvitacionesPageModule() {
    }
    InvitacionesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [InvitacionesPage]
        })
    ], InvitacionesPageModule);
    return InvitacionesPageModule;
}());
export { InvitacionesPageModule };
//# sourceMappingURL=invitaciones.module.js.map