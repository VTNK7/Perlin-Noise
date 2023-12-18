// 2D Perlin Noise Demo With Moving Line


start = 0;
incr = 0.01;
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(51);
    beginShape();
    noFill();
    var xoff = start;
    for (var x = 0; x <= width; x ++) {
      stroke(255);
      var y = noise(xoff) * height;
      vertex(x, y);
      xoff += 2*incr;
    }
    endShape();
    start += incr;
}