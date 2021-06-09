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
}