
var monkey , monkey_running
var banana ,bananaImage; 
var   obstacle, obstacleImage;
var FoodGroup, obstacleGroup
var survicalTime = 0 ;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600, 600);
   monkey = createSprite(50,318,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
   ground = createSprite(400,350,9000,10);
  ground.Lifetime=10;
  ground.velocityX = -4 ;
  ground.x = ground.width /2;
  console.log(ground.x)
  
  FoodGroup =  new Group();
  obstacleGroup= new Group();
}


function draw() {
background(550)
  
  drawSprites();
  text("survical time:" + survicalTime,100,50)
  survicalTime=Math.ceil(frameCount/frameRate())
  fill("black")
  textSize=20;
  stroke("white")
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
   foodbanana ();
   obstacleRocks();
   monkey.collide(ground);
  
   if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
}

function foodbanana (){
  if (frameCount % 80 === 0) {
    var food  = createSprite(600,120,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
     food.lifetime = 200;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 2;
    
    //add each cloud to the group
    FoodGroup.add(food);
}

}
function obstacleRocks(){
  if(frameCount % 300 === 0) {
     var obstacle = createSprite(600,332,10,40);
     var rand = Math.round(random(1,6));
     obstacle.velocityX = -6
     obstacle.addImage( obstaceImage);
     obstacle.scale=0.1
     obstacleGroup.add(obstacle);
    
  }
}

