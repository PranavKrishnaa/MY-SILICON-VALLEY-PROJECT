var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, invisibleWall1, invisibleWall2, invisibleWall3, invisibleWall4;

var superHero, superHeroLeftImg, superHeroRightImg;
var civilian1, civilian1Img, civilian2, civilian2Img;
var monster1, monster1Img, monster2, monster2Img, monster3, monster3Img;

var powerBlastLeftImg,powerBlastLeft,powerBlastRightImg,powerBlastRight;

function preload(){
  superHeroLeftImg = loadImage("images/superHeroLeft.png");
  superHeroRightImg = loadImage("images/superHeroRight.png");
  civilian1Img = loadImage("images/Civilian1.png");
  civilian2Img = loadImage("images/Civilian2.png");
  monster1Img = loadImage("images/Monster1.png");
  monster2Img = loadImage("images/monster2.png");
  monster3Img = loadImage("images/monster3.png");
  powerBlastLeftImg = loadImage("images/PowerBlastLeft.png");
  powerBlastRightImg = loadImage("images/PowerBlastRight.png");
}


function setup(){
  canvas = createCanvas(1900, 950);
 
   wall1 = createSprite(530,185,650,20);
   wall2 = createSprite(300,360,600,20);
   wall3 = createSprite(1000,695,20,225);
   wall4 = createSprite(500,690,20,220);
   wall5 = createSprite(500,950,20,320);
   wall6 = createSprite(260,668,20,175);
   wall7 = createSprite(730,668,20,175);
   wall8 = createSprite(850,185,20,375);
   wall9 = createSprite(1390,210,575,20);
   wall10 = createSprite(1620,410,575,20);
   wall11 = createSprite(1110,400,20,400);
   wall12 = createSprite(1590,590,620,20);
   wall13 = createSprite(760,590,1000,20);
   wall14 = createSprite(1000,950,20,320);
   wall15 = createSprite(1270,668,20,175);
   wall16 = createSprite(1575,950,20,320);

   invisibleWall1 = createSprite(1900,500,10,1100);
   invisibleWall1.visible = false;
   
   invisibleWall2 = createSprite(0,500,10,1100);
   invisibleWall2.visible = false;

   invisibleWall3 = createSprite(900,0,2000,10);
   invisibleWall3.visible = false;

   invisibleWall4 = createSprite(900,950,2000,10);
   invisibleWall4.visible = false;

   superHero = createSprite(765,85,50,50);
   superHero.addImage(superHeroLeftImg);
   superHero.scale = 0.3;

   civilian1 = createSprite(1835,510,50,50);
   civilian1.addImage(civilian1Img);
   civilian1.scale = 0.8;

   civilian2 = createSprite(1800,770,50,50);
   civilian2.addImage(civilian2Img);
   civilian2.scale = 0.65;

   monster1 = createSprite(915,480,50,50);
   monster1.addImage(monster1Img);
   monster1.scale = 0.4;
   monster1.velocityX = 5;
   monster1.velocityY = 0;

   monster2 = createSprite(1800,80,50,50);
   monster2.addImage(monster2Img);
   monster2.scale = 0.3;
   monster2.velocityX = 5;
   monster2.velocityY = 0;

   monster3 = createSprite(1430,750,50,50);
   monster3.addImage(monster3Img);
   monster3.scale = 0.5;

   LeftBlast = new Group();
   RightBlast = new Group();

}


function draw(){
background("white");
textSize(20);
fill("black");
//text(mouseX+","+mouseY, 20,20);

superHero.collide(invisibleWall1);
superHero.collide(invisibleWall2);
superHero.collide(invisibleWall3);
superHero.collide(invisibleWall4);

superHero.collide(wall1);
superHero.collide(wall2);
superHero.collide(wall3);
superHero.collide(wall4);
superHero.collide(wall5);
superHero.collide(wall6);
superHero.collide(wall7);
superHero.collide(wall8);
superHero.collide(wall9);
superHero.collide(wall10);
superHero.collide(wall11);
superHero.collide(wall12);
superHero.collide(wall13);
superHero.collide(wall14);
superHero.collide(wall15);
superHero.collide(wall16);



  monster1.bounceOff(invisibleWall2);
  monster1.bounceOff(wall11);
 
  monster2.bounceOff(wall8);
  monster2.bounceOff(invisibleWall1);


if(keyIsDown(LEFT_ARROW)){
  superHero.x-=10;
  superHero.addImage(superHeroLeftImg);
}

if(keyIsDown(RIGHT_ARROW)){
  superHero.x+=10;
  superHero.addImage(superHeroRightImg);
}

if(keyIsDown(UP_ARROW)){
  superHero.y-=10;
}

if(keyIsDown(DOWN_ARROW)){
  superHero.y+=10;
}

if(superHero.isTouching(monster1)){
superHero.x = 765;
superHero.y = 85;
}

if(superHero.isTouching(monster2)){
  superHero.x = 765;
  superHero.y = 85;
}

if(superHero.isTouching(monster3)){
  superHero.x = 765;
  superHero.y = 85;
  }

  if(keyDown("Z")){
    createPowerBlastLeft();
  }

  if(keyDown("X")){
    createPowerBlastRight();  
  }

 //if(powerBlastLeft.isTouching(monster1)||powerBlastRight.isTouching(monster1)){
  // monster1.destroy();
 //}

 //if(powerBlastLeft.isTouching(monster2)||powerBlastRight.isTouching(monster2)){
   //monster2.destroy();
 //}

 //if(powerBlastLeft.isTouching(monster3)||powerBlastRight.isTouching(monster3)){
   //monster3.destroy();
 //}

/*if( powerBlastLeft.isTouching(wall4)){
  wall4.destroy();
}*/

drawSprites();
}



function createPowerBlastLeft() {
  var PowerBlastLeft = createSprite(100, 100, 60, 10);
  PowerBlastLeft.addImage(powerBlastLeftImg);
  PowerBlastLeft.x = superHero.x;
  PowerBlastLeft.y=superHero.y;
  PowerBlastLeft.velocityX = -5;
  PowerBlastLeft.lifetime = 50;
  PowerBlastLeft.scale = 0.3;
  LeftBlast.add(PowerBlastLeft);
}

function createPowerBlastRight() {
  var PowerBlastRight = createSprite(100, 100, 60, 10);
  PowerBlastRight.addImage(powerBlastRightImg);
  PowerBlastRight.x = superHero.x;
  PowerBlastRight.y = superHero.y;
  PowerBlastRight.velocityX = +5;
  PowerBlastRight.lifetime = 50;
  PowerBlastRight.scale = 0.3;
  RightBlast.add(PowerBlastRight);
}