// Array Prototype
//

// function Human() {}
// Human.prototype.walk = () => {
//   console.log("wlaked");
// };

// const h1 = new Human();
// h1.walk();

// function Array() {}

// Array.prototype.join=function(){

// }
// const arr=new Array();
// let ar2=[1,2,3,4];
// ar2.join();
//

// // length
const arr1 = [1, 2, "apple", 4, 5, 6];
// console.log(arr1);

// //Array toString() // converts any object to a string form
// console.log(arr1.toString());

// //Array at() // takes an argument and returns the element at that argument or position

// //console.log( arr1.at(2))


// //Array join()  // it returns a string which is the combined form of all the elements in array
// //console.log(arr1.join("-"))

// let str="hello-world";
// console.log(str.split("-").join("-")) // it converts a string into an array // it doesnt modify the original array
// //console.log(arr1);
// array push inserts an element at the end of an array
// console.log(arr1.push("hi there")) // it returns the length of an array
// console.log(arr1)

// // pop removes the element from the end of an array and returns the element
// console.log(arr1.pop());

// console.log(arr1)


// shift removes the first element from an array (pop)
// console.log(arr1.shift())
// console.log(arr1)

// unsfhit push
//console.log(arr1.unshift(89)); // it returns the new length of an array

//console.log(arr1)

//console.log(delete);

// delete is used to delete an item from object
//delete arr1[2];
//console.log(arr1);
// you can use delte to remove a key as well from the object
//let obj={name:"john",age:22};
//delete obj["age"];

//console.log(obj);
// arr concat combines two arrays
 let arr2=[78,"h","A","2",2];// ===>{0:78,1:"h",2:"A"}
// console.log(arr1.concat(arr2));
// console.log(arr2,arr1);

// is there any other option to merge two array
// spread operator

//let arr3=[...arr1,...arr2];
//console.log(arr3);
//let obj1={name:"shubham"};
//let obj2={age:12,...arr2};

//let obj3={...obj1,...obj2};
//console.log(obj2);
// let h={
//   a:{
//     b:{
//       name:"shubham"
//     }
//   }
// }
// delete h["a"].b.name

// console.log(h);

// copyWithIn //The copyWithin() method copies array elements to another position in an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 3);
// console.log(fruits);
// flat removes the nested array and creates a one dimensional array fro 2 dimensional one
//const h=[[1,2,3],[4,5,[6,7,8]]];
//console.log(h.flat(Infinity));
//console.log(h.flat(2));

//Array splice()

const g=[1,2,3,4];
//console.log(g.splice(0,2))  // splice removes the elements from an array it takes start index and the count 
//console.log(g);
// console.log(g.splice(2,1)) ;
// console.log(g);

//console.log(g.flat(Infinity));

// slice
//console.log(g.slice(0,2));
//console.log(g);
// console.log(g.toSpliced(2,1)) ;  // so it will remove the item and return the array ,it wont modify the original array
// console.log(g);


// 

// function insertElements(arr,index,element){
//   arr.splice(index,0,...element);
//   return arr
// }

// console.log(insertElements(g,1,["hello","hi","there"]))


// Higher Order Array function
// A higher order function is a function which takes a function as an argument or it returns a function or both

// function foo(cb){
//   cb();
  
// }

// foo(function(){
  
// })

// function bar(){


//   return function (){
    
//   }
// }

// map ,fliter ,reduce ,find,sort,every,forEach
// forEach
let arr8=[1,2,3,3,8];

arr8.forEach(function(ele,index){

  console.log(ele,index);
  
})

// forEach  method to calculate the sum of an array 

// let sum=0
// arr8.forEach((ele,index)=>{
//   if (index==0 || index ==1){
//     sum=sum+ele;
//   }

  
// })


// console.log(sum);
// let sum1=0;
// for (let i=0;i<arr8.length;i++){
//   sum1=sum1+arr8[i];
// }

// console.log(sum1);

// Array.prototype.myForEach=function(cb){
//   for (let i=0;i<this.length;i++){
//     cb(this[i],i)
//   }
  
// }

// let y=[9,8,78,990,78];

// y.myForEach(function(ele,index){
//   console.log("my foreach",ele,index)
  
// })

// map functioin
// map function is used to apply some change to the each and every item of an array 

 let y=[9,8,78,990,78];

let j=y.map(function(ele,index){
  
  return ele*2;
})

console.log(j);


 let st=["a","b","c","d","e"];

let je=st.map(function(ele,index){

  return ele.toLocaleUpperCase();
})

console.log(je);