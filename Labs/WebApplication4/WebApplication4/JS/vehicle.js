var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Enumerations of data to be used in designing a vehicle object
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["car"] = 0] = "car";
    VehicleType[VehicleType["truck"] = 1] = "truck";
    VehicleType[VehicleType["SUV"] = 2] = "SUV";
    VehicleType[VehicleType["boat"] = 3] = "boat";
    VehicleType[VehicleType["motorcycle"] = 4] = "motorcycle";
})(VehicleType || (VehicleType = {}));
var vType = VehicleType;
var BodyStyle;
(function (BodyStyle) {
    BodyStyle[BodyStyle["Coupe"] = 0] = "Coupe";
    BodyStyle[BodyStyle["Compact"] = 1] = "Compact";
    BodyStyle[BodyStyle["Sedan"] = 2] = "Sedan";
    BodyStyle[BodyStyle["Luxury"] = 3] = "Luxury";
    BodyStyle[BodyStyle["Convertible"] = 4] = "Convertible";
})(BodyStyle || (BodyStyle = {}));
var bStyle = BodyStyle;
var CylArr;
(function (CylArr) {
    CylArr[CylArr["V6"] = 0] = "V6";
    CylArr[CylArr["V8"] = 1] = "V8";
})(CylArr || (CylArr = {}));
var numCyl = CylArr;
var SuvSize;
(function (SuvSize) {
    SuvSize[SuvSize["Compact"] = 0] = "Compact";
    SuvSize[SuvSize["Crossover"] = 1] = "Crossover";
    SuvSize[SuvSize["Midsize"] = 2] = "Midsize";
    SuvSize[SuvSize["FullSize"] = 3] = "FullSize";
    SuvSize[SuvSize["Extended"] = 4] = "Extended";
})(SuvSize || (SuvSize = {}));
var SuvType = SuvSize;
var BoatType;
(function (BoatType) {
    BoatType[BoatType["Dinghy"] = 0] = "Dinghy";
    BoatType[BoatType["Bass"] = 1] = "Bass";
    BoatType[BoatType["Bay"] = 2] = "Bay";
    BoatType[BoatType["Bowrider"] = 3] = "Bowrider";
    BoatType[BoatType["CenterConsole"] = 4] = "CenterConsole";
})(BoatType || (BoatType = {}));
var boatSel = BoatType;
var EngineType;
(function (EngineType) {
    EngineType[EngineType["Single"] = 0] = "Single";
    EngineType[EngineType["Twin"] = 1] = "Twin";
    EngineType[EngineType["VTwin"] = 2] = "VTwin";
    EngineType[EngineType["BoxerTwin"] = 3] = "BoxerTwin";
    EngineType[EngineType["Triple"] = 4] = "Triple";
    EngineType[EngineType["Four"] = 5] = "Four";
    EngineType[EngineType["VFour"] = 6] = "VFour";
})(EngineType || (EngineType = {}));
var motoEngine = EngineType;
var CycleTypes;
(function (CycleTypes) {
    CycleTypes[CycleTypes["Scooter"] = 0] = "Scooter";
    CycleTypes[CycleTypes["Vintage"] = 1] = "Vintage";
    CycleTypes[CycleTypes["Sport"] = 2] = "Sport";
    CycleTypes[CycleTypes["Standard"] = 3] = "Standard";
    CycleTypes[CycleTypes["Cruiser"] = 4] = "Cruiser";
    CycleTypes[CycleTypes["Touring"] = 5] = "Touring";
})(CycleTypes || (CycleTypes = {}));
var motoCyc = CycleTypes;
//Vehicle parent class
var Vehicle = (function () {
    function Vehicle(vehicleType, vehicleName, vehicleWeight, color) {
        this.vehicleType = vehicleType;
        this.vehicleName = vehicleName;
        this.vehicleWeight = vehicleWeight;
        this.color = color;
    }
    return Vehicle;
})();
//Extensions of the vehicle class - car, truck, suv, boat and motorcycle
var Car = (function (_super) {
    __extends(Car, _super);
    //constructor(vType, name, weight, color, public bStyle, public doorNumber: number) {
    //    super(vType, name, weight, color)
    //}
    function Car(vehicleType, vehicleName, vehicleWeight, color, bodyStyle, doorNumber) {
        _super.call(this, vehicleType, vehicleName, vehicleWeight, color);
        this.bodyStyle = bodyStyle;
        this.doorNumber = doorNumber;
    }
    return Car;
})(Vehicle);
var Truck = (function (_super) {
    __extends(Truck, _super);
    //constructor(vehicleType, name, weight, color, public towingCapacity:number, public numCyl) {
    //    super(vehicleType, name, weight, color)
    //}
    function Truck(vehicleType, vehicleName, vehicleWeight, color, towingCapacity, cylnStyle) {
        _super.call(this, vehicleType, vehicleName, vehicleWeight, color);
        this.towingCapacity = towingCapacity;
        this.cylnStyle = cylnStyle;
    }
    return Truck;
})(Vehicle);
var SUV = (function (_super) {
    __extends(SUV, _super);
    //constructor(vehicleType, name, weight, color, public seatingCap: number, public SuvSize) {
    //    super(vehicleType, name, weight, color)
    //}
    function SUV(vehicleType, vehicleName, vehicleWeight, color, seatingCapacity, sizeStyle) {
        _super.call(this, vehicleType, vehicleName, vehicleWeight, color);
        this.seatingCapacity = seatingCapacity;
        this.sizeStyle = sizeStyle;
    }
    return SUV;
})(Vehicle);
var Boat = (function (_super) {
    __extends(Boat, _super);
    //constructor(vType, name, weight, color, public boatSel, public engineNum: number) {
    //    super(vType, name, weight, color)
    //}
    function Boat(vehicleType, vehicleName, vehicleWeight, color, boatStyle, engineNumber) {
        _super.call(this, vehicleType, vehicleName, vehicleWeight, color);
        this.boatStyle = boatStyle;
        this.engineNumber = engineNumber;
    }
    return Boat;
})(Vehicle);
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    //constructor(vType, name, weight, color, public motoEngine, public motoCyc) {
    //    super(vType, name, weight, color)
    //}
    function Motorcycle(vehicleType, vehicleName, vehicleWeight, color, engineType, cycleStyle) {
        _super.call(this, vehicleType, vehicleName, vehicleWeight, color);
        this.engineType = engineType;
        this.cycleStyle = cycleStyle;
    }
    return Motorcycle;
})(Vehicle);
//Array to hold all the designed vehicles
var vehicleArray = [];
//vehicle creation using getElemById to grab user input from HTML document
function addCar() {
    var vTypeNew = 'car';
    var nameNew = document.getElementById('carName').value;
    var weightNew = document.getElementById('carWeight').value;
    var colorNew = document.getElementById('carColor').value;
    var bodyNew = document.getElementById('carBody').value;
    var doorNew = parseInt(document.getElementById('carDoor').value);
    var newCar = new Car(vTypeNew, nameNew, weightNew, colorNew, bodyNew, doorNew);
    vehicleArray.push(newCar);
    console.log(vehicleArray);
    clear();
}
function addTruck() {
    var vTypeNew = "truck";
    var nameNew = document.getElementById('truckName').value;
    var weightNew = document.getElementById('truckWeight').value;
    var colorNew = document.getElementById('truckColor').value;
    var towingNew = parseInt(document.getElementById('truckTowing').value);
    var engineNew = document.getElementById('truckEngine').value;
    var newTruck = new Truck(vTypeNew, nameNew, weightNew, colorNew, towingNew, engineNew);
    vehicleArray.push(newTruck);
    console.log(vehicleArray);
    clear();
}
function addSUV(Iproduct) {
    var vTypeNew = 'SUV';
    var nameNew = document.getElementById('suvName').value;
    var weightNew = document.getElementById('suvWeight').value;
    var colorNew = document.getElementById('suvColor').value;
    var seatingNew = parseInt(document.getElementById('suvSeating').value);
    var suvStyleNew = document.getElementById('suvStyle').value;
    var newSUV = new SUV(vTypeNew, nameNew, weightNew, colorNew, seatingNew, suvStyleNew);
    vehicleArray.push(newSUV);
    clear();
}
function addBoat() {
    var vTypeNew = 'boat';
    var nameNew = document.getElementById('boatName').value;
    var weightNew = document.getElementById('boatWeight').value;
    var colorNew = document.getElementById('boatColor').value;
    var engineNew = parseInt(document.getElementById('boatEngine').value);
    var styleNew = document.getElementById('boatStyle').value;
    var newBoat = new Boat(vTypeNew, nameNew, weightNew, colorNew, styleNew, engineNew);
    vehicleArray.push(newBoat);
    console.log(vehicleArray);
    clear();
}
function addMotorcycle() {
    var vTypeNew = 'motorcycle';
    var nameNew = document.getElementById('motoName').value;
    var weightNew = document.getElementById('motoWeight').value;
    var colorNew = document.getElementById('motoColor').value;
    var engineNew = document.getElementById('motoEngine').value;
    var cycleNew = document.getElementById('motoStyle').value;
    var newCycle = new Motorcycle(vTypeNew, nameNew, weightNew, colorNew, engineNew, cycleNew);
    vehicleArray.push(newCycle);
    console.log(vehicleArray);
    clear();
}
function clear() {
    document.getElementById('carName').value = "";
    document.getElementById('carWeight').value = "";
    document.getElementById('carColor').value = "";
    document.getElementById('carBody').value = "";
    document.getElementById('carDoor').value = "";
    document.getElementById('truckName').value = "";
    document.getElementById('truckWeight').value = "";
    document.getElementById('truckColor').value = "";
    document.getElementById('truckTowing').value = "";
    document.getElementById('truckEngine').value = "";
    document.getElementById('suvName').value = "";
    document.getElementById('suvWeight').value = "";
    document.getElementById('suvColor').value = "";
    document.getElementById('suvSeating').value = "";
    document.getElementById('suvStyle').value = "";
    document.getElementById('boatName').value = "";
    document.getElementById('boatWeight').value = "";
    document.getElementById('boatColor').value = "";
    document.getElementById('boatEngine').value = "";
    document.getElementById('boatStyle').value = "";
    document.getElementById('motoName').value = "";
    document.getElementById('motoWeight').value = "";
    document.getElementById('motoColor').value = "";
    document.getElementById('motoEngine').value = "";
    document.getElementById('motoStyle').value = "";
}
//# sourceMappingURL=vehicle.js.map