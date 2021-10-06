var Engine = Matter.Engine
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var snow=[]

function preload(){
  bgimg=loadImage("snow1.jpg")
  //snowimg=loadImage("snow5.webp")
}
  function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  //snow=new Snow(10,10)

}


function draw() {

  
  background(bgimg)
  Engine.update(engine)
  if(framecount%60===0){
    snow.push(new Snow(random(width/2-30,width/2+30),10,10));
    score++
  }

  for(var i=0; i<snow.length;i++){
    snow[i].display()
  } 
 
  drawSprites();
  

}