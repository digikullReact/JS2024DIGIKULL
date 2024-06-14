const btn=document.getElementById("btn");
const input=document.getElementById("input");
const list=document.getElementById("list");
btn.addEventListener("click",function(){
    let existinghtml=list.innerHTML;
    
    //list.innerHTML=existingtml+'<li class="list-group-item">'+input.value +'</li>'
     list.innerHTML=`${existinghtml}<li class="list-group-item">${input.value}</li>`
    list.style.overflow="scroll";
    list.style.height="300px";


})