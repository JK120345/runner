//objects of fruit ninja
var enemyGroup ,mb;
var fruitsGroup ,ft1,ft2,ft3,ft4;
var srd;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
var sound;

function preload(){
  mb=loadAnimation("alien1.png","alien2.png");
  ft1=loadImage("fruit1.png");
  ft2=loadImage("fruit2.png");
  ft3=loadImage("fruit3.png");
  ft4=loadImage("fruit4.png");
  srd=loadImage("sword.png")
  sound=loadSound("knifeSwooshSound.mp3");
  j=loadImage("gameover.png");
}
function setup(){
  
  createCanvas(600,600);
  
  //loading on screen
 // mb1=createSprite(300,300,20,20);
//  mb1.addAnimation("al",mb);
  
  
  swrd=createSprite(400,100,20,20);
  swrd.addImage(srd);
  swrd.scale=0.7;
  fruitsGroup=createGroup();
  monsterGroup=createGroup();
}

function draw(){
  background("lightgreen");
  
  textSize(20);
  text ( "Score : " +score,470,20);
  
  swrd.y=World.mouseY;
  swrd.x=World.mouseX;
  
  
  if(gameState===END){
    swrd.addImage(j);
    swrd.scale=1.5;
    swrd.x=300;
    swrd.y=300;
   
  }
  
 
  
  if(gameState===PLAY){
    if(swrd.isTouching(fruitsGroup)){
    fruitsGroup.destroyEach();
    sound.play();
    score=score+2;
      
    }
    
    
   if(swrd.isTouching(monsterGroup)){
    monsterGroup.destroyEach();
    gameState=END;
    
  }
  
   //call of enemy and fruits
  fruits();
  enemy1(); 
  
  }
  
  
  
 
drawSprites();
  
}


function enemy1(){
  if(World.frameCount % 80===0){
    enemy=createSprite(600,30,20,20);
    enemy.addAnimation("run",mb);
    enemy.velocityX=-9;
    enemy.velocityX=-(9+2*(score/10));
    
    
   
    enemy.lifetime=100;
    
    monsterGroup.add(enemy)
    enemy.y=Math.round(random(10,500));
  }
   
}

function fruits(){
  if(World.frameCount % 80===0){
    fruit=createSprite(600,200,20,20);
    
    fruit.velocityX=-7;
    fruit.velocityX=-(7+2*(score/10));
    fruit.scale=0.2;
    
var r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(ft1);
    }else if(r==2){
      fruit.addImage(ft2);
    }else if(r==3){
      fruit.addImage(ft3);
    }else {
      fruit.addImage(ft4);
    }
    
    fruit.y=Math.round(random(50,550));
    
    fruit.setLifetime=100;
    fruitsGroup.add(fruit)
    
  }
}
