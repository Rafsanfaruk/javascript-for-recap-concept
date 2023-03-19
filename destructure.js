const num =[1,2,3,4,5]

// const first = num[0];
// const second = num[1];
// const third = num[2];

// const [first,second,third] = num;
// console.log(first,second,third);

const obj ={
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        state: 'NY'
    }
}

const {name,age,address:{city,state}} = obj;
// console.log(name,age,city,state);

const num1= [5,6,7,8,9,10]
const [a,b, ...restOfThem]=num1;

console.log(a,b,restOfThem);
