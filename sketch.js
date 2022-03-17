var btn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  createP("Holi");
  background(random(0,255),random(0,255),random(0,255));
  btn = createButton('Descargar'),
  btn.position(10, 10);
  btn.mousePressed(artemania);
}

function draw() {
  fill(random(0,255),random(0,255),random(0,255));
  triangle(mouseX, mouseY,mouseX+20, mouseY+20, mouseX-20, mouseY+20);
  
}
function artemania() {
  saveCanvas("imagen", "jpg");
}