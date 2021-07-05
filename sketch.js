const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var backgroundImage;
var Boy, BoyImage;
var Girl, GirlImage;
var snow, snowImage;

var snow = [];

function preload() {
  backgroundImage = loadImage("snow1.jpg");
  GirlImage = loadImage("Snow Girl.png");
  BoyImage = loadImage("Snow Boy.png");
  snowImage = loadImage("snow4.webp");
}
  
  function setup() {
    createCanvas(800,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;
   
    Girl = createSprite(670, 250, 50, 50);
    Girl.addImage(GirlImage);
    Girl.scale = 0.2;
  
    Boy = createSprite(200, 200, 50, 50);
    Boy.addImage(BoyImage);
    Boy.scale = 0.2;
}
 
  function draw() {
  
    Engine.update(myEngine);
  
    background(backgroundImage);  
   
  //Movement of the Girl
    if(keyDown(LEFT_ARROW)){
      changePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    changePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    changePosition(0,+1);
  }
  
    //Movement of the Boy
    if(keyDown("W")){
      writePosition(-1,0);
  }
  else if(keyDown("A")){
    writePosition(1,0);
  }
  else if(keyDown("S")){
    writePosition(0,-1);
  }
  else if(keyDown("D")){
    writePosition(0,+1);
  }
  
    //create snow 
   if(frameCount % 60 === 0){
    snow.push(new Snow(random(width/2 - 10, width/2 + 10), 10)); 
  }
  
  //display the snowfall 
  for (var m = 0; m < snow.length; m++) {
    snow[m].display();
  }
  
  drawSprites();
  }

function changePosition(x,y){
  Girl.x = Girl.x + x;
  Girl.y = Girl.y + y;
}
  function writePosition(x,y){
    Boy.x = Boy.x + x;
    Boy.y = Boy.y + y;
  }