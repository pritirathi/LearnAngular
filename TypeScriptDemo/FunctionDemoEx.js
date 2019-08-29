//function with optional parameter and default parameter
function funAdd(x, y) {
    if (x === void 0) { x = 100; }
    if (y == undefined)
        y = 0;
    return x + y;
}
console.log("addition of 10 and 20 = " + funAdd(10, 20));
console.log("addition of 10 = " + funAdd(10));
console.log("addition of 10 = " + funAdd());
//function with rest parameter
function funRest() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    for (var x = 0; x < num.length; x++) {
        console.log('val=', num[x]);
    }
}
funRest(10, 20, 30, 40);
