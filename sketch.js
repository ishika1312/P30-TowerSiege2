
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declaring variables
var ground;
var stand1, stand2;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var B1, B2, B3, B4, B5, B6, B7, B8, B9;
var polygon;
var sling;



function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//ground
	ground = new Ground(600, height, width, 20);

	//bases to hold the blocks
	stand1 = new Ground(530, 400, 300, 15);
	stand2 = new Ground(900, 200, 240, 15);

	//level one - stand 1
	b1 = new Block(425, 370, 35, 45);
	b2 = new Block(460, 370, 35, 45);
	b3 = new Block(495, 370, 35, 45);
	b4 = new Block(530, 370, 35, 45);
	b5 = new Block(565, 370, 35, 45);
	b6 = new Block(600, 370, 35, 45);
	b7 = new Block(635, 370, 35, 45);

	//level two - stand 1
	b8 = new Block(460, 325, 35, 45);
	b9 = new Block(495, 325, 35, 45);
	b10 = new Block(530, 325, 35, 45);
	b11 = new Block(565, 325, 35, 45);
	b12 = new Block(600, 325, 35, 45);

	//level three - stand 1
	b13 = new Block(495, 280, 35, 45);
	b14 = new Block(530, 280, 35, 45);
	b15 = new Block(565, 280, 35, 45);

	//top
	b16 = new Block(530, 235, 35, 45);

	//level one - stand 2
	B1 = new Block(830, 170, 35, 45);
	B2 = new Block(865, 170, 35, 45);
	B3 = new Block(900, 170, 35, 45);
	B4 = new Block(935, 170, 35, 45);
	B5 = new Block(970, 170, 35, 45);

	//level two - stand 2
	B6 = new Block(865, 125, 35, 45);
	B7 = new Block(900, 125, 35, 45);
	B8 = new Block(935, 125, 35, 45);

	//top level - stand 2
	B9 = new Block(900, 80, 35, 45);
	
	polygon = new Polygon();

	sling = new Sling(polygon.body,{x:200, y:200});

	//updating the engiine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);

  //displaying objects
  ground.display();

  stand1.display();
  stand2.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();

  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  B6.display();
  B7.display();
  B8.display();
  B9.display();

  polygon.display();

  sling.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX , y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed(){
	if (keyCode === 32){
		sling.attach(polygon.body);
	}
}


