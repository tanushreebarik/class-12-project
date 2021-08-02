var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaves,leavesImg;
var rand

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  rand = Math.round(random(1,2))
  if(frameCount % 80 === 0){
    if(rand === 1){
      createapple();
    }
    else{
      createleaves();
    }
  }


 
 
  drawSprites();

}
function createapple() {
apple = createSprite(random(50,350),40,10,10);
apple.addImage("apple",appleImg);
apple.scale = 0.05
apple.velocityY = 3;
apple.lifetime = 400/3;
}
function createleaves() {
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage("leaves",leavesImg);
  leaves.scale = 0.05
  leaves.velocityY = 3;
  leaves.lifetime = 400/3;
  }