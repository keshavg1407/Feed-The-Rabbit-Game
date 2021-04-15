var garden,gardenImage;
var rabbit,rabbitImage;
var carrot,carrotImage;
var orangeleaf,orangeleafImage;
var redleaf,redleafImage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrotImage = loadImage("carrot.png");
  orangeleafImage = loadImage("orangeLeaf.png");
  redleafImage = loadImage("redLeaf.png");
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
  background("red");
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawncarrots();
  drawSprites();
}
  function spawncarrots(){
   if(frameCount%60===0){
   orangeleaf = createSprite(250,65,30,30);
   orangeleaf.addImage(orangeleafImage);
   orangeleaf.y=Math.round(random(40,60));
   orangeleaf.lifetime = 125;
   orangeleaf.scale=0.1;
   orangeleaf.velocityY=+2;
   }
   if(frameCount%70===0){  
   carrot = createSprite(82,65,30,30);
   carrot.addImage(carrotImage);
   carrot.y=Math.round(random(40,70));
   carrot.lifetime = 39;
   carrot.scale=0.2;
   carrot.velocityY=+3;
   } 
   if(frameCount%100===0){
   redleaf = createSprite(140,65,30,30);  
   redleaf.addImage(redleafImage);
   redleaf.y=Math.round(random(60,100));
   redleaf.lifetime = 46;
   redleaf.scale=0.05;
   redleaf.velocityY=+3;
   }
} 
