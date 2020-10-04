var hour;
var minute;
var seconds;
function setup() {
  mapfunction();
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  let h = hour();
  Text('Current hour/n'+5,50);

  let m = minute();
text('Current minute: \n' + m, 5, 50);

let s = second();
text('Current second: \n' + s, 5, 50);
}
scAngle = map(sc, 0, 60, 0, 360);

stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);

hr = hour();
mn = minute();
sc = seconds();
function draw() {
  background(255,255,255);  
  drawSprites();
  angleMode(DEGREES);
}