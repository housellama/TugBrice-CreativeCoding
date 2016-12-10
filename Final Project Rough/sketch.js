function particle(posX,posY,speedX,speedY) {
  this.speedX	= speedX;
  this.speedY	= speedY;
  this.htext		= "";
  this.posX		= posX;
  this.posY		= posY;
  this.ls		= 600;
}

var lexicon = new RiLexicon();
var htext;
var nums = [1,2,3,4,5];

particle.prototype = {
 constructor: particle,
  bounce: function(){
    if(this.posX < ((width/2-100)*-1) || this.posX > (width/2-100)){
      this.speedX *= -1;
    }
    this.posX += this.speedX;
    if((this.posY > height -150) || (this.posY < 0)) {
      this.speedY *= -1;
    }
  	this.posY += this.speedY;
    this.ls--;
  },
  assignHaiku: function(){
    var haikuNum = random(nums);
      if(haikuNum == 1){
        this.htext = ""+lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("jj",1) +" "+ lexicon.randomWord("jj",2) +" "+ lexicon.randomWord("nn",1) + "\n" +
        lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",1) +" "+ lexicon.randomWord("vbz",2) +" "+ lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",1) + ".\n" +
        lexicon.randomWord("nn",1) + "! " + lexicon.randomWord("nnp",2) +" "+ lexicon.randomWord("rb",3) + ".\n";
      } else 
      if (haikuNum == 2){
        this.htext =  ""+lexicon.randomWord("nn",1) +" "+ lexicon.randomWord("in",1) +" "+ lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",1) + "\n" + 
        lexicon.randomWord("wbz",1) +" "+ lexicon.randomWord("nn",1) + ", " + lexicon.randomWord("nns",2) +" "+ lexicon.randomWord("nns",2) + "\n" + 
        lexicon.randomWord("vb",2) +" "+ lexicon.randomWord("rb",3) + ".\n";
      } else 
      if (haikuNum == 3){
        this.htext = ""+lexicon.randomWord("nn",3) +" "+  lexicon.randomWord("prp",1) +" "+ lexicon.randomWord("nn",1) + "\n" +
        lexicon.randomWord("in",1) +" "+ lexicon.randomWord("nn",3) + ", " + lexicon.randomWord("uh",2) +" "+ lexicon.randomWord("wp",1) + ",\n" + 
        lexicon.randomWord("nns",1) +" "+ lexicon.randomWord("in",1) +" "+ lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",1) + ".\n"; 
      } else 
      if (haikuNum == 4){
        this.htext = ""+lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",1) +" "+ lexicon.randomWord("vbz",1) +" "+ lexicon.randomWord("wbn",1) +""+ lexicon.randomWord("rb",1) + ":\n" +
        lexicon.randomWord("vbg",2) +" "+ lexicon.randomWord("in",1) +" "+ lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("vbg",3) +" "+ lexicon.randomWord("nn",1) + ",\n" + 
        lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nns",2) +" "+ lexicon.randomWord("nn",1) + ".\n";
      } else 
      if (haikuNum == 5){
        this.htext = ""+lexicon.randomWord("nns",2) +" "+ lexicon.randomWord("in",1) +" "+ lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",1) + ":\n" + 
        lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",2) +" "+ lexicon.randomWord("nn",2) +" "+ lexicon.randomWord("vbg",2) + "\n" + 
        lexicon.randomWord("in",1) +" "+ lexicon.randomWord("dt",1) +" "+ lexicon.randomWord("nn",2) +" "+ lexicon.randomWord("nn",1) + ".\n";
      }
  } 
}

var particleCollector = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textAlign(CENTER,CENTER);
  textSize(15);
  frameRate(60);
  
} 

function draw() {
  background(255);
  translate(width/2,75);
  text(frameCount,((width/2)*(-1)+15),-35);
  timer();
    for(var i=0; i<particleCollector.length; i++){
    if(particleCollector[i].ls <=0){
     particleCollector.splice(i,1)
    }
    else{
      xcolor = map(particleCollector[i].posX,((width/2)*-1),(width/2),0,255);
      ycolor = map(particleCollector[i].posY,((height/2)*-1),(height/2),0,255);
      sincolor = map(sin(radians(frameCount)),0,1,0,255);
      background(xcolor,ycolor,sincolor);
      fill(255,255,255);
      ellipse(particleCollector[i].posX,particleCollector[i].posY,(textWidth(particleCollector[i].htext)-180),150);
  	  particleCollector[i].bounce();
  	  fill(0,0,0);
  	  text(particleCollector[i].htext,particleCollector[i].posX,(particleCollector[i].posY)+5);
    
    }
  }
}

function timer(){
  if(frameCount==1){
    particleCollector.push(new particle(0,0,random(-3,3),random(0,3)));
    particleCollector[particleCollector.length-1].assignHaiku();
  } 
  if (frameCount % 600 === 0) {
    particleCollector.push(new particle(0,0,random(-3,3),random(0,3)));
    particleCollector[particleCollector.length-1].assignHaiku();
  }
}
