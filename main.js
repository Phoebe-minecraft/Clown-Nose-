var noseX =0
var noseY =0
var clownnose;
function preload(){
    clownnose = loadImage("ClownNose.png")
}

function draw(){
    image(video,0,0,400,300);
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide()
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotposes)

    
}

function gotposes(results){
    if(results.length > 0){
     
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
       
        image (clownnose,noseX-10,noseY-10,30,30)
    }
}

function modelLoaded(){
    console.log("poseNetis intialised")
    
}

function snapsh0t(){
    save("images.jpg")
}