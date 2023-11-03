

   // 1. Example Here I solve 10 question of javascript that helps in understanding core concept of javascript.

function mergeArray(array1, array2){
    return  array1.concat(array2); // concat is special function in javascript that helps in two array passing into the function.
}

mergeArray([1,2,3,4],[5,6,7,8,9]);

  //  2. Example Here we create an function which takes an array and gives the average of the arrays values.

function average(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }
    return sum / arr.length;
}

average([1,2,3,4,5,6,7,8,9,10]);

  //  3. Example Create a function that takes an array and create a new function which have string that is greater than 5 length from the existing array.

 function stringGreat(arr){
    const shortedArray = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i].length > 5){
            shortedArray.push(arr[i]);
        }
    }
    return shortedArray;
 }

 stringGreat(['Banana', 'Grapes', 'pea', 'Tomato', 'Oranges', 'Pine Apple']);

  //  4. Example Write a function that takes an array of number and returns a new array with all the odd number;


 function fingerboard(arr){
    const numbers = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            numbers.push(arr[i]);
        }
    }
    return numbers;
 }
 fingerboard([1,2,3,4,5,6,7,8,9,10]);

   // 5. Example Write an function that takes an array of numbers and return a new array with all the even number and also find the sum of all the even numbers;

function even1fun(arr){
    let evenness = [];
    let temp = 0;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] % 2 == 0){
           // evenness.push(arr[i]);
            temp = temp + arr[i];
        }
    }
//    return evenness;
//    for(let j = 0; j < evenness.length; j++){
//        temp = temp + evenness[j];
//    }
    return temp;

}

even1fun([1,2,3,4,5,6,7,8,9,10]);

  //  6. Example Write a function that takes an array and return the maximum of the index.values;

function maximum(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

maximum([1,2,3,4,5,6,7,8,9,10]);

   // 7. Example Sum of the elements of array

function sum(arr){
    let add = 0;
    for(i = 0; i < arr.length; i++){
        add += arr[i];
    }
    return add;
}

sum([1,2,3,4,5,6,7,8,9,10]);








































