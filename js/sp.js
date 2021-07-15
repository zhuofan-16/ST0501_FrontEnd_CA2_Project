/*
MODULE NAME : ST0501 : FRONT-END WEB DEVELOPMENT
MODULE LECTURER: MR LIM CHIN MIN
MODULE ASSIGNMENT: CA2 WEBSITE ASSIGNMENT (WITH BOOTSTRAP AND JS)
Student Name: CHEN ZHUOFAN
Student No. : P2100746
Student Class: DAAA/FT/1A/04
Page:Singapore Polytechnic Page (JS)
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

    var study=document.getElementById("study");
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight;
        isVisible=top1> document.querySelector("#studysection>div").offsetTop;
        if (isVisible){
            study.classList.add('greyscale');

        }
        else{
            study.classList.remove('greyscale');
            study.style.filter="grayscale(100%);";
        }

})
    var food=document.getElementById("food");
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight;
        isVisible=top1> document.querySelector("#foodsection>div").offsetTop;
        if (isVisible){
            food.classList.add('greyscale');

        }
        else{
            food.classList.remove('greyscale');
            food.style.filter="grayscale(100%);";
        }

    })

    var option =
        {
            animation: true,
            delay: 2000
        };

    {
        var toastHTMLElement = document.getElementById('welcome');
        var toastElement = new bootstrap.Toast(toastHTMLElement, option);
        toastElement.show();
    }


    var r = 0;
    var txt = "Impression";

    function typeWriter() {
        var endtype= setInterval(function(){

            if (r < txt.length) {
                document.getElementById("type").innerHTML += txt.charAt(r);
                r++;
            }
        },300);

    }

    document.addEventListener('scroll',function(e){
        if (window.pageYOffset+window.innerHeight >document.querySelector("#spsection>div").offsetTop){

            typeWriter();
        }
        else{
            removetype();
        }


    })
}