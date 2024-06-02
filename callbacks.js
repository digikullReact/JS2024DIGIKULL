// callback is a function passed as an argument to another function


function foo( param ){ // parameter
let sum=param+param;
}

//foo(8); // argument


// callback function

// function bar(fn){
//     fn();

// }

// bar(function cb (){  //this cb is called as callback function 

//     console.log(90);

// })


// Callback functions are of two types -- synchronous callbacls  / asynchronous callbacks


// function gh(fn){
//     fn(900);
// }

// gh(function (param){
//     console.log(param); // callback arguments 

// })


// function foo( param){ // parameter
//    // console.log("the parameter",param);
//    param(90);
 
// }

// foo(function(p){  // callback function 
//     console.log("this callbacl would be called",p);
// });

// let param=function(p){ // parameter
//     console.log("hii" ,p);
// }

// param(90);

// callbacks example


// function SumOfNumbers(fn){
//     fn(23,6);

// }

// SumOfNumbers(function prerna(a,b){
//     console.log(a+b); // 29
    
// })


// let fn=function prerna(a,b){
//     console.log(a+b); // 29
    
// }

// fn(23,6);



// Print all the even numbers between 1 and 100 using callbacks 

// function print(cb){
//     for(let i=0;i<100;i++){
//        if(i%2==0){
//         //console.log(i);
//         cb(i);
//        }

//     }
// }

// print(function(param){
//     console.log(param);

// });


// calculate sum of all odd numbers between 1 and 100 using callbacks

function sumOfalloddnumbers(cb){
    let sum=0;
    for(let i=0;i<100;i++){
        if(i%2!=0){
            sum=sum+i;
        }
    }
    cb(sum);
}

sumOfalloddnumbers(function(param){
    console.log("from callback",param);
});

// function h(fn1,fn2){

// }

// h(function(){

// },function(){

// })