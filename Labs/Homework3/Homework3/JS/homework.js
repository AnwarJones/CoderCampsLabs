//interface IAnimal {
//    name:string
//}
//class Animal implements IAnimal{
//    constructor(public name: string, public hasFur: boolean, public legNumber: number, ...features) { }
//}
//class Dog extends Animal {
//    constructor(name, hasFur, legNumber, public hasTail: boolean, public longTongue: boolean) {
//        super(name, hasFur, legNumber)
//    }
//}
var animals = {
    "Dog": [
        { "name": "dog", "hasFur": true, "legNumber": 4, "hasTail": true, "longTongue": true },
    ],
    "Cat": [
        { "name": "cat", "hasFur": true, "legNumber": 4, "hasTail": true, "longTongue": false },
    ],
    "Frog": [
        { "name": "frog", "hasFur": false, "legNumber": 4, "hasTail": false, "longTongue": true },
    ],
    "Horse": [
        { "name": "horse", "hasFur": true, "legNumber": 4, "hasTail": true, "longTongue": false },
    ],
    "Snake": [
        { "name": "snake", "hasFur": false, "legNumber": 0, "hasTail": false, "longTongue": true },
    ],
};
var strAnimals = JSON.stringify(animals);
var datAnimals = JSON.parse(strAnimals);
console.log(datAnimals);
function UserGuess() {
    var furry = ($("input[name=hasFur]:checked")).val();
    var tailed = ($("input[name=hasTail]:checked")).val();
    var tongued = ($("input[name=longTongue]:checked")).val();
    var legged = ($("input[name=hasLegs]:checked")).val();
    var manyLeg = ($("input[name=manyLegs]:checked")).val();
    var fourLegs = ($("input[name=fourLegs]:checked")).val();
    var biPeds = ($("input[name=twoLegs]:checked")).val();
    var howManyLegs = function () {
        if (manyLeg) {
            return parseInt(prompt("How many legs?"));
        }
        else if (fourLegs) {
            return 4;
        }
        else {
            return 2;
        }
    };
    return "\"Guess\":[{ \"name\":\"" + name + "\", \"hasFur\":" + furry + ", \"legNumber\":" + howManyLegs + ", \"hasTail\":" + tailed + ", \"longTongue\":" + tongued + "}";
}
function compareAnimals(userGuess) {
    for (var _i = 0; _i < datAnimals.length; _i++) {
        var name_1 = datAnimals[_i];
        for (var _a = 0; _a < name_1.length; _a++) {
            var char = name_1[_a];
            if ()
                ;
        }
    }
}
//                
//                
//                        </h3>
//                        < input type= "radio" value= "yes" name= "fourLegs" />
//                        <input type="radio" value= "no" name= "fourLegs" />
//                        <h3>
//                        Does your animal have 2 legs?
//                            </h3>
//                            < input type= "radio" value= "yes" name= "twoLegs" />
//                            <input type="radio" value= "no" name= "twoLegs" /> 
