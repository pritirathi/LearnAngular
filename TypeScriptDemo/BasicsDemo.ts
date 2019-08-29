
let nmMessage : string ='Hello'
//nmMessage=3...strongy type checking
let nmMessage1  ='Hello'
//nmMessage1=5 
console.log(nmMessage)
console.log(`name= ${nmMessage}`)

let dtVar : Date = new Date()

console.log(dtVar)

let varNum  ='1'
let newVar :number = <number> <any> varNum
console.log("newvar=" +typeof newVar)
console.log(newVar+2)

let dtVar2 : number = Date.now()

console.log(dtVar2)

let  mixedVar : number | boolean = true

mixedVar = 100

let fn : () => void =function(){
console.log('from function')
}

fn()

let anVar :any =true
console.log(anVar)
anVar={ age:20
}
console.log(anVar)

let objVar : {} ={
    lang : 'typescript'
}
let objVar1 : object ={
    lang : 'typescript'
}
let objVar2 : {[key:number]:string} ={
    1 : 'typescript'
}
//'10' is assignable to number but not 'A'