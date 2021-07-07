var r = 0;
var txt = "About Me";

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
    if (window.pageYOffset+window.innerHeight >document.querySelector("#aboutmeover>div").offsetTop){

        typeWriter();
    }
    else{
        removetype();
    }


})