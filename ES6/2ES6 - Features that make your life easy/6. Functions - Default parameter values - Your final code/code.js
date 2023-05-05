//ES5
{
    function increment2(x, y){
        return (y == undefined)? (x + 5): (x + y);
    }
    console.log(increment2(34,23));
    console.log(increment2(34));
}

//ES6
{
    const increment2 = (x, y = 1) => x + y;
    const ram = (x, y = 34) => x + y;// This is the ternary question based equaction y = 34 is considered only when y is not defined.
    console.log(ram(34,3));
    console.log(increment2(5));
    console.log(increment2(5, 3));
}


const incremen3 = (x, y = 3) => x + y;
console.log(incremen3(4));

//using destructuring
function greet([firstname, lastname = '']){
    console.log(`hello ${firstname} ${lastname}`)
};
greet(['Bill']);

function addup({item = 'bananas', price = 0, quantity = 0} = {}){
    console.log(`Please pay $${price * quantity} for ${quantity} ${item}`);
}

addup({item: 'bananas', price: 1, quantity: 5});
// addup({});
addup();