var groundSprite, paperBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//mam i am not able to do this project.
	//i am having problem in the ball.
}

function setup() {
	var canvas = createCanvas(1200, 600);

	paperSprite=createSprite(width/2, 80, 10,10);
	

	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	ground = new Ground();
	crumpledPaper = new Paper();
	side1= new Dustbin(902,505,10,120);
	side2= new Dustbin(962,565,130,10);
	side3= new Dustbin(1024,505,10,120);
		
	Engine.run(engine);
	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, paperBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  canvas.display();
  crumpledPaper.display();
 
}



