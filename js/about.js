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
    var currenttime=new Date();
    var currenthour=currenttime.getHours();
    var day=document.getElementById("photocontainer");
    if (currenthour>=18){
        document.getElementById("photo").style.backgroundColor="#fff7f4";
        day.style.transform="rotate(0deg)";
        console.log(day.style.transform);
        day.style.animation="spinnight 4s ,3s alternate";
        console.log(day.style.animation);
        day.style.webkitAnimationFillMode="forwards";
    }
    var timegreet=document.getElementById("timegreeting");
    if (currenthour<12){
        timegreet.innerHTML+="Good Morning!"
    }
    if (currenthour>=12&&currenthour<18){
        timegreet.innerHTML+="Good Afternoon!"
    }
    if (currenthour>=18&&currenthour<=19){
        timegreet.innerHTML+="Good Evening!"
    }
    if (currenthour>19){
        timegreet.innerHTML+="Good Night!"
    }

}