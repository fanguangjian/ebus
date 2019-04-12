 
var mouseX, mouseY;  
var objX, objY;  
var isDowm = false; 
var div = document.getElementById("box"); 
// var Div = $(".left-content") ;
var Div = document.getElementsByClassName("left-content"); 
// var div = document.getElementById('divx');  
var width = div.style.width || div.clientWidth || div.offsetWidth || div.scrollWidth;  
// var widthDiv = Div.style.width || Div.clientWidth || Div.offsetWidth || Div.scrollWidth;  
console.log(width);
// console.log(widthDiv,"width");
// 

function mouseDown(obj, e) {  
    obj.style.cursor = "move";  
	objX = div.offsetLeft;
	objY = div.offsetTop;
    mouseX = e.clientX;  
    mouseY = e.clientY;  
    isDowm = true;  
}  
function mouseMove(e) {       
    var x = e.clientX;  
    var y = e.clientY;  
    if (isDowm) {  
        div.style.left = parseInt(objX) + parseInt(x) - parseInt(mouseX) + "px";  
        div.style.top = parseInt(objY) + parseInt(y) - parseInt(mouseY) + "px";  
    }  
}  
function mouseUp(e) {  
    if (isDowm) {  
        var x = e.clientX;  
        var y = e.clientY;           
        div.style.left = parseInt(objX) + parseInt(x) - parseInt(mouseX) + "px";  
        div.style.top = parseInt(objY) + parseInt(y) - parseInt(mouseY) + "px";  
        div.style.cursor = "default";  
        isDowm = false;  
    }  
}  
    
