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

    var cloud=document.getElementById("cloud");
    document.addEventListener('scroll',function(e){
        var top1=window.pageYOffset+window.innerHeight;
        isVisible=top1> document.querySelector("#jobsection>div").offsetTop;
        if (isVisible){
            cloud.classList.add('greyscale');
        }else{
            cloud.classList.remove('greyscale');
            cloud.style.filter="grayscale(100%);";
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
    var txt = "Applied AI and Analytics";
    var speed = 300;

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
        if (window.pageYOffset+window.innerHeight >document.querySelector("#daaareflection>div").offsetTop){

            typeWriter();
        }
        else{
            removetype();
        }


    })

    function rand(m,n){
        return Math.ceil(Math.random()*(n-m+1))+m-1;
    }
    var num=40;
    for (var u=0;u<num;u++){
        var j =document.createElement("j");
        j.style.height=rand(30,100)+'px';
        j.style.top=-250+'px';
        j.style.left=rand(-250,250)+"px";
        j.style.animationDuration=rand(5,30)/10 +'s';
        document.querySelector('.rocket').appendChild(j);
    }
}
