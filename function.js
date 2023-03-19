
// 1. function with no parameters no return value

function myFunction(){
    console.log('hello');
}
myFunction();

// 2. function with  parameter and  no return value

function myFunction1(x,y){
    console.log(x+y);
}
myFunction1(5,6);

// 3. function with  parameter and  return value

function myFunction2(x,y){
    return x+y;
}
 const output =myFunction2(5,6);
console.log(output);

// 4. function with no parameter and  return value

function myFunction3(){
    const arr=[1,2,3,4,5,6]
    return arr;
}
const result =myFunction3();
console.log(output);