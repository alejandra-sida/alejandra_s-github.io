function setup() {
  //things in setup load once
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(110, 96, 120);
  stroke(120, 40, 200);
  fill(600,500,500);
  circle(50,50,100,100);
  fill(600,500,500);
  circle(100,150,100,100);
  fill(600,500,500);
  rect(500,300,250,400);
  fill(600,500,500);
  circle(200,250,100,100);
  fill(600,500,500);
  circle(300,350,100,100);
  fill(600,500,500);
  circle(400,450,100,100);
}



function keyTyped() {
  if(key == s){
    save('homeworkSketch.png')
  }
}
