// const btn=document.getElementById("btn");
// const input=document.getElementById("data");
// const heading=document.getElementById("heading");

// btn.addEventListener("click",function(eventobject){
//     //console.log(eventobject.target.innerHTML);
//     const value=input.value;
//     heading.innerText=value;

// })

// input.addEventListener("keypress",function(eventobject){
//    // console.log();
//    //const value=input.value;
//     //heading.innerText=value;
//     heading.innerText=eventobject.target.value
// })


// heading.addEventListener("mouseover",function(event){
//     //heading.style.color="green";
//     event.target.style.color="red";
// })

// heading.addEventListener("mouseleave",function(event){
//     //heading.style.color="green";
//     event.target.style.color="black";
// })

const frame=document.getElementById("frame");
//const arr=["cat","dog","rabbit","lion"]; //array
// for (let i=0;i<arr.length;i++){
//     document.getElementById(arr[i]).addEventListener("click",function(){
//         frame.src="https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg"
        
//     })
// }

const cat=document.getElementById("cat");
const dog=document.getElementById("dog");
const lion=document.getElementById("lion");
const rabbit=document.getElementById("rabbit");

cat.addEventListener("click",function(){
    frame.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sQJRIEcvdvsdmja9GgiUddb5UpAkX_Z83Q&s"
    frame.style.width="100%";
    frame.style.height="100%";

})

dog.addEventListener("click",function(){
    frame.style.width="100%";
    frame.style.height="100%";
    frame.src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
})

rabbit.addEventListener("click",function(){
    frame.style.width="100%";
    frame.style.height="100%";
    frame.src="https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg"
})
lion.addEventListener("click",function(){
    frame.style.width="100%";
    frame.style.height="100%";
    frame.src="https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg"
})