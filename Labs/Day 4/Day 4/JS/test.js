/*Old Way of function creation)
function addNumbers(val1, val2) {

    return val1 + val2;
}

let result = addNumbers(1, 4);

console.log(result);*/
//Fat Arrow Way
//let addNumbers = (val1, val2) => val1 + val2;//assumes return if curly braces aren't included, if using curly braces, must state return
//let results = addNumbers(1, 4);
//console.log(results);
//document.getElementById('btn').addEventListener('click', function (e) {
//    alert ("Clicked button")
//});
//document.getElementById('btn').addEventListener('click', (e) => alert('clicked button'));
//Lab 2 
//let fruit = ['apples', 'lettuce', 'oranges', 'apricots', 'kiwis'];
////let hasLetter = (val1: string, val2='a') => val1.search(val2);
////fruit.filter((val1) => val1.search('a'));
//let aFruits = fruit.filter((fruit) => fruit.indexOf('a') !== -1);
//let aFruits2 = fruit.filter(function (fruit) {
//    return fruit.indexOf('a') !== -1;
//});
/*Functions*/
//function showMessage1(message: string) {
//    console.log(message);
//}
////or
//function showMessage(message? : string) {
//    console.log(message || 'Hello');
//}
//function addNumbers(...val2:number[]) {//... == result parameter, allows you pass as many parameters as you want
//    let result = 0;
//    for (let num of val2) {
//        result += num;
//    }
//    console.log(result);
//}
//}
//class Product {
//    _name: string
//    _price: number
//    set price(value) {
//        if (value < 0) {
//            throw new Error('Price must be greater than zero!');
//        }
//        this._price = value;
//    }
//    get price() {
//        return this._price;
//    }
//    calculateTax() {
//        return this._price * .08;
//    }
//    constructor(name, price) {
//        this._name = name;
//        this._price = price;
//    }
//}
//let product1 = new Product('Tesla', 120000.99);
//console.log(product1.calculateTax());
//difference between property and field == a property has a setter and a getter 
//field = bit of memory
//class Productb {
//    calculateTax() {
//        return this.price * .08;
//    }
//    constructor(public name, public price) { }//when written this way, typescript will auto generate name and price fields
//}
//class Product {
//        constructor(public name, public price, public unitsInStock, public productDesription?) { }
//}
//let apples = new Product('fuji', 1.89, 200);
//console.log(apples);
//code below violates DRY - don't repeat yourself - how can we represent the relationship
/*class NewCar {
    name: string
    price: number

}

class UsedCar {
    name: string
    price: number
    miles: number
}

class CertifiedUsedCar {
    name: string
    price: number
    miles: number
    pointsOfInspection:number

}*/
//class Car {
//    reportPrice() {
//        return 'cost ' + this.price;
//    }
//    constructor(public name:string, public price: number) { }
//}
//class NewCar extends Car {
//    }
//class UsedCar extends Car{
//    constructor(name: string, price: number, public miles: number) {
//        super(name, price);
//    }
//    reportPrice() {
//        return 'This used car has a ' + super.reportPrice()
//    }
//}
//class Computer {
//    constructor(public name: string, public price: number, public operatingSystem: string) { }
//    reportComputer() {
//        return 'This is a ' + this.name + ' that costs ' + this.price + ', it runs ' + this.operatingSystem;
//    }
//}
//enum WindowsOperatingSystem {
//    Windows7, Windows8, Windows10
//}
//let winOS = WindowsOperatingSystem;
//enum OSXVersion {
//    Yosemite, Maverick, MountainLion
//}
//let OsV = OSXVersion;
//class Windows extends Computer {
//    constructor(name, price, operatingSystem, public winOS) {
//        super(name, price, operatingSystem);
//    }
//    reportComputer() {
//        return super.reportComputer() + ' ' + winOS[this.winOS];
//    }
//}
//class Apple extends Computer {
//    constructor(name, price, operatingSystem, public osV) {
//        super(name, price, operatingSystem)
//    }
//    reportComputer() {
//        return super.reportComputer() + ' ' + OsV[this.osV];
//    }
//}
//let macbook1 = new Apple('Macbook Pro', 3500, 'OSX', OsV.Maverick);
//console.log(macbook1.reportComputer());
//let macbook2 = new Apple('Macbook Pro', 2000, 'OSX', OsV.Yosemite);
//console.log(macbook2.reportComputer());
//let dellPC = new Windows('Dell', 544.89, 'Windows', winOS.Windows7);
//console.log(dellPC.reportComputer());
//enum OperatingSystem {
//    Windows8, Windows7
//}
//let strOS = OperatingSystem[OperatingSystem.Windows7];
//console.log(strOS);
//let os = OperatingSystem.Windows7;
//console.log(os);
//an interface == contract == a list of fields, properties, methods etc. that a function must have
//a base class can contain functionality and an interface cannot.
//interface IProduct {
//    name: string
//    price: number
//}
//enum colors {
//    red, orange, yellow, green, blue, indigo, violet
//}
//let fruitColors = colors;
//enum loudness {
//    soft, medium, loud, extraLoud
//}
//class Products implements IProduct {
//    constructor(public name:string, public price: number) { }
//}
//let phoneLoudness = loudness
//class Fruits extends Products {
//    constructor(name, price, public fruitColors) {
//        super(name, price)
//    }
//}
//class Telephones extends Products {
//    constructor(name, price, public phoneLoudness) {
//        super(name, price)
//    }
//}
//let inventory = [];
//let phone1 = new Telephones('Philips', 79.99, phoneLoudness.extraLoud);
//let phone2 = new Telephones('GE', 114.99, phoneLoudness.loud);
//let phone3 = new Telephones('Baby Phone', 14.99, phoneLoudness.soft);
//let fruit1 = new Fruits('Apple', .75, fruitColors.green);
//let fruit2 = new Fruits('kiwi', 1.00, fruitColors.green);
//let fruit3 = new Fruits('Banana', .25, fruitColors.yellow);
//inventory.push(phone1, phone2, phone3, fruit1, fruit2, fruit3);
//function showInventory(item: IProduct) {
//    console.log(item.name +' ' + item.price)
//}
//for (let item of inventory) {
//    showInventory(item);
//}
//modules 
/*
1. AMD ==> RequireJS
2. CommonJS==>NodeJS
3.UMD: Universal Module Definition Loader = works on both the server and clients side, compatible with AMD and CommonJS
4. SystemJS => Using the SystemJS library, another type of univeral module system.*/ 
//# sourceMappingURL=test.js.map