//interface to ensure each item has a vehicle type, name and weight
interface IVehicle {
    vehicleType: string
    vehicleName: string
    vehicleWeight:number
}
//Enumerations of data to be used in designing a vehicle object
enum VehicleType {
    car, truck, SUV, boat, motorcycle
}

let vType = VehicleType;

enum BodyStyle {
    Coupe, Compact, Sedan, Luxury, Convertible
}

let bStyle = BodyStyle;

enum CylArr {
    V6, V8
}

let numCyl = CylArr;

enum SuvSize {
    Compact, Crossover, Midsize, FullSize, Extended
}

let SuvType = SuvSize;

enum BoatType {
    Dinghy, Bass, Bay, Bowrider, CenterConsole
}

let boatSel = BoatType;

enum EngineType {
    Single, Twin, VTwin, BoxerTwin, Triple, Four, VFour
}

let motoEngine = EngineType;

enum CycleTypes {
    Scooter, Vintage, Sport, Standard, Cruiser, Touring
}
let motoCyc = CycleTypes;


//Vehicle parent class
class Vehicle implements IVehicle{
    constructor(public vehicleType, public vehicleName: string, public vehicleWeight: number, public color:string) { }
}
//Extensions of the vehicle class - car, truck, suv, boat and motorcycle
class Car extends Vehicle{
    //constructor(vType, name, weight, color, public bStyle, public doorNumber: number) {
    //    super(vType, name, weight, color)
    //}
    constructor(vehicleType, vehicleName, vehicleWeight, color, public bodyStyle: string, public doorNumber: number) {
        super(vehicleType, vehicleName, vehicleWeight, color)
    }
}

class Truck extends Vehicle {
    //constructor(vehicleType, name, weight, color, public towingCapacity:number, public numCyl) {
    //    super(vehicleType, name, weight, color)
    //}
    constructor(vehicleType, vehicleName, vehicleWeight, color, public towingCapacity: number, public cylnStyle:string) {
        super(vehicleType, vehicleName, vehicleWeight, color)
    }
}

class SUV extends Vehicle {
    //constructor(vehicleType, name, weight, color, public seatingCap: number, public SuvSize) {
    //    super(vehicleType, name, weight, color)
    //}
    constructor(vehicleType, vehicleName, vehicleWeight, color, public seatingCapacity:number, public sizeStyle:string) {
        super(vehicleType, vehicleName, vehicleWeight, color)
    }
}


class Boat extends Vehicle {
    //constructor(vType, name, weight, color, public boatSel, public engineNum: number) {
    //    super(vType, name, weight, color)
    //}
    constructor(vehicleType, vehicleName, vehicleWeight, color, public boatStyle: string, public engineNumber:number) {
        super(vehicleType, vehicleName, vehicleWeight, color)
    }
}

class Motorcycle extends Vehicle {
    //constructor(vType, name, weight, color, public motoEngine, public motoCyc) {
    //    super(vType, name, weight, color)
    //}
    constructor(vehicleType, vehicleName, vehicleWeight, color, public engineType:string, public cycleStyle:String) {
        super(vehicleType, vehicleName, vehicleWeight, color)
    }
}
//Array to hold all the designed vehicles
let vehicleArray = [];

//vehicle creation using getElemById to grab user input from HTML document

function addCar() {
    let vTypeNew = 'car'
    let nameNew = (<HTMLInputElement> document.getElementById('carName')).value;
    let weightNew = (<HTMLInputElement>document.getElementById('carWeight')).value;
    let colorNew = (<HTMLInputElement>document.getElementById('carColor')).value;
    let bodyNew = (<HTMLInputElement> document.getElementById('carBody')).value;
    let doorNew = parseInt((<HTMLInputElement> document.getElementById('carDoor')).value);

    let newCar = new Car(vTypeNew, nameNew, weightNew, colorNew, bodyNew, doorNew);
    vehicleArray.push(newCar);
    console.log(vehicleArray);
    clear();

}
function addTruck() {
    let vTypeNew = "truck"
    let nameNew = (<HTMLInputElement> document.getElementById('truckName')).value;
    let weightNew = (<HTMLInputElement> document.getElementById('truckWeight')).value;
    let colorNew = (<HTMLInputElement> document.getElementById('truckColor')).value;
    let towingNew = parseInt((<HTMLInputElement> document.getElementById('truckTowing')).value);
    let engineNew = (<HTMLInputElement> document.getElementById('truckEngine')).value;

    let newTruck = new Truck(vTypeNew, nameNew, weightNew, colorNew, towingNew, engineNew);
    vehicleArray.push(newTruck);
    console.log(vehicleArray);
    clear();

}

function addSUV(Iproduct) {
    let vTypeNew = 'SUV'
    let nameNew = (<HTMLInputElement> document.getElementById('suvName')).value;
    let weightNew = (<HTMLInputElement> document.getElementById('suvWeight')).value;
    let colorNew = (<HTMLInputElement>document.getElementById('suvColor')).value;
    let seatingNew = parseInt((<HTMLInputElement>document.getElementById('suvSeating')).value);
    let suvStyleNew = (<HTMLInputElement> document.getElementById('suvStyle')).value;

    let newSUV = new SUV(vTypeNew, nameNew, weightNew, colorNew, seatingNew, suvStyleNew);
    vehicleArray.push(newSUV);
    clear();

}

function addBoat() {
    let vTypeNew = 'boat'
    let nameNew = (<HTMLInputElement> document.getElementById('boatName')).value;
    let weightNew = (<HTMLInputElement> document.getElementById('boatWeight')).value;
    let colorNew = (<HTMLInputElement>document.getElementById('boatColor')).value;
    let engineNew = parseInt((<HTMLInputElement>document.getElementById('boatEngine')).value);
    let styleNew = (<HTMLInputElement> document.getElementById('boatStyle')).value;

    let newBoat = new Boat(vTypeNew, nameNew, weightNew, colorNew, styleNew, engineNew);
    vehicleArray.push(newBoat);
    console.log(vehicleArray);
    clear();

}

function addMotorcycle() {
    let vTypeNew = 'motorcycle'
    let nameNew = (<HTMLInputElement> document.getElementById('motoName')).value;
    let weightNew = (<HTMLInputElement> document.getElementById('motoWeight')).value;
    let colorNew = (<HTMLInputElement> document.getElementById('motoColor')).value;
    let engineNew = (<HTMLInputElement> document.getElementById('motoEngine')).value;
    let cycleNew = (<HTMLInputElement> document.getElementById('motoStyle')).value;

    let newCycle = new Motorcycle(vTypeNew, nameNew, weightNew, colorNew, engineNew, cycleNew);
    vehicleArray.push(newCycle);
    console.log(vehicleArray);
    clear();
}

function clear() {
    (<HTMLInputElement>document.getElementById('carName')).value = "";
    (<HTMLInputElement>document.getElementById('carWeight')).value = "";
    (<HTMLInputElement>document.getElementById('carColor')).value = "";
    (<HTMLInputElement>document.getElementById('carBody')).value = "";
    (<HTMLInputElement>document.getElementById('carDoor')).value = "";
    (<HTMLInputElement>document.getElementById('truckName')).value = "";
    (<HTMLInputElement>document.getElementById('truckWeight')).value = "";
    (<HTMLInputElement>document.getElementById('truckColor')).value = "";
    (<HTMLInputElement>document.getElementById('truckTowing')).value = "";
    (<HTMLInputElement>document.getElementById('truckEngine')).value = "";
    (<HTMLInputElement>document.getElementById('suvName')).value = "";
    (<HTMLInputElement>document.getElementById('suvWeight')).value = "";
    (<HTMLInputElement>document.getElementById('suvColor')).value = "";
    (<HTMLInputElement>document.getElementById('suvSeating')).value = "";
    (<HTMLInputElement>document.getElementById('suvStyle')).value = "";
    (<HTMLInputElement>document.getElementById('boatName')).value = "";
    (<HTMLInputElement>document.getElementById('boatWeight')).value = "";
    (<HTMLInputElement>document.getElementById('boatColor')).value = "";
    (<HTMLInputElement>document.getElementById('boatEngine')).value = "";
    (<HTMLInputElement>document.getElementById('boatStyle')).value = "";
    (<HTMLInputElement>document.getElementById('motoName')).value = "";
    (<HTMLInputElement>document.getElementById('motoWeight')).value = "";
    (<HTMLInputElement>document.getElementById('motoColor')).value = "";
    (<HTMLInputElement>document.getElementById('motoEngine')).value = "";
    (<HTMLInputElement>document.getElementById('motoStyle')).value = "";

}