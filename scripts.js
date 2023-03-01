let color = 'purple';
let number = 10;
let word = "cool";
if (color==="purple"){
    $(box1).css("background", "purple");
}
if(number > 100){
$(box2).text("whoah, that's a big number");
$(box2).css("font-size", "28px");
}
else{
    $(box2).text("just a regular number, please.");
    $(box2).css("font-size", "28px");
}
if(word==="cool"){
    $(box3).text("Power of DOM");
}
else{
    $(box4).text("Power of DOM");
}