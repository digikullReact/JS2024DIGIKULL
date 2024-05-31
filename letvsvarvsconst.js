// let vs var 
// var can be redeclared let cannot be redeclared in a scope ({})
/*
let c=9;
let c=10; // this is not possible 
*/
/*
var f=9;
var f=90;    // this works
*/
/*
// var can be accesed before definition but let cant 
console.log(c); // it prints undefined because in let declaration and initialization happens at same time and hoisting 
// moves both of them at the top of the scope
var c=0; // assignment happens here at this line
console.log(c); // it will now give the value 0
*/
//console.log(c); // here it will give an error ,as initialziation has not happened and 
// initialzation will happen along with assignment
//let c=9;  // initialization and assignment both will happen at this line
//let c;
//console.log(c); // here you can see undefine printed

// Third difference - let is a blocked scope and var is a functional scope


{

    // scope 
}


// functioon scope
// function foo(){
//     // functional scope
// }


//  if the curly bracket is alone or with something else other than function 
// then we call it as block scope

{
    // block scope 
}
// if (true){
//     // block scope
// }
// else {
//     // block scope
// }
// for (;;){
//     // block scope

// }
// while (true){
//     // block scope
// }
// scope is a area of code where the variable is accessible 
// and the variable is not accessible outside its scope
// {
//     let c=9;
//     console.log(c);
// }

// console.log(c);

// Case of var with block scope
// {
//     var c=9;
// }
// console.log(c); // var c can be accessed here as var c has a functional scope but it is 
// // defined in block scope so it can be accessed outside

// for (let i=0;i<10;i++){
//     var g=9;
// }

// console.log(g);

// function bar (){
//     var h=90;
// }

// //console.log(h); // not accessible here as var h is inside the function

// // if a variable defined by let is inside any curly bracket it cant be accessed outside the curly bracket

// function hj(){
//     let j=9;
// }

//console.log(j); // not accessible  // because let only focusses on curly brackets

//let y=9;
// {
//     let h=9;
//     var b=90
// }
// console.log(b); // accessible
//console.log(h);

// function foo(){
//     var h=9;
// }

// console.log(h);  // error

// function foo(){
//     console.log(y)
// }


// while(true){
//     console.log(y);
// }


// var i=1;

// for (i=1;i<=20;i++){
//     console.log(i)
// }
//console.log(i);

// {
//     var c=0;
//     console.log(c); //  here
// }
// //  here

// function foo(){
// //     var k=9;
// //     // only accessible inside function
// // }

// // // console.log(k) ; // not accessible

// // if var is anywhere in the curly brackets and curly brackets is not accompanied by function
// // var can be accessed inside outside anywhere
// {
//     var h=0
//     // accessible
// }

// // accessible

// function foo(){
//     var g=0;
//     // accessible
// }

// not accesible

// let is not accessible inside any curly bracket only inside curly bracket
// for (;;){
//     let j=0;
//     for (;;){
//         // j accesible
//         var t=0
//         let i=0
//         // accesible
//     }

//     //i not accesible
// }
// // j not accesible
//console.log(t);

// if (true){
//     var h=0;

// }
// //
// h>9;


// function foo(){
//    //console.log(k);
//   // console.log(k);
//     if(true){
//         // let k --
//       // console.log(k);
//         let  k=90; // k =undefined  ; k=90
    
//     }
//    // gh()
//   // console.log(k);// not accesible

// }
//console.log(k); // output here 

//foo();

// var x
//x = 3;
//console.log(x);
//var x;
// let x; // declartion moved to the top
// console.log(x);
//  x=3  // this line would be ignored

// let x=3; // this line

// let vs const

// let can be re assigned 
// const cannot be reassigned
// let has a block scope and const has a block scope too

// all the differences between let and var are applicable for const and var too

/*
reassignment
let c=9;
c=89;
const k=90;
k=89; // will throw error  /
*/
/*
re declarayion
let h=90;
let h=89;
*/

// for (const i=0;i<10;i++){

// }

// function foo(){
//     if(true){
//         const h=0;
//     }

//     console.log(h)  // h is not defined
// }
// foo(); // out put 