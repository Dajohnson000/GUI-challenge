let width = 30
let height = 20
let WidthE = 20
let HeightE = 40
let rotate1 = 25
let rotate2 = 170
let outline = false
let gui;
let diameterSlider, degSlider, outlineCheckbox, diameterSlider2, diameterSlider3, diameterSlider4, diameterSlider5, diameterSlider6;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  strokeWeight(5);

  gui = createGui();
  diameterSlider = createSlider("width rectangle", 600,50, 200,30, 10, 100)
  diameterSlider2 = createSlider("width elipse", 600,100, 200,30, 10, 100)
  diameterSlider3 = createSlider("height rectangle", 600,150, 200,30, 10, 100)
  diameterSlider4 = createSlider("height elipse", 600,200, 200,30, 10, 100)
  diameterSlider5 = createSlider("rotate rectangle", 600,250, 200,30, 10, 360)
  diameterSlider6 = createSlider("rotate elipse", 600,300, 200,30, 10, 360)
  outlineCheckbox = createCheckbox("outline", 600, 350, 50, 50, false)
}


function draw() {
  drawGui();
  if (outlineCheckbox.val) {
    stroke("black");
  } else {
    noStroke();
  }
  
  push()
  translate(200,200)
  rotate(radians( diameterSlider5.val))
  fill(155, 200, 3, 4)
  rect(100, -100, diameterSlider.val, diameterSlider3.val);
  pop()
  
  
  push()
  translate(200,200)
  rotate(radians( diameterSlider6.val))
  fill(250, 100, 80, 4)
  ellipse(50, 100,diameterSlider2.val, diameterSlider4.val);
  pop()
  noStroke()
  text(diameterSlider.label, 500, 75);
  text(diameterSlider2.label, 500, 125);
  text(diameterSlider3.label, 500, 175);
  text(diameterSlider4.label, 500, 225);
  text(diameterSlider5.label, 500, 275);
  text(diameterSlider6.label, 500, 325);
  text(outlineCheckbox.label, 500, 375)
}