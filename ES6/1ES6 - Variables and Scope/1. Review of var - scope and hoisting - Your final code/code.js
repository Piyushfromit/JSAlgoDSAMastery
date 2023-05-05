//ES5: we declared variables using var
var x = 1; //global scoped

//variables were global scoped or function scoped

function add1(y){
    var x = 2; //function scoped
    return y + x;
}
console.log(add1(3));//5

function add2(y){
    return y + x;
}
console.log(add2(3));

//They were also hoisted
var z;
console.log(z);//undefined, no error thanks to hoisting
var z = 1;
console.log(z);





//GLOBAL SCOPE, LOCAL SCOPE


var x = 23;

function add(y){
    var x = 34;// local variable
    return x + y;
}

console.log(add(3));


let l = 34;
console.log(l);