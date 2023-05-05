//create an empty array. 
//Using a for loop insert three functions logging their corresponsing index inside the array.
//provide the solution in both ES5 and ES6


//ES6 (easiest)  this is an array function

let cars = []; // car is an array. 
for(let i = 0; i < 3; i ++){
    cars[i] = function(){
        console.log(i);
    };
}

cars[0]();
cars[1]();
cars[2]();




let mars = [];
for (let j = 0; j < 4; j++) {
    mars[j] = function(){
        console.log(j + " This is the funny One");
    };
}

mars[0]();
mars[1]();





//ES5
var bikes = [];
function f(x){
    return function(){
        console.log(x);
    };
}
for(var i = 0; i < 3; i ++){
    bikes[i] = f(i);
}

bikes[0]();
bikes[1]();
bikes[2]();


function fr(x){
    return function (){
        console.log(x);
    }
}
let ram = [];
for(let k = 0; k < 3 ; k++){
    ram[k] = fr(k)
}
ram[0]();