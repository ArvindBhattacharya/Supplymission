const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var heliImg, crateImg;
var heli, crate, ground, bool;
engine: engine;


function setup(){
  createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    heli = new Block(200,200,20,20,true);
    ground = new Block(200,395,400,10,true);
    bool = false;
}

function mouseReleased(){
    if (bool == false){
bool = true
 crate = new Block(heli.body.position.x,215,10,10,false);
 //crate.fill(255,255,0);
 crate.depth = 2;
    }
}

function draw(){
    background(0,0,0);
    heli.display();
    if (keyIsDown(LEFT_ARROW)){
     if (heli.body.position.x>10){
      heli.body.position.x = heli.body.position.x-10;  
     }
    }
    if (keyIsDown(RIGHT_ARROW)){
     if (heli.body.position.x<390){
      heli.body.position.x = heli.body.position.x+10;  
     }
    }
    ground.display();
    if (crate != null){
        crate.display();
    if (ground.body.position.y - crate.body.position.y < 15){
      World.remove(world,crate.body);
        crate = null;
        bool = false
    }
    }
    Engine.update(engine);
}