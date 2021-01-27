// * * * Spinning, reducing, color-changing squares laid down one at a time in an animation * * *


function setup() {
  createCanvas(650, 650);
  side = width - 30;
  r = 255;
  g = 10;
  b = 10;
  angle = 0.11;
  frameRate(30);
  i = 0;
}

function draw() {
  background(50);
  noStroke();
  rectMode(CENTER);
  angleMode(DEGREES);
  translate(width / 2, height / 2);

  for (let i = 0; i < 150; i++) {
    if (frameCount > 2 * i) {
      if (side - (i * 11) > 1) {
        drawReducingSquare(i);
        rotate(angle * i);
      } // else {
      // do nothing until frameCount is > 2 * i
    } // else {
    // do nothing after side is < 5 pixels 
  }
}

function drawReducingSquare(i) {
  rotate(angle * i);
  fill(r - (i * 3.3), g + (i * 0), b + (i * 1.5));
  rect(0, 0, side - (i * 10), side - (i * 10));
}