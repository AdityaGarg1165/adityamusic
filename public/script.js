let audioElement = new Audio("songs/1.mp3");
let SongIndex = 0;
let pause = document.getElementById("pau");
let play = document.getElementById("pla");
let seek = document.getElementById("seek");
let previous = document.getElementById("backward");
let forward = document.getElementById("for");

let songs = [
  { songName: "Crazy - NCS", cover: "covers/1.jpg" },
  { songName: "Mortals - NCS", cover: "covers/2.jpg" },
];
document.getElementById("seek").value = 0;

Array.from(document.getElementsByClassName("plcrcle")).forEach((element) => {
  element.addEventListener("click",()=>{console.log("hello i am a alert fron javascript")})
})

seek.addEventListener("change", () => {
  audioElement.currentTime = (seek.value * audioElement.duration) / 100;
});
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  seek.value = progress;
  songitems = Array.from(document.getElementsByClassName("item")).forEach((item,i) => {
    item.getElementsByTagName("h3")[0].innerText = songs[i].songName;
  })
  
  if (seek.value > 99) {
    if (SongIndex < songs.length - 1) {
      SongIndex += 1;
      seek.value = 0;
      audioElement.src = `songs/${SongIndex + 1}.mp3`;
      audioElement.play();
    } else {
      SongIndex = 0;
      seek.value = 0;
      audioElement.src = `song/${SongIndex + 1}.mp3`;
      audioElement.play();
    }
  }
  document.getElementById("titleid").innerHTML = songs[SongIndex].songName;
});

play.addEventListener("click", () => {
  audioElement.currentTime = (seek.value * audioElement.duration) / 100;
  audioElement.play();
  pause.style.display = "block";
  play.style.display = "none";
});
pause.addEventListener("click", () => {
  audioElement.pause();
  pause.style.display = "none";
  play.style.display = "block";
});


forward.addEventListener("click",()=>{
    if(SongIndex<songs.length-1){
        SongIndex+=1;
        audioElement.src = `songs/${SongIndex + 1}.mp3`;
        audioElement.play();
    }
    else{
        SongIndex=0;
        audioElement.src = `songs/${SongIndex + 1}.mp3`;
        audioElement.play();
    }
})

previous.addEventListener("click",()=>{
    if (SongIndex > 0) {
        SongIndex -= 1;
        audioElement.src = `songs/${SongIndex + 1}.mp3`;
        audioElement.play();
    }
    else
    {
        SongIndex = songs.length-1;
        audioElement.src = `songs/${SongIndex + 1}.mp3`;
        audioElement.play();
    }
})