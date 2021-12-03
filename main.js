x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
speechrecognition = window.webkitSpeechRecognition;
recongnition = new speechrecognition();
function start(){
    document.getElementById("status").innerHTML = "Please speak some shape name";
    recongnition.start();
}
recongnition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById('status').innerHTML = "you said: " + content;
    if(content == "circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById('status').innerHTML = "Drawing circle......";
        draw_circle = "set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 500);
        document.getElementById('status').innerHTML = "Drawing rectangle......";
        draw_rect = "set";
    }
}
function setup(){
    canvas = createCanvas(900, 500);
    
}

function draw(){
  if(draw_circle == "set"){
      radius = Math.floor(Math.random() * 100);
      circle(x,y,radius);
      draw_circle= "";
  }
  
  if(draw_rect == "set"){
    rect(x,y, 75, 50);
    draw_rect= "";
}
}