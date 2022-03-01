import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var TransferPage = /** @class */ (function () {
    function TransferPage(router, postPvdr, toastController, storage, actRoute) {
        var _this = this;
        this.router = router;
        this.postPvdr = postPvdr;
        this.toastController = toastController;
        this.storage = storage;
        this.actRoute = actRoute;
        this.customer = false;
        this.customers = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.identificacion = '';
        setTimeout(function () {
            _this.customer = true;
        }, 3000);
    }
    TransferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.saldo = data.saldo;
            _this.name_destinatario = data.namedest;
            _this.monto_customer = data.monto;
            _this.ident_destinatario = data.ident;
            console.log(data);
        });
    };
    TransferPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        this.loadCustomer(this.login_id);
        this.loadSaldo();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            //this.saldo = this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
            _this.identificacion = _this.anggota.identificacion;
            _this.name_destinatario = _this.anggota.name_destinatario;
            _this.ident_destinatario = _this.anggota.ident_destinatario;
        });
    };
    TransferPage.prototype.proseslogout = function () {
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
    TransferPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcustomer']);
    };
    TransferPage.prototype.updateAceptar = function (id, name, desc, contact, login, monto) {
        this.router.navigate(['/aceptar/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + monto]);
    };
    TransferPage.prototype.showCustomer = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    TransferPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    TransferPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    TransferPage.prototype.delCustomer = function (id) {
        var _this = this;
        var body = {
            aksi: 'delete',
            customer_id: id
        };
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
            _this.ionViewWillEnter();
        });
    };
    TransferPage.prototype.loadCustomer = function (login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: '456578980',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id,
                login_id: _this.login_id,
                identificacion: _this.identificacion,
                name_destinatario: _this.name_destinatario,
                ident_destinatario: _this.ident_destinatario
                // saldo : this.saldo
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var customer = _a[_i];
                        _this.customers.push(customer);
                    }
                }
                resolve(true);
            });
        });
    };
    TransferPage.prototype.loadSaldo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata3',
                saldo: _this.saldo,
                user_id: _this.user_id
            };
            console.log(_this.login_id);
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
    TransferPage.prototype.UpinProces = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.saldo = this.saldo + this.monto_customer;
                body = {
                    aksi: 'update_transfer',
                    monto_customer: this.monto_customer,
                    saldo: this.saldo,
                    login_id: this.login_id,
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
    TransferPage = tslib_1.__decorate([
        Component({
            selector: 'app-transfer',
            templateUrl: './transfer.page.html',
            styleUrls: ['./transfer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            PostProvider,
            ToastController,
            Storage,
            ActivatedRoute])
    ], TransferPage);
    return TransferPage;
}());
export { TransferPage };
//# sourceMappingURL=transfer.page.js.map