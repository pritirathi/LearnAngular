//function with optional parameter and default parameter
function funAdd(x : number=100, y?: number) :number
{
if( y== undefined)
y=0;

return x+y
}

console.log(`addition of 10 and 20 = ${funAdd(10,20)}`)
console.log(`addition of 10 = ${funAdd(10)}`)
console.log(`addition of 10 = ${funAdd()}`)

//function with rest parameter

function funRest(...num:number[])
{
    for(let x=0;x<num.length;x++)
    {
        console.log('val=',num[x])
    }
}
funRest(10,20,30,40)