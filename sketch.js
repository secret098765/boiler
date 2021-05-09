var bullet,wall,thickness
var speed,weight









function setup() {
  createCanvas(1600,400);
  
speed= random(220,320)
weight= random(30,52)
thickness=random(22,83)
bullet=createSprite(50, 200, 50, 50);
wall=createSprite(800,200,60,height/2)
bullet.velocityX=speed
}

function draw() {
  background(0);
  if(collision(bullet,wall)) {

    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    console.log(damage)
    if (damage>10) {wall.shapeColor="red"}
    if (damage<10) {wall.shapeColor="green"}
  }

  drawSprites();
}
function collision(bullet,wall){
  righth=bullet.x+bullet.width
  lefth=wall.x
  if(righth>=lefth){
return true




  }
  return false

}











