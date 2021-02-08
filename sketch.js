
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
 bobDiameter=70;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof1=new Roof(350,150,390,40)
bob1=new bob(200,450,bobDiameter)
bob2=new bob(270,450,bobDiameter)
bob3=new bob(340,450,bobDiameter)
bob4=new bob(410,450,bobDiameter)
bob5=new bob(480,450,bobDiameter)
rope1=new rope(bob1.body,roof1.body,-bobDiameter*2,0)
rope2=new rope(bob2.body,roof1.body,-bobDiameter*1,0)
rope3=new rope(bob3.body,roof1.body,0,0)
rope4=new rope(bob4.body,roof1.body,bobDiameter*1,0)
rope5=new rope(bob5.body,roof1.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}



