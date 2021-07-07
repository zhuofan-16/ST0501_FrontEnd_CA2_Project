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
    searchkey.onclick = function (){
        counter = counter + 1;
        if (counter % 2 > 0) {
            searchbar.style.visibility = "visible";
        } else {
            searchbar.style.visibility = "hidden";
        }
    };

    searchkey.addEventListener("click", function(e) {
        e.preventDefault;
        searchbar.classList.remove("searchbaranimation");
        void searchbar.offsetWidth;
        searchbar.classList.add("searchbaranimation");
    });


    var photo1 = document.getElementById("slide1");
    var photo2 = document.getElementById("slide2")
    var photo3 = document.getElementById("slide3")
    var i = 0;
    var timeron = 1;
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


    var control1 = document.getElementById("s1")
    var control2 = document.getElementById("s2")
    var control3 = document.getElementById("s3")
    var check;
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

    var spphoto=document.getElementById("singaporepoly");
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight;
            isVisible=top1> document.querySelector("#spsection>div").offsetTop;
        if (isVisible){
           spphoto.classList.add('new');
        }else{
           spphoto.classList.remove('new')
        }


    })



    var r = 0;
    var txt = "About Me";
    /*  Logic: Create a function that launches a timer that print letter by letter every 300ms .
    Then create a monitor ,when user scroll to a section section,the function will be called
     */
    function typeWriter() {
        var endtype= setInterval(function(){

            if (r < txt.length) {
                document.getElementById("type").innerHTML += txt.charAt(r);
                r++;
            }
        },300);
        endtype();
        clearTimeout(endtype);
    }

    document.addEventListener('scroll',function(e){
        if (window.pageYOffset+window.innerHeight >document.querySelector("#aboutmesum>div").offsetTop){

            typeWriter();
        }
        else{
            removetype();
        }


    })
}
