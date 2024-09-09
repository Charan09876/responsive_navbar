var cursor = document.querySelector("#cursor");

var main = document.querySelector("html");

main.addEventListener("mousemove", function(val){
    cursor.style.left = val.x +"px"
    cursor.style.top = val.y+"px"
});


var menubtn = document.getElementById("menubtn");

var mobilemenu = document.getElementById("mobilemenu");

mobilemenu.style.display = "none";

menubtn.addEventListener("click", function(){
    if(mobilemenu.style.display == "none"){
        mobilemenu.style.display = "block";
    }
    else{
        mobilemenu.style.display = "none";
    }
})