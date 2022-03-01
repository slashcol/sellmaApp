import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var AceptarPage = /** @class */ (function () {
    function AceptarPage(postPvdr, router, toastController, actRoute, storage) {
        this.postPvdr = postPvdr;
        this.router = router;
        this.toastController = toastController;
        this.actRoute = actRoute;
        this.storage = storage;
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.name_customer = '';
        this.desc_customer = '';
        this.contact_customer = '';
    }
    AceptarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.monto_customer = data.monto;
            _this.login_id = data.login;
            _this.saldo = data.saldo;
            _this.identificacion = data.identificacion;
            _this.username = data.username;
            console.log(data);
        });
    };
    AceptarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        //this.loadCustomer(this.login_id);
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            //this.login_id = this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.saldo = _this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
            _this.identificacion = _this.anggota.identificacion;
        });
    };
    AceptarPage.prototype.updateProses = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast, toast, toast, toast, body;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name_customer == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Customer is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 2:
                        if (!(this.desc_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: this.username + ', Cuentale a ' + this.name_customer + ' de tu transferencia',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 4:
                        if (!(this.monto_customer == null)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Un Monto Valido',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 6:
                        if (!(this.monto_customer == 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Ingresa Un Monto Valido',
                                duration: 2000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 9];
                    case 8:
                        body = {
                            aksi: '1144168921',
                            customer_id: this.id,
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                            contact_customer: this.contact_customer,
                            monto_customer: this.monto_customer,
                            saldo: this.saldo,
                            login_id: this.login_id,
                            user_id: this.user_id,
                            username: this.username,
                            identificacion: this.identificacion,
                        };
                        // if ( this.saldo > this.monto_customer  ) { 
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.UpinProces();
                                        this.proseslogout();
                                        this.monto_customer = null;
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Data updated successful',
                                                duration: 2000
                                            })];
                                    case 1:
                                        toast = _a.sent();
                                        //console.log(this.contact_customer);
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
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AceptarPage.prototype.proseslogout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage.clear();
                        this.router.navigate(['/login']);
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Logout successful',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AceptarPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 500);
    };
    //aqui va la funcion para usar el salgo
    AceptarPage.prototype.RecargaProces = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Revisa Tu Monto',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        this.monto_customer = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    AceptarPage.prototype.UpinProces = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                body = {
                    aksi: '87081758385',
                    monto_customer: this.monto_customer,
                    saldo: this.saldo,
                    login_id: this.login_id,
                    user_id: this.user_id,
                };
                this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var alertpesan, toast, toast;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                alertpesan = data.msg;
                                if (!data.success) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.toastController.create({
                                        message: 'Por Tu Seguridad debes Iniciar de Nuevo ',
                                        duration: 2000
                                    })];
                            case 1:
                                toast = _a.sent();
                                //console.log(this.contact_customer);
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
                return [2 /*return*/];
            });
        });
    };
    AceptarPage.prototype.loadSaldo = function () {
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
    AceptarPage = tslib_1.__decorate([
        Component({
            selector: 'app-aceptar',
            templateUrl: './aceptar.page.html',
            styleUrls: ['./aceptar.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PostProvider,
            Router,
            ToastController,
            ActivatedRoute,
            Storage])
    ], AceptarPage);
    return AceptarPage;
}());
export { AceptarPage };
//# sourceMappingURL=aceptar.page.js.map