import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
var LoginPage = /** @class */ (function () {
    function LoginPage(router, toastController, postPvdr, storage) {
        this.router = router;
        this.toastController = toastController;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.formRegister = function () {
        this.router.navigate(['/register']);
    };
    LoginPage.prototype.proseslogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body, toast;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.username != '' && this.password != '')) return [3 /*break*/, 1];
                        body = {
                            username: this.username,
                            password: this.password,
                            aksi: 'login'
                        };
                        this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var alertpesan, toast, toast;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        alertpesan = data.msg;
                                        if (!data.success) return [3 /*break*/, 2];
                                        this.storage.set('session_storage', data.result);
                                        this.router.navigate(['/customer']);
                                        return [4 /*yield*/, this.toastController.create({
                                                message: 'Bienvenido' + this.username,
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
                                        toast.present();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.toastController.create({
                            message: 'Usuario O contraseña Invalidas',
                            duration: 2000
                        })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 3;
                    case 3:
                        this.username = '';
                        this.password = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ToastController,
            PostProvider,
            Storage])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map