 var over=document.querySelector(".popupoverlay1")
 var popbox=document.querySelector(".pop")
 var addbutton=document.getElementById("addpopup")
 var cancelbuttonn=document.getElementById("cancelbtn")


 addbutton.addEventListener("click",function(){
    over.style.display="block"
    popbox.style.display="block"
 })


 cancelbuttonn.addEventListener("click",function(event){

    event.preventDefault()

    over.style.display="none"
    popbox.style.display="none"

 })

var addbtnn=document.getElementById("addbtn") 
var titlebox=document.querySelector(".titlebox") 
var subtitle=document.getElementById("subtitle1")
var heading=document.getElementById("headinginput")
var content=document.getElementById("textinput")

 addbtnn.addEventListener("click",function(event){
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","notebox")
        div.innerHTML=` <h2 id="line">${heading.value}</h2>
        <h5>${subtitle.value}</h5>
        <p>${content.value}</p>

        <button onclick="deletenote(event)">Delete</button>`
        titlebox.append(div)
        // subtitle.append()
        over.style.display="none"
        popbox.style.display="none"

 })

 function deletenote(event){

    event.target.parentElement.remove()

 }





