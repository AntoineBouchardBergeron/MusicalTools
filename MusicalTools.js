var StartTime = new Date();
var BPS = 0.500;
var playing = false;
var date = new Date();
var aContext = new AudioContext();
var beep = aContext.createOscillator();



function playMetronome(){
  console.log("fuuuuuuuck");
  while (playing){
    if(StartTime - date.getTime() > BPS){
      t.getTime = StarTime;
      beep.type = "sawtooth";
      beep.connect(aContext);
      beep.start();
    }
    else{
      beep.stop();
    }
    console.log(date.getTime());
  }

}

function ChangeBPS(){
  BPS = 0.50;
}

function Play(){
  if (playing){
    playing = false;
  } else{
    playing = true;   
    StartTime = date.getTime();   
    playMetronome();
  }
  console.log("Play Pressed  : " + playing);
}