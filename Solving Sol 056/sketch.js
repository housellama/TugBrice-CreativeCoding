function setup() {
  background(255);
  createCanvas(501,501);
  stroke(0);
  strokeWeight(1);
  //technically this will work in javascript, 
  //but I'd recommend writing your for loops with the iterator as the last 
  //portion of your loop header
  // for example: for(var i=0; i < 501; i+=10)
  for(var i=0;i<501;) {
	  //remember to always declare variables with the var keyword before variable name:
	  // for example: var j= i + 250
	  j=i+250;
	  k=i+500;
	  l=i-250;
	  m=i-500;
	  
	  
	  line(0,i, 500,i);
	  line(j,0, j,500);
	  line(i,250,0,j);
	  line(250,j,500,k);
	  i=i+10;
  }
}
function draw() {
  
}
