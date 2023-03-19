const obj ={
    name: 'John',
    age: 20,
    address:'New York',
}

const josn =JSON.stringify(obj);

// console.log(josn);

const object =JSON.parse(josn);
// console.log(object);

// api fetching 
// 1. JSON file 
// 2. url file


// fetch async await

fetch('url')
.then (res => res.json())
.then(data => console.log(data))



const api = async()=>{
    const  res =await fetch('url')
    const data = await res.json()
    console.log(data)
}

