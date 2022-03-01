import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecargasMivilesPage } from './recargas-miviles.page';
import { ModalRecargasPage } from '../modal-recargas/modal-recargas.page';
import { ModalRecargasPageModule } from '../modal-recargas/modal-recargas.module';
var routes = [
    {
        path: '',
        component: RecargasMivilesPage
    }
];
var RecargasMivilesPageModule = /** @class */ (function () {
    function RecargasMivilesPageModule() {
    }
    RecargasMivilesPageModule = tslib_1.__decorate([
        NgModule({
            entryComponents: [
                ModalRecargasPage
            ],
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ModalRecargasPageModule
            ],
            declarations: [RecargasMivilesPage]
        })
    ], RecargasMivilesPageModule);
    return RecargasMivilesPageModule;
}());
export { RecargasMivilesPageModule };
//# sourceMappingURL=recargas-miviles.module.js.map