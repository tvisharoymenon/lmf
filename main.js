mustache=0
lipstick=0
noseX=0;
noseY=0;
function preload(){
    clown_nose = loadImage('mustache.png');
    clown_lip = loadImage('lipstick.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
function draw(){
image(video,0,0,300,300);
if(mustache==1){
    console.log("drawingmustache")
    image(clown_nose,noseX-15,noseY+8,30,30);
}
if (lipstick==1){
    console.log("drawinglipstick")
    image(clown_lip,noseX-15,noseY+15,30,30);
}
}
function takesnapshot(){
save('myfilterimage.png')
}
function applymustache()
{
    mustache=1;
    lipstick=0;
}
function applylipstick()
{
    lipstick=1;
    mustache=0;
}


   