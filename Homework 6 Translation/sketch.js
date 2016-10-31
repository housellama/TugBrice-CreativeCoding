function setup() {
 createCanvas(windowWidth,windowHeight) ;
 angleMode(DEGREES);
}

function draw() {
 //from and to are not yet defined.  Make sure you declare and define these variables before using them
 //try attaching the lerp amount parameter (0.25) to a changing variable.
 lerpColor(from,to,.25);
  fill(from);
  translate(width/2+(frameCount*.01),height/2+(frameCount*.01));
  rotate(frameCount);
  background(255);
 //instead of just lerping from pure red to pure green, try a color palette inspired by the color lecture.
  from = ('red');
  to = ('green');
  rect(-150,-150,20,20);
  
}
