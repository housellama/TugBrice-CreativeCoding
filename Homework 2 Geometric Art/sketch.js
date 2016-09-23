function setup() {
createCanvas (windowWidth,windowHeight);
background (0);

fill(255);
triangle (windowWidth/10,windowHeight/10,(windowWidth/10)*9,windowHeight/10,(windowWidth/10)*9,(windowHeight/10)*11);

noStroke();
fill(204, 102, 255);
triangle((windowWidth/20)*3,(windowHeight/20)*3,windowWidth-(windowWidth/20)*3,(windowHeight/20)*3,windowWidth-(windowWidth/20)*3,(windowHeight/30)*5);

noStroke();
fill(179, 71, 0);
triangle((windowWidth/10)*2,windowHeight/10,(windowWidth/20)*5,(windowHeight/20)*3,(windowWidth/10)*3,windowHeight/10);
triangle((windowWidth/45)*6,(windowHeight/20)*3,windowWidth/5,(windowHeight/30)*7,(windowWidth/20)*5,(windowHeight/20)*3);
triangle((windowWidth-(windowWidth/20)*3),windowHeight-(windowHeight/10),(windowWidth/10)*9,windowHeight-(windowHeight/10),(windowWidth/10)*9,windowHeight);
triangle((windowWidth/20)*15,windowHeight-(windowHeight/10),(windowWidth-(windowWidth/20)*3),windowHeight-(windowHeight/10),(windowWidth-(windowWidth/30)*5),windowHeight);
triangle((windowWidth/10)*9,windowHeight/10,windowWidth-(windowWidth/10),(windowHeight/20)*3,windowWidth,(windowHeight/20)*3);
triangle(windowWidth-(windowWidth/20)*3,windowHeight/10,windowWidth-(windowWidth/20)*3,(windowHeight/20)*3,windowWidth-(windowWidth/10),(windowHeight/20)*3);

noStroke();
fill(0,0,255);
triangle((windowWidth/20)*5,(windowHeight/20)*3,((windowWidth/90)*23),(windowHeight/20)*3,(windowWidth-(windowWidth/20)*3),windowHeight-(windowHeight/10));
triangle(windowWidth-(windowWidth/20)*3,((windowHeight/30)*5),(windowWidth-(windowWidth/20)*3),windowHeight-(windowHeight/10), (windowWidth-(windowWidth/100)*16),windowHeight-(windowHeight/100)*11);

stroke(0);
strokeWeight(1);
line((windowWidth/20)*5,(windowHeight/20)*3,(windowWidth-(windowWidth/20)*3),windowHeight-(windowHeight/10));
line(windowWidth-(windowWidth/20)*3,(windowHeight/20)*3, (windowWidth-(windowWidth/20)*3),windowHeight-(windowHeight/10));

noStroke();
fill(0,179,107);
//alpha(50);
var height = 3;
for (i=0; i < 3; i++)
{
  triangle((windowWidth/10)*9,((windowHeight/20)*height),windowWidth-(windowWidth/10),((windowHeight/20)*(height+1)),windowWidth,(windowHeight/20)*(height+1));
  height++;
}
fill(204,204,0);
for (i=0; i < 3; i++)
{
  triangle((windowWidth/10)*9,((windowHeight/20)*height),windowWidth-(windowWidth/10),((windowHeight/20)*(height+1)),windowWidth,(windowHeight/20)*(height+1));
  height++;
}
fill(204, 102, 255);
for (i=0; i < 3; i++)
{
  triangle((windowWidth/10)*9,((windowHeight/20)*height),windowWidth-(windowWidth/10),((windowHeight/20)*(height+1)),windowWidth,(windowHeight/20)*(height+1));
  height++;
}

}

function draw() {


  
}