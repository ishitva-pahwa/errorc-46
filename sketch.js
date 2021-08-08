const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(1500,800);
  engine= Engine.create();
  world= engine.world;
 var options={
   isStatic:true
 }

monster=new Monster(1150,550,50,50);
 ground= Bodies.rectangle(1200,600,200,10,options);

 World.add(world,ground);

 candy=new Candy(50,50,10);

 ground1=Bodies.rectangle(300,20,200,10,options)


 rope=new Rope(candy.body,{x:150,y:20},300)


var bounce={
  restitution:1
}


}

function draw() {
  background("yellow");
  Engine.update(engine);
  rectMode(CENTER)
   
  rect(ground.position.x,ground.position.y,400,10);
  rect(ground1.position.x,ground1.position.y,400,10);
monster.display();
candy.display();
rope.display();
  drawSprites();
}