//starts Here
x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

function setup() {
    canvas = createCanvas(900, 600);
}
var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition;

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as-" + content;
    if(content=="circle"){
x=Math.floor(Math.random()*850);
y=Math.floor(Math.random()*550);
document.getElementById("status").innerHTML="Started Drawing Circle";
draw_circle="set";
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*850);
        y=Math.floor(Math.random()*550);
        document.getElementById("status").innerHTML="Started Drawing Rectangle";
        draw_rect="set";
            }
}
function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="The circle is drawn";
        draw_circle="";
    }
    if(draw_rect=="set"){
        rect(x,y,70,40);
        document.getElementById("status").innerHTML="The Rectangle is drawn";
        draw_rect="";
    
}
}