class Vehicle{

    speed :string
    wheels : number

    constructor(speed:string , wheels : number)
    {
        this.speed=speed
        this.wheels=wheels
    }

    display() : void{
        console.log(`speed of vehicle= ${this.speed} and no of wheels=${this.wheels}`);

    }
    dis = ()=>console.log('fat arrow function from class')

}

let newVehicle= new Vehicle('fast',2)
newVehicle.display()
newVehicle.dis()
