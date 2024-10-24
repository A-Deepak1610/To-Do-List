function add(){
    var ul=document.getElementById("ul")
    var input=document.getElementById("input")
    var listitem=document.createElement("li")
    var date=document.getElementById("dtt")
    var datetime=date.value ? date.value :"No date set"
    listitem.innerHTML="<input type='checkbox' id='cb' onclick='line(event)'>"+input.value+"<span class='due'>Due:</span>"+datetime+"<button class='del' onclick='del(event)'>Delete</button>"
    if(input.value==""){
        alert("Please Enter a Task!");
    }
    else{
    ul.append(listitem)
    input.value=""
    }
}
function del(event){
    event.target.parentElement.remove()
}
function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toDateString();
    const timee=now.toTimeString()
    document.querySelector('#datetime').textContent = "Date:"+currentDateTime;
    document.querySelector("#tm").textContent ="Time"+timee;
  }
setInterval(updateDateTime, 1000);
function line(event) {
    var checkbox= event.target;
    var listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.style.textDecoration = "line-through"; 
    } else {
        listItem.style.textDecoration = "none";
    }
}
