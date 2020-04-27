let dolphin;
let dugong;
let beach;
let darkBeach;
let ship;
let shipwreck;
let party;
let nonParty;
let ghost;
let bars;
let card;
let warning;

let x = 0;
let y = 60;

let blue = true;
let black = false;
let end = false;

function preload(){
  dolphin = loadImage("images/dolph.jpeg");
  dugong = loadImage("images/dugong.jpeg");
  beach = loadImage("images/beach.jpeg");
  darkBeach = loadImage("images/dBeach.jpeg");
  ship = loadImage("images/cruise.jpeg");
  shipwreck = loadImage("images/dCruise.jpeg");
  party = loadImage("images/party.jpeg");
  nonParty = loadImage("images/dParty.jpeg");
  ghost = loadImage("images/ghost.png");
  bars = loadImage("images/bars.gif");
  card = loadImage("images/card.gif");
  warning = loadImage("images/warning.png");
}

//once
function setup(){
  createCanvas(windowWidth, windowHeight);

  background(0,0,255);

  pop();
  fill(100);
  rect(0,0,windowWidth, 50);
  pop();

  pop();
  fill(0);
  rect(50,20,windowWidth,29,10);

  line(60,0,60,20);
  line(160,0,160,20);
  line(0,20,windowWidth,20);

  text("HOMEPAGE", 65, 15);
  text("X",145,15);
  text("<--",5,30,15,15);
  text("-->",30,30,15,15);

  pop();
  fill(255,0,0);
  ellipse(10,10,15,15);
  pop();

  pop();
  fill(0);
  text("x",7,13);
  pop();

  pop();
  fill(230,255,0);
  ellipse(30,10,15,15);
  pop();

  pop();
  fill(0);
  text("--",27,14);
  pop();

  pop();
  fill(0,255,0);
  ellipse(50,10,15,15);
  pop();

  pop();
  fill(0);
  text("+",47,13);
  pop();

  pop();
  fill(255);
  text("https://oceanBlue.com", 70, 38);
  pop();

  image(dolphin, 0, 50, 800, 350);
  image(beach, 0, 400, 800, 350);
  image(ship, 750, 400, 800, 350);
  image(party, 750, 50, 800, 350);

  pop();
  strokeWeight(5);
  trig = rect(500,375,500,40,10);
  pop();

  pop();
  fill(0);
  textSize(25);
  text("Ready to book your dream vacation?",550,400);
  pop();
  }

function oceanBlack() {
  background(0);
  pop();
  fill(100);
  rect(0,0,windowWidth, 50);
  pop();

  pop();
  fill(0);
  rect(50,20,windowWidth,29,10);

  line(60,0,60,20);
  line(160,0,160,20);
  line(0,20,windowWidth,20);

  text("page not found", 65, 15);

  text("X",145,15);
  text("<--",5,30,15,15);
  text("-->",30,30,15,15);

  pop();
  fill(255,0,0);
  ellipse(10,10,15,15);
  pop();

  pop();
  fill(0);
  text("x",7,13);
  pop();

  pop();
  fill(230,255,0);
  ellipse(30,10,15,15);
  pop();

  pop();
  fill(0);
  text("--",27,14);
  pop();

  pop();
  fill(0,255,0);
  ellipse(50,10,15,15);
  pop();

  pop();
  fill(0);
  text("+",47,13);
  pop();

  pop();
  fill(255);
  text("https://oceanBlack.com", 70, 38);
  pop();

  image(dugong, 0, 50, 800, 375);
  image(darkBeach, 0, 400, 800, 350);
  image(shipwreck, 750, 400, 800, 350);
  image(nonParty, 750, 50, 800, 350);
}

//loops
function draw(){
  if(mouseIsPressed){
  blue = false;
  black = true;

    if(black==true){
      oceanBlack();

      pop();
      strokeWeight(5);
      trig = rect(560,375,450,70,10);
      pop();

      pop();
      fill(0);
      textSize(25);
      text("                 You're being tracked!",550,400);
      text("     press down to get the malware away",550,430);
      pop();

    }
    image(ghost,x,y,100,100);
    x += 1;

  }

  if (x >= windowWidth/5) {
    black=false;
    end = true;
    if(end==true){
    win();
    }
  }
}

function win(){

  background(random(250));
  fill(0);

  image(bars,0,windowHeight-100,windowWidth,200);
  image(card,550,200,400,300);

  fill(random(250));
  text("CONGRATULATIONS! You are our first winner of the day! You get a free tour of the Bermuda Triangle!",200,600);

  let a = random(width);
  let b = random(height);
  image(warning,a,b,100,100);
  let c = random(width);
  let d = random(height);
  image(warning,c,d,200,200);
  let e = random(width);
  let f = random(height);
  image(warning,e,f,300,300);
  let g = random(width);
  let h = random(height);
  image(warning,g,h,50,50);
}
