var canvas;
let rings = [];
let animationOn=true;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', 1);
}

function mouseMoved(){
  if (animationOn) {
    rings.push (new Ring(mouseX, mouseY)); 
  }
}
function mouseDragged(){
  if (animationOn) {
    rings.push (new Ring(mouseX, mouseY)); 
  }
}
function windowResized(){ 
  resizeCanvas(windowWidth,windowHeight)
}

function draw() {
  background(27);

  for (let i = 0; i < rings.length; i++) {
    rings[i].display();
    rings[i].grow();
    rings[i].fade()
    
    if (rings[i].alpha< 0){
    rings.splice(i,1);
    }
  }
}

class Ring {
  constructor(mx,my) {
    this.x = mx;
    this.y = my;
    this.diameter = 0;
    this.alpha=255
  }

  display() {
    noFill();
    strokeWeight(0.7);
    stroke(255, this.alpha);
    circle(this.x, this.y, this.diameter);
  }

  grow() {
    this.diameter += random(1.5,2);
  }
  
  fade() {
    this.alpha -=random(1,3)
}
}
