// // function getDayNameByNumber(num) {
// //     switch (num) {
// //         case 1:
// //             console.log("its monday");
// //             break;
// //         case 2:
// //             console.log("its tuesday")
// //             break;
// //         case 3:
// //             console.log("its wednesdaya")

// //             break;
// //         case 4:
// //             console.log("its thursday")

// //             break;
// //         case 5:
// //             console.log("its friday")

// //             break;

// //         case 6:
// //             console.log("its saturday")

// //             break;

// //         case 7:
// //             console.log("its sunday")

// //             break;

// //         default:
// //             console.log("no match")
// //             break;
// //     }

// // }

// // getDayNameByNumber(5);
// // getDayNameByNumber(50);




// // type of vehicle

// function typeofVehicle(vehicleNum){

//     switch (vehicleNum) {
//         case 1:
//             console.log("its car")
            
//             //break;
//         case 2:
//             console.log("its a van")  
//             //return; // if you put return statement here it will completely exit from the function
//             break;        // fall through
//         case 3:
//             console.log("case 3")
//         case 4:
//             console.log("case 4") 
//             break;     
       
//         default:
//             console.log("no match")
//            // break;
//     }

//     console.log("Switch finished");
// //
// }

// typeofVehicle(1);

// break and continue
// let i;
// for ( i=0;i<10;i++){
   
//     if (i==5){
//         break;  //  break will exit the loop  
//     }
   
//     console.log(i);
// }

//console.log("final value of ",i);

// continue 

// let i;
// for ( i=0;i<10;i++){
//     if (i==5){
//         continue;  // continue will exit the current iteration and move to the next iteration
//     }
  
//     console.log(i);
   
// }

// console.log(i);



// let i=0;
// while(i<10){
   
//     if (i==5){
//        // i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// let i=0;
// // do while 
// do{
//  // console.log("I will be printed atleast once")
//   if(i==5){
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// } while(i<10);  // its only for checking the condition
// let j=1;
// while (j<1){
//     console.log("hey there")
//     j++;
// }

// // do while loop runs atleast once ,
// // in do while the code is executed first and then the condition is evaluated


//reverse the number


function ReverseNumber(num){
let reverSeNumber=0;
while(num>0){
  
    let remainder=num%10
    reverSeNumber=reverSeNumber*10+remainder
    num=Math.floor(num/10)

}
return reverSeNumber;
}

console.log(ReverseNumber(897));