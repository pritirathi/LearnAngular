fnNorm() //hoisted as can be called before defining
function fnNorm()
{
    console.log('in simple function')
    return 0;
}
//funVar() normal functions r hoisted but annonymous and => not
var funVar= function (){console.log('annonymous function as expression ') 
console.log(this);
return 10;
}

//to call anonymous function 
funVar()

var lambdaVar = () => {
    console.log('lambda function');
    console.log(this)
}
lambdaVar()
//this in normal function referes to window while in lambda its nothing {}


var conFun = new Function("x","y", "return x+y");
console.log('function con ='+conFun(10,2));