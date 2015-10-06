/*demo of console.assert - console.assert lets you assert what a value should or shouldn't be, good coders have lots of assert statements

function divide(val1, val2) {

    console.assert(val2 != 0, 'val2 should not be zero!');

    return val1 / val2;
}

var result = divide(12, 0);

console.log(result);*/

/*
let mushroom: any; //any data type lets a variable be anything it wants

try {
    let result = mushroom.doSomething();
} catch (err) {
    console.log("did not work! " + err.message);
} finally {
    console.log('Always runs! ');//use a finally clause when talking with a database for instance to release connections to clear memory
*/





/*console.log('A');
throw new Error('Yikes!');
console.log('b');*/

/*function addNumbers(a, b) {
    if (a == 0) {
        throw new Error('a cannont zero!');
    }
    if (b == 0) {
        throw new Error('b cannnot be zero!');

    }
}

let a = 23;*/



//practice throwing exceptions
//function addIntegers(num1, num2) {

//    if (parseFloat(num1) % 1 != 0 || parseFloat(num2) % 1 != 0) {
//        throw new Error('Your inputs must be whole numbers');
//    }
//    else {
//        if (typeof num1 != "number" || typeof num2 != 'number') {
//            throw new Error('Both of your inputs must be whole numbers');
//        }
//        else {
//            let number1 = parseInt(num1);
//            let number2 = parseInt(num2);

//        }
//        return number1 + number2;
//    }
//}

//let customer = {
//    firstName: 'Andrew',
//    lastName: 'Kauffman',
//    age:40 , 
//    occupation: 'foreign man',
//}


//function dumpAll(item) {
//    for (let key in customer) {
//        console.log(key + " = " + customer[key]);
//    }
//}


//Arrays

//let cart = [
//    { name: 'Milk', price: 23.44 },
//    { name: 'Cheese', price: 3.50 },
//    { name: 'Peanuts', price: 8.00 },
//    { name: 'Wine', price: 7.50 }

//];

//let totalCart = cart.reduce(function (memo, price) {
    

//}


//let animals = new Set();

//animals.add('Orangutan');
//animals.add('Fish');
//animals.add('Dodo Bird');
//animals.add('Orangutan');

//console.log(animals.size);

//animals.forEach(function (animal) {
//    console.log(animal)
//});


//let input = prompt('Enter your ssn: ');
//let re = /^\ d{3} - \d{2} --d{4}$/;

//if (re.test(iput)) {
//    console.log('valid');
//}


//Lab 6


//let sentence: string = prompt("Enter your favorite sentence").toLowerCase();


//function countUnique(sentence) {
//    let sentenceArray: string[] = sentence.split(" ");
//    let sentenceSet = new Set();
//    for (let word of sentenceArray) {
//        sentenceSet.add(word);
//    }
//    console.log(sentenceSet.size);
//}

//countUnique(sentence);

//let now = Date();//current date and time as a string
//let now = new Date(); //creates a date object that you can use date .methods() on.

//let anHourFromNow = new Date(now.getTime() + 3600000);

//console.log(anHourFromNow);

//let armageddonDate = new Date(8640000000000000);

//console.log(armageddonDate);

//let beginningOfPreHistory = new Date(-8640000000000000);

//console.log(beginningOfPreHistory);



let customer = {
    private _firstName : string,

    set firstName(value) {
        if (value == '') {

            this._firstName = 'Joe';
        }
        else
            this._firstname = value;
    },
    get firstName() {
        return this._firstName;
    },

    set lastName(value) {
        this._lastName = value;
    },
    get lastName() {
        return this._lastName;
    }
};

/* Freds Stuff

let customer = {
    private _firstName: 'Joe',
    set firstName(value) {
        this._firstName = value;
    },
    get firstName() {
        return this._firstName;
    },
    private _lastName: 'Blogs',
    set lastName(value) {
        if (value == "")
            this._lastName = "blogs";
        else this._lastName = value;
    },
    get lastName() {
        return this.lastName;
    },
    get fullName() {
        return this._firstName + ' ' + this._lastName
        console.log(customer);
    }
}*/

