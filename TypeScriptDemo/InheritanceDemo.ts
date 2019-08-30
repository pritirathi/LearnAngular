class shape{
 type : string
 constructor( type:string)
 {
     this.type=type;
 }

  display() :void
 {
console.log('from shape')
 }
}
class square extends shape{
    height :number
    constructor(height : number, type : string)
    {
        super(type);
        this.height=height
     
    }
    
}

class rect extends shape implements drive{
    

    speedlimit: number; //from interface
    static info :string
        
     length : number
     height :number
    constructor(height : number, length : number, type : string)
    {
        super(type);
        this.height=height
        this.length=length

    }
    static getHt(): number
    {
        return this.length// it's not allowing height why??
    }
    display() : void{
        console.log('from rect')
        console.log(`height=${this.height} , length=${this.length} , type=${this.type}`)
    }
}

let r1= new rect(10,20,'rectangle')

r1.display()
rect.info='rect class info';
console.log('info of rect class ',rect.info)
//console.log('info of rect class ',r1.info) static member not accessible using object
//r1.length=2 private so not accessible
console.log(`ht=${rect.getHt()}`)


//console.log(`ht=${r1.getHt()}`) static methods not accessible by objects

//hierarchicla inh

let sq = new square(30,'square')
console.log('ht='+sq.height)
