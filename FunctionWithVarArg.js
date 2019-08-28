function addAll()
{
    let res=0;
    for(let i=0;i<arguments.length; i++)
    {
res += arguments[i];
    }
    return res;
}

console.log(addAll(10,2,34,5))