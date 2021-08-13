const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;

var ball



function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution : 0.85,
	}
	ball = Bodies.circle(200,200,20,ball_options)
  World.add(world,ball)

  ground = new Wall(700,650,1400,12)
  right = new Wall(900,600,12,100)
  left = new Wall(1100,600,12,100)



	
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  right.show();
  left.show();
 
}


function hforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}

function keyPressed() {
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05});
  }
}