const person ={
    name: 'John',
    age: 20,
    email:'xyz@gmail.com',
    address: {
        city: 'New York',
        state: 'NY'
    },
    phone:[2354325,5798736,63987093],
}

// console.log('My Name is ' + person.name + '\n My  Email is ' + person.email);

const information =`My Name is ${person.name}
My Email is ${person.phone.map(n =>n).join(" ")}`
console.log(information);
