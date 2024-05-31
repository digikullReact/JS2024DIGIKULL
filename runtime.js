//hositing behaviour 
// hoisting affect
//function foo()
/**
 * 
 * JavaScript Hoisting refers to the process whereby the interpreter 
 * appears to move the declaration of functions, variables, classes, 
 * or imports to the top of their scope,
 *  prior to execution of the code.
 */
// variable creation /variable definition
// declaration 
// initialization 
// assignment
//let c=9;
function bar(){
    
    //foo()  // moved to the top due to hoisting by js engine
    console.log("9999")
    function foo(){
         //var c;
         let k;
        console.log("hi there");
        var c=9;
         k=8;
    
        console.log(k);
    }
    foo()

}

//bar()


// effects of hoisting
// effect of hoisting in var 
function nm(){
    // internally  var c=undefined;  // for var declaration and initialization happens at same time
     console.log("value of c",c);

    var c=9;  // internall --> c=9
    console.log(c);
}

nm();


function storedNum(num){
    let sum=0;
    for (let i=0;i<=num;i++){
        if (i%2!=0){
          sum=sum+i;
        }
    }
return sum;
}