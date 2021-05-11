var square,rectangle
function setup() {
  createCanvas(800,400);
 square = createSprite(700, 200, 50, 50);
 square.shapeColor="Blue"
 rectangle =createSprite(600,200,50,50);
 rectangle.shapeColor="Green"
}

function draw() {
  background(255,255,255);  
  square.x=mouseX;
  square.y=mouseY;
  if(square.x-rectangle.x<square.width/2+rectangle.width/2&&
    rectangle.x-square.x<rectangle.width/2+square.width/2&&
    square.y-rectangle.y<square.height/2+rectangle.height/2&&
    rectangle.y-square.y<square.height/2+rectangle.height/2){
    rectangle.shapeColor="Red";
    square.shapeColor="Red"
  }
  else{
    square.shapeColor="Blue"
    rectangle.shapeColor="Green"
  }
  drawSprites();
}