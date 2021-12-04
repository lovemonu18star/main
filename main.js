video="";

function preload(){
    video=createCapture();
  video.hide();
}

function setup(){
    canvas=createCanvas(460,380);
    canvas.center();
}

function draw(){
     image(video,0,0,460,380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="Status : Detecting Objects";

}

function modelLoaded(){
console.log("Model Loded !");
status=true;
}