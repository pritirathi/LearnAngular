var nmMessage = 'Hello';
//nmMessage=3...strongy type checking
var nmMessage1 = 'Hello';
//nmMessage1=5 
console.log(nmMessage);
console.log("name= " + nmMessage);
var dtVar = new Date();
console.log(dtVar);
var varNum = '1';
var newVar = varNum;
console.log("newvar=" + typeof newVar);
console.log(newVar + 2);
var dtVar2 = Date.now();
console.log(dtVar2);
var mixedVar = true;
mixedVar = 100;
var fn = function () {
    console.log('from function');
};
fn();
var anVar = true;
console.log(anVar);
anVar = { age: 20
};
console.log(anVar);
var objVar = {
    lang: 'typescript'
};
var objVar1 = {
    lang: 'typescript'
};
var objVar2 = {
    '10': 'typescript'
};
