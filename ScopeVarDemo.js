let globalVar=100
for(var x=0;x<=2;x++)
{
    let globalVar=200
}
//let globalVar=120 redeclaration in same scope not allowed in case of let
//varDemo()
console.log(' using let globalVar '+globalVar) // scope is maintained in let ..ANS 100

//using var...
var globalVar1=100
for(var x=0;x<=2;x++)
{
    var globalVar1=200
}
//https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var
console.log('using var globalVar '+globalVar1)  // ans is 200


//variable declared using var in function will have function scope only not accessible outside

function demoFun()
{
    var varFn=10;
}

//console.log(varFn) //not defined error
