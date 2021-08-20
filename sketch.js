function setup() {
  // The size of our starting canvas: 400px width, 400px height
  angleMode(DEGREES);
  createCanvas(800, 800);
}
let r = 50;
let g = 50;
let b = 50;
function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(0);
  translate(width / 2, height / 2);
  rotate(-90);
  stroke(r, g, b);
  noFill();
  rect(-200, -200, 400, 400, 20);
  let hr = hour();
  let min = minute();
  let sc = second();
  strokeWeight(8);
  noFill();
  push();
  stroke("#ff006e");
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  pop();

  push();
  stroke("#fee440");
  let minutedAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minutedAngle);
  pop();

  push();
  stroke("#be0aff");
  let hourAngel = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourAngel);
  pop();

  rotate(90);
  if (frameCount % sc == 0) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  push();
  strokeWeight(0);
  fill(r, g, b);
  textSize(30);
  text(hr + ":" + min + ":" + sc, -40, 0);

  pop();
  rect(-200, -15, -200, 100);
  rect(200, -25, 200, 100);
  //circle(200, -120, 10);
  arc(200, -120, 10, 10, -90, -270);
  circle(250, 25, 70);
  circle(350, 25, 70);
  circle(-350, 35, 70);
  circle(-250, 35, 70);
}
