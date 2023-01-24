function setup() {
  createCanvas(1600, 1600);
}

function draw() {
  background('white');
  //sketch 1
  fill(0,255,0);
  noStroke();
  rect(0,0, 400, 400);
  stroke('black');
  fill('white');
  ellipseMode(CORNER);
  ellipse(30,30,100);
  square(160, 30, 100);

  //sketch2
  push();
    translate(400,0);
    noStroke();
    fill('white');
    rect(0,0, 400, 400);
    ellipseMode(CENTER);
    fill(255,0,0,100);
    ellipse(200, 120, 150);
    fill(0,0,255,100);
    ellipse(150,210,150);
    fill(0,255,0, 100);
    ellipse(250,210,150);
  pop();
  
  //sketch3
  push();
    translate(0, 400);
    ellipseMode(CENTER);
    noStroke();
    fill('black');
    rect(0,0,400,400);
    fill(255,255,0);
    arc(75, 150, 100, 100, PI + QUARTER_PI, HALF_PI + QUARTER_PI);
    fill(255,0,0);
    arc(200, 150, 100, 100, PI, 0);
    rect(150, 150, 100, 50);
    fill(255);
    ellipse(175, 150, 30);
    ellipse(225, 150, 30);
    fill('blue');
    ellipse(175, 150, 17);
    ellipse(225, 150, 17);
  pop();

  //sketch4
  push();
    translate(400,400);
    fill(0,0,150);
    rect(0,0,400,400);
    ellipseMode(CENTER);
    fill('green');
    stroke('white');
    strokeWeight(4);
    ellipse(200, 200, 150);
    fill('red');
    beginShape();
      vertex(182, 175);
      vertex(200, 125);
      vertex(217, 175);
      vertex(270, 175);
      vertex(228, 210);
      vertex(245, 260);
      vertex(200, 230);
      vertex(155, 260);
      vertex(170, 210);
      vertex(130, 175);
    endShape(CLOSE);

    pop();
}
