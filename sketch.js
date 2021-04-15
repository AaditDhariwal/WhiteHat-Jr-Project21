var bullet, wall;
var thickness,speed, weight;
var damage;

function setup() {
createCanvas(1600,400);

bullet=createSprite(100,200,45,20);
wall=createSprite(1300,200,30,150);

weight=32;
speed=random(225,275);
thickness=random(40,70);

damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

bullet.shapeColor="white";
bullet.depth=wall.depth+1;
}

function draw() {
background("black");
console.log(damage);

bullet.velocityX=random(10,15);

if(wall.x-bullet.x < bullet.width/2+wall.width/2){
bullet.velocityX=0;

checkDamage();
}
 drawSprites();
}

function checkDamage(){
  if(damage<10){
    bullet.shapeColor="green";
  }
  else if(damage>10){
   bullet.shapeColor="red";
  }
}
