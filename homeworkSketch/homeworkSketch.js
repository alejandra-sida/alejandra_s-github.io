function setup() {
  //things in setup load once
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255,0,100);
  stroke(0);

  //ground
  pop();
  fill(220,220,0);
  ellipse(600,600,2000,500);
  pop();

  //base
  pop();
  fill(100,0,200);
  ellipse(225,575,950,400);
  pop();

  //rim
  pop();
  fill(100,0,200);
  ellipse(250,500,900,400);
  pop();

  //water
  pop();
  fill(0,200,0);
  ellipse(250,500,800,300);
  pop();

  //fountain
  pop();
  fill(0,200,255);
  quad(15,450,75,350,200,350,275,450,);
  rect(75,200,125,150);
  quad(15,150,75,250,200,250,275,150);
  pop();

  //moon
  pop();
  stroke(random(250));
  fill(random(200));
  circle(1100,350,800);
  pop();

  //swan
  stroke(random(250));
  fill(0);
  //!!!body!!!
  //chest
  quad(530,340,502,345,512,480,575,435);
  //back
  quad(505,400,490,410,470,505,510,483);
  //wings
  quad(400,350,350,515,470,502,490,410);
  //tail
  quad(350,515,150,425,250,350,400,350);
  //neck
  rect(500, 200, 30, 150, 20)
  //head
  ellipse(550,200,100,80);
  //eye
  fill(random(250));
  circle(570,190,15);
  //beak
  pop();
  fill(255,0,200);
  beginShape();
  vertex(575,235);
  vertex(583,215);
  vertex(575,195);
  vertex(595,205);
  vertex(600,190);
  vertex(600,215);
  vertex(610,230);
  vertex(630,250);
  endShape();
  pop();
  //feathers
  pop();
  fill(255,0,200);
  beginShape();
  vertex(350,515);
  vertex(325,490);
  vertex(350,470);
  vertex(325,455);
  vertex(350,445);
  vertex(330,425);
  vertex(360,420);
  vertex(340,395);
  vertex(365,395);
  vertex(355,370)
  vertex(380,375);
  vertex(370,355);
  vertex(400,345);
  endShape();
  pop();
  //details
  line(195,390,375,425);
  line(375,425,475,445);
  line(490,410,470,500);
  line(410,510,445,380);
  line(230,460,305,350);

  //waterdrops
  strokeWeight(5);
  stroke(0,200,0);
  fill(0,200,0);
  line(100,100,150,150);
  line(200,100,150,150);
  line(25,200,100,100);
  line(275,200,200,100);
  circle(25,225,10);
  circle(25,275,10);
  circle(25,315,10);
  circle(25,365,10);
  circle(275,225,10);
  circle(275,275,10);
  circle(275,315,10);
  circle(275,365,10);
}

function keyTyped() {
  if(key == s){
    save('homeworkSketch.png')
  }
}
