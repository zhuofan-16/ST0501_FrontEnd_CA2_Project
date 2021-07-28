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

//Define new variable to get date and current hour
var currenttime=new Date();
var currenthour=currenttime.getHours();
var day=document.getElementById("photocontainer");
//Change style to rotate in different angle depend on the hour of that day
if (currenthour>=18){
    document.getElementById("photo").style.backgroundColor="#fff7f4";
    day.style.transform="rotate(0deg)";
    console.log(day.style.transform);//For debugging
    day.style.animation="spinnight 4s ,3s alternate";
    console.log(day.style.animation);//For debugging
    day.style.webkitAnimationFillMode="forwards";
}
/*Insert title greeting text dependence on hour that day*/
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
