const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var object
var box1
var ground1
function setup() {
  createCanvas(800,400);
  engine = Engine.create ()
  world = engine.world
  ground1 = new ground (400,380,800,20)
  box1 = new boxx (400,330,20,20)
}

function draw() {
  background(255,255,255); 
  Engine.update (engine) 
 ground1.display ()
 box1.display ()
}