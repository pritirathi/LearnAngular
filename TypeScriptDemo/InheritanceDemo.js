var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shape = /** @class */ (function () {
    function shape(type) {
        this.type = type;
    }
    shape.prototype.display = function () {
        console.log('from shape');
    };
    return shape;
}());
var square = /** @class */ (function (_super) {
    __extends(square, _super);
    function square(height, type) {
        var _this = _super.call(this, type) || this;
        _this.height = height;
        return _this;
    }
    return square;
}(shape));
var rect = /** @class */ (function (_super) {
    __extends(rect, _super);
    function rect(height, length, type) {
        var _this = _super.call(this, type) || this;
        _this.height = height;
        _this.length = length;
        return _this;
    }
    rect.getHt = function () {
        return this.length; // it's not allowing height why??
    };
    rect.prototype.display = function () {
        console.log('from rect');
        console.log("height=" + this.height + " , length=" + this.length + " , type=" + this.type);
    };
    return rect;
}(shape));
var r1 = new rect(10, 20, 'rectangle');
r1.display();
rect.info = 'rect class info';
console.log('info of rect class ', rect.info);
//console.log('info of rect class ',r1.info) static member not accessible using object
//r1.length=2 private so not accessible
console.log("ht=" + rect.getHt());
//console.log(`ht=${r1.getHt()}`) static methods not accessible by objects
//hierarchicla inh
var sq = new square(30, 'square');
console.log('ht=' + sq.height);
