// We will first select the html element 
// There are four ways in which you can select html element
// selecting by id   document.getElementById("btn")
// selecting by className
// selection by tag name
// query selector 

const element=document.getElementById("btn");
const heading=document.getElementById("heading");

element.addEventListener("click",function(){
    console.log("button got clicked");
    heading.style.color="gold"
    // You can emit your own custom events
    // const event=new Event("color");
    // heading.dispatchEvent(event);

})

heading.addEventListener("color",function(){
    alert("color changed");
})

