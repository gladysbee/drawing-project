var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Gladys"); // enter your name here!
}
 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

function draw() {
  background(230, 230, 250);
  fill(135, 264, 250);
  arc(400, 400, 200, 200, 500, 500);
     fill(135, 264, 250);
    arc(200, 200, 100, 100, 400, 400);
        fill(135, 264, 250);
        arc(100, 100, 100, 100, 300, 300);
}

