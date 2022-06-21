
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var quadrado, bola, retanglo
var engine, world
var ball
var ground;
var left;
var rigth;
// falta declarar uma variavel para o raio colissor pode chamar de radius=20

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(260,100,radius/2,options)
	World.add(world,ball)

	// vc criou a classe mas não instanciou para dentro do codigo 
	// vou fazer a primeira e vc faz as outras duas com base nela

	ground = new Ground(width/2,670,width,20);
	// left vau receber 1100,600,20,120

	// lright vai receber  1350,600,20,120




	
  	
}


function draw() {
  rectMode(CENTER);
  background("green");


  ellipse(ball.position.x,ball.position.y,radius, radius)

  ground.show();
  left.show();
  rigth.show();

  Engine.run(engine);
 
 

  drawSprites();
 
}

// vc vai criar uma função keyPressed

// e vai criar um if para verificar se o codigo da tecla de UP_ARROW

//foi pracionada e se foi
//Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})


