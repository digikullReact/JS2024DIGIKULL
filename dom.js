// // We will first select the html element 
// // There are four ways in which you can select html element
// // selecting by id   document.getElementById("btn")
// // selecting by className
// // selection by tag name
// // query selector 

// // const element=document.getElementById("btn");
// // const heading=document.getElementById("heading");
// // const form =document.getElementById("form");

// // element.addEventListener("click",function(){
// //     console.log("button got clicked");
// //     heading.style.color="gold"
// //     // You can emit your own custom events
// //     // const event=new Event("color");
// //     // heading.dispatchEvent(event);
// //     form.style.display="block";

// // })

// // heading.addEventListener("color",function(){
// //     alert("color changed");
// // })


// //let data=prompt("how are you ??")
// //console.log(data);

// ///alert("The page is working fine");

// // Create a button that changes the font style and font family of a heading and gives a border to it
// // how to change the content of html element ,document.write

  const element=document.getElementById("btn");
 const heading=document.getElementById("heading");
 const mydiv=document.getElementById("mydiv");

//  element.addEventListener("click",function(){
//     heading.style.fontFamily="Georgia, serif";
//     heading.style.fontStyle="italic";
//     heading.style.border="1px solid black";
//  })

// element.addEventListener("click",function(){
// console.log("hello")
//     document.write("<h1>Hello People</h1>")
// })

element.addEventListener("click",function(){
    heading.innerText="hi there";
    mydiv.innerHTML="<p>I am html</p>"

})