
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
box4=new Box(450,100,50,50);
box5=new Box(460,120,60,20);
box6=new Box(470,140,40,40);
ball2=new Ball(450,10,40);

Engine.run(myengine)
}

function draw() {
  background("black"); 
 ground.show();
 box1.show();
 box2.show();
 box3.show();
 ball.show();
 box4.show();
 box5.show();
 box6.show();
ball2.show();


  drawSprites();
}
