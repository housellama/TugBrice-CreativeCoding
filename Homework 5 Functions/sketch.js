//Kevin's comments:
//you've got some good stuff in here.  I'd like to see you go further!  What if you added a mousePressed() function
//to handle when a user presses the mouse, which changes the arm (left -> right, vice versa) waving.
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
//consider a more descriptive parameter name than x.  A reader of this code should be able to know what this function
//does by looking at the function head alone.  Also, consider adding parameters for stick figure scale or color
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
