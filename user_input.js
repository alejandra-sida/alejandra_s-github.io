function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);

  feet = loadImage('images/feet.gif');
  rug = loadImage('images/rug.png');
  exercising = loadImage('images/exercising.jpeg');
  eating = loadImage('images/eat2.png');
  wall = loadImage('images/wall.jpeg');
  floor = loadImage('images/floor.jpeg');
  girl = loadImage('images/girl2.png');
  boy = loadImage('images/boy2.png');
  walk = loadImage('images/walk.gif');
  run = loadImage('images/run.gif');
  swim = loadImage('images/swim.gif');
}

function draw() {
  scene();
  initiate();
}

function scene(){
  //floor
  image(floor,0,0,windowWidth,windowHeight);

  //wall
  image(wall,0,0,windowWidth,400);

  //rug
  image(rug,460,140,500,500);

  //scale body
  pop();
  stroke(0);
  strokeWeight(3);
  fill(210);
  rect(550,200,300,375,25);
  pop();

  //strips
  pop();
  stroke(0);
  strokeWeight(1);
  fill(175);
  rect(575,210,15,355);
  rect(810,210,15,355);
  pop();

  //screen
  pop();
  stroke(0);
  strokeWeight(1);
  fill(150);
  rect(630,225,150,75);
  pop();

  //feet
  image(feet,550,290,300,300);

  pop();
  fill(random(255));
  textSize(25);
  text("TOUCH",660,270);
  pop();
}

function initiate(){
  if (mouseX>630 && mouseX<780){
    if(mouseY>225 && mouseY<300){
      scene2();
    }
  }
}

function scene2(){
  background(255);
  fill(0);
  pop();
  textSize(25);
  text("Choose a way to lose weight!",550,350);
  pop();
  pop();
  fill(255,0,0);
  textSize(25);
  text('(press left arrow for exercise)',50,200);
  text('(press right arrow for diet)',1060,200);
  text('(press left arrow for exercise)',50,500);
  text('(press right arrow for diet)',1060,500);
  pop();
  image(exercising,100,250,200,200);
  image(eating,1100,250,200,200);
  keyPressed();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    background(0);
    calories();

    pop();
    textSize(12);

    //walking
    text('Walking a mile at regular speed you can lose around 100 calories',50,410);
    text('To lose a pound you would have to walk 35 miles.',50,430);
    text('To lose a pound in a week, walk five miles per day.',50,450);
    image(walk,100,200,150,150);
    //running
    text('Running a mile at regular speed you can lose around 150 calories',550,510);
    text('To lose a pound you would have to run 23 miles.',550,530);
    text('To lose a pound in a week, run 3 miles per day.',550,550);
    image(run,600,300,150,150);
    //swimming
    text('Swimming a mile at regular speed you can lose around 500 calories',1050,610);
    text('To lose a pound you would have to swim 7 miles.',1050,630);
    text('To lose a pound in a week, swim 1 mile per day.',1050,650);
    image(swim,1100,400,150,150);
  } else if (keyCode === RIGHT_ARROW) {
    background(0);
    calories();
    //male
    text('To lose a pound in one week consume 2000 calories max per day.',200,300);
    image(boy,150,175,100,100);
    //female
    text('To lose a pound in one week consume 1500 calories max per day.',300,500);
    image(girl,950,515,100,100);

    pop();
  }
}

function calories(){
  fill(255,0,0);
  rect(100,50,405,70);
  fill(255);
  text('There are 3,500 calories in a pound!',100,100);
}
