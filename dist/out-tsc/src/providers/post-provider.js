import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
var PostProvider = /** @class */ (function () {
    //server: string = 'http://localhost/ionic4login/server_api/';
    function PostProvider(http) {
        this.http = http;
        this.server = 'http://sellmatech.biz/colombia/';
    }
    PostProvider.prototype.postData = function (body, file) {
        var type = 'application/json; charset=utf-8';
        var headers = new Headers({ 'Content-Type': type });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.server + file, JSON.stringify(body), options)
            .map(function (res) { return res.json(); });
    };
    PostProvider = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], PostProvider);
    return PostProvider;
}());
export { PostProvider };
//# sourceMappingURL=post-provider.js.map