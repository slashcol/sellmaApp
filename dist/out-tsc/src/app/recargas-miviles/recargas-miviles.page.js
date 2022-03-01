import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { ModalRecargasPage } from '../modal-recargas/modal-recargas.page';
var RecargasMivilesPage = /** @class */ (function () {
    function RecargasMivilesPage(router, toastController, storage, modalCtr, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.storage = storage;
        this.modalCtr = modalCtr;
        this.postPvdr = postPvdr;
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
        this.no_abonado = '';
        this.valor = '';
        this.customer = false;
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.imagenes = [
            'assets/comunic/claro.jpeg',
            'assets/comunic/movistar.jpeg',
            'assets/comunic/tigo.jpeg',
            'assets/comunic/virgin.png',
        ];
    }
    RecargasMivilesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        // this.logueo();
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            //this.saldo = this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    RecargasMivilesPage.prototype.ngOnInit = function () {
    };
    RecargasMivilesPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    RecargasMivilesPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    RecargasMivilesPage.prototype.addRecarga = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast, toast, body;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.no_abonado == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa un numero valido',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.valor == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'ingresa un valor valido',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        body = {
                            /*   full_name: this.full_name,
                              phone_number: this.phone_number,
                              identificacion: this.identificacion,
                              username: this.username,
                              password: this.password, */
                            no_abonado: this.no_abonado,
                            valor: this.valor,
                            aksi: '345456789'
                        };
                        this.postPvdr.postData(body, 'mi_version.php').subscribe(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/login']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Recarga Correcta',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        toast.present();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.toastController.create({
                                            message: alertpesan,
                                            duration: 2000
                                        })];
                                    case 3:
                                        toast = _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 5;
                    case 5:
                        console.log(this.no_abonado, this.valor);
                        console.log(this.no_abonado, this.valor);
                        return [2 /*return*/];
                }
            });
        });
    };
    RecargasMivilesPage.prototype.loadSaldo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata3',
                saldo: _this.saldo,
                user_id: _this.user_id
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var upsaldo = _a[_i];
                        _this.upsaldos.push(upsaldo);
                    }
                }
                console.log(_this.saldo);
                resolve(true);
            });
        });
    };
    //claro
    RecargasMivilesPage.prototype.datosClaro = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtr.create({
                            component: ModalRecargasPage,
                            componentProps: {
                                numero: 'Value1',
                                valor: 'value2'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RecargasMivilesPage = tslib_1.__decorate([
        Component({
            selector: 'app-recargas-miviles',
            templateUrl: './recargas-miviles.page.html',
            styleUrls: ['./recargas-miviles.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ToastController,
            Storage,
            ModalController,
            PostProvider])
    ], RecargasMivilesPage);
    return RecargasMivilesPage;
}());
export { RecargasMivilesPage };
//# sourceMappingURL=recargas-miviles.page.js.map