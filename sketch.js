
var fixedRect, movingRect,fixedRect2;fixedRect3;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect2=createSprite(400,100,50,50)
  fixedRect2.shapeColor="green"

  fixedRect3=createSprite(700,100,50,50)
  fixedRect3.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor="blue"
    fixedRect2.shapeColor="blue"}
  else if(isTouching(movingRect,fixedRect3)){
  movingRect.shapeColor="blue"
  fixedRect3.shapeColor="blue"
}

  
  else {
    movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green"
    fixedRect2.shapeColor="green"
    fixedRect3.shapeColor="green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




