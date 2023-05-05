//Why do you need to create arrays from other objects?
// let arr = [1, 2, 3];
// console.log(arr.map(x => x * 2)); // map function is somehow same like eachof()
// console.log(arr.map);


// //ES5
// console.log(Array.prototype.map.call(str, function(x){
//     return x + 'a';
// }));

// const collection = document.getElementsByClassName('blue');
// console.log(collection.length);
// console.log(collection);
// console.log(collection.slice);
// //ES5:
// console.log(Array.prototype.slice.call(collection, 1, 3));

// //Create an array from a collection
// console.log(Array.from(collection));
// //Create an array from a string
// console.log(Array.from(str));

// //Create an array from function arguments
// function g(x, y){
//     console.log(arguments);
//     console.log(Array.from(arguments));
// }
// g(1, 2);

// //use the optional map function
// let str2 = 'strawberry';
// console.log(Array.from(str2, x => x + ','));
// console.log(Array.from([1, 2, 3], x => x * 2));

// //from any object with a length property
// const obj = {length: 3};
// console.log(Array.from(obj));
// console.log(Array.from(obj, value => 1));
// console.log(Array.from(obj, (value, index) => index * 2));


// //create an array from Sets and Maps (iterable objects)
// let mySet = new Set();
// mySet.add('John');
// mySet.add(1);
// console.log(mySet);
// console.log(mySet.size);
// console.log(Array.from(mySet));


// const myMap = new Map([[1,2], [3,4]]);
// console.log(myMap);
// console.log(Array.from(myMap));





let txt = 'This is Deepak Chaudhary';
let speed = 100;
var funarray = [];
var i = 0;

window.onload = function typing(){
    if(i < txt.length){
        document.getElementById('demo').innerHTML += txt.charAt(i);
        funarray.push(txt.charAt(i));
        i++;
        setTimeout(typing, speed);
        document.getElementById('demo1').innerHTML = funarray.join('');
    }
}
//setTimeout(typing);


// function hideThem(){
//   var element = document.getElementById('main');
//   element.className = "letshideit";
// }

// setTimeout(hideThem, 5000);



7906470035










