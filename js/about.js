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

    var toastHTMLElement = document.getElementById('welcome');
    var toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();


    var fly=document.getElementById("photofly");
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight;
        isVisible=top1> document.querySelector("#quotesection>div").offsetTop;
        if (isVisible){
            fly.classList.add("textfly");
        }else{
            fly.classList.remove('textfly');
        }


    })
}