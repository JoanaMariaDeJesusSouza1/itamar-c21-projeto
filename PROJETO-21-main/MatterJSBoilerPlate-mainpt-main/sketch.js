const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var world,engine;
var ball;
var ground;
var left
var right;
 // falta de uma variavel para o raio colissor pode chamar de radius=40

var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,options);
	World.add(world,ball);

	
	// vc criou a classe mas não instanciou para dentro do codigo 
	// vou fazer a primeira e vc faz as outras duas com base nela

	ground=new Ground(width/2,670,width,20);
 	// left vau receber 1100,600,20,120
	left = new Ground(1100,600,20,120);
	// right vai receber  1350,600,20,120
	right = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("skyblue")
  ellipse(ball.position.x,ball.position.y,radius,radius);

  ground.display();
  left.display();  
  right.display();
  
}

// vc vai criar uma função keyPressed
function keyPressed(){

}


// // e vai criar um if para verificar se o codigo da tecla de UP_ARROW

// //foi pracionada e se foi
// //Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})