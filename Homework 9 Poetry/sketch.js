
var lexicon;
var haiku = "Thought I, the fallen flowers"+ "\n"+ "Are returning to their branch;" + "\n" + "But lo! they were butterflies."

function setup() {
   lexicon = new RiLexicon();
   createCanvas(windowWidth,windowHeight);
   textSize(15);
   textAlign(CENTER,CENTER);
   background(255);
   translate(width/2,height/2);
   text("Original",0,-90);
   text(haiku, 0,-50);
   text("Generative",0,10);
   text("Thought I, the "+ generateWord(0,2)+ " " + generateWord(1,2)+ "\n"+ "Are returning to their " + generateWord(0,1) +";\n"+ "But lo! they were "+generateWord(1,3)+".",0,50);
}

function draw(){
   
}
 
 function generateWord(plu,syl){
   
   if(plu == 1){
     return lexicon.randomWord("nns",syl);
   }
   else{
     return lexicon.randomWord("nn",syl);
   }
 }