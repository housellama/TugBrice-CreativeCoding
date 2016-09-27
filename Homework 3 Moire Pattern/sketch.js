  var theta = 0.0;
  var widthMultiplier = 0.0;
  var heightMultiplier = 0.0;
  var rotationSpeed = 0.01;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);

}

function draw() {

  rotate(theta);
  for (i=0;i<200;i+=10){
    noFill();
  strokeWeight(1);
  stroke(255);
  beginShape();
    vertex((width/2),((height/6)*5)-i);
    vertex((width/6)+(i*2),((height/6))+(i));
    vertex(((width/6)*5-(i*2)),((height/6))+(i));
  endShape(CLOSE);
  }

  theta += rotationSpeed;
}