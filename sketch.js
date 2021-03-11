// Renaming a module of a library is called NameSpacing
//Engine, World,Bodies,Body etc are modules of Matter.js library
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;



var engine,ground;
var box1, box2;

function setup() {
  createCanvas(1200,400);

  // Creating an engine for our application to make the simulations , using Engine module
  engine = Engine.create();

  // Whenever an engine is created, a world is created.
  world  = engine.world;
 
  // JSON - Java script object notation
  // its enclosed in flower braces, with key : value pairs seperated by commas

  ground = new Ground(600,380,1200,20);
 
  console.log(ground);

  box1=new Box(580,200,50,50);
  box2=new Box(600,100,50,70)



  



  
}

function draw() {
  background("lightgreen");  

  //Updating the engine to take the simulation forward
  Engine.update(engine);

  //console.log(ground.position.x, ground.position.y)
  
  ground.display();
  box1.display();
  box2.display();
  
  
}