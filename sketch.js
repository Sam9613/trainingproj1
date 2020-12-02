
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myworld,myengine;

function setup() {
  createCanvas(800,400);
 myengine=Engine.create();
 myworld=myengine.world
 ground=new Ground(400,390,800,10);
 ball=new Ball(200,300,50);
box1=new Box(400,100,50,50);

box2=new Box(410,120,60,20);
box3=new Box(420,140,40,40);


Engine.run(myengine)
}

function draw() {
  background("black"); 
 ground.show();
 box1.show();
 box2.show();
 box3.show();
 ball.show();



  drawSprites();
}