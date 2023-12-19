



var inc = 0.1;
var scl = 10;
var cols, rows;

var fr; //framerate
var particles= [];
var flowfield= [];

function setup() {
  createCanvas(200, 200 );
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');
  flowfield = new Array(cols * rows);
  for (var i = 0; i < 500; i++) {
    particles[i] = new Particle();
  } 
  background(600);
}

var zoff = 0;
var aoff = 0;
function draw() {

  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols; // index du champs flowfield
      var r = noise(xoff, yoff, zoff)*4*90;
      var v = p5.Vector.fromAngle(radians(r));

      v.setMag(0.1);


      flowfield[index] = v;
      
      xoff += inc;

      // stroke(0,50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;
    aoff += 0.001;
    zoff += 0.0001;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }


  fr.html(floor(frameRate()));
}