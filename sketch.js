//var speed = 2;
var xPosition = -200;

function setup() {
  createCanvas(600,400);
  background(0);

}

function draw() {
  background(0);
  var randomspeed = random(0.2, 1);
  var speed = randomspeed;
  xPosition += speed;
  if (xPosition > width) {
    xPosition = 0-200;
  }
  push();
  translate(xPosition, 150);


  for (var i = 0; i < triangles.length; i++) {
    var t = triangles[i];

    stroke('black');
    fill('white');
    beginShape(TRIANGLES);
    vertex(t[0].x, t[0].y);
    vertex(t[1].x, t[1].y);
    vertex(t[2].x, t[2].y);
    endShape();
  }
  pop();



}
