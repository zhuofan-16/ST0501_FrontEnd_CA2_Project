/*
MODULE NAME : ST0501 : FRONT-END WEB DEVELOPMENT
MODULE LECTURER: MR LIM CHIN MIN
MODULE ASSIGNMENT: CA2 WEBSITE ASSIGNMENT (WITH BOOTSTRAP AND JS)
Student Name: CHEN ZHUOFAN
Student No. : P2100746
Student Class: DAAA/FT/1A/04
Page:Secondary School Experience (JS)
Github Commit :https://github.com/zhuofan-16/ST0501_FrontEnd_CA2_Project
*/


/*Logic:At default,the list is hidden .create a function that use indexOf to check for matching ,if matching it will be ===0,
options matching will be list out by enable the display:css style .Else if not match, display:css style will be changed to none(ie list will not be
shown).If the user did not input anything ,the whole table will be hidden.This function will key running upon detecting that there is a input(onkeyup).
 */
function searchfeature(){
    /*Get table by ID*/
    var tables=document.getElementById("searchtable")
    /*Get input by ID and upcase it */
    var input=document.getElementById("sbar").value.toUpperCase();
    /*Get individual search option list*/
    var li=tables.getElementsByTagName("tr");
    for (var l=0;l<li.length;l++){
        /* if the input match by any search option records ,remove the "hidden" in style display to make that option appear*/
        if (li[l].textContent.toUpperCase().indexOf(input)===0){/* Check for matching*/
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
/*3D Slideshow*/
    /*Get elements by ID*/
    var photo1 = document.getElementById("slide1");
    var photo2 = document.getElementById("slide2")
    var photo3 = document.getElementById("slide3")
    var i = 0;
    /*button for on and off of auto slideshow*/
    var timeron = 1;
    /*Slideshow interval 1.5s*/
    var start = setInterval(function () {
        if (timeron === 1) {
            if (i === 3) {
                i = 3;
            } else {
                i++;
            }
            if (i === 1) {
                photo2.style.transform = "translate3d(-30%,0,-100px)"
                photo3.style.transform = " translate3d(30%,0,-100px)"
                photo1.style.transform = "translate3d(0,0,0)"
            }
            if (i === 2) {
                photo2.style.transform = "translate3d(0,0,0)"
                photo3.style.transform = "translate3d(-30%,0,-100px)"
                photo1.style.transform = " translate3d(30%,0,-100px)"
            }
            if (i === 3) {
                photo3.style.transform = "translate3d(0,0,0)"
                photo1.style.transform = "translate3d(-30%,0,-100px)"
                photo2.style.transform = " translate3d(30%,0,-100px)"
                i = 0;
            }
        }
    }, 1500)
/*Get radios of photos by ID*/
    var control1 = document.getElementById("s1")
    var control2 = document.getElementById("s2")
    var control3 = document.getElementById("s3")
    var check;
    /*If first photo is clicked ,transform to there and wait for another 1.5s before starting*/
    control1.addEventListener("click", function (e) {
        check = 0;
        timeron = 0;
        photo2.style.transform = "translate3d(-30%,0,-100px)"
        photo3.style.transform = " translate3d(30%,0,-100px)"
        photo1.style.transform = "translate3d(0,0,0)"
        i = 1;
        var restart = setInterval(function () {
            if (check === 0) {
                check++;
            } else {
                timeron = 1;
            }
            if (timeron === 1) {
                clearTimeout(restart)
            }
        }, 1500)
    })
    /*If second photo is clicked ,transform to there and wait for another 1.5s before starting*/
    control2.addEventListener("click", function (e) {
        check = 0;
        timeron = 0;
        photo2.style.transform = "translate3d(0,0,0)"
        photo3.style.transform = "translate3d(-30%,0,-100px)"
        photo1.style.transform = " translate3d(30%,0,-100px)"
        i = 2;
        var restart = setInterval(function () {
            if (check === 0) {
                check++;
            } else {
                timeron = 1;
            }
            if (timeron === 1) {
                clearTimeout(restart)
            }
        }, 1500)
    })
    /*If third photo is clicked ,transform to there and wait for another 1.5s before starting*/
    control3.addEventListener("click", function (e) {
        check = 0;
        timeron = 0;
        photo3.style.transform = "translate3d(0,0,0)"
        photo1.style.transform = "translate3d(-30%,0,-100px)"
        photo2.style.transform = " translate3d(30%,0,-100px)"
        i = 3;
        var restart = setInterval(function () {
            if (check === 0) {
                check++;
            } else {
                timeron = 1;
            }
            if (timeron === 1) {
                clearTimeout(restart)
            }
        }, 1500)
    })
    /*Toast message*/
    var option =
        {
            animation: true,
            delay: 2000
        };

    {
        /*get toast element by id*/
        var toastHTMLElement = document.getElementById('secwelcome');
        var toastElement = new bootstrap.Toast(toastHTMLElement, option);
        /*Launch toast*/
        toastElement.show();
    }
    // Script for typing effect for subtitles in First section

    var r = 0;
    var txt = "Graduation";
    /*  Logic: Create a function that launches a timer that print letter by letter every 300ms .
    Then create a monitor ,when user scroll to a section section,the function will be called
     */
    function typeWriter() {
        //evaluates an expression every 0.3s intervals
        var endtype= setInterval(function(){

            if (r < txt.length) {
                //Get element by ID and add letter by letter using charAt
                document.getElementById("type").innerHTML += txt.charAt(r);
                r++;
            }
        },300);

    }
    /*Only launch the typing effect after you reach that section*/
    document.addEventListener('scroll',function(e){
        if (window.pageYOffset+window.innerHeight >document.querySelector("#secreflection>div").offsetTop){

            typeWriter();
        }


    })
}