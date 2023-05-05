//ES6
//let x = 1;
//redeclaration throws an error unlike var

//scope
let x = 1; // global scope
function add(y){
    //let x  = 34; //local scope
    return y + x;
}
console.log(add(3));
//so let variables can be accessed from inside functions if declared in their outer environment just like var
// |------------------------------------------------O-MY-GOD-------------------------------------|
function add2(y){
    let x = 2;
    return y + x;
}
console.log(add2(3));

//hoisting
//console.log(z);
//temporal dead zone
let z; // z value should defined till then it is undefined.
console.log(z);
z = 1;
console.log(z);