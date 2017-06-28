var xPosition = -200;


var angle = 0.0;
var offset = 100;
var scalar = 5;
var velo = 0.01;


//an array to store multiple clouds
var clouds = [];
var nClounds = 1;

function setup() {
  createCanvas(600,400);
  background(0);

  //create the clouds based on the points in points.js
  for(var i=0; i<nClounds; i++){
    //create a cloud object
    var cloud = {
      x: random(0,width),
      y: random(0,height),
      scale: random(0.5,1.5),
      speed: random(0.2,1),
      points: copyPointArray(points),
      triangles: triangles
    };

    print('cloud.points');
    print(cloud.points);
    print('cloud.triangles');
    print(cloud.triangles);

    clouds.push(cloud);
  }

}

function draw() {
  background(0);
 /* var y1 = offset + sin(angle) * scalar;
  angle += velo;

  var randomspeed = 1;//random(0.2, 1);
  var randomscale = 20;//random(20, 80);
  var randompoints1 = 0;//random(-20, 20);
  var randompoints2 = 0;//random(-20, 20);
  var randompoints3 = 0;//random(-20, 20);
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
*/

  //move the clounds
  for(var i=0; i<clouds.length; i++){
    var c = clouds[i];
    c.x += c.speed;
  }



    
  //draw the clouds
  for(var i=0; i<clouds.length; i++){
    var cloud = clouds[i];
    push();
    translate(cloud.x,cloud.y);
    scale(cloud.scale);
    var pts = cloud.points;
    var tris = cloud.triangles;
    for(var j=0; j<tris.length; j++){
      
     // print('triangles j: ' + j);
      var t = tris[j];

      var p1 = pts[t[0]];
      var p2 = pts[t[1]];
      var p3 = pts[t[2]];

      stroke('black');
      fill('white');
      beginShape(TRIANGLES);
      vertex(p1.x,p1.y);
      vertex(p2.x,p2.y);
      vertex(p3.x,p3.y);
      endShape();
    }

    for(var j=0; j<pts.length; j++){
      var p = pts[j];
      ellipse(p.x,p.y,3,3);
    }

    pop();
  }

 // noLoop();

}

//makes a deep copy of a list of points
function copyPointArray(pts){
  var newArr = [];
  for(var i=0; i<pts.length; i++){
    var p = copyPoint(pts[i]);
    newArr.push(p);
  }
  return newArr;
}

function copyPoint(p){
  return {
    x: p.x,
    y: p.y
  };
}
