function particle(posX,posY,speedX,speedY,psize,life) {
  this.speedX	= speedX;					// Particle speed in X
  this.speedY	= speedY;					// Particle speed in Y
  this.red		= 0;						// Particle red channel
  this.blue		= 255;						// Particle blue channel
  this.green	= 0							// Particle green channel
  this.posX		= posX;						// Particle position in X
  this.posY		= posY;						// Particle position in Y
  this.ls	  	= life;						// Particle lifecycle
  this.psize	= psize						// Particle size
}

particle.prototype = {
 constructor: particle,
  bounce: function(){							// Method to bounce particles off walls
    if(this.posX < 0 || this.posX > (width)){  	// Check to see if a wall has been hit in X
      this.speedX *= -1;						// Reverse speed and direction
    }
    this.posX += this.speedX;					// Move the particle in the X direction
    if(this.posY < 0 || this.posY > (height)){	// Check to see if a wall has been hit in Y
      this.speedY *= -1;						// Reverse speed and direction
    }
  	this.posY += this.speedY;					// Move the particle in the X direction
    this.ls--;									// Reduce particle lifespan.
  }
}

var particleCollector = [];						// Array to manage particles

var redSlider;
var blueSlider;
var greenSlider;
var lsSlider;
var sizeSlider;

function setup() {
 var headerDiv = createDiv("<h3>Welcome to my interactive sketch</h3>");
 var disclaimerDiv = createDiv("<p>For best results, maximize the window.</p>");
 var subHeaderDiv = createDiv("<p>This is the user interface</p>");
 var basicDesc = createDiv("<p>This drawing creates an explosion of particles at the click of the mouse.</p>");
 var basicInst = createDiv("<p>The controls below allow you to control the size, color, and lifespan of those particles</p>");
 
 var colorDivInst = createDiv("<p>These three sliders control the color of the particles. Red, Blue, and Green are controlled separately.</p>");
 var redDiv = createDiv("<p>Red:</p>");
 var blueDiv = createDiv("<p>Blue:</p>");
 var greenDiv = createDiv("<p>Green:</p>");
 redSlider = createSlider(0,255,0);
 blueSlider = createSlider(0,255,255);
 greenSlider = createSlider(0,255,0);
 
 var lsDivInst = createDiv("<p>This slider controls how long the particles last:</p>");
 lsSlider = createSlider(10,500,255);
 
 var sizeDivInst = createDiv("<p>This slider controls the size of the particles:</p>");
 sizeSlider = createSlider(2,50,10);
 
 headerDiv.position((windowWidth/2)-75,10);
 disclaimerDiv.position((windowWidth/2)-70,35);
 subHeaderDiv.position((windowWidth/2)-25,55);
 basicDesc.position(25,85);
 basicInst.position(25,105);
 colorDivInst.position(25,130);
 redDiv.position(25, 150);
 redSlider.position(60,165);
 blueDiv.position(245,150);
 blueSlider.position(280,165);
 greenDiv.position(455,150);
 greenSlider.position(500,165);
 lsDivInst.position(25,180);
 lsSlider.position(325,195);
 sizeDivInst.position(25,205);
 sizeSlider.position(305,220);
 
}

function draw() {
  var redVal = redSlider.value();
  var blueVal = blueSlider.value();
  var greenVal = greenSlider.value();
  var lsVal = lsSlider.value();
  var sizeVal = sizeSlider.value();
  
 createCanvas(windowWidth,windowHeight);
 colorMode(RGB);
 background(255);
    for(var i=0; i<particleCollector.length; i++){	// Loop to deal with particles.
    if(particleCollector[i].ls <=0){				// Check for particle lifecycle
     particleCollector.splice(i,1)					// If particle lifecycle is 0, remove it from collector
    }
    else{
      if(particleCollector[i].ls>255){
      noStroke();
      fill(redVal,greenVal,blueVal,255);
      		// Fill the particles, and use lifespan as alpha to fade them away.
      ellipse(particleCollector[i].posX,particleCollector[i].posY,particleCollector[i].psize,particleCollector[i].psize);
      		//Draw particles
  	  particleCollector[i].bounce();				// Bounse drawn particles
      }
    else{
      noStroke();
      fill(redVal,greenVal,blueVal,particleCollector[i].ls);
      		// Fill the particles, and use lifespan as alpha to fade them away.
      ellipse(particleCollector[i].posX,particleCollector[i].posY,particleCollector[i].psize,particleCollector[i].psize);
      		//Draw particles
  	  particleCollector[i].bounce();				// Bounse drawn particles
    }
    }
  }
}
  
  function mousePressed(){
    

  var sizeVal = sizeSlider.value();
  var lsVal = lsSlider.value();
 for(var i=0; i<=10; i++){							// 10 particles per click
   particleCollector.push(new particle(mouseX,mouseY,random(-10,10),random(-10,10),sizeVal,lsVal));
   		// Particles will be of random sizes and move in random directions, and appear where the mouse is.
 }
}