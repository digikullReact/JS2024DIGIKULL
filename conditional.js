// if else if else
/*
if (7>15){
    console.log("Yes its true")
}else if(7 >6){
     console.log("yes 7 is greater than 6")
}

else {
    console.log("not executed------")
}
*/

function foo(num){

    if (num>7){
        console.log("Num is greater than 7")
    }else if (num>8){
        console.log("Num is greater than 8")
    }else{
        console.log("Num greater than none")
    }

}

foo(8); //Num is greater than 7

foo(9);  //  "Num is greater than 7

foo(5);//  console.log("Num greater than none")



// Fizzbuzz problem
// you have to create a function
// you have to pass a number in parameter
// if num is divisible by 3 you have to print fizz
// if num is divisble by 5 you have to print buzz
// if num is divisible by both 3 and 5 you have to print fizzbuzz
// (15%3)==0 its divsible
// (15%3 !=0) its not divisible


// correct answer

function fizzBuzz(num){
    if (num%3==0 && num%5==0){
        console.log("fizzbuzz")

    }else if(num%3==0){
        console.log("fizz")
    }
    else if(num%5==0){
        console.log("buzz")
    }

}

fizzBuzz(45) ;// fizzbuzz
fizzBuzz(25) ;// buzz
fizzBuzz(9); // fizz