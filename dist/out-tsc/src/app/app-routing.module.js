import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
    { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
    { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
    { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
    { path: 'addcustomer/:id/:name/:desc/:contact', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
    { path: 'showcustomer/:id/:name/:desc/:contact/:login_id/:namedest/:ident', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
    { path: 'updatecustomer/:id/:name/:desc/:contact/:login/:username/:identificacion', loadChildren: './updatecustomer/updatecustomer.module#UpdatecustomerPageModule' },
    { path: 'transfer/:id/:name/:desc/:contact/:login/:username/:identificacion', loadChildren: './transfer/transfer.module#TransferPageModule' },
    { path: 'addcontact', loadChildren: './addcontact/addcontact.module#AddcontactPageModule' },
    { path: 'invitaciones', loadChildren: './invitaciones/invitaciones.module#InvitacionesPageModule' },
    { path: 'aceptar/:id/:name/:desc/:contact/:login/:monto', loadChildren: './aceptar/aceptar.module#AceptarPageModule' },
    { path: 'recargas-miviles', loadChildren: './recargas-miviles/recargas-miviles.module#RecargasMivilesPageModule' },
    { path: 'el-mundo', loadChildren: './el-mundo/el-mundo.module#ElMundoPageModule' },
    { path: 'futbol-local/:id/:name/:desc/:contact/:login_id/:namedest/:ident', loadChildren: './futbol-local/futbol-local.module#FutbolLocalPageModule' },
    { path: 'cart-revista', loadChildren: './cart-revista/cart-revista.module#CartRevistaPageModule' },
    { path: 'revista', loadChildren: './revista/revista.module#RevistaPageModule' },
    /* { path: 'modal-recargas', loadChildren: './pages/modal-recargas/modal-recargas.module#ModalRecargasPageModule' }, */
    { path: 'modal-recargas', loadChildren: './modal-recargas/modal-recargas.module#ModalRecargasPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map