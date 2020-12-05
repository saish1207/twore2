const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var box1,box2,box3,box4,box5,box7,box8,box9, box10,ground,polygon;
var box11,box12,box13,box14,box15,box17,box18,box19, box20,box16,box21,ground1;
var slingShot;
function setup() {
  createCanvas(1300,600);
  

  engine = Engine.create();
  world = engine.world;
// level 3
  box1 = new Box (730,235,30,40)
  box2 = new Box (760,235,30,40)
  box3 = new Box (790,235,30,40)
  box4 = new Box (820,235,30,40)
  box5 = new Box (850,235,30,40)

// level 2
box7 = new Box (760,195,30,40)
  box8 = new Box (790,195,30,40)
  box9 = new Box (820,195,30,40)

  // top
  box10 = new Box (790,155,30,40)






  // level 3
  box11 = new Box (930,135,30,40)
  box12 = new Box (960,135,30,40)
  box13 = new Box (990,135,30,40)
  box14 = new Box (1020,135,30,40)
  box15 = new Box (1050,135,30,40)

// level 2
box17 = new Box (960,95,30,40)
  box18 = new Box (990,95,30,40)
  box19 = new Box (1020,95,30,40)

  //  level 1
  box16 = new Box (980,55,30,40)
  box20 = new Box (1010,55,30,40)

  //top
 box21 = new Box (990,10,30,40)


  polygon = new Polygon(190,350,20)


  slingShot = new Slingshot(polygon.body,{x:190,y:350});

  
  ground1= new Ground (980,190,200,20)
  ground= new Ground (780,390,200,20)

}

function draw() {
  background("black");  
  Engine.update(engine)
  polygon.display()
  fill("pink")
  box1.display();
  fill("blue")
  box2.display();
  fill("yellow")
  box3.display();
  fill("red")
  box4.display();
  fill("pink")
  box5.display();
  fill("blue")
  box7.display();
  fill("yellow")
  box8.display();
  fill("red")
  box9.display();
  fill("white")
  box10.display();
  ground.display();





  fill("pink")
  box11.display();
  fill("blue")
  box12.display();
  fill("yellow")
  box13.display();
  fill("red")
  box14.display();
  fill("pink")
  box15.display();
  fill("blue")
  box17.display();
  fill("yellow")
  box18.display();
  fill("red")
  box19.display();
  fill("white")
  box20.display();
  box16.display();

  fill("orange")
  box21.display();

  ground1.display();



  slingShot.display()
 keyPressed()

  drawSprites();
}
//if (ball.Body.position.x<canvas){
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
//}


function mouseReleased(){
slingShot.fly()
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body)

  }
}