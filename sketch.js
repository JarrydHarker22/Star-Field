var stars = [];
var bubbles = [];
var isDragged = false;
var speed = 0.5;
let shipUp, shipBack, shipRight;
var canvasWidth = innerWidth - 50;
var canvasHeight = innerHeight;
var shipWidth = canvasWidth/2;
var shipHeight = canvasHeight/2;

function preload(){
  shipUp = loadImage('Images/Spaceship.png');
  shipBack = loadImage('Images/ShipBack.png');
  shipRight = loadImage('Images/ShipRight.png');
}

function setup() {
  var canvas = createCanvas(940, 800);
  canvas.parent("CanvasDiv");

  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  translate(width / 2, height/4);//Change this to mouse variables to follow mouse

  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  
  translate(-width / 2, -height / 3);

  image(shipUp, 360, 550);
  accelerate();
}

function accelerate(){
  if(mouseIsPressed && mouseX < 800 && mouseY > 0 && mouseY < 800){
    for (let i = 0; i < 7; i++) {
      let b = new Bubble();
      bubbles.push(b);
    }
    for (let i = 0; i < bubbles.length -1; i++) {
      bubbles[i].update();
      bubbles[i].show();
  
      if (bubbles[i].finished()) {
        // replace this bubble
        bubbles.splice(i,1)
      }
    }

    if(speed <= 25){
      speed += 0.5;
    }
  }else speed =0.5;

  
}


