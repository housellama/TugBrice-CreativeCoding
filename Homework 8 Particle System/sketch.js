function particle(posX,posY,speedX,speedY) {
  this.speedX	= speedX;
  this.speedY	= speedY;
  this.name		= "";
  this.color	= color(0,0,255);
  this.posX		= posX;
  this.posY		= posY;
  this.ls		= 255;
}

particle.prototype = {
 constructor: particle,
  bounce: function(){
    if(this.posX < ((width/2)*-1) || this.posX > (width/2)){
      this.speedX *= -1;
    }
    this.posX += this.speedX;
    if(this.posY < ((height/2)*-1) || this.posY > (height/2)){
      this.speedY *= -1;
    }
  	this.posY += this.speedY;
    this.ls--;
  }
}

var particleCollector = [];
var randomSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textAlign(CENTER);
  randomSpeed = random(-10,10);

} 

function draw() {
  background(255);
  translate(width/2,height/2);
    for(var i=0; i<particleCollector.length; i++){
    if(particleCollector[i].ls <=0){
     particleCollector.splice(i,1)
    }
    else{
      var randomSize = random(5,20);
      fill(red(particleCollector[i].color),green(particleCollector[i].color),blue(particleCollector[i].color),particleCollector[i].ls);
      ellipse(particleCollector[i].posX,particleCollector[i].posY,10,10);
  	  particleCollector[i].bounce();
    
    }
  }
}

function mousePressed(){
 for(var i=0; i<=10; i++){
   particleCollector.push(new particle(0,0,random(-10,10),random(-10,10)));
 }
}
