interface drive{ //used in InheritanceDemo
    speedlimit : number
}

interface person{
    pname :string
    pAge :number
    getInfo : ()=> string //function returning string
}
let per : person={
pname : 'Henry',
pAge :20,
getInfo: ():string=>{
return 'function from interface'
}
}
//interface can be used as type of object