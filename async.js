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