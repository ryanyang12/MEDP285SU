let plantHeight1 = 0; //starting height of flower 1
let maxHeight1 = 125; //max height of the flower 1
let plantHeight2 = 0; //starting height of flower 2
let maxHeight2 = 125; //max height of the flower 2
let plantHeight3 = 0; //starting height of flower 3
let maxHeight3 = 125; //max height of the flower 3
let plantHeight4 = 0; //starting height of flower 4
let maxHeight4 = 125; //max height of the flower 4
let dirtX = 100; // X position of dirt
let dirtY = 250; // Y position of dirt
let clouds1 = 0;
let speed = 0.1;

function setup() {
 let canvas = createCanvas(700, 600);
  canvas.parent("canvas-container");
    
}

function draw() {
  background("lightblue");
  //path
  push();
  translate(0, 200);
  noStroke();
  fill("#8BC34A");
  rect(0, 0, 700, 600);
  pop();
  //clouds
  clouds();
  //dirt
  push();
  noStroke();
  fill("brown");
  rect(dirtX, dirtY, 200, 100);
  rect(dirtX + 300, dirtY, 200, 100);
  rect(dirtX, dirtY + 200, 200, 100);
  rect(dirtX + 300, dirtY + 200, 200, 100);
  pop();
  //Flowers used in For Loops so i can make copies of them without making more code
  push();
  for (let w = 1; w < 4; w++) {
    push();
    push();
    scale(0.5);
    Flowers1(100 + 150 * w, 600, 650);
    pop();
    pop();
  }
  for (let w = 1; w < 4; w++) {
    push();
    push();
    scale(0.5);
    Flowers2(100 + 150 * w, 1000, 1050);
    pop();
    pop();
  }
  for (let w = 1; w < 4; w++) {
    push();
    push();
    scale(0.5);
    Flowers3(700 + 150 * w, 1000, 1050);
    pop();
    pop();
  }
  for (let w = 1; w < 4; w++) {
    push();
    push();
    scale(0.5);
    Flowers4(700 + 150 * w, 600, 650);
    pop();
    pop();
  }
  pop();
  //me
  push();
  scale(0.5);
  translate(100, 0);
  me();
  pop();
  //speech bubble
  dialogue();
  push();
  angryMe();
  pop();
  //Water Bucket
  push();
  wateringCan();
  pop();
  //finish
}
//these functions are used to make the designs and actually making it grow
function Flowers1(plantXpos, plantYpos, plantYpos2) {
  push();
  //   make sunflower
  if (plantHeight1 == maxHeight1) {
    //     //     petals
    //petals
    push();
    fill("#9C27B0");
    strokeWeight(1);

    circle(plantXpos + 50, plantYpos2 - 40 - plantHeight1, 70);
    circle(plantXpos - 20, plantYpos2 + 30 - plantHeight1, 70);
    circle(plantXpos + 45, plantYpos2 + 30 - plantHeight1, 70);
    circle(plantXpos - 20, plantYpos2 - 40 - plantHeight1, 70);
    pop();
    fill(50, 205, 50);
    ellipse(plantXpos - 10, plantYpos, 50, 20);
    ellipse(plantXpos + 30, plantYpos, 50, 20);
    pop();
  }
  noStroke();
  // draw the plant stem
  fill(0, 100, 0);
  rect(plantXpos, plantYpos2 - plantHeight1, 20, plantHeight1);

  if (mouseX > 100 && mouseX < 300 && mouseY > 250 && mouseY < 350) {
    if (mouseIsPressed && plantHeight1 < maxHeight1) {
      plantHeight1 += 0.5;
    }
  }

  push();
  fill("rgb(87,20,20)");
  circle(plantXpos + 10, plantYpos2 - plantHeight1, 70);
  pop();
}
function Flowers2(plantXpos, plantYpos, plantYpos2) {
  push();
  //   make sunflower
  if (plantHeight2 == maxHeight2) {
    //     //     petals
    //petals
    push();
    fill("#5767C0");
    strokeWeight(1);

    circle(plantXpos + 50, plantYpos2 - 40 - plantHeight2, 70);
    circle(plantXpos - 20, plantYpos2 + 30 - plantHeight2, 70);
    circle(plantXpos + 45, plantYpos2 + 30 - plantHeight2, 70);
    circle(plantXpos - 20, plantYpos2 - 40 - plantHeight2, 70);
    pop();
    fill(50, 205, 50);
    ellipse(plantXpos - 10, plantYpos, 50, 20);
    ellipse(plantXpos + 30, plantYpos, 50, 20);
    pop();
  }
  noStroke();
  // draw the plant stem
  fill(0, 100, 0);
  rect(plantXpos, plantYpos2 - plantHeight2, 20, plantHeight2);

  if (mouseX > 100 && mouseX < 300 && mouseY > 450 && mouseY < 550) {
    if (mouseIsPressed && plantHeight2 < maxHeight2) {
      plantHeight2 += 0.5;
    }
  }

  push();
  fill("rgb(87,20,20)");
  circle(plantXpos + 10, plantYpos2 - plantHeight2, 70);
  pop();
}
function Flowers3(plantXpos, plantYpos, plantYpos2) {
  push();
  //   make sunflower
  if (plantHeight3 == maxHeight3) {
    //     //     petals
    //petals
    push();
    fill("#F66B9A");
    strokeWeight(1);

    circle(plantXpos + 50, plantYpos2 - 40 - plantHeight3, 70);
    circle(plantXpos - 20, plantYpos2 + 30 - plantHeight3, 70);
    circle(plantXpos + 45, plantYpos2 + 30 - plantHeight3, 70);
    circle(plantXpos - 20, plantYpos2 - 40 - plantHeight3, 70);
    pop();
    fill(50, 205, 50);
    ellipse(plantXpos - 10, plantYpos, 50, 20);
    ellipse(plantXpos + 30, plantYpos, 50, 20);
    pop();
  }
  noStroke();
  // draw the plant stem
  fill(0, 100, 0);
  rect(plantXpos, plantYpos2 - plantHeight3, 20, plantHeight3);

  if (mouseX > 400 && mouseX < 600 && mouseY > 450 && mouseY < 550) {
    if (mouseIsPressed && plantHeight3 < maxHeight3) {
      plantHeight3 += 0.5;
    }
  }

  push();
  fill("rgb(87,20,20)");
  circle(plantXpos + 10, plantYpos2 - plantHeight3, 70);
  pop();
}
function Flowers4(plantXpos, plantYpos, plantYpos2) {
  push();
  //   make sunflower
  if (plantHeight4 == maxHeight4) {
    //     //     petals
    //petals
    push();
    fill("#FFEB3B");
    strokeWeight(1);

    circle(plantXpos + 50, plantYpos2 - 40 - plantHeight4, 70);
    circle(plantXpos - 20, plantYpos2 + 30 - plantHeight4, 70);
    circle(plantXpos + 45, plantYpos2 + 30 - plantHeight4, 70);
    circle(plantXpos - 20, plantYpos2 - 40 - plantHeight4, 70);
    pop();
    fill(50, 205, 50);
    ellipse(plantXpos - 10, plantYpos, 50, 20);
    ellipse(plantXpos + 30, plantYpos, 50, 20);
    pop();
  }
  noStroke();
  // draw the plant stem
  fill(0, 100, 0);
  rect(plantXpos, plantYpos2 - plantHeight4, 20, plantHeight4);

  if (mouseX > 400 && mouseX < 600 && mouseY > 250 && mouseY < 350) {
    if (mouseIsPressed && plantHeight4 < maxHeight4) {
      plantHeight4 += 0.5;
    }
  }

  push();
  fill("rgb(87,20,20)");
  circle(plantXpos + 10, plantYpos2 - plantHeight4, 70);
  pop();
}
//This function creates the watering can that moves with the mouse
function wateringCan() {
  strokeWeight(2);
  //follows the cursor
  translate(mouseX - 120, mouseY - 110);
  //rotates the watercan giving it a watering effect
  if (mouseIsPressed) {
    translate(-50, 90);
    rotate(-35);
  }
  //the watering can
  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  fill("lightblue");
  fill(90, 171, 197);
  quad(158, 145, 219, 147, 252, 205, 133, 204);
  rotate(-30);
  translate(-50, 100);
  rect(100, 100, 10, 60);
  push();
  translate(0, -35);
  ellipse(100, 100, 20, 10);
  pop();
  pop();
  noFill();
  curve(59, 156, 228, 161, 240, 185, 13, 180);
  pop();
}
//Just me
function me() {
  push();
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
  fill("black");
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

  //hat
  push();
  noStroke();
  fill("tan");
  triangle(200, 50, 60, 170, 350, 170);
  rect(200, 100, 200, 120, 19);
  fill("green");
  rect(200, 120, 200, 20, 19);

  pop();

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
  arc(200, 250, 60, 60, 0, 180);
  noStroke();
  noFill();
  fill("pink");
  ellipse(200, 275, 20, 10);
  //draw ears
  strokeWeight(1);
  stroke("black");
  noFill();
  fill(255, 219, 172);
  arc(100, 190, 30, 30, 180 / 2, (3 * 180) / 2);
  arc(300, 190, 30, 30, (3 * 180) / 2, 180 / 2);
  //nose
  // triangle(x1, y1, x2, y2, x3, y3)
  triangle(200, 200, 188, 230, 212, 230);

  // NECK/BODY (finished)

  noFill();
  fill("deepskyblue");
  arc(200, 400, 250, 200, 180, 0);
  noFill();
  stroke("black");
  strokeWeight(3);
  fill("black");
  line(140, 350, 140, 400);
  line(260, 350, 260, 400);
  pop();
}
//Each if statement is used to create a different combination of dialogue plus i cant spell dialogue correctly so I made it into the function
function dialogue() {
  push();
  noStroke();
  ellipse(350, 50, 200, 100);
  triangle(260, 60, 285, 75, 234, 92);
  text("Oh nO! I forgot to water my plants. ", 260, 50);
  text("Please help me. (Hold on the ", 260, 70);
  text("dirt patch to water) ", 300, 90);
  pop();
  if (plantHeight1 == maxHeight1) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("Oh those are pretty. ", 260, 50);
    pop();
  }
  push();
  if (plantHeight2 == maxHeight2) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("I don't remember planting those... ", 260, 50);
    pop();
  }
  push();
  if (plantHeight3 == maxHeight3) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("That color is horrible. ", 260, 50);
    pop();
  }
  push();
  if (plantHeight4 == maxHeight4) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("In this world, IT'S KILL", 260, 50);
    text("OR BE KILLED", 260, 70);
    pop();
  }
  push();
  if (plantHeight1 == maxHeight1 && plantHeight2 == maxHeight2) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("WOw great job. ", 260, 50);
    pop();
  }
  push();
  if (plantHeight1 == maxHeight1 && plantHeight3 == maxHeight3) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("You're getting a hang of it", 260, 50);
    pop();
  }
  push();
  if (plantHeight1 == maxHeight1 && plantHeight4 == maxHeight4) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("Want a cookie? 🍪", 260, 50);
    pop();
  }
  push();
  if (plantHeight2 == maxHeight2 && plantHeight3 == maxHeight3) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("Extreme pollination and", 260, 50);
    text("total domination! ", 260, 70);

    pop();
  }
  push();
  if (plantHeight2 == maxHeight2 && plantHeight4 == maxHeight4) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("The Zombies are coming 🌼🧟 ", 260, 50);
    pop();
  }
  push();
  if (plantHeight3 == maxHeight3 && plantHeight4 == maxHeight4) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("At his lips' touch she", 300, 30);
    text("blossomed for him like a flower", 260, 50);
    text("and the incarnation was complete.", 260, 70);
    pop();
  }
  push();
  if (
    plantHeight1 == maxHeight1 &&
    plantHeight2 == maxHeight2 &&
    plantHeight3 == maxHeight3
  ) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("What came first, the chicken or ", 260, 50);
    text("the egg? 🐔🥚", 260, 70);
    pop();
  }
  push();
  if (
    plantHeight1 == maxHeight1 &&
    plantHeight2 == maxHeight2 &&
    plantHeight4 == maxHeight4
  ) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("Maybe touching one gives me", 260, 50);
    text("a power-up?", 260, 70);
    pop();
  }
  if (
    plantHeight1 == maxHeight1 &&
    plantHeight3 == maxHeight3 &&
    plantHeight4 == maxHeight4
  ) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("Hopefully these aren't Pikmins...", 260, 50);
    pop();
  }
  push();
  if (
    plantHeight1 == maxHeight1 &&
    plantHeight2 == maxHeight2 &&
    plantHeight3 == maxHeight3 &&
    plantHeight4 == maxHeight4
  ) {
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("Press Around the Home Page ", 260, 50);
    pop();
  }
}
//the clouds are kinda used as a timer for some other thing
function clouds() {
  //   clouds
  let clouds = frameCount * 0.1;
  push();
  fill("white");
  noStroke();
  translate(30, 50);
  rect(clouds, 0, 100, 20, 10);

  translate(90, 50);
  rect(clouds, 0, 100, 20, 10);
  translate(-130, -100);
  rect(clouds1, 0, 100, 20, 10);
  pop();
  clouds1 += speed;
  // sun
  push();
  noStroke();
  fill("orange");
  circle(700, 0, 200);
  pop();
}
//No peeking just more dialouges idk if i spelled it correctly...
function angryMe() {
  if (
    plantHeight1 == 0 &&
    plantHeight2 == 0 &&
    plantHeight3 == 0 &&
    plantHeight4 == 0 &&
    clouds1 >= 100
  ) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("whats taking so long...", 260, 50);
    pop();
  }

  if (
    plantHeight1 == 0 &&
    plantHeight2 == 0 &&
    plantHeight3 == 0 &&
    plantHeight4 == 0 &&
    clouds1 >= 200 &&
    clouds1 <= 300
  ) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("Why are you like this...", 260, 50);
    pop();
  }
  if (
    plantHeight1 == 0 &&
    plantHeight2 == 0 &&
    plantHeight3 == 0 &&
    plantHeight4 == 0 &&
    clouds1 >= 300 &&
    clouds1 <= 400
  ) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("I thought we're friends", 260, 50);
    pop();
  }
  if (
    plantHeight1 == 0 &&
    plantHeight2 == 0 &&
    plantHeight3 == 0 &&
    plantHeight4 == 0 &&
    clouds1 >= 400 &&
    clouds1 <= 500
  ) {
    push();
    noStroke();
    ellipse(350, 50, 200, 100);
    triangle(260, 60, 285, 75, 234, 92);
    text("you're useless", 260, 50);
    pop();
  }

  if (
    plantHeight1 == 0 &&
    plantHeight2 == 0 &&
    plantHeight3 == 0 &&
    plantHeight4 == 0 &&
    clouds1 > 500
  ) {
    push();
    noStroke();
    fill("lightblue");
    ellipse(350, 60, 260, 200);
    triangle(275, 75, 290, 80, 235, 95);
    //mouth
    pop();
    push();
    noStroke();
    fill(255, 219, 172);
    circle(150, 120, 45);
    pop();
    strokeWeight(2);
    line(124, 119, 174, 119);
  }
}

// function mousePressed() {
//   print("x:", mouseX, "y:", mouseY);
// }
