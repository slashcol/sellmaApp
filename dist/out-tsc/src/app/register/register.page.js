import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, toastController, postPvdr) {
        this.router = router;
        this.toastController = toastController;
        this.postPvdr = postPvdr;
        this.full_name = '';
        this.phone_number = '';
        this.identificacion = '';
        this.username = '';
        this.password = '';
        this.confirm_password = '';
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.formLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterPage.prototype.addRegister = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast, toast, toast, toast, toast, toast, body;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.full_name == '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Fullname is required',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 2:
                        if (!(this.phone_number == '')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Phone number is required',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 4:
                        if (!(this.identificacion == '')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Phone number is required',
                                duration: 2000
                            })];
                    case 5:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 6:
                        if (!(this.username == '')) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Username is required',
                                duration: 2000
                            })];
                    case 7:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 8:
                        if (!(this.password == '')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Password is required',
                                duration: 2000
                            })];
                    case 9:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 10:
                        if (!(this.password != this.confirm_password)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Contraseña no Coincide',
                                duration: 2000
                            })];
                    case 11:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 13];
                    case 12:
                        body = {
                            full_name: this.full_name,
                            phone_number: this.phone_number,
                            identificacion: this.identificacion,
                            username: this.username,
                            password: this.password,
                            aksi: 'add_register'
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.router.navigate(['/login']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Register successfully',
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
                        _a.label = 13;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ToastController,
            PostProvider])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map