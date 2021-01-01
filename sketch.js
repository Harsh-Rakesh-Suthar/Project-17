
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation ("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground=createSprite(400,350,900,10);
   
    BananaGroup = new Group();
}


function draw() {
   background("white");
 
  if(keyDown("space") && monkey.y >= 310) {
      monkey.velocityY = -8.5;
    }
  
  monkey.velocityY = monkey.velocityY + 0.2; 
 monkey.collide(ground);
  
 
  ground.velocityX = -4 ;
   ground.x = ground.width/2;
   
  
   spawnBanana();
  
  
  spawnObstacles();
  drawSprites();
}

 function spawnBanana(){
   if (frameCount % 80 === 0) {
    var Banana = createSprite(600,120,40,10);
    Banana.y = Math.round(random(120,200));
    Banana.addAnimation("banana",bananaImage);
    Banana.scale = 0.1;
    Banana.velocityX = -3;
    Banana.lifetime = 195;
    
    BananaGroup.add(Banana);
    
}
 } 
 
function spawObstacles(){
   if (frameCount % 387 === 0) {
    var Obstacles = createSprite(600,315,100,100);
    Obstacles.addAnimation("obstacle",obstaceImage);
    Obstacles.velocityX = -3;
    Obstacles.lifetime = 195;
   ObstaclesGroup.add(Obstacle);
 
   }

} 