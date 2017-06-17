var xPosition = -200;


var angle = 0.0;
var offset = 100;
var scalar = 5;
var velo = 0.01;

function setup() {
  createCanvas(600,400);
  background(0);

}

function draw() {
  background(0);
  var y1 = offset + sin(angle) * scalar;
  angle += velo;

  var randomspeed = random(0.2, 1);
  var randomscale = random(20, 80);
  var randompoints1 = random(-20, 20);
  var randompoints2 = random(-20, 20);
  var randompoints3 = random(-20, 20);
  var speed = randomspeed;
  xPosition += speed;

  if (xPosition > width) {
    xPosition = 0-200;
  }

  push();
  translate(xPosition, y1);
  scale(randomscale / 60.0);


  for (var i = 0; i < triangles.length; i++) {
    var t = triangles[i];

    stroke('black');
    fill('white');
    beginShape(TRIANGLES);
    vertex(t[0].x + randompoints1, t[0].y + randompoints1);
    vertex(t[1].x + randompoints2, t[1].y + randompoints2);
    vertex(t[2].x + randompoints3, t[2].y + randompoints3);
    endShape();
  }
  pop();



}
