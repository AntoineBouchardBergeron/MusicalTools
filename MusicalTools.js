var StartTime = new Date();
var BPS = 0.500;
var playing = true;
var date = new Date();


function playMetronome(){
  while (playing){
    if(StartTime - date.getTime() > BPS){
      t.getTime = StarTime;
    }
    console.log(date.getTime());
  }

}

function Play(){
  if (playing){
    playing = false;
  } else{
    playing = true;   
    StartTime = date.getTime();   
  }
}