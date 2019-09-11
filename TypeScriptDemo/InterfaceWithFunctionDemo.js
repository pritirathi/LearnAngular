var InfDemo = /** @class */ (function () {
    function InfDemo() {
    }
    InfDemo.prototype.getFullName = function () {
        return this.fname + this.lname;
    };
    return InfDemo;
}());
var d = new InfDemo();
d.fname = 'Priti';
d.lname = 'Rathi';
console.log(d.getFullName());
