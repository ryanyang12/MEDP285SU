function setup() {
 let canvas = createCanvas(400, 400);
  canvas.parent('p5-sketch');
}

function draw() {
  background(255,255,255);
  //draw head
  noStroke();
  ellipseMode(CENTER);
  fill(255, 219, 172);
  ellipse(200, 200, 200, 200);
  //hair full

  //sideburn
  noFill();
  fill("black");
  rect(110, 150, 20, 70);
  rect(290, 150, 20, 70);
  //head 2 for the sideburn effect
  ellipseMode(CENTER);
  fill(255, 219, 172);
  ellipse(200, 200, 200, 200);
  //hair
  fill("black");
  rectMode(CENTER);
  quad(114, 170, 183, 121, 113, 107, 110, 180);
  quad(286, 170, 217, 121, 287, 107, 290, 180);
  rect(200, 120, 200, 50, 19);

  // hair spikes  
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
  
   
  let leftPupilX = constrain(150 + (mouseX - 200)/20, 140, 160);
  let leftPupilY = constrain(200 + (mouseY - 200)/20, 195, 205);
  let rightPupilX = constrain(250 + (mouseX - 200)/20, 240, 260);
  let rightPupilY = constrain(200 + (mouseY - 200)/20, 195, 205);
  
  noFill();
  fill("black");
  ellipse(leftPupilX, leftPupilY, 20, 20);
  ellipse(rightPupilX, rightPupilY, 20, 20);
  noStroke();
  
  //rest of your original face code
  //draw eyebrows
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
  triangle(200, 200, 188, 230, 212, 230);

  // NECK/BODY  
  noFill();
  fill("deepskyblue");
  arc(200, 400, 250, 200, PI, 0);
  noFill();
  stroke("black");
  strokeWeight(3);
  fill("black");
  line(140, 350, 140, 400);
  line(260, 350, 260, 400);
}

function mousePressed() {
  print("x:", mouseX, "y:", mouseY);
}