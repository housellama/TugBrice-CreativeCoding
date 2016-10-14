function setup() {
 createCanvas(windowWidth,windowHeight) ;
 angleMode(DEGREES);
}

function draw() {
  lerpColor(from,to,.25);
  fill(from);
  translate(width/2+(frameCount*.01),height/2+(frameCount*.01));
  rotate(frameCount);
  background(255);
  from = ('red');
  to = ('green');
  rect(-150,-150,20,20);
  
}