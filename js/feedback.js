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
/*Functions to match search input with option table*/
function searchfeature(){
    /*Get table by ID*/
    var tables=document.getElementById("searchtable");
    /*Get input by ID and upcase it */
    var input=document.getElementById("sbar").value.toUpperCase();
    /*Get individual search option list*/
    var li=tables.getElementsByTagName("tr");
    for (var l=0;l<li.length;l++){
        /* if the input match by any search option records ,remove the "hidden" in style display to make that option appear*/
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

/*Only load after whole page is loaded*/
window.onload=function() {
    /*everytime,the search icon is clicked ,count++,when count is odd Make search overlay show else hide */
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
    /*Adding a event listener to remove and add animation everytime click so that animation will appear everytime it is clicked*/
    searchkey.addEventListener("click", function (e) {
        e.preventDefault;
        searchbar.classList.remove("searchbaranimation");
        void searchbar.offsetWidth;
        searchbar.classList.add("searchbaranimation");
    });
    /*Toast message*/
    var option =
        {
            animation: true,
            delay: 2000
        };
    /*get toast element by id*/
    var toastHTMLElement = document.getElementById('welcome');
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    var toastHTMLElement2 = document.getElementById('sucessfd');
    var toastElement2 = new bootstrap.Toast(toastHTMLElement2, option);
    /*Launch toast*/
    toastElement.show();


/*Guest icon used here is taken from https://icon-library.com/icon/android-contacts-icon-png-20.html*/
    /*Get submit button get ID*/
    var submit= document.getElementById("submit");
    //Upon clicking submit button
    submit.onclick=function(){
        /*Get value submitted in the first name field*/
        var name=document.getElementById("fname").value;
        //Get comments
        var comment=document.getElementById("comment").value;
        var tr=document.getElementById("tr");
      /*Add new comment in form of cards using innerhtml*/
        tr.innerHTML+="<div class=\"col-sm-12 col-md-6 col-lg-4\">" +
            "<div class=\"card text-dark bg-light mb-3\" style=\"max-width: 18rem;\">" +
            "<div class=\"card-header\">"+
            "<img src='../photo/feedback/guest.jpg' style=\"height:30px;\" class=\"rounded me-2\" alt=\"...\">"+name+
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
/*Reset form after comment is formed*/
        var form=document.getElementById("form");
        form.reset();
        //Fly back to the feedback wall
        window.location.href="feedback.html#";
        //Alert
        alert("Your submission is successful!Thank you :>");
        //Show submit successful toast;
        toastElement2.show();
        return false;






    }




}