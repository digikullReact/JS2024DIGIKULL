// var c=9; // global variables
// let j=90; // global variable
// const k=78; // global variable

// //console.log(c);
// function foo(){
//     let h=9;
//     let j=9;
// const k=78;
//     console.log(j,k);
// }

//foo();


// let userName = 'shaktiman';
 
// function globalUser(name) {
//      let userName = name;
//     console.log('username inside function is=', userName)
// }

// globalUser('vinod')
// userName = 'hulk';


// function foo(){
//     let g=9;

//     //console.log(c);

//     function kk(){
//         if (true){
//             console.log(g)
//         }
//     }
//     kk()
// }
// // let g=9;

// foo();

var x = 1;
function foo() {
//var x;
 //function x;    // hoisting will take place for the function 
x = 10;
//console.log(x); // 10 
return;
//function x() {}  // 
}
foo();
console.log(x);
