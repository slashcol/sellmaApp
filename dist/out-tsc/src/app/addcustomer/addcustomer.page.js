import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
var AddcustomerPage = /** @class */ (function () {
    function AddcustomerPage(postPvdr, router, toastController, actRoute, storage) {
        this.postPvdr = postPvdr;
        this.router = router;
        this.toastController = toastController;
        this.actRoute = actRoute;
        this.storage = storage;
        this.customers = [];
        this.limit = 10;
        this.start = 0;
        this.name_customer = '';
        this.desc_customer = '';
        this.contact_customer = '';
        this.phone_customer = '';
    }
    AddcustomerPage.prototype.ngOnInit = function () {
    };
    AddcustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.start = 0;
        this.loadCustomer();
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.user_id = _this.anggota.user_id;
            _this.username = _this.anggota.username;
        });
    };
    AddcustomerPage.prototype.loadCustomer = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata',
                limit: _this.limit,
                start: _this.start,
            };
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                    var customer = _a[_i];
                    _this.customers.push(customer);
                }
                resolve(true);
            });
        });
    };
    AddcustomerPage.prototype.createdProses = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast, body;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.name_customer == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Customer name is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 3];
                    case 2:
                        body = {
                            aksi: 'add',
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                            contact_customer: this.contact_customer,
                            login_id: this.user_id,
                            username: this.username
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/customer']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Contacto Agregado',
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
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddcustomerPage.prototype.updateProses = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast, toast, body;
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
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.desc_customer == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Description is required',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 5];
                    case 4:
                        body = {
                            aksi: 'update',
                            customer_id: this.id,
                            name_customer: this.name_customer,
                            desc_customer: this.desc_customer,
                            contact_customer: this.contact_customer,
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/customer']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Data updated successful',
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
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AddcustomerPage = tslib_1.__decorate([
        Component({
            selector: 'app-addcustomer',
            templateUrl: './addcustomer.page.html',
            styleUrls: ['./addcustomer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [PostProvider,
            Router,
            ToastController,
            ActivatedRoute,
            Storage])
    ], AddcustomerPage);
    return AddcustomerPage;
}());
export { AddcustomerPage };
//# sourceMappingURL=addcustomer.page.js.map