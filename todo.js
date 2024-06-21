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

function AddToDoListener(){
    const lielement=document.createElement("li");
  
    lielement.className="list-group-item"
    lielement.innerText=input.value;

    const btn=document.createElement("btn");
    btn.className="btn btn-danger"
    btn.addEventListener("click",deletElement2);
    btn.innerText="Delete"

    const ebtn=document.createElement("btn");
    ebtn.className="btn btn-info"
    ebtn.addEventListener("click",editelement);
    ebtn.innerText="Edit"

    lielement.appendChild(btn);
    lielement.appendChild(ebtn);
    list.appendChild(lielement);
    // create button element
   
    input.value="";
   
}


function deletElement(element){
    //console.log(element.id);
    let element_=document.getElementById(element.id);
    // get the parent element of this element
    var r1 = element_.closest("li");  
    list.removeChild(r1);

}

function deletElement2(event){
    //console.log(element.id);
    let element_=event.target;
  
    // get the parent element of this element
    var r1 = element_.closest("li");  
    list.removeChild(r1);

}

function editelement(event){
  
    //console.log(element.id);
    let element_=event.target;
  
    // get the parent element of this element
    var r1 = element_.closest("li"); 
    let data=r1.innerText
    let splitted=data.split("Delete")
  
    // string.split()

    let editfunction=function(){
       
        // edit functionality will go here

        let currentValue=input.value;
        btn.removeEventListener("click",editfunction);
        btn.addEventListener("click",AddToDoListener)
        btn.innerText="Add Todo"

        r1.innerText=currentValue;
        input.value="";
    }

    input.value=splitted[0]
    btn.removeEventListener("click",AddToDoListener);
    btn.addEventListener("click",editfunction)
    btn.innerText="Edit Todo"

    btn.removeEventListener("click",AddToDoListener);
    

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

btn.addEventListener("click",AddToDoListener)