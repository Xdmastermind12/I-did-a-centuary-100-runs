var SpeechRecognition=window.webkitSpeechRecognition;
var recongnition=new SpeechRecognition();

function start(){
  document.getElementById("textbox").innerHTML="";
  recongnition.start();
}
recongnition.onresult=function(event){
  console.log(event);
  var content=event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML=content;
  console.log(content);
  if (content=="take my selfie") {
    console.log("take my selfie");
  speak();
  }
}
function speak(){
  var synth=window.speechSynthesis;
  speak_data="taking your selfie in 5 seconds you bot";
  var utterThis=new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  
  setTimeout(function(){
    take_snapshot();
    save();
  },5000);
}

Webcam.set({
  width: 260,
  height: 240,
  image_format: 'png',
  png_quality: 90
});
camera=document.getElementById("camera");
function take_snapshot() { Webcam.snap(function(data_uri) { document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; }); }
function save() { link = document.getElementById("link"); image = document.getElementById("selfie_image").src ; link.href = image; link.click(); }