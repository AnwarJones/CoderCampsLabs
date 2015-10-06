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
    "Dog": { "name":"dog", "hasFur":true, "legNumber":4, "hasTail":true, "longTongue":true},
    ,
    "Cat": { "name": "cat", "hasFur": true, "legNumber": 4, "hasTail": true, "longTongue": false},
    ,
    "Frog":{ "name": "frog", "hasFur": false, "legNumber": 4, "hasTail": false, "longTongue": true },
    ,
    "Horse": { "name": "horse", "hasFur": true, "legNumber": 4, "hasTail": true, "longTongue": false },
    ,
    "Snake":{ "name": "snake", "hasFur": false, "legNumber": 0, "hasTail": false, "longTongue": true },
    ,



}


let strAnimals = JSON.stringify(animals);

let datAnimals = JSON.parse(strAnimals);

console.log(datAnimals);


 
function UserGuess() {
    let furry = ($("input[name=hasFur]:checked")).val();
    let tailed = ($("input[name=hasTail]:checked")).val();
    let tongued = ($("input[name=longTongue]:checked")).val();
    let legged = ($("input[name=hasLegs]:checked")).val();
    let manyLeg = ($("input[name=manyLegs]:checked")).val();
    let fourLegs = ($("input[name=fourLegs]:checked")).val();
    let biPeds = ($("input[name=twoLegs]:checked")).val();

    let howManyLegs = function () {
        if (manyLeg) {
            return parseInt(prompt("How many legs?"));
        }
        else if (fourLegs) {
            return 4;
        }
        else {
            return 2;
        }
    }

    return `"Guess":{ "name":"${name}", "hasFur":${furry}, "legNumber":${howManyLegs}, "hasTail":${tailed}, "longTongue":${tongued}}`

}

function compareAnimals(userGuess) {
    for (let name of datAnimals) {
        for (let char of name) {
            if (datAnimals.name[0].char == userGuess.[0].char
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