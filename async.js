// function sum(a,b){
//     return a+b;
    
//   }
  
//   console.log("hii");
  
//   setTimeout(()=>{
//     console.log("timeout")
//   },10000)
  
//   console.log("hello");
  
//   console.log(sum(9,8));
  
  
//   // You have to go to market
//   // you have to buy groceries
//   // you have to meet friend
  
  
//   /**
//    *
//    *
//    *
//    * ### Synchronous Task
//   **Definition:** A synchronous task is like doing one thing at a time in a specific order. You have to finish one task before starting the next one.
  
//   **Example:** Imagine you are baking cookies and making a sandwich. In a synchronous way, you would first mix the cookie dough, bake the cookies, and then, after finishing with the cookies, start making the sandwich. You can't start the sandwich until the cookies are done.
  
//   ### Asynchronous Task
//   **Definition:** An asynchronous task is like doing multiple things at once. You can start a new task before the previous one is finished, and they can happen at the same time.
  
//   **Example:** Imagine you are baking cookies and making a sandwich. In an asynchronous way, you would put the cookies in the oven and, while they are baking, you start making the sandwich. Both tasks are happening at the same time, and you don't have to wait for the cookies to finish before starting the sandwich.
//    */
  
  
//   // visual -->hearing --> smelling -->
  
  
//   // Prerna 20 min for cooking lunch
//   // prerna takes 20 min to do daily chores 
  
//   // prerna takes 10 min to iron her clothes
//   // prern takes 15 min to get ready for the office
  
  
//   // prerana boil potato (10)
//   // prernn will use that 10 min to do daily chores(20)
//   // 10 min 
  
  
  
  
//   // restaurant example



//   for (;;){
//     console.log();
//   }
  
  
//   setTimeout(()=>{
//    console.log("after there") 
//   },2000)
  
//   console.log("heuuu");
//   setInterval(()=>{
//    console.log("after") 
//   },1000)
  
//   console.log("ding dong");
  
//   // Asynchronous code will give the results in the end once synchrnous code has finished execution
  

function foo(){
    console.log(9);
    setTimeout(()=>{
      console.log("hello async")
    },2000)
    console.log(19);
    console.log(90);
    for (;;){
      console.log("hii")
    }
  }
  
  console.log("hello sync")
  foo();


  // synchronous callbacks vs asynchronous callbacks

  //Error first callbacks
// when ever you are doing any kind of activity 

// will result in two things 
// 1- error 
// 2- result // success

function sum_of_two_numbers(a, b, cb) {
  setTimeout(() => {
    if (typeof a == "number" && typeof b == "number") {
      let sum = a + b;
      cb(null, sum);
    } else {
      const err = new Error("passed values are not number")
      cb(err, null);
    }

    ///return sum;
    //console.log(sum);
  }, 2000)

}

// sum_of_two_numbers(20, 10, function(error, result) {
//   if (error != null) {
//     console.log("There was error", error);
//   } else {
//     console.log(result);
//   }

// })

// sum_of_two_numbers("a", 10, function(error, result) {
//   if (error != null) {
//     console.log("There was error", error);
//   } else {
//     console.log(result);
//   }

// })


// Callback hell // pyramid of doom
// its a pattern that gets formed automatically while dealing with dependent asynchronous call bak functions 

// Given two numbers ,you have to check whether the sum of the numbers multiplied by product of the number ,divided by the subtraction of numbers is dibvisible by 2 or not
// 4+2 -->6
// 4*2--->8
// 6*8 -->48
// 4-2 -->2
// 48/2 -->24
// the only catch is the operations gonna happen asynchronously



function add(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 2000)

}


function product(a, b, cb) {
  setTimeout(() => {
    cb(a * b);
  }, 2000)

}


function subtract(a, b, cb) {
  setTimeout(() => {
    cb(a - b);
  }, 2000)

}


function division(a, b, cb) {
  setTimeout(() => {
    cb(a / b);
  }, 2000)

}


function divisibleby2(a, cb) {
  setTimeout(() => {
    if (a % 2 == 0) {
      cb(true);
    } else {
      cb(false)
    }

  }, 2000)

}

//  callback hell 
function opeation(a,b){
  add(a,b,function(addresult){
    // inside this
    product(a,b,function(productresult){
      // inside
     // console.log(

      subtract(a,b,(subtractresult)=>{
        let r=addresult*productresult;
        let dib=r/subtractresult
       // console.log()
        divisibleby2(dib,function(result){
          if (result==true){
            console.log("Number is divisble by 2");

          }else{
             console.log("Number is not  divisble by 2");
          }

        })

      })

    })

  })



}

opeation(4,2);



///   
let country=[{name:"India",id:1},{name:"USA",id:2}]

let state=[{name:"up",countryId:1,id:1},{name:"kansas",countryId:2,id:2}]

// first function gives you the coubtry Id on the basis of name
// second function gives you the stateId of on the basis of countryId
// they have to be asynchronous 

// Question is  -->given a countryName find out all the states in the country

function find(countryName){
  
}

find("India")