song = 0;
LeftWrist_X=0;
LeftWrist_Y=0;
RightWrist_X=0;
RightWrist_Y=0;
Song_Noddy="Make Way For Noddy Single- Full Theme.mp3";
Song_Sheldon="Mighty Little Man Lyrics (Young Sheldon Theme Song).mp3";

 function preload(){
    Song_Noddy =loadSound("Make Way For Noddy Single- Full Theme.mp3");    
    Song_Sheldon=loadSound("Mighty Little Man Lyrics (Young Sheldon Theme Song).mp3");
 }

 function setup(){
   canvas = createCanvas(500, 500);
   canvas.position(10, 300);
   video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, model_loaded);
   poseNet.on("pose", got_results);
 }

 function draw(){
   image(video, 0, 0, 500, 500);
 }

 function model_loaded(){
  console.log("IT'S LOADED");  
 }

 function got_results(results){
   if (results.length > 0) {
      console.log(results);
      LeftWristX = results[0].pose.leftWrist.x;
      LeftWristY = results[0].pose.leftWrist.y;
      RightWristX = results[0].pose.rightWrist.x;
      RightWristY = results[0].pose.rightWrist.y;
   }
 }