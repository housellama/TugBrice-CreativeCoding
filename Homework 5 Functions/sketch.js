function setup() {
  createCanvas(windowWidth,windowHeight);
  stickFigure(6);
}

function draw() {
  background (255);
  frameRate(2);
  wave();
  stickFigure(x);
}
var x = 2;
function stickFigure(x){
  stroke('black');
  strokeWeight(2);
  ellipseMode(CENTER);//head
  ellipse(width/2,((height/2)-50),50);//head
  line(width/2,((height/2)-25),width/2,((height/2)+50));//body
  line(width/2,((height/2)+50), ((width/2)-35),((height/2)+85));//leg
  line(width/2,((height/2)+50), ((width/2)+35),((height/2)+85));//leg
  line(width/2,((height/2)+25), ((width/2)-5 * x),height/2);//arm
  line(width/2,((height/2)+25), ((width/2)+35),height/2);//arm
}

function wave() {
  if (frameCount % 2 == 0 ){
    x = 6;
  }
  else {
    x=4;
  }
}