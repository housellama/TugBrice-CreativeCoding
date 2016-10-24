//this is good but I know you can go deeper!  Think about introducing a 3rd color into this palette, and altering the
//relative saturation/brightness of one or more of the colors so that the palette appears to have fewer or more colors than it
//actually has.
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  colorMode(HSB, 360,100,100);
  
  background(45,mouseX,100);
  
  rectMode(CENTER);
  noStroke();
  fill(180,100,mouseY);
  rect(width/2,height/2,400,400);
}
