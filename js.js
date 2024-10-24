function add(){
    var ul=document.getElementById("ul")
    var input=document.getElementById("input")
    var listitem=document.createElement("li")
    var date=document.getElementById("dtt")
    var text=input.value
    var datetime=date.value ? date.value :"No date set"
    listitem.innerHTML=input.value+"<span class='due'>Due:</span>"+datetime+"<button class='del' onclick='del(event)'>Delete</button>"
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



