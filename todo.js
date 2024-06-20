const btn=document.getElementById("btn");
const input=document.getElementById("input");
const list=document.getElementById("list");
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


function deletElement(element){
    //console.log(element.id);
    let element_=document.getElementById(element.id);
    // get the parent element of this element
    var r1 = element_.closest("li");  
    list.removeChild(r1);

}
// btn.addEventListener("click",function(){
//     let existinghtml=list.innerHTML; // we are getting the existing html that is in the list
//     //list.innerHTML=existingtml+'<li class="list-group-item">'+input.value +'</li>'
//      // generate id dynamically
//       let id=makeid(8);
//      list.innerHTML=`${existinghtml}<li class="list-group-item">${input.value}
//       <button class="btn btn-danger"  onclick="deletElement(this)" id=${id}>
//      Delete
//      </button></li>`

//      list.style.overflow="scroll";
//      list.style.height="300px";
   
// })

btn.addEventListener("click",function(){
    const lielement=document.createElement("li");
    lielement.className="list-group-item"
    lielement.innerText=input.value;
    list.appendChild(lielement);
    // create button element
   
   
})