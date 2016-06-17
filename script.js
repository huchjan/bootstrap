/*
1. Functions take many forms in JS
    Function
    Method
    Anonymous Function
    Callback
    Event Handler
    Function Object
    Constructor Function
2. Functions in JS are "First-class citizens"
3. Variables in JS are function-scoped
4. "this" in a function refers to a calling object (if any)
*/

function sayHello() {
    console.log("Hello, world");
    console.log("Goodnight moon");
    console.log("Run from cat");
}

//var sayHello = function() {
//console.log("Hello, world");
//};

sayHello();

sayHello();


//Square things

function square (x) {
    return x * x;
}

console.log(square(4));
console.log(square(16));