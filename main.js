function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(150, 150);
    video= createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 230, 150, 220, 200);
    fill(245, 182, 10);
    stroke(245, 182, 10);
    circle(50, 50, 80);
    circle(50, 430, 80);
    circle(600, 50, 80);
    circle(600, 430, 80);
    fill(255, 125, 231);
    stroke(255, 125, 231);
    rect(90, 40, 470, 20);
    rect(90, 420, 470, 20);
    rect(40, 90, 20, 300);
    rect(590, 90, 20, 300);

}

function preload(){

}

function take_snapshot(){
  save("selfie.png");  
}


