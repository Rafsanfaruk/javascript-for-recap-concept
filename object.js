const person ={
    name: 'John',
    age: 20,
    email:'xyz@gmail.com',
    address: {
        city: 'New York',
        state: 'NY'
    },
    phone:[2354325,5798736,63987093],
    gender:'male',
    54:'hello hatem ali',
    'md':'rafsan'
}
// 1st way

const value1=person.name;
// console.log(value1);

// 2nd way

const value2=person['name'];

// console.log(value2);

// 3rd way

const prob='name';
const value3=person[prob];
// console.log(value3);

const value4 =person['54'];
// console.log(value4);

const value5 =person['md'];
// console.log(value5);


// set the value in object

const obj ={};

obj.name='rafsanfaruk';
obj['address']='Bari nai';

const number ='phone';
obj[number] =56856590;

// console.log(obj);


const keys=Object.keys(obj);
console.log(keys);

const values=Object.values(obj);
console.log(values);

for( let i of keys ){
    console.log( obj[i] );
}
