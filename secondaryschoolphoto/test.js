window.onload=function(){
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
};