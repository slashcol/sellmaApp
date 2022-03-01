import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'addcustomer/:id/:name/:desc/:contact', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'showcustomer/:id/:user/:name/:direc/:tele/:identificacion/:codi/:valora/:atraz/:inicioc/:ultimoa/:valorc/:diade/:abon/:sald/:plazo/:credi/:fest', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
  { path: 'updatecustomer/:id/:user/:name/:direc/:tele/:identificacion/:codi/:valora/:atraz/:inicioc/:ultimoa/:valorc/:diade/:abon/:sald/:plazo/:credi/:fest', loadChildren: './updatecustomer/updatecustomer.module#UpdatecustomerPageModule' },
  { path: 'transfer/:id/:name/:desc/:contact/:login/:username/:identificacion', loadChildren: './transfer/transfer.module#TransferPageModule' },
  { path: 'addcontact', loadChildren: './addcontact/addcontact.module#AddcontactPageModule' },
  { path: 'invitaciones', loadChildren: './invitaciones/invitaciones.module#InvitacionesPageModule' },
  { path: 'aceptar', loadChildren: './aceptar/aceptar.module#AceptarPageModule' },
/*  { path: 'recargas-miviles', loadChildren: './recargas-miviles/recargas-miviles.module#RecargasMivilesPageModule' },
   { path: 'el-mundo', loadChildren: './el-mundo/el-mundo.module#ElMundoPageModule' },
  { path: 'futbol-local/:id/:name/:desc/:contact/:login_id/:namedest/:ident', loadChildren: './futbol-local/futbol-local.module#FutbolLocalPageModule' },
  { path: 'cart-revista', loadChildren: './cart-revista/cart-revista.module#CartRevistaPageModule' },
  { path: 'revista', loadChildren: './revista/revista.module#RevistaPageModule' },
  { path: 'lobby-apuestas', loadChildren: './lobby-apuestas/lobby-apuestas.module#LobbyApuestasPageModule' },*/ 
 /*  { path: 'modal-tigo', loadChildren: './modal-tigo/modal-tigo.module#ModalTigoPageModule' },
  { path: 'modal-virgin', loadChildren: './modal-virgin/modal-virgin.module#ModalVirginPageModule' }, */
 /*  { path: 'modal-movistar', loadChildren: './modal-movistar/modal-movistar.module#ModalMovistarPageModule' }, */
  /* { path: 'modal-recargas', loadChildren: './pages/modal-recargas/modal-recargas.module#ModalRecargasPageModule' }, */
  /* { path: 'modal-recargas', loadChildren: './modal-recargas/modal-recargas.module#ModalRecargasPageModule' }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
