const number =[1,34,54,5,6]

// const newNumber =number

// newNumber =number;
// newNumber.push(1000);

// console.log(number);
// console.log(newNumber);

const num =[...number]
num.push(500);

// console.log(number);
// console.log(num);

const person ={
    name:'Mike',
    age:20,
    address:'Moilla cala',

}

// const newPerson = person;  //it's wrong...
const newPerson ={...person}; //it's right


newPerson.phone ='598659';

console.log(person);
console.log(newPerson);

