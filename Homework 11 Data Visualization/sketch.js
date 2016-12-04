var sleepwake;
var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var row5 = [];
var day1 = [];
var day2 = [];
var day3 = [];
var day4 = [];
var day5 = [];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  sleepwake = loadTable("SleepWake.csv", "csv");
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(10);
   for(var c=0;c<sleepwake.getColumnCount();c++){
    for(var r=0;r<sleepwake.getRowCount();r++){
      var data = sleepwake.getString(r,c);
      if(r===0){
        row1[c] = data;
      }
      if(r===1){
        row2[c]= data;
      }
      if(r===2){
        row3[c]= data;
      }
      if(r===3){
        row4[c]= data;
      }
      if(r===4){
        row5[c]= data;
      }
    }
  }
  for(var sc=1;sc<4;sc=sc+2){
    for(var p=0;p<5;p++){
      if(p===0){
        sleep= row1[sc]-row1[sc-1];
        if(sc==1){
          day1[0]=sleep;
        }
        if(sc==3){
          day1[1]=sleep;
        }
      }
      if(p===1){
        sleep= row2[sc]-row2[sc-1];
        if(sc==1){
          day2[0]=sleep;
        }
        if(sc==3){
          day2[1]=sleep;
        }
      }
      if(p===2){
        sleep= row3[sc]-row3[sc-1];
        if(sc==1){
          day3[0]=sleep;
        }
        if(sc==3){
          day3[1]=sleep;
        }
      }
      if(p===3){
        sleep= row4[sc]-row4[sc-1];
        if(sc==1){
          day4[0]=sleep;
        }
        if(sc==3){
          day4[1]=sleep;
        }
      }
      if(p===4){
        sleep= row5[sc]-row5[sc-1];
        if(sc==1){
          day5[0]=sleep;
        }
        if(sc==3){
          day5[1]=sleep;
        }
      }
    }
  }
}

function draw() {
  text("Amount of time spent asleep for 5 days. Naps and overnight.",20,20);
  translate(50,50);
  for(var c=0;c<2;c++){
    for(var r=0;r<5;r++){
      push();
      if(c===0){
        translate(0,0);
      } else {
        translate(0,r*50);
      }
       if(r===0){
        fill('green');
        rect(0,0,(day1[0]*10),25);
        fill('yellow');
        rect((day1[0]*10),0,(day1[1]*10),25);
      }
      if(r==1){
        fill('green');
        rect(0,0,(day2[0]*10),25);
        fill('yellow');
        rect((day2[0]*10),0,(day2[1]*10),25);
      }
      if(r==2){
        fill('green');
        rect(0,0,(day3[0]*10),25);
        fill('yellow');
        rect((day3[0]*10),0,(day3[1]*10),25);
      }
      if(r==3){
        fill('green');
        rect(0,0,(day4[0]*10),25);
        fill('yellow');
        rect((day4[0]*10),0,(day4[1]*10),25);
      }
      if(r==4){
        fill('green');
        rect(0,0,(day5[0]*10),25);
        fill('yellow');
        rect((day5[0]*10),0,(day5[1]*10),25);
      }
      pop();
    }
  }
  
  
}