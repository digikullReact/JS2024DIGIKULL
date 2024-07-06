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


// // Filter method
const arr=[1,2,3,4,5,6];
// filter is used to filter out the array elements based on some logic
// it doesnt modify the original array
const filter=arr.filter(function(ele,index){
   if (ele%2==0){
     return ele;
   }

 })
// console.log(arr);

console.log(filter);

// const str=["apple","banana","animal","zoo","anime"];

// const fil=str.filter(function(ele,index){
//   if (ele.startsWith("a")){
//     return ele;
//   }


// })
// console.log(fil);



// class Book {
//   constructor(name, author, ISBN) {
//     this.name = name;
//     this.author = author;
//     this.ISBN = ISBN;
//   }
// }

// class Library {
//   constructor() {
//     this.books = [];
//   }
//   addBook(book) {
//     this.books.push(book);
//   }

//   removeBook(ISBN) {
//     let bk = this.books;
//     // for (let i = 0; i < bk.length; i++) {
//     //     if (bk[i].ISBN == ISBN) {
//     //         this.books.slice(i, 1);
//     //     }
//     // }
//     console.log("Before Filtered--", this.books)
//     const filteredBook = this.books.filter((ele, index) => ele.ISBN != ISBN)
//     // if (ele.ISBN!=ISBN){
//     //   return ele;
//     // }





//     this.books = filteredBook;
//     //console.log("Filtered--",filteredBook)
//   }

//   booklist() {
//     return this.books;
//   }
// }

// const book1 = new Book("Ramayan", "Valmiki", "100012");
// const book2 = new Book("Geeta", "Prabhupad", "1003412");

// const library = new Library();
// library.addBook(book1);
// library.addBook(book2);

// library.removeBook("100012");
// console.log("current library", library.booklist());


let users=[
    {
      "id": 186353,
      "name": "Horton Barlow",
      "email": "hortonbarlow@intradisk.com",
      "rating": 17,
      "suggestion": 309070
    },
    {
      "id": 805339,
      "name": "Leach Jacobson",
      "email": "leachjacobson@intradisk.com",
      "rating": 58,
      "suggestion": 436303
    },
    {
      "id": 170135,
      "name": "Witt Stanley",
      "email": "wittstanley@intradisk.com",
      "rating": 55,
      "suggestion": 129088
    },
    {
      "id": 742367,
      "name": "Keri Mcfadden",
      "email": "kerimcfadden@intradisk.com",
      "rating": 14,
      "suggestion": 127737
    },
    {
      "id": 697505,
      "name": "Bishop Valencia",
      "email": "bishopvalencia@intradisk.com",
      "rating": 34,
      "suggestion": 228983
    },
    {
      "id": 851265,
      "name": "Shanna Morgan",
      "email": "shannamorgan@intradisk.com",
      "rating": 23,
      "suggestion": 569199
    },
    {
      "id": 90395,
      "name": "Pittman Finch",
      "email": "pittmanfinch@intradisk.com",
      "rating": 38,
      "suggestion": 204951
    },
    {
      "id": 732619,
      "name": "Anne Sykes",
      "email": "annesykes@intradisk.com",
      "rating": 70,
      "suggestion": 83613
    },
    {
      "id": 240694,
      "name": "Nielsen Berger",
      "email": "nielsenberger@intradisk.com",
      "rating": 25,
      "suggestion": 511252
    },
    {
      "id": 486565,
      "name": "Teresa Downs",
      "email": "teresadowns@intradisk.com",
      "rating": 27,
      "suggestion": 621064
    },
    {
      "id": 39811,
      "name": "Melissa Cervantes",
      "email": "melissacervantes@intradisk.com",
      "rating": 62,
      "suggestion": 948782
    }
  ]


// First operations - Create an array of objects that have all the name as uppercase

// second - Create an array of email  // mapoperation
// third - create an array that has alle the users with rating greater than 30


// First operations - Create an array of objects that have all the name as uppercase
// function upperCase(users){
//   return users.map((user)=>user.name.toUpperCase())
// }

// console.log(upperCase(users))

// console.log(

// users.map(function(ele,index){
//   let temp=ele.name.toLocaleUpperCase();
//   ele.name=temp;
//   return ele;
  
// })
  
// )
// let emails=users.map(function(ele,index){

//   return ele.email;

// })


// console.log(
//   users.filter(ele=>{
//     return ele.rating >30
//   })
// )

// -->reduce method // to accumulate 

// reduce can return any kind of data ,array ,number ,object ,string
// depending on the second argument
// because the second arg is the default value of accumulator

let num=[1,2,3,3,4,5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//   sum=sum+arr[i];
// }
// console.log(sum);

// console.log(

//   num.reduce(function(acc,ele){
//     acc=acc+ele;

//     return acc;
    
//   },0)

  
// )

// let acc=[];

// for (let i=0;i<num.length;i++){
//   acc.push(num[i]*2);
// }
// console.log(acc);
// console.log(

//   num.reduce(function(acc,ele){
//     acc.push(ele*2);

//     return acc;

//   },[])


// )

// let str=["a","b","c","d"]

// console.log(

//   str.reduce((acc,ele)=>{
//     acc=acc+ele;
//     return acc;
    
//   },"")
// )

// Try this operation using reduce

// First operations - Create an array of objects that have all the name as uppercase

// second - Create an array of email  // mapoperation
// third - create an array that has alle the users with rating greater than 30

let d=users.reduce((acc,ele)=>{
  let name=(ele.name).toLocaleUpperCase();
  ele.name=name;
   acc.push(ele)
  return acc;
},[])

console.log(
  users.reduce((acc,ele)=>{
   
     acc.push(ele.email)
    return acc;
  },[])

)

console.log(
  users.reduce((acc,ele)=>{
    if(ele.rating>30){
       acc.push(ele)
    }
    
    return acc;
  },[])

)

// array find operation returns always the first element ,which satisfies the condition
// 
let arr=[1,2,32,3,4];

console.log(

  arr.find(function(ele,index){
    return (ele%2==0)
  })
)



// sort method  // it modifies the original array as well
// by default it sort elements as strings

// let d=[7,1,16,89,11,34];
// //console.log();
// console.log(

//   // the callback passed here is a comaprison function

//   // negative value   a-b = - ; a is lesser than b
//   // positive value // a is greater than b
//   // zero value // a and b are equal
  
//  d.sort(function(a,b){
//    return a-b
   
//  })

  
// );

// console.log(d);

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

console.log(je);