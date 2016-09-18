function setup() {
  background(255);
  createCanvas(501,501);
  stroke(0);
  strokeWeight(1);
  for(var i=0;i<501;) {
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