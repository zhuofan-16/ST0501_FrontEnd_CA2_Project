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



    var submit= document.getElementById("submit");
    submit.onclick=function(){
        var name=document.getElementById("fname").value;
        var comment=document.getElementById("comment").value;
        var tr=document.getElementById("tr");
        tr.innerHTML+="<div class=\"col\">" +
            "<div class=\"card text-dark bg-light mb-3\" style=\"max-width: 18rem;\">" +
            "<div class=\"card-header\">"+
            "<img src='../feedback/android-contacts-icon-png-20.jpg' style=\"height:30px;\" class=\"rounded me-2\" alt=\"...\">"+name+
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