var waveLengthOne = 180.0;
var waveLengthTwo = 144.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;
var colorFrom;
var colorTo;
var colorChange;
var interpColor;

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,360,100,100);
  //colorFrom = color(cos(frameCount),20,100);
  //colorTo = color(sin(frameCount),80,50);
  frameRate(10);
}
function draw(){

  if(pointCount > 720){
      
      pointCount = 0;
    }
  background(0,0,100);
  stroke(.5);
    translate(width/2, height/2);
      for(var i=0; i < pointCount; i++){
        angle = i/waveLengthOne * TWO_PI;
        var x = sin(angle) * amplitude;
        angle = i/waveLengthTwo * TWO_PI;
        var y = sin(angle) * amplitude;
        
        //colorChange = (abs(frameCount%y/frameCount%x)*amplitude);
        //interpColor = lerpColor(colorFrom,colorTo,colorChange);
        //fill(interpColor);
        fill(sin(frameCount)*45,cos(frameCount)*45,50);
        ellipse(x,y,cos(frameCount)*20);
    }
  pointCount++;
}