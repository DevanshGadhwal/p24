
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,690,800,20);

	//Create the Bodies Here.
	stone=new Stone(100,100,100,70);
	hammer=new Hammer(100,100);
	iron=new Iron(300,350)	
	rubber=new Rubber(700,450,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  
  drawSprites();
  stone.display();
  hammer.display();
  iron.display();
  rubber.display();
}



