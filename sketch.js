const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let myEngine;
let myWorld;
var ground,leftWall,rightWall,topWall;
var ball,btn1,btn2;


function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  
  myWorld = myEngine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  btn1 = createImg('push.png');
  btn1.position(150,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);

  btn2 = createImg('push.png');
  btn2.position(250,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground = new Ground(200,390,400,20);
  leftWall = new Ground(10,200,20,400);
  rightWall = new Ground(390,200,20,400);
  topWall = new Ground(200,10,400,20);
  
  var options = { 
    restitution: 0.9  
  }
  ball = Bodies.circle(200,100,20,options);
  World.add(myWorld,ball);
  
}

function draw() 
{
  background(51);
  Engine.update(myEngine);

  ground.show();
  leftWall.show();
  rightWall.show();
  topWall.show();
  ellipse(ball.position.x,ball.position.y,20,20);
}


function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

}