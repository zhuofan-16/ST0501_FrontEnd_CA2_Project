/*
MODULE NAME : ST0501 : FRONT-END WEB DEVELOPMENT
MODULE LECTURER: MR LIM CHIN MIN
MODULE ASSIGNMENT: CA2 WEBSITE ASSIGNMENT (WITH BOOTSTRAP AND JS)
Student Name: CHEN ZHUOFAN
Student No. : P2100746
Student Class: DAAA/FT/1A/04
Page:Feedback Page (JS)
Github Commit :https://github.com/zhuofan-16/ST0501_FrontEnd_CA2_Project
*/

/*Logic:At default,the list is hidden .create a function that use indexOf to check for matching ,if matching it will be ===0,
options matching will be list out by enable the display:css style .Else if not match, display:css style will be changed to none(ie list will not be
shown).If the user did not input anything ,the whole table will be hidden.This function will key running upon detecting that there is a input(onkeyup).
*/
function searchfeature(){
    var tables=document.getElementById("searchtable");
    var input=document.getElementById("sbar").value.toUpperCase();
    var li=tables.getElementsByTagName("tr");
    for (var l=0;l<li.length;l++){
        if (li[l].textContent.toUpperCase().indexOf(input)===0){
            li[l].style.display="";
            tables.style.display=""
        }else{
            li[l].style.display="none";/*If not found,hide*/

        }
        if (input===""){
            tables.style.display="none"/*If user did not enter anything ,hide*/
        }
    }}


window.onload=function() {
    var searchbar = document.getElementById("searchbar")
    var searchkey = document.getElementById("search");
    var counter = 0;
    searchkey.onclick = function () {
        counter = counter + 1;
        if (counter % 2 > 0) {
            searchbar.style.visibility = "visible";
        } else {
            searchbar.style.visibility = "hidden";
        }
    };

    searchkey.addEventListener("click", function (e) {
        e.preventDefault;
        searchbar.classList.remove("searchbaranimation");
        void searchbar.offsetWidth;
        searchbar.classList.add("searchbaranimation");
    });

    var option =
        {
            animation: true,
            delay: 2000
        };

    var toastHTMLElement = document.getElementById('welcome');
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    var toastHTMLElement2 = document.getElementById('sucessfd');
    var toastElement2 = new bootstrap.Toast(toastHTMLElement2, option);
    toastElement.show();


/*Guest icon used here is taken from https://icon-library.com/icon/android-contacts-icon-png-20.html*/
    var submit= document.getElementById("submit");
    submit.onclick=function(){
        var name=document.getElementById("fname").value;
        var comment=document.getElementById("comment").value;
        var tr=document.getElementById("tr");
        tr.innerHTML+="<div class=\"col\">" +
            "<div class=\"card text-dark bg-light mb-3\" style=\"max-width: 18rem;\">" +
            "<div class=\"card-header\">"+
            "<img src='../feedback/guest.jpg' style=\"height:30px;\" class=\"rounded me-2\" alt=\"...\">"+name+
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

        var form=document.getElementById("form");
        form.reset();
        window.location.href="feedback.html#";
        alert("Your submission is successful!Thank you :>");
        toastElement2.show();
        return false;






    }




}