
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var piso,cesta1,cesta2;
var bola;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);
	var ballconfig = {

		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	cesta1 = new chao(550,280,10,120);
	cesta2 = new chao(675,280,10,120);
	piso = new chao(400,300,800,20);
	World.add(world,cesta1);
	World.add(world,cesta2);
	World.add(world,piso);

	bola = Bodies.circle(200,100,20,ballconfig);
  	World.add(world,bola);

	Engine.run(engine);
	ellipseMode(RADIUS);
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  cesta1.exibir();
  cesta2.exibir();
  piso.exibir();

  ellipse(bola.position.x,bola.position.y,20);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bola,{x:0,y:0},{x:45,y:-60});
	}
}