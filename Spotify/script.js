console.log('welcome to spotify');

let songIndex=0;
let audioElement=new Audio('songs/1.mp3')
let masterplay=document.querySelector('#masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songList=Array.from(document.querySelectorAll('.songsList'))
let songs=[
    {songName:'Dancing in the star',filePath:'songs/1.mp3',coverPath:'song images/1.webp'},
    {songName:'Cartooon X Jeja,On & On',filePath:'songs/2.mp3',coverPath:'song images/2.jpg'},
    {songName:'Bring Me back',filePath:'songs/3.mp3',coverPath:'song images/3.jpg'},
    {songName:'Royality',filePath:'songs/4.mp3',coverPath:'song images/4.jpg'},
    {songName:'Shree Krishna Flute',filePath:'songs/5.mp3',coverPath:'song images/5.jpeg'},
    {songName:'Tum Preet Ho Tum Geet Ho',filePath:'songs/6.mp3',coverPath:'song images/6.jpeg'},
    {songName:'FearLess-II',filePath:'songs/7.mp3',coverPath:'song images/7.jpg'},
    {songName:'Cradles',filePath:'songs/8.mp3',coverPath:'song images/8.png'},
    {songName:'One Dance,Drake',filePath:'songs/9.mp3',coverPath:'song images/9.jpeg'}
]
 songList.forEach((e,i)=>{
   e.getElementsByTagName('img')[0].src=songs[i].coverPath;
//    console.log(songName.innerHtml)
   e.getElementsByClassName('songName')[0].innerText=songs[i].songName
   

 })
masterplay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play')
        gif.style.opacity=0;
    }

})

audioElement.addEventListener('timeupdate',()=>
{
// console.log('timeupdate')
let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
myProgressBar.value=progress
})
myProgressBar.addEventListener('click',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
})
const makeItemPlay=function(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
        // audioElement.pause();
        e.classList.remove('fa-pause')
        e.classList.add('fa-play')
        
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach( (e)=>{
    e.addEventListener('click',(element)=>{
        makeItemPlay();
      songIndex=parseInt(element.target.id);
      element.target.classList.remove('fa-play');
      element.target.classList.add('fa-pause')
      audioElement.src=`songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterplay.classList.remove('fa-play');
      masterplay.classList.add('fa-pause')
      gif.style.opacity=1;
      masterName.innerText=songs[songIndex].songName;

    })
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1
        audioElement.src=`songs/${songIndex}.mp3`;
      audioElement.currentTime=0;
      masterName.innerText=songs[songIndex-1].songName;
      audioElement.play();
      masterplay.classList.remove('fa-play');
      masterplay.classList.add('fa-pause')
      gif.style.opacity=1;
    }
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex +=1
        audioElement.src=`songs/${songIndex}.mp3`;
       audioElement.currentTime=0;
      
      audioElement.play();
      masterplay.classList.remove('fa-play');
      masterplay.classList.add('fa-pause')
      gif.style.opacity=1;
      masterName.innerText=songs[songIndex -1].songName;
    
    }
})