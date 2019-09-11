interface infHavingFunction{
    fname :string
    lname : string
    getFullName() : string
}

class InfDemo implements infHavingFunction{
    fname: string;    lname: string;
    getFullName(): string {
        return this.fname + this.lname
    }
}
let     d = new InfDemo()

d.fname='Priti'
d.lname='Rathi'
console.log(d.getFullName())


    

