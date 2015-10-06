//let personArray = [];

//class Person {
//    constructor(public name: string, public age: number) { }

//}

//function createPerson() {
//    let name = $('#fullname').val();
//    let age = $('#age').val();
//    let newPerson = new Person(name, age)
//}

//sessionStorage.setItem("People", JSON.stringify(personArray));
//localStorage.setItem("People", JSON.stringify(personArray));
////let stringPerson = JSON.stringify(person);

////console.log(stringPerson);


//Review regular expressions ANWAR!!!!!
//let myArray = [];
//function createSSN() {
//    let ssn = $('#SSN').val();
//    let re = /^\d[3]-\d{2}-\d{4}$/
//    if (re.test(ssn)) {
//        console.log('valid');
//    }
//    else {
//        console.log('invalid');
//    }
//}


let myCustomer = [];

interface ICustomer {
    name: string;
    age?: string;
}
interface ICreateCustomer {
    (customer: ICustomer): number;
}

function createCustomer(customer): ICreateCustomer {
    return customer.name;
}