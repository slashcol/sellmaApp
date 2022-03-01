import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
//import { Router,  } from '@angular/router';
var FutbolLocalPage = /** @class */ (function () {
    function FutbolLocalPage(plt, localNotifications, lalertCtrl, router, postPvdr, storage, actRoute) {
        var _this = this;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.lalertCtrl = lalertCtrl;
        this.router = router;
        this.postPvdr = postPvdr;
        this.storage = storage;
        this.actRoute = actRoute;
        this.scheduled = [];
        this.customer = false;
        this.customers = [];
        this.locals = [];
        this.upsaldos = [];
        this.limit = 10;
        this.start = 0;
        this.plt.ready().then(function () {
            _this.localNotifications.on('click').subscribe(function (res) {
                console.log('click: ', res);
                var msg = res.data ? res.data.mydata : '';
                _this.showAlert(res.title, res.text, msg);
            });
            _this.localNotifications.on('trigger').subscribe(function (res) {
                console.log('trigger: ', res);
                var msg = res.data ? res.data.mydata : '';
                _this.showAlert(res.title, res.text, msg);
            });
        });
        setTimeout(function () {
            _this.customer = true;
        }, 3000);
    }
    FutbolLocalPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.ionViewWillEnter();
            event.target.complete();
        }, 1500);
    };
    FutbolLocalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.customers = [];
        this.locals = [];
        this.upsaldos = [];
        this.start = 0;
        this.loadSaldo();
        this.loadRetos();
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
    FutbolLocalPage.prototype.ngOnInit = function () {
        var _this = this;
        this.actRoute.params.subscribe(function (data) {
            _this.id = data.user_id;
            _this.name_customer = data.name;
            _this.desc_customer = data.desc;
            _this.contact_customer = data.contact;
            _this.name_destinatario = data.namedest;
            _this.ident_destinatario = data.ident;
            _this.id_local_fut = data.local_fut;
            _this.imagen = data.img;
            _this.equipo_uno = data.uno;
            _this.marcador_1 = data.marc1;
            _this.equipo_dos = data.dos;
            _this.marcador_2 = data.marc2;
            _this.fecha_inicio = data.inicio;
            _this.fecha_final = data.final;
            _this.estado = data.esta;
            console.log(data);
        });
    };
    FutbolLocalPage.prototype.loadData = function (event) {
        this.start += this.limit;
        setTimeout(function () {
            /* this.loadRetos().then(() => {
            event.target.complete();
            }); */
        }, 1500);
    };
    FutbolLocalPage.prototype.loadSaldo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: 'getdata3',
                saldo: _this.saldo,
                user_id: _this.user_id,
                login_id: _this.login_id
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
    FutbolLocalPage.prototype.loadRetos = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var body = {
                aksi: '894773822',
                equipo_uno: _this.equipo_uno,
                user_id: _this.user_id,
                login_id: _this.login_id,
                contact_customer: _this.contact_customer
            };
            //console.log(this.login_id);
            _this.postPvdr.postData(body, 'file_aksi.php').subscribe(function (data) {
                if (data.result) {
                    for (var _i = 0, _a = data.result; _i < _a.length; _i++) {
                        var local = _a[_i];
                        _this.locals.push(local);
                    }
                }
                console.log(_this.saldo);
                resolve(true);
            });
        });
    };
    FutbolLocalPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'Atencion',
            text: 'Notificaciones Sellma',
            data: { mydata: 'Este es el archivo de mi mensaje' },
            trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
        });
    };
    FutbolLocalPage.prototype.recurringNotification = function () {
        this.localNotifications.schedule({
            id: 22,
            title: 'Recurring',
            text: 'Notificaciones Sellma',
            trigger: { every: ELocalNotificationTriggerUnit.MINUTE },
        });
    };
    FutbolLocalPage.prototype.repeatingDaily = function () {
        this.localNotifications.schedule({
            id: 42,
            title: 'Good Morning',
            text: 'good morning  Sellma',
            trigger: { every: { hour: 13, minute: 0 } },
        });
    };
    FutbolLocalPage.prototype.getHall = function () {
        var _this = this;
        this.localNotifications.getAll().then(function (res) {
            _this.scheduled = res;
        });
    };
    FutbolLocalPage.prototype.showAlert = function (header, sub, msg) {
        this.lalertCtrl.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['OK']
        }).then(function (alert) { return alert.present(); });
    };
    FutbolLocalPage = tslib_1.__decorate([
        Component({
            selector: 'app-futbol-local',
            templateUrl: './futbol-local.page.html',
            styleUrls: ['./futbol-local.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            LocalNotifications,
            AlertController,
            Router,
            PostProvider,
            Storage,
            ActivatedRoute])
    ], FutbolLocalPage);
    return FutbolLocalPage;
}());
export { FutbolLocalPage };
//# sourceMappingURL=futbol-local.page.js.map