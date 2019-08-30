function normFun(x, y) {
    console.log('normal function called');
    return x + y;
}
//to call
console.log(normFun(10, 20));
//Annonymous function
var fun1 = function (x, y) {
    console.log('function with fat arrow called');
    return x + y;
};
//to call
console.log(fun1(10, 20));
var fun2 = function () { return console.log('fat arrow function without parameter'); };
fun2();
