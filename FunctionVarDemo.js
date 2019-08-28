function fnVar()
{
    console.log(`in fnVar`)
}

let varFn=fnVar

varFn();

//annonymous function

let varAn= function(){
    console.log('Annonymous function')
}

varAn();

//lambda function

let varLm = () =>{
    console.log('in lambda function')
}

varLm();
//to display whole function

console.log(' '+ fnVar)