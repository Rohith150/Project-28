
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, tree, attachState;
attachState = 'attach';

function preload()
{
	boy = loadImage('Images/boy.png')
	tree = loadImage('Images/tree.png')
}

function setup() {
	createCanvas(1360, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(900,340,100);
	mango2 = new Mango(1100,340,100);
	mango3 = new Mango(1000,210,100);
	mango4 = new Mango(1000,340,100);
	ground = new Ground(680,620,1360,20);
	stone = new Stone(400,450,50,50);
	chain = new Chain(stone.body, { x: 500, y: 460});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210,210,210);

  detectColision(stone,mango1);
  detectColision(stone,mango2);
  detectColision(stone,mango3);
  detectColision(stone,mango4);
  

  image(boy,470,380,200,300);
  push();
  imageMode(CENTER);
  image(tree,1030,370,300,500);
  pop();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  ground.display();
  chain.display();
  drawSprites();
 
}

function detectColision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= mango.r + stone.r){
		Matter.Body.setStatic(mango.body, false)
	}
}

function keyPressed(){
	if(keyCode === 32){
		if(attachState === 'release'){
		Matter.Body.setPosition(stone.body, {x:400, y:450})
		attach();
		}
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	chain.fly();
	attachState = 'release';
}
function attach(){
	chain = new Chain(stone.body, { x: 500, y: 460});
	attachState = 'attach';
}