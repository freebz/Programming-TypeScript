// 5.11.2 빌터 패턴
var RequestBuilder = /** @class */ (function () {
    function RequestBuilder() {
        this.data = null;
        this.method = null;
        this.url = null;
    }
    RequestBuilder.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    RequestBuilder.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    RequestBuilder.prototype.setURL = function (url) {
        this.url = url;
        return this;
    };
    RequestBuilder.prototype.send = function () {
        // ...
    };
    return RequestBuilder;
}());
new RequestBuilder()
    .setURL('/users')
    .setMethod('get')
    .setData({ firstName: 'Anna' })
    .send();
