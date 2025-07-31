const progress=document.getElementById("progress");
const song=document.getElementById("song");
const playIcon=document.getElementById("play-icon");
song.onloadedmetadata=()=>{
    progress.max=song.duration;
    progress.value=song.currentTime;

}
function Play(){
    if (song.paused) {
    song.play();
    playIcon.classList.remove("fa-circle-play");
    playIcon.classList.add("fa-pause");
  } else {
    song.pause();
    playIcon.classList.remove("fa-circle-pause");
    playIcon.classList.add("fa-circle-play");
  }

}
if(song.play()){
    setInterval(()=>{
       progress.value=song.currentTime;
    },500);
     
}
progress.onchange=()=>{
    // song.play();
     song.currentTime= progress.value;
     Play();

}
