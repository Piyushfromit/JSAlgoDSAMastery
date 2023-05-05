//Why do you need to create arrays from other objects?
let arr = [1, 2, 3];
console.log(arr.map((x) => x * 2));
let str = 'Hello';
console.log(arr.map( (x) => x + 'a' ))
//console.log(arr.map);
console.log(str.map);
//ES5
console.log(Array.prototype.map.call(str, function(x){
    return x + 'a'; 
}));
//////////////////////////////////////////
//const collection = document.getElementsByClassName('blue');
// console.log(collection.length);
// console.log(collection);
// console.log(collection.slice);
//  //ES5:
//  console.log(Array.prototype.slice.call(collection, 1, 3));

 //Create an array from a collection
// console.log(Array.from(collection));
//Create an array from a string
let array = Array.from(str);
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

 //Create an array from function arguments
function g(x, y){
    console.log(arguments);
    console.log(Array.from(arguments));
    
}
g(1, 2);

//use the optional map function
let str2 = 'strawberry';
console.log(Array.from(str2, (x) => x + ''));
// console.log(Array.from([1, 2, 3], x => x * 2));
console.log(Array.from(str2, (x) => x + " SriNivasan"));
//from any object with a length property
const obj = {length: 3}; // property 
console.log(Array.from(obj)); 
console.log(Array.from(obj, (value)  => 2));
console.log(Array.from(obj, (value, index) => index * 2));


//create an array from Sets and Maps (iterable objects)
let mySet = new Set();
mySet.add('John');
mySet.add(1);
console.log(typeof(mySet));
console.log(mySet.size);
console.log(Array.from(mySet));
{
  let temp = (Array.from(mySet));
  for (let i = 0; i < temp.length; i++) {
     console.log(temp[i]);
  }
}


let myrat = new Set();

myrat.add(3);
myrat.add(2);
myrat.add(4);
console.log(myrat); // Different and unique element set

const myMap = new Map([[1,2], [3,4]]);
console.log(myMap);
console.log(Array.from(myMap));













