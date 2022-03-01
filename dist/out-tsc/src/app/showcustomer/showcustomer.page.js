import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
var ShowcustomerPage = /** @class */ (function () {
    function ShowcustomerPage(router, postPvdr, storage, actRoute) {
        var _this = this;
        this.router = router;
        this.postPvdr = postPvdr;
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
    ShowcustomerPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    ShowcustomerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.upsaldos = [];
        this.start = 0;
        this.loadCustomer(this.login_id);
        this.storage.get('session_storage').then(function (res) {
            _this.anggota = res;
            _this.login_id = _this.anggota.login_id;
            _this.user_id = _this.anggota.user_id;
            _this.identificacion = _this.anggota.identificacion;
            //this.saldo = this.anggota.saldo;
            _this.phone_number = _this.anggota.phone_number;
            _this.username = _this.anggota.username;
        });
    };
    ShowcustomerPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.user_id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.name_destinatario = data.namedest;
            _this.ident_destinatario = data.ident;
            console.log(data);
        });
    };
    ShowcustomerPage.prototype.loadData = function (event) {
        var _this = this;
        this.start += this.limit;
        setTimeout(function () {
            _this.loadCustomer(_this.login_id).then(function () {
                event.target.complete();
            });
        }, 1500);
    };
    ShowcustomerPage.prototype.loadCustomer = function (login_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'gettransfer',
                limit: _this.limit,
                start: _this.start,
                user_id: _this.user_id,
                login_id: _this.login_id,
                contact_customer: _this.contact_customer,
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
    ShowcustomerPage = tslib_1.__decorate([
        Component({
            selector: 'app-showcustomer',
            templateUrl: './showcustomer.page.html',
            styleUrls: ['./showcustomer.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            PostProvider,
            Storage,
            ActivatedRoute])
    ], ShowcustomerPage);
    return ShowcustomerPage;
}());
export { ShowcustomerPage };
//# sourceMappingURL=showcustomer.page.js.map