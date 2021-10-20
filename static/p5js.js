var canvas;

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    console.log('resized')
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','4')
    background(255, 225, 221);
}


function draw() {
    strokeWeight(15);
    stroke(248, 173, 157);
    fill(255, 215, 186);
    translate(p5.Vector.fromAngle(millis() / 1000, 200));
    beginShape();
    vertex(900,460);
    vertex(1100,320);
    vertex(1350,350);
    vertex(1500,400);
    vertex(1575,650);
    vertex(1300,730);
    vertex(980,670);
    vertex(950,530);
    endShape(CLOSE);
}