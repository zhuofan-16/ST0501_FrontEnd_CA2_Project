window.onload=function(){
var submit= document.getElementById("submit");
submit.onclick=function(){
var name=document.getElementById("fname").value;
var comment=document.getElementById("comment").value;
    var tr=document.getElementById("tr");
tr.innerHTML+="<div class=\"col\">" +
    "<div class=\"card text-dark bg-light mb-3\" style=\"max-width: 18rem;\">" +
    "<div class=\"card-header\">"+
    "<img src='../feedback/android-contacts-icon-png-20.jpg' style=\"height:30px;\" class=\"rounded me-2\" alt=\"...\">"+name+
  "</div>"+
    "<div class=\"card-body\">"+
    "<p  class=\"card-text\">" +comment+ "</p>" +
    "</div>" +
    "<div class='card-footer'>"+
    "  <small class=\"text-muted\">"+
    Date()+
    "</small>"+
    "</div>"+
    "</div>" +
    "</div>"
    return false;




}


}