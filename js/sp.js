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
/*Adding a event listener ,once your scroll offset =to the offset of the section ,then add and start animation else remove and image remain grey*/
    var study=document.getElementById("study");
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight;
        isVisible=top1> document.querySelector("#studysection>div").offsetTop;/*Current scroll height*/
        if (isVisible){
            study.classList.add('greyscale');/*Add class to element*/

        }
        else{
            study.classList.remove('greyscale');/*Remove class*/
            study.style.filter="grayscale(100%);";/*style filter =greyscale 100%*/
        }

})
    /*Adding a event listener ,once your scroll offset =to the offset of the section ,then add and start animation else remove and image remain grey*/
    var food=document.getElementById("food");
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight;/*Current scroll height*/
        isVisible=top1> document.querySelector("#foodsection>div").offsetTop;
        if (isVisible){
            food.classList.add('greyscale');/*Add class to element*/

        }
        else{
            food.classList.remove('greyscale');/*Remove class*/
            food.style.filter="grayscale(100%);";/*style filter =greyscale 100%*/
        }

    })
/*Toast message*/
    var option =
        {
            animation: true,
            delay: 2000
        };

    {
        /*get toast element by id*/
        var toastHTMLElement = document.getElementById('welcome');
        var toastElement = new bootstrap.Toast(toastHTMLElement, option);
        /*Launch toast*/
        toastElement.show();
    }

/*Text Typing effect*/
    var r = 0;
    var txt = "Impression";/*Text*/

    function typeWriter() {
        //evaluates an expression every 0.3s intervals
        var endtype= setInterval(function(){

            if (r < txt.length) {
                //Get element by ID and add letter by letter using charAt
                document.getElementById("type").innerHTML += txt.charAt(r);
                r++;
            }
        },300);
        endtype();
        clearTimeout(endtype);

    }
/*Only launch the typing effect after you reach that section*/
    document.addEventListener('scroll',function(e){
        if (window.pageYOffset+window.innerHeight >document.querySelector("#spsection>div").offsetTop){

            typeWriter();
        }


    })
}