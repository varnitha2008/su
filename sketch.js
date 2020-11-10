var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bar1,bar2,bar3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mybar1,mybar2,mybar3;

function preload(){           

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
    
  
     
	mybar2=new bar(230,600,20,100);
	mybar3=new bar(370,640,290,20);
	mybar1=new bar(510,600,20,100);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")


	

	packageBody = Bodies.circle(width/2 , 200 , 1, {restitution:1.0,density:5.0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
 Engine.update(engine);

  background("black");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  mybar1.display();
  mybar2.display();  
  mybar3.display();

     
	

  drawSprites();
 
}

 function keyPressed() {
if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	
}


 }
