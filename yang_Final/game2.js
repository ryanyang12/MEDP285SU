//allows the elevator to open
let floorNum = 0;
let open1 = 374;
let open2 = 375;

// elevator floor delay
//time counts the frames
let time = 0;
let delay = 60;

function setup() {
  frameRate(60);

  let canvas = createCanvas(700, 400);
  canvas.parent("canvas-container3");
}

function draw() {
  background("lightblue");
  //elevator door that needs to open and close

  //   clouds
  let clouds = frameCount * 0.1;
  push();
  fill("white");
  noStroke();
  translate(30, 50);
  rect(clouds, 0, 100, 20, 10);

  translate(90, 130);
  rect(clouds, 0, 100, 20, 10);
  translate(-130, -100);
  rect(clouds, 0, 100, 20, 10);
  pop();

  //Inside elevator
  push();
  noStroke();
  fill("orange");
  quad(250, 146, 500, 144, 500, 400, 250, 400);
  pop();

  /////////////////////////////////ME/////////////////////////////////////////////////////////
  me();
  /////////////////////////////////////////ME///////////////////////////////////////////////

  //elevator doors
  push();
  rectMode(CORNERS);
  stroke("green");
  fill("black");
  rect(238, 140, open1, 424);
  rect(open2, 142, 516, 422);
  pop();

  //concrete floor
  push();
  fill("gray");
  rect(0, 350, 210, 100);
  translate(510, 0);
  rect(0, 350, 210, 100);
  pop();

  // gate
  push();
  gate(0, 226, 36, 299);
  pop();

  //frame of elevator
  push();
  fill(48, 25, 52);
  noStroke();
  quad(205, 81, 250, 84, 250, 400, 205, 400);
  quad(499, 95, 541, 97, 532, 400, 500, 400);
  quad(248, 84, 500, 95, 500, 144, 250, 147);
  pop();

  //elevator top part
  push();
  fill("black");
  quad(317, 103, 421, 106, 423, 137, 313, 137);
  pop();

  push();
  fill("purple");
  rect(343, 107, 50, 25);
  pop();

  push();
  triangle(327, 111, 320, 123, 333, 123);
  triangle(402, 114, 413, 114, 408, 126);
  pop();

  //buttons
  push();

  fill("black");
  rect(507, 259, 25, 25);
  fill("purple");
  triangle(510, 266, 530, 266, 520, 280);
  pop();

  //elevator floorNum that should go to 10
  push();
  textSize(30);
  fill("green");
  textStyle("bold");
  text(floorNum, 350, 130);
  //when mouseispressed and time is greater than or equal to delay and if floor num is less than 10 floor will go up
  if (mouseX > 508 && mouseX < 533 && mouseY > 262 && mouseY < 288) {
    if (mouseIsPressed && time >= delay) {
      if (floorNum < 10) {
        floorNum++;
        time = 0;
        if (floorNum == 10) {
        }
      }
    }
  }
  //resets time so the numbers will go up slowly basically when i hold my mouse down at the button time will start going up quickly
  if (mouseIsPressed) {
    time++;
  } else {
    time = 0;
  }
  //OPEN SESAME!!!
  if (floorNum == 10) {
    if (open1 > 237) {
      open1 -= 1;
    }
    if (open2 < 513) {
      open2 += 1;
    }
  }

  pop();

  
}

// function mousePressed() {
//   print("X:", mouseX, "Y:", mouseY);
// }

function gate(pointAX, pointAY, pointBX, pointBY) {
  push();
  fill("black");
  rect(0, 200, 206, 25);
  rect(538, 200, 206, 25);
  fill(0, 150);
  rect(0, 300, 206, 25);
  rect(534, 300, 206, 25);
  pop();

  push();
  line(pointAX - 30, pointAY, pointBX - 30, pointBY);
  line(pointAX - 10, pointAY, pointBX - 10, pointBY);
  line(pointAX + 10, pointAY, pointBX + 10, pointBY);
  line(pointAX + 30, pointAY, pointBX + 30, pointBY);
  line(pointAX + 50, pointAY, pointBX + 50, pointBY);
  line(pointAX + 70, pointAY, pointBX + 70, pointBY);
  line(pointAX + 90, pointAY, pointBX + 90, pointBY);
  line(pointAX + 110, pointAY, pointBX + 110, pointBY);
  line(pointAX + 130, pointAY, pointBX + 130, pointBY);
  line(pointAX + 150, pointAY, pointBX + 150, pointBY);
  line(pointAX + 170, pointAY, pointBX + 170, pointBY);
  line(pointAX + 190, pointAY, pointBX + 190, pointBY);

  line(pointBX - 10, pointAY, pointAX - 10, pointBY);
  line(pointBX - 30, pointAY, pointAX - 30, pointBY);
  line(pointBX + 10, pointAY, pointAX + 10, pointBY);
  line(pointBX + 30, pointAY, pointAX + 30, pointBY);
  line(pointBX + 50, pointAY, pointAX + 50, pointBY);
  line(pointBX + 70, pointAY, pointAX + 70, pointBY);
  line(pointBX + 90, pointAY, pointAX + 90, pointBY);
  line(pointBX + 110, pointAY, pointAX + 110, pointBY);
  line(pointBX + 130, pointAY, pointAX + 130, pointBY);
  line(pointBX + 150, pointAY, pointAX + 150, pointBY);
  line(pointBX + 170, pointAY, pointAX + 170, pointBY);
  line(pointBX + 190, pointAY, pointAX + 190, pointBY);

  translate(537, 0);

  line(pointAX - 30, pointAY, pointBX - 30, pointBY);
  line(pointAX - 10, pointAY, pointBX - 10, pointBY);
  line(pointAX + 10, pointAY, pointBX + 10, pointBY);
  line(pointAX + 30, pointAY, pointBX + 30, pointBY);
  line(pointAX + 50, pointAY, pointBX + 50, pointBY);
  line(pointAX + 70, pointAY, pointBX + 70, pointBY);
  line(pointAX + 90, pointAY, pointBX + 90, pointBY);
  line(pointAX + 110, pointAY, pointBX + 110, pointBY);
  line(pointAX + 130, pointAY, pointBX + 130, pointBY);
  line(pointAX + 150, pointAY, pointBX + 150, pointBY);
  line(pointAX + 170, pointAY, pointBX + 170, pointBY);
  line(pointAX + 190, pointAY, pointBX + 190, pointBY);
  line(pointBX - 10, pointAY, pointAX - 10, pointBY);
  line(pointBX - 30, pointAY, pointAX - 30, pointBY);
  line(pointBX + 10, pointAY, pointAX + 10, pointBY);
  line(pointBX + 30, pointAY, pointAX + 30, pointBY);
  line(pointBX + 50, pointAY, pointAX + 50, pointBY);
  line(pointBX + 70, pointAY, pointAX + 70, pointBY);
  line(pointBX + 90, pointAY, pointAX + 90, pointBY);
  line(pointBX + 110, pointAY, pointAX + 110, pointBY);
  line(pointBX + 130, pointAY, pointAX + 130, pointBY);
  line(pointBX + 150, pointAY, pointAX + 150, pointBY);

  pop();
}

function me() {
  push();
  translate(210, 175);
  scale(0.6);
  noStroke();
  ellipseMode(CENTER);
  fill(255, 219, 172);
  ellipse(200, 200, 200, 200);
  //hair full

  // arc(x, y, w, h, start, stop, [mode], [detail])

  //sideburn
  noFill();
  fill("black");
  rect(100, 130, 20, 70);
  rect(280, 130, 20, 70);
  //head 2 for the sideburn effect
  ellipseMode(CENTER);
  fill(255, 219, 172);
  ellipse(200, 200, 200, 200);
  //hair
  fill("black");
  // arc(200, 130, 200, 200, PI, 0);
  rectMode(CENTER);
  quad(114, 170, 183, 121, 113, 107, 110, 180);
  quad(286, 170, 217, 121, 287, 107, 290, 180);
  rect(200, 120, 200, 50, 19);

  //Basic layout of hair comeplete

  //Make hair more crazy add code here
  strokeWeight(0);
  beginShape();
  vertex(170, 95);
  vertex(112, 100);
  vertex(89, 103);
  vertex(115, 115);
  vertex(90, 138);
  vertex(122, 129);
  endShape();

  strokeWeight(0);
  beginShape();
  vertex(211, 96);
  vertex(236, 84);
  vertex(238, 99);
  vertex(282, 88);
  vertex(281, 104);
  endShape();

  strokeWeight(0);
  beginShape();
  vertex(176, 102);
  vertex(149, 78);
  vertex(152, 104);
  endShape();

  strokeWeight(0);
  beginShape();
  vertex(170, 128);
  vertex(199, 155);
  vertex(198, 129);
  endShape();

  strokeWeight(0);
  beginShape();
  vertex(293, 107);
  vertex(312, 95);
  vertex(297, 119);
  endShape();

  //draw eyes
  noFill();
  fill("white");

  stroke("black");
  ellipse(150, 200, 50, 20);
  ellipse(250, 200, 50, 20);
  noFill();
  fill("black");
  ellipse(150, 200, 20, 20);
  ellipse(250, 200, 20, 20);
  noStroke();
  //draw eyebrows
  //curve(x1, y1, x2, y2, x3, y3, x4, y4)
  stroke("black");
  stroke("black");
  strokeWeight(5);
  curve(230, 200, 235, 175, 270, 175, 270, 200);
  curve(170, 200, 165, 175, 130, 175, 130, 200);
  noFill();

  //draw mouth
  noStroke();
  stroke("black");
  strokeWeight(1);
  line(170, 250, 230, 250);
  fill("red");
  arc(200, 250, 60, 60, 0, PI);
  noStroke();
  noFill();
  fill("pink");
  ellipse(200, 275, 20, 10);
  //draw ears
  strokeWeight(1);
  stroke("black");
  noFill();
  fill(255, 219, 172);
  arc(100, 190, 30, 30, PI / 2, (3 * PI) / 2);
  arc(300, 190, 30, 30, (3 * PI) / 2, PI / 2);
  //nose
  // triangle(x1, y1, x2, y2, x3, y3)
  triangle(200, 200, 188, 230, 212, 230);

  // NECK/BODY (finished)

  noFill();
  fill("deepskyblue");
  arc(200, 400, 250, 200, PI, 0);
  noFill();
  stroke("black");
  strokeWeight(3);
  fill("black");
  line(140, 350, 140, 400);
  line(260, 350, 260, 400);

  pop();
  textStyle(ITALIC);
  text("Press Around at", 410, 228);
  text("the Home page", 410, 238);
}
