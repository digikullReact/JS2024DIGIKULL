// // // Loops basically are used to do some task repeatedly again and again
// // // Loops exists in every programming language
// // // there are two ways in programming through which you can do tasks multiple times
// // //iterative way --->loops
// // // recursive way --->multiple times function calls /nested function

// // function sum(a,b){
// //     //console.log(a+b);
// //     let c=a+b;
// //     console.log(c);

// // }

// // // we have loops for the same

// // // In js we have  three kinds of loop for loop ,while loop ,do while loop

// // // there are three important part of the loop
// // // firstly from where the count starts ,generally we start from 0 or 1
// // // where the count would be finished --> 100
// // // how it will go from 0 to 100  or starting value to finish value


// // // what is an itertion ?  an iteration of the loop is completion of the inner bracket tasks

// // // how the iteration works
// // for ( let i=2; i<=100 ;i=i+1 ) {
// //     // you will write all the code that you want to excute
// //     console.log("I am printing the value repeatedly",i);
// // }
// // // 
// // console.log("the for loop is done now")


// // // how the iteration works
// // for ( let i=100; i>=0 ;i=i-1 ) {
// //     // you will write all the code that you want to excute
// //     console.log("I am printing the value repeatedly",i);
// // }

// // // 

// // // initially (in the beginning) i would be given the value 1 this process happens only one single time
// // // then it checks whether i is less than equal to 100 or not
// // // it will execute the task

// // //then it will increment the i as per i=i+1  (2)
// // // then again it will check whether the value (2) is less than equal to 100 or not

// // // if its less than or equalt to 100 it will again run the task

// // /// 99 times its done

// // // so when this condition i<=100 becomes false then the loop will exit
// // // and will continue executing other code



// // for ( let i=2; i<=100 ;i=i*2 ) {
// //     // you will write all the code that you want to excute
// //     console.log("I am printing the value repeatedly",i);
// // }

// // // you have to calculate the sum of 1000 whole numbers 0-1000
// // // write a function that does that

// // // initail value       check    increment (i)
// // //  2                   true       2
// // //                   




// // // function with return value


// // function SumofNNumbers(){

// //     let bucket=0;

// //     for (let i=0;i<1000;i=i+1){
// //         bucket=bucket+i;  //bucket =3 ,i=2
    
// //     }
// //     //console.log(bucket);  // this console.log will be executed once the for loop is finished
// //     return bucket;

// // }

// // let sumOFNum=SumofNNumbers();
// // console.log("return value",sumOFNum)

// // This is function definition
// function  SumofevenNumbers(p){ //paraamter
//    let sum=0;
//    for (let i=0;i<100;i++){
//       if (i%2==0){
//        // console.log(i);
//         sum=sum+i;
//       }
//    }
//    //console.log(sum);

//    return sum;  // hapens only once // as soon function returns its stops executing
//   // console.log("i t will never execute")
  
// }

// //
// // function call

// let data=SumofevenNumbers(90);// 90 is an argument
// console.log("data",data*2);


// function Trip(){

//     let getCloths=2;
//     let booking=true;
//     let money=100000;
// }

// Trip();; // function call


function fizzBuzz(limit) {
    for (let i = 0; i <= limit; ++i) {
        if (i % 3 === 0 && i % 5 === 0)
            return 'fizzbuzz';
        else if (i % 3 === 0)
            return 'fizz';
        else if (i % 5 === 0)
            return 'buzz';
        else
        return i;
    }
}

let store=fizzBuzz(10);
console.log(store);
// 
//initalization (happens only once) ---> Condition checking(Multiple) --->code execution(multiple) --->increment(multiple)
for (let i=0;i<100;i=i+1){
    // the code which you want to run multiple times
}


// function multiplicationTable(n) {
//     for (let i = 1; i <= 10; i++) {
//       multiply = n * i;
//       console.log(i, "*", n, "=", multiply);
//     }
//   }
//   multiplicationTable(8);

// // Print table of 3
// for(i=1;i<40;i++){
//     if (i%3==0){
//         console.log(i);
//     }
// }

// While loop ----->

// Print table of 3
// for(let i=1;i<40;i++){
//     if (i%3==0){
//         console.log(i);
//     }
// }
// let i=1;
// while(i<40){
//     console.log("while",i);
//     i++
// }


// question ,checking if a number is prime 
// prime number is only divisble by itself or   1 ,2 ,3 ,29 ,31 
// you have to write a function in which you will pass a number and it will return true or false
// whether number is prime or not

function IsPrime(num){
   let isPrime=true;  // flag way ,flag method
    if (num==1){
        return false;
    }
    for (let i=2;i<num;i++){  // 2 3 4 5 6 7 8
         if (num%i==0){
            isPrime=false
            //return false;
         }

    }
   return isPrime;

}
// 2 ,3
console.log(IsPrime(2));  // true
console.log(IsPrime(1));
console.log(IsPrime(3));
console.log(IsPrime(4));  // false
console.log(IsPrime(7));
console.log(IsPrime(10));
console.log(IsPrime(2));  // its an even prime number
console.log(IsPrime(9))

//Find all the prime numbers between 1 and 100