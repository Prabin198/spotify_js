console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.querySelector("#masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songList = Array.from(document.querySelectorAll(".songsList"));
let end = document.querySelector("#end");
let songs = [
  {
    songName: "Dancing in the stardust",
    filePath: "songs/1.mp3",
    coverPath: "song images/1.webp",
    timestamp: "01:58",
  },
  {
    songName: "Cartooon X Jeja,On & On",
    filePath: "songs/2.mp3",
    coverPath: "song images/2.jpg",
    timestamp: "03:28",
  },
  {
    songName: "Bring Me back",
    filePath: "songs/3.mp3",
    coverPath: "song images/3.jpg",
    timestamp: "03:50",
  },
  {
    songName: "Royality",
    filePath: "songs/4.mp3",
    coverPath: "song images/4.jpg",
    timestamp: "03:43",
  },
  {
    songName: "Shree Krishna Flute",
    filePath: "songs/5.mp3",
    coverPath: "song images/5.jpeg",
    timestamp: "02:25",
  },
  {
    songName: "Tum Preet Ho Tum Geet Ho",
    filePath: "songs/6.mp3",
    coverPath: "song images/6.jpeg",
    timestamp: "04:08",
  },
  {
    songName: "FearLess-II",
    filePath: "songs/7.mp3",
    coverPath: "song images/7.jpg",
    timestamp: "03:14",
  },
  {
    songName: "Cradles",
    filePath: "songs/8.mp3",
    coverPath: "song images/8.png",
    timestamp: "03:29",
  },
  {
    songName: "One Dance,Drake",
    filePath: "songs/9.mp3",
    coverPath: "song images/9.jpeg",
    timestamp: "02:54",
  },
];
songList.forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].coverPath;
  //    console.log(songName.innerHtml)
  e.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterplay.addEventListener("click", () => {
  console.log("clicked");
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play");
    masterplay.classList.add("fa-pause");
    gif.style.opacity = 1;
    end.innerText = songs[songIndex].timestamp;
    myProgressBar.value - 0;
    audioElement.currentTime = 0;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  // console.log('timeupdate')
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("click", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeItemPlay = function () {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((e) => {
    console.log(e);
    e.classList.remove("fa-pause");
    e.classList.add("fa-play");
  });
};
const songItemPlay = Array.from(
  document.getElementsByClassName("songItemPlay")
);
songItemPlay.forEach((e) => {
    e.addEventListener("click", (element) => {
      const clickedSongIndex = parseInt(element.target.id);
  
      // Check if the same song is clicked again
      if (songIndex === clickedSongIndex) {
        if (audioElement.paused) {
          // If the song is paused, play it
          audioElement.play();
          element.target.classList.remove("fa-play");
          element.target.classList.add("fa-pause");
          masterplay.classList.remove("fa-play");
          masterplay.classList.add("fa-pause");
          gif.style.opacity = 1;
        } else {
          // If the song is playing, pause it
          audioElement.pause();
          element.target.classList.remove("fa-pause");
          element.target.classList.add("fa-play");
          masterplay.classList.remove("fa-pause");
          masterplay.classList.add("fa-play");
          gif.style.opacity = 0;
        }
      } else {
        // If a different song is clicked, play the new song
        makeItemPlay(); // Reset all icons to "play"
        songIndex = clickedSongIndex;
        masterName.innerText = songs[songIndex].songName;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
  
        // Update the UI
        element.target.classList.remove("fa-play");
        element.target.classList.add("fa-pause");
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
        end.innerText = songs[songIndex].timestamp;
      }
    });
  });
  

const previous = document.getElementById("previous");
previous.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex -= 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;
  masterName.innerText = songs[songIndex].songName;
  end.innerText = songs[songIndex].timestamp;
  audioElement.play();
  masterplay.classList.remove("fa-play");
  masterplay.classList.add("fa-pause");
  gif.style.opacity = 1;
});
const next = document.getElementById("next");
next.addEventListener("click", () => {
  if (songIndex >= songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime = 0;

  audioElement.play();
  masterplay.classList.remove("fa-play");
  masterplay.classList.add("fa-pause");
  gif.style.opacity = 1;
  masterName.innerText = songs[songIndex].songName;

  end.innerText = songs[songIndex - 1].timestamp;
});
document.getElementById("shuffle").addEventListener("click", (e) => {
  index = parseInt(Math.random() * 9);
  if (e.target.classList == "fa-solid fa-shuffle") {
    e.target.classList.remove("fa-shuffle");
    e.target.classList.add("fa-repeat");
  } else {
    e.target.classList.remove("fa-repeat");
    e.target.classList.add("fa-shuffle");
  }
});
