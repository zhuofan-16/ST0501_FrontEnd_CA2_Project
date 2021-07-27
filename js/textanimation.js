/*
MODULE NAME : ST0501 : FRONT-END WEB DEVELOPMENT
MODULE LECTURER: MR LIM CHIN MIN
MODULE ASSIGNMENT: CA2 WEBSITE ASSIGNMENT (WITH BOOTSTRAP AND JS)
Student Name: CHEN ZHUOFAN
Student No. : P2100746
Student Class: DAAA/FT/1A/04
Page:About Me(2) (JS)
Github Commit :https://github.com/zhuofan-16/ST0501_FrontEnd_CA2_Project
*/
/* **Note:This JS is seperated from Page:About Me (JS) Because of the need to have 2 animation to run at the same time*/
var r = 0;
//Define text to be printed with typing effect
var txt = "About Me";

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
    //Clear eventually
    clearTimeout(endtype);
}
//Only execute upon scrolling to that section.This is implemented by using a listener and offsets
document.addEventListener('scroll',function(e){
    if (window.pageYOffset+window.innerHeight >document.querySelector("#aboutmeover>div").offsetTop){

        typeWriter();
    }


})