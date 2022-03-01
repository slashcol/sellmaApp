import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
//import { Router,  } from '@angular/router';
var AddcontactPage = /** @class */ (function () {
    function AddcontactPage(router, postPvdr, toastController, storage, actRoute) {
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
        setTimeout(function () {
            _this.customer = true;
        }, 3000);
    }
    AddcontactPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.saldo = data.saldo;
            console.log(data);
        });
    };
    AddcontactPage.prototype.ionViewWillEnter = function () {
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
        });
    };
    AddcontactPage.prototype.proseslogout = function () {
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
    AddcontactPage.prototype.addCustomer = function () {
        this.router.navigate(['/addcustomer']);
    };
    AddcontactPage.prototype.updateCustomer = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/updatecustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    AddcontactPage.prototype.showCustomer = function (id, name, desc, contact, login, namedest, ident) {
        this.router.navigate(['/showcustomer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + namedest + '/' + ident]);
    };
    AddcontactPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    AddcontactPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    AddcontactPage.prototype.delCustomer = function (id) {
        var _this = this;
        var body = {
            aksi: 'delete',
            customer_id: id
        };
        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
            _this.ionViewWillEnter();
        });
    };
    AddcontactPage.prototype.loadCustomer = function (login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id,
                login_id: _this.login_id
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
    AddcontactPage.prototype.colores = function (id, name, desc, contact, login, username, identificacion) {
        this.router.navigate(['/transfer/' + id + '/' + name + '/' + desc + '/' + contact + '/' + login + '/' + username + '/' + identificacion]);
    };
    AddcontactPage.prototype.loadSaldo = function () {
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
    AddcontactPage.prototype.buscar = function (event) {
        this.textoBuscar = event.detail.value;
    };
    AddcontactPage = tslib_1.__decorate([
        Component({
            selector: 'app-addcontact',
            templateUrl: './addcontact.page.html',
            styleUrls: ['./addcontact.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            PostProvider,
            ToastController,
            Storage,
            ActivatedRoute])
    ], AddcontactPage);
    return AddcontactPage;
}());
export { AddcontactPage };
//# sourceMappingURL=addcontact.page.js.map