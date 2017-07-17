var xPosition = -200;


var angle = 0.0;
var offset = 100;
var scalar = 5;
var velo = 0.01;


//an array to store multiple clouds
var clouds = [];
var nClounds = 5;

function setup() {
  createCanvas(600,400);
  background(0);

  //create the clouds based on the points in points.js
  for(var i=0; i<nClounds; i++){
    //create a cloud object
    var cloud = {
      x: 0,//random(0,width),
      y: random(0,height),
      scale: random(0.2,1),
      speed: random(0.2,1),
      points: copyPointArray(points),
      triangles: triangles
    };

    var rand = 5;
    //slightly change the points so that cloud gets individual shape
    for(var j=0; j<cloud.points.length; j++){
      var p = cloud.points[j];
      p.x += random(-rand,rand);
      p.y += random(-rand,rand);
    }

    print('cloud.points');
    print(cloud.points);
    print('cloud.triangles');
    print(cloud.triangles);

    clouds.push(cloud);
  }

}

function draw() {
  background(0);

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

      stroke('white');
      strokeWeight(0.1);
      fill(255,255,255,170);
      beginShape(TRIANGLES);
      vertex(p1.x,p1.y);
      vertex(p2.x,p2.y);
      vertex(p3.x,p3.y);
      endShape();
    }

/*    for(var j=0; j<pts.length; j++){
      var p = pts[j];
      ellipse(p.x,p.y,3,3);
    }
*/
    pop();
  }

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
