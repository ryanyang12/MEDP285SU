//these arrays are used for the arrows
let redArrows = [];
let blueArrows = [];
let greenArrows = [];
let yellowArrows = [];
//score starts at 0
let score = 0;
let img;
let sound1;
//keybinds got lazy using ''
let keys = ["d", "f", "j", "k"];
let spawnTimer = 0;
let spawnInterval; // spawnrate of the arrows
//charcter
let imgRed, imgBlue, imgGreen, imgYellow;
let currentImage = null; //gets the images
let music;
//splash screen
let splashScreen = false;
//end screen
let end = false;
//arrows end
let game = true;

function preload() {
  //all image and sounds
  img = loadImage("city.png");
  sound1 = loadSound("osu.mp3");
  imgRed = loadImage("left.png");
  imgBlue = loadImage("down.png");
  imgGreen = loadImage("up.png");
  imgYellow = loadImage("right.png");
  music = loadSound("SLAY.mp3");
}

function setup() {
let canvas = createCanvas(1000, 730);
  canvas.parent("canvas-container2");
}

function draw() {
  //we learned this in Thuesday april 24 class idk if im allowed to keep editing it but it looks good.
  textFont("Pixelify Sans");
  //creates splash screen
  if (!splashScreen) {
    // SPLASH SCREEN make it more customized so it looks good
    // RYAN DID THIS PART.
    background(0);
    push();
    fill("white");
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Welcome to Thursday Night Torties", width / 2, height / 2 - 100);
    pop();
    fill("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Select Difficulty:", width / 2, height / 2 - 40);
    push();
    fill("yellow");
    rect(width / 2 - 100, height / 2, 200, 60, 10);
    pop();
    push();
    fill("red");
    rect(width / 2 + 100, height / 2, 200, 60, 10);
    pop();
    push();
    fill("green");
    rect(width / 2 - 300, height / 2, 200, 60, 10);
    pop();
    push();
    fill("purple");
    rect(width / 2 - 100, height / 2 + 60, 200, 60, 10);
    pop();

    fill(0);
    textSize(28);
    push();
    text("Easy", width / 2 - 200, height / 2 + 30);
    pop();
    push();
    text("Medium", width / 2, height / 2 + 30);
    pop();
    push();
    text("Hard", width / 2 + 200, height / 2 + 30);
    pop();
    push();
    text("Impossible", width / 2, height / 2 + 95);
    pop();

    push();
    fill("white");
    text("KeyBinds are: D,F,J,K", width / 2, height / 2 + 200);
    text("Music Composed by Victoria Chen", width / 2, height / 2 + 250);
    pop();
    return;
  }
  //when splashscreen is true and music is not playing and when game is not end end will become true showing you the game over page
  if (splashScreen && !music.isPlaying() && !end) {
    end = true;
    game = false;
  }
  if (end) {
    background(0);
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(48);
    text("Game Over", width / 2, height / 2 - 60);
    textSize(32);
    text("Your Score: " + score, width / 2, height / 2);
    textSize(24);
    text("Press around the Home page", width / 2, height / 2 + 60);
    return;
  }
  //function of pixel img
  pixelizeimg();
  //background boxes and details
  push();
  fill("rgba(255,255,255,0.75)");
  rect(40, 0, 340, 700);
  pop();

  push();
  noStroke();
  fill("rgb(255,255,255)");
  rect(420, 0, 5, 1000, 10);
  pop();

  // score
  push();
  fill("white");
  text("Your Score:", 500, 50);
  text(score, 500, 75);
  pop();
  //keybinds for the game
  push();
  fill("black");
  text("D", 90, 700);
  text("F", 160, 700);
  text("J", 240, 700);
  text("K", 300, 700);
  pop();

  arrows(); // draw target zones which are the arrows on the bottom
  arrowSpawn(); //spawns in the arrows randomly

  //image show up
  if (currentImage) {
    image(currentImage, 400, 400, 350, 350);
  }
}

function keyPressed() {
  //this part is for the image so when one of the key is pressed the person will dance
  //VIVIAN DID THIS PART.
  if (key == "d") {
    currentImage = imgRed;
  }
  if (key == "f") {
    currentImage = imgBlue;
  }
  if (key == "j") {
    currentImage = imgGreen;
  }
  if (key == "k") {
    currentImage = imgYellow;
  }
  //this is when the player needs to hit it at the spot when it eachs the bottom
  if (key == "d") {
    //this is to check the arrows so when it spawns its added to the array the -1 is used so it can read the array or else it will read something that doesnt exisit.
    for (let i = redArrows.length - 1; i >= 0; i--) {
      //makes sure you hit the arrows between 620 to 680 and adds 25 points to score and also deletes the arrow from array.
      if (redArrows[i] >= 620 && redArrows[i] <= 680) {
        score += 25;
        sound1.play();
        redArrows.splice(i, 1);
        return;
      }
    }
  }
  //similar explination for the rest of these
  if (key === "f") {
    for (let i = blueArrows.length - 1; i >= 0; i--) {
      if (blueArrows[i] >= 620 && blueArrows[i] <= 680) {
        score += 25;
        sound1.play();
        blueArrows.splice(i, 1);
        return;
      }
    }
  }
  if (key === "j") {
    for (let i = greenArrows.length - 1; i >= 0; i--) {
      if (greenArrows[i] >= 620 && greenArrows[i] <= 680) {
        score += 25;
        sound1.play();
        greenArrows.splice(i, 1);
        return;
      }
    }
  }
  if (key === "k") {
    for (let i = yellowArrows.length - 1; i >= 0; i--) {
      if (yellowArrows[i] >= 620 && yellowArrows[i] <= 680) {
        score += 25;
        sound1.play();
        yellowArrows.splice(i, 1);
        return;
      }
    }
  }
  //prevents spamming
  else {
    score -= 25;
  }
}
function pixelizeimg() {
  //pixelizwe the bg img
  //i kinda copied from professor and used it with img instead of webcam
  //RYAN DID THIS CODE.
  pixelDensity(1);
  image(img, 0, 0, width, height);
  loadPixels();
  noStroke();

  for (let x = 0; x < width; x += 10) {
    for (let y = 0; y < height; y += 10) {
      let i = (y * width + x) * 4;

      let r = pixels[i];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];
      fill(r, g, b, a);
      rect(x, y, 10);
    }
  }
}
function arrows() {
  //makes pretty arrows on the bottom
  // red
  //VIVIAN CHEN DID THIS.
  fill("rgb(255,40,40)");
  noStroke();
  rect(90, 650, 40, 20);
  triangle(91, 629, 62, 657, 91, 687);

  // blue
  fill("rgb(54,247,255)");
  noStroke();
  rect(160, 610, 20, 40);
  triangle(141, 649, 199, 650, 168, 681);

  // green
  fill("rgb(48,255,115)");
  noStroke();
  rect(230, 640, 20, 40);
  triangle(213, 650, 268, 649, 239, 616);

  // yellow
  fill("rgb(255,195,3)");
  noStroke();
  rect(290, 640, 40, 20);
  triangle(331, 622, 330, 678, 359, 650);
}
function mousePressed() {
  //depends on which difficulty you press the spawnInterval changes
  //VIVIAN AND RYAN DID THIS TOGETHER!!
  if (!splashScreen) {
    //medium setting
    if (mouseX > 400 && mouseX < 600 && mouseY > 360 && mouseY < 425) {
      splashScreen = true;
      music.play();
      spawnInterval = 15;
    }
  }
  //easy
  if (mouseX > 200 && mouseX < 399 && mouseY > 360 && mouseY < 425) {
    sound1.play();
    splashScreen = true;
    music.play();
    spawnInterval = 30;
  }
  //hard
  if (mouseX > 601 && mouseX < 800 && mouseY > 360 && mouseY < 425) {
    sound1.play();
    splashScreen = true;
    music.play();
    spawnInterval = 5;
  }
  //impossible
  if (mouseX > 400 && mouseX < 600 && mouseY > 425 && mouseY < 490) {
    sound1.play();
    splashScreen = true;
    music.play();
    spawnInterval = 1;
  }
}
function arrowSpawn() {
  // Spawns arrows randomly
  //put inside if so it would stop coming out
  if (game) {
    spawnTimer++;
    //SpawnTimer will count up til whenever spawn timer/ spawninterval gives a remainder = 0 and thats when lanes is used so lanes will randomly choose an arrow from its own array and put it in the array in its repected array.
    if (spawnTimer % spawnInterval == 0) {
      let lanes = ["d", "f", "j", "k"];
      let lane = random(lanes);
      if (lane == "d") {
        redArrows.push(0);
      }
      if (lane == "f") {
        blueArrows.push(0);
      }
      if (lane == "j") {
        greenArrows.push(0);
      }
      if (lane == "k") {
        yellowArrows.push(0);
      }
    }
  }

  // red arrow
  //similar explination with the how the arrows are being checked and if its pressed it gets removed from the array. But here instead of you pressing it and if you missed it you will get -25 instead
  for (let i = redArrows.length - 1; i >= 0; i--) {
    fill("rgb(255,40,40)");
    rect(90, redArrows[i] + 15, 40, 20);
    triangle(91, redArrows[i], 62, redArrows[i] + 28, 91, redArrows[i] + 58);
    redArrows[i] += 10;
    if (redArrows[i] > 730) {
      redArrows.splice(i, 1);
      score -= 25;
    }
    if (redArrows[i] > height) {
      redArrows.splice(i, 1);
    }
  }

  // blue arrow
  for (let i = blueArrows.length - 1; i >= 0; i--) {
    fill("rgb(54,247,255)");
    rect(160, blueArrows[i], 20, 40);
    triangle(
      141,
      blueArrows[i] + 39,
      199,
      blueArrows[i] + 40,
      168,
      blueArrows[i] + 71
    );
    blueArrows[i] += 10;
    if (blueArrows[i] > 730) {
      blueArrows.splice(i, 1);
      score -= 25;
    }
    if (blueArrows[i] > height) {
      blueArrows.splice(i, 1);
    }
  }

  // green arrow
  for (let i = greenArrows.length - 1; i >= 0; i--) {
    fill("rgb(48,255,115)");
    rect(230, greenArrows[i], 20, 40);
    triangle(
      213,
      greenArrows[i] + 10,
      268,
      greenArrows[i] + 9,
      239,
      greenArrows[i] - 24
    );
    greenArrows[i] += 10;
    if (greenArrows[i] > 730) {
      greenArrows.splice(i, 1);
      score -= 25;
    }
    if (greenArrows[i] > height) {
      greenArrows.splice(i, 1);
    }
  }

  // yellow arrow
  for (let i = yellowArrows.length - 1; i >= 0; i--) {
    fill("rgb(255,195,3)");
    rect(290, yellowArrows[i], 40, 20);
    triangle(
      331,
      yellowArrows[i] - 18,
      330,
      yellowArrows[i] + 38,
      359,
      yellowArrows[i] + 10
    );
    yellowArrows[i] += 10;
    if (yellowArrows[i] > 730) {
      yellowArrows.splice(i, 1);
      score -= 25;
    }
    if (yellowArrows[i] > height) {
      yellowArrows.splice(i, 1);
    }
  }
}
