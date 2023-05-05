// //create a separate scope first using a block
// {
//    greet();//hi
//    function greet(){
//        console.log('hi');
//    }
//    greet();//hi
   
//    {
//        function greet(){
//            console.log('there is something');
//        }
//        greet();//hello
       
//    }
//    greet();//hi
   
// }
// greet();

//greet();//hi
// function greet(){
//     console.log('hi');
// }
// greet();//hi

// {
//     function greet(){
//         console.log('hello');
//     }
//     greet();//hello
    
//     {
//         function greet(){
//             console.log('hi there');
            
//         }
//         greet();
//     }

// }
// greet();//hello

// {
//     function greet(){
//         console.log('hi hello');
//     }
// }
// greet();

{
    function ramp(){
        return console.log('Ram is Shayam, and Shayam is Ram');
    }
    ramp();
}
ramp();


{
    const ram = {
        fname: 'Ram',
        lname: 'Chaudhary',
        fullName: function(){
            return console.log(this.fname + " " + this.lname);
        }
    }
    ram.fullName();
}
