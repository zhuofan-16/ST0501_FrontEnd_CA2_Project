/*
MODULE NAME : ST0501 : FRONT-END WEB DEVELOPMENT
MODULE LECTURER: MR LIM CHIN MIN
MODULE ASSIGNMENT: CA2 WEBSITE ASSIGNMENT (WITH BOOTSTRAP AND JS)
Student Name: CHEN ZHUOFAN
Student No. : P2100746
Student Class: DAAA/FT/1A/04
Page:About Me(2) (CSS)
Github Commit :https://github.com/zhuofan-16/ST0501_FrontEnd_CA2_Project
*/
/* **Note:This JS is seperated from Page:About Me (JS) Because of the need to have 2 animation to run at the same time*/
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