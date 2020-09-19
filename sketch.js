
var strokeColor = "rgb(0,0,0)";
var canvasWidth = getComputedStyle(document.documentElement)
    .getPropertyValue('--canvasWidth');

function setup() {
  var canv = createCanvas(windowWidth/2, windowHeight);    
  canv.addClass('canvus');
  background(220);  
}

function draw() {
  noFill();
  //fill('rgba(225,0,255,1)');    
  background(255);  
  stroke(strokeColor);
  strokeWeight(1);
  translate(width * 0.5, height * 0.5);
  rotate(radians(30));
  for(let i = 0; i< 40; i++){
     rotate(radians(1));
    rotate(frameCount / 2000.0);
    polygon(0, 0, i * 6 , 3);
  }
  
}


function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight);
}

