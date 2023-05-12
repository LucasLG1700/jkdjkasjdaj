canvas = document.getElementById("MC");
CTX = canvas.getContext("2d");
color = "red";
CTX.beginPath();
CTX.strokeStyle = "color";
CTX.lineWidth = 2;
CTX.arc(200,200,40,0, 2* Math.PI);
CTX.stroke();
canvas.addEventListener("mousedown", MD);
function MD(e)
{
    color = document.getElementById("color").ariaValueMax;
    console.log(color);
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("X = " + mouseX + " ,Y = " + mouseY);
    circle(mouseX , mouseY);
}
function circle(mouseX , mouseY){
CTX.beginPath();
CTX.strokeStyle = color;
CTX.lineWidth = 2;
CTX.arc(mouseX, mouseY, 40, 0, 2* Math.PI);
CTX.stroke();
}
function clean(){
    CTX.clearRect( 0, 0, canvas.width, canvas.height)
}