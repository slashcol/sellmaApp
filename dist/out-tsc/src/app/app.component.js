import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, storage, router, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.router = router;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.storage.get('session_storage').then(function (res) {
            if (res == null) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.router.navigate(['/customer']);
            }
        });
    };
    tslib_1.__decorate([
        ViewChild('content'),
        tslib_1.__metadata("design:type", NavController)
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            Storage,
            Router,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map